<template>
  <div
    v-show="visible"
    :class="[
      $style['message'],
      $style[`theme-${theme}`],
    ]"
    :style="{ zIndex }"
    @mouseenter="clearTimer"
    @mouseleave="startTimer"
  >
    <!-- Icon -->
    <div v-if="showIcon" :class="$style['message-icon']">
      <slot name="icon">
        <template v-if="typeof icon === 'function'">
          <component :is="icon" />
        </template>
        <template v-else-if="theme === 'info'">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM8 12.5c-.69 0-1.25-.56-1.25-1.25S7.31 10 8 10s1.25.56 1.25 1.25S8.69 12.5 8 12.5zm1.5-4c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V4.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v4z" fill="currentColor"/></svg>
        </template>
        <template v-else-if="theme === 'success'">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.5 6.5l-4.5 4.5c-.29.29-.77.29-1.06 0L3.5 8.5c-.29-.29-.29-.77 0-1.06.29-.29.77-.29 1.06 0l1.94 1.94 3.94-3.94c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06z" fill="currentColor"/></svg>
        </template>
        <template v-else-if="theme === 'warning'">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.42 12.18L8.85 1.23c-.39-.65-1.32-.65-1.71 0L.58 12.18c-.4.66.08 1.5.85 1.5h13.14c.77 0 1.25-.84.85-1.5zM8 12.5c-.69 0-1.25-.56-1.25-1.25S7.31 10 8 10s1.25.56 1.25 1.25S8.69 12.5 8 12.5zm1-3.5H7v-4h2v4z" fill="currentColor"/></svg>
        </template>
        <template v-else-if="theme === 'error'">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.5 10.09c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22L8 8.71l-2.44 2.44c-.15.15-.34.22-.53.22s-.38-.07-.53-.22c-.29-.29-.29-.77 0-1.06L6.94 8 4.5 5.56c-.29-.29-.29-.77 0-1.06.29-.29.77-.29 1.06 0L8 6.94l2.44-2.44c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L9.06 8l2.44 2.44z" fill="currentColor"/></svg>
        </template>
        <template v-else-if="theme === 'question'">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 13c-.69 0-1.25-.56-1.25-1.25S7.31 10.5 8 10.5s1.25.56 1.25 1.25S8.69 13 8 13zm1.6-5.83c-.34.27-.6.64-.6 1.08v.5H7v-.5c0-1.07.57-1.8 1.13-2.25.43-.34.87-.69.87-1.5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.34-.78 2.08-1.4 2.67z" fill="currentColor"/></svg>
        </template>
        <template v-else-if="theme === 'loading'">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" fill="var(--gray-3)"/><path d="M8 0a8 8 0 018 8h-1.5a6.5 6.5 0 00-6.5-6.5V0z" fill="currentColor"/></svg>
        </template>
      </slot>
    </div>

    <!-- Content -->
    <div :class="$style['message-content']">
      <slot>{{ content }}</slot>
    </div>

    <!-- Close Button -->
    <div 
      v-if="showClose" 
      :class="$style['message-close']" 
      @click="handleClose"
    >
      <slot name="closeBtn">
        <template v-if="typeof closeBtn === 'string'">
          {{ closeBtn }}
        </template>
        <template v-else-if="typeof closeBtn === 'function'">
          <component :is="closeBtn" />
        </template>
        <template v-else>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </template>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import type { MessageProps } from './Message.types';

defineOptions({
  name: 'TraeMessage',
});

const props = withDefaults(defineProps<MessageProps>(), {
  theme: 'info',
  content: '',
  duration: 3000,
  closeBtn: false,
  icon: true,
  zIndex: 6000,
});

const emit = defineEmits(['closeBtnClick', 'durationEnd']);

const visible = ref(true);
let timer: ReturnType<typeof setTimeout> | null = null;

const showIcon = computed(() => {
  return props.icon !== false;
});

const showClose = computed(() => {
  return props.closeBtn !== false;
});

const startTimer = () => {
  if (props.duration > 0 && !timer) {
    timer = setTimeout(() => {
      close();
      emit('durationEnd');
    }, props.duration);
  }
};

const clearTimer = () => {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
};

const close = () => {
  visible.value = false;
  clearTimer();
};

const handleClose = (e: MouseEvent) => {
  emit('closeBtnClick', { e });
  close();
};

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  clearTimer();
});

// Expose methods for Plugin call
defineExpose({
  close,
});
</script>

<style module src="./Message.module.scss"></style>