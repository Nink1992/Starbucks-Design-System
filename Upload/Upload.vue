<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import type { UploadProps, UploadEmits, UploadFile, UploadStatus } from './Upload.types';

const props = withDefaults(defineProps<UploadProps>(), {
  name: 'file',
  multiple: false,
  disabled: false,
  drag: false,
  listType: 'text',
  showUploadList: true,
  defaultFileList: () => [],
});

const emit = defineEmits<UploadEmits>();

const fileInputRef = ref<HTMLInputElement | null>(null);
const internalFileList = ref<UploadFile[]>([...(props.fileList || props.defaultFileList)]);
const isDragover = ref(false);

const previewVisible = ref(false);
const previewImage = ref('');

const sortedFileList = computed(() => {
  return [...internalFileList.value].sort((a, b) => {
    // Put success status at the bottom
    if (a.status === 'success' && b.status !== 'success') return 1;
    if (a.status !== 'success' && b.status === 'success') return -1;
    return 0;
  });
});

watch(() => props.fileList, (newVal) => {
  if (newVal) {
    internalFileList.value = newVal;
  }
}, { deep: true });

const triggerUpload = () => {
  if (props.disabled) return;
  fileInputRef.value?.click();
};

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const files = target.files;
  if (!files) return;
  processFiles(Array.from(files));
  
  // reset input so same file can be selected again
  if (fileInputRef.value) {
    fileInputRef.value.value = '';
  }
};

const processFiles = async (files: File[]) => {
  for (const file of files) {
    // Check maxCount
    if (props.maxCount && internalFileList.value.length >= props.maxCount) {
      break; // Or replace the last one based on behavior, here we just break
    }

    let shouldUpload: boolean | File = true;
    if (props.beforeUpload) {
      try {
        const result = await props.beforeUpload(file, files);
        shouldUpload = result;
      } catch (e) {
        shouldUpload = false;
      }
    }

    if (shouldUpload === false) {
      continue;
    }

    const actualFile = shouldUpload instanceof File ? shouldUpload : file;
    
    const newFile: UploadFile = {
      uid: Date.now() + '-' + Math.random().toString(36).substring(2, 9),
      name: actualFile.name,
      size: actualFile.size,
      status: 'uploading',
      percent: 0,
      originFileObj: actualFile,
    };

    // create preview url if picture
    if (props.listType === 'picture' || props.listType === 'picture-card') {
      if (actualFile.type.startsWith('image/')) {
        newFile.url = URL.createObjectURL(actualFile);
      }
    }

    if (props.fileList === undefined) {
      internalFileList.value.push(newFile);
    } else {
      const newList = [...internalFileList.value, newFile];
      emit('update:fileList', newList);
    }

    emit('change', { file: newFile, fileList: internalFileList.value });

    // Handle custom request or simulate upload
    if (props.customRequest) {
      props.customRequest({
        file: actualFile,
        onProgress: (event: any) => updateFileStatus(newFile.uid, { percent: event.percent }),
        onSuccess: (res: any) => updateFileStatus(newFile.uid, { status: 'success' }),
        onError: (err: any) => updateFileStatus(newFile.uid, { status: 'error', error: err }),
      });
    } else if (props.action) {
      // Basic fetch simulation for action
      simulateUpload(newFile);
    } else {
      // No action and no customRequest, just simulate success for demo purposes
      simulateUpload(newFile);
    }
  }
};

const simulateUpload = (file: UploadFile) => {
  let progress = 0;
  const interval = setInterval(() => {
    progress += 20;
    updateFileStatus(file.uid, { percent: progress });
    if (progress >= 100) {
      clearInterval(interval);
      updateFileStatus(file.uid, { status: 'success' });
    }
  }, 200);
};

const updateFileStatus = (uid: string, updates: Partial<UploadFile>) => {
  const fileIndex = internalFileList.value.findIndex(f => f.uid === uid);
  if (fileIndex !== -1) {
    const newFile = { ...internalFileList.value[fileIndex], ...updates };
    
    if (props.fileList === undefined) {
      internalFileList.value[fileIndex] = newFile;
    } else {
      const newList = [...internalFileList.value];
      newList[fileIndex] = newFile;
      emit('update:fileList', newList);
    }
    
    emit('change', { file: newFile, fileList: internalFileList.value });
  }
};

const handleRemove = (file: UploadFile) => {
  if (props.disabled) return;
  
  const newList = internalFileList.value.filter(f => f.uid !== file.uid);
  
  if (props.fileList === undefined) {
    internalFileList.value = newList;
  } else {
    emit('update:fileList', newList);
  }
  
  const removedFile = { ...file, status: 'removed' as UploadStatus };
  emit('remove', removedFile);
  emit('change', { file: removedFile, fileList: newList });
};

const handlePreview = (file: UploadFile) => {
  if (!file.url && !file.preview) return;
  previewImage.value = file.url || file.preview || '';
  previewVisible.value = true;
  emit('preview', file);
};

const closePreview = () => {
  previewVisible.value = false;
  setTimeout(() => {
    previewImage.value = '';
  }, 300);
};

// Drag events
const onDragOver = (e: DragEvent) => {
  e.preventDefault();
  if (!props.disabled) isDragover.value = true;
};

const onDragLeave = (e: DragEvent) => {
  e.preventDefault();
  isDragover.value = false;
};

const onDrop = (e: DragEvent) => {
  e.preventDefault();
  isDragover.value = false;
  if (props.disabled) return;
  
  emit('drop', e);
  const files = e.dataTransfer?.files;
  if (files && files.length) {
    processFiles(Array.from(files));
  }
};

</script>

<template>
  <div :class="$style['upload-wrapper']">
    <!-- Drag Upload -->
    <div 
      v-if="drag" 
      :class="[
        $style['upload-drag'], 
        { [$style['is-dragover']]: isDragover, [$style['is-disabled']]: disabled }
      ]"
      @click="triggerUpload"
      @dragover="onDragOver"
      @dragleave="onDragLeave"
      @drop="onDrop"
    >
      <div :class="$style['drag-container']">
        <slot name="drag-icon">
          <span :class="$style['drag-icon']">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M17 8L12 3M12 3L7 8M12 3V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </slot>
        <slot name="drag-text">
          <p :class="$style['drag-text']">点击或将文件拖拽到这里 Upload</p>
        </slot>
        <slot name="drag-hint"></slot>
      </div>
    </div>

    <!-- Click Upload (for text and picture list) -->
    <div 
      v-else-if="listType !== 'picture-card'" 
      :class="[$style['upload-select'], { [$style['is-disabled']]: disabled }]"
      @click="triggerUpload"
    >
      <slot>
        <!-- User can pass Button component here -->
      </slot>
    </div>

    <!-- Picture Card List -->
    <div v-if="showUploadList && listType === 'picture-card'" :class="$style['upload-list-picture-card']">
      <template v-for="file in sortedFileList" :key="file.uid">
        <div :class="[$style['upload-list-item'], $style[`is-${file.status}`]]">
          <img v-if="file.url" :src="file.url" :alt="file.name" :class="$style['item-thumbnail']" />
          <div v-else :class="$style['item-info']">
            <!-- Uploading State -->
            <template v-if="file.status === 'uploading'">
              <div :class="$style['uploading-text']">文件上传中</div>
              <div :class="$style['item-progress']">
                <div :class="$style['item-progress-bar']" :style="{ width: (file.percent || 0) + '%' }"></div>
              </div>
            </template>
            <!-- Error State -->
            <template v-else-if="file.status === 'error'">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="$style['error-icon']"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              <div :class="$style['error-name']">{{ file.name }}</div>
            </template>
            <span v-else>{{ file.name }}</span>
          </div>
          
          <div :class="$style['item-actions']">
            <span v-if="file.url" :class="$style['action-icon']" @click.stop="handlePreview(file)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </span>
            <span :class="$style['action-icon']" @click.stop="handleRemove(file)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </span>
          </div>
        </div>
      </template>

      <div 
        v-if="!maxCount || internalFileList.length < maxCount"
        :class="[$style['upload-select-picture-card'], { [$style['is-disabled']]: disabled }]"
        @click="triggerUpload"
      >
        <slot>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          <div style="margin-top: 8px">Upload</div>
        </slot>
      </div>
    </div>

    <!-- Text / Picture List -->
    <div v-if="showUploadList && listType !== 'picture-card'" :class="$style[`upload-list-${listType}`]">
      <template v-for="file in sortedFileList" :key="file.uid">
        <div :class="[$style['upload-list-item'], $style[`is-${file.status}`]]">
          <div :class="$style['item-content-row']">
            <!-- Thumbnail for picture type -->
            <template v-if="listType === 'picture'">
              <img v-if="file.url" :src="file.url" :alt="file.name" :class="$style['item-thumbnail']" />
              <div v-else :class="$style['item-icon']">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              </div>
            </template>

            <!-- Icon for text type -->
            <div v-if="listType === 'text'" :class="$style['item-icon']">
              <svg v-if="file.status === 'uploading'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spin-icon"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
              <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
            </div>

            <span :class="$style['item-name']" @click="handlePreview(file)">{{ file.name }}</span>
            
            <span :class="$style['item-actions']" @click="handleRemove(file)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </span>
          </div>

          <!-- Progress bar -->
          <div v-if="file.status === 'uploading'" :class="$style['item-progress']">
            <div :class="$style['item-progress-bar']" :style="{ width: (file.percent || 0) + '%' }"></div>
          </div>
        </div>
      </template>
    </div>

    <!-- Hidden Input -->
    <input 
      ref="fileInputRef"
      type="file"
      :name="name"
      :multiple="multiple"
      :accept="accept"
      :disabled="disabled"
      style="display: none"
      :class="$style['upload-input']"
      @change="handleFileChange"
    />

    <!-- Image Preview Modal -->
    <Teleport to="body">
      <div v-if="previewVisible" :class="$style['preview-modal']">
        <div :class="$style['preview-mask']" @click="closePreview"></div>
        <div :class="$style['preview-wrap']" @click="closePreview">
          <div :class="$style['preview-content']" @click.stop>
            <span :class="$style['preview-close']" @click="closePreview">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </span>
            <img :src="previewImage" alt="Preview" :class="$style['preview-img']" />
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style module src="./Upload.module.scss"></style>
