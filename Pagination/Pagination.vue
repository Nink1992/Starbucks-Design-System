<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import type { PaginationProps, PaginationEmits } from './Pagination.types';
import { Input } from '../Input';
import { Select } from '../Select';

const props = withDefaults(defineProps<PaginationProps>(), {
  current: 1,
  total: 0,
  pageSize: 10,
  size: 'medium',
  theme: 'default',
  showTotal: false,
  showSizeChanger: false,
  showQuickJumper: false,
  disabled: false,
  pageSizeOptions: () => [10, 20, 30, 40, 50],
});

const emit = defineEmits<PaginationEmits>();

// Internal State
const internalCurrent = ref(props.current);
const internalPageSize = ref(props.pageSize);

watch(() => props.current, (val) => {
  internalCurrent.value = val;
});

watch(() => props.pageSize, (val) => {
  internalPageSize.value = val;
});

const totalPages = computed(() => Math.max(1, Math.ceil(props.total / internalPageSize.value)));

const handlePageChange = (page: number) => {
  if (props.disabled) return;
  if (page < 1) page = 1;
  if (page > totalPages.value) page = totalPages.value;
  
  if (internalCurrent.value !== page) {
    internalCurrent.value = page;
    emit('update:current', page);
    emit('change', page, internalPageSize.value);
  }
};

const handleSizeChange = (val: string | number | (string | number)[]) => {
  if (props.disabled) return;
  const newSize = Number(val);
  if (isNaN(newSize)) return;
  
  internalPageSize.value = newSize;
  emit('update:pageSize', newSize);
  
  // Recalculate current page if it exceeds new total pages
  const maxPage = Math.max(1, Math.ceil(props.total / newSize));
  let newCurrent = internalCurrent.value;
  if (newCurrent > maxPage) {
    newCurrent = maxPage;
  }
  
  internalCurrent.value = newCurrent;
  emit('update:current', newCurrent);
  emit('change', newCurrent, newSize);
};

// Generate page items
const pagers = computed(() => {
  const current = internalCurrent.value;
  const total = totalPages.value;
  const pagerCount = 7; // Max number of pages to show before ellipsis
  const halfPagerCount = Math.floor(pagerCount / 2);
  
  let showPrevMore = false;
  let showNextMore = false;
  
  if (total > pagerCount) {
    if (current > pagerCount - halfPagerCount) {
      showPrevMore = true;
    }
    if (current < total - halfPagerCount) {
      showNextMore = true;
    }
  }
  
  const array = [];
  
  if (showPrevMore && !showNextMore) {
    const startPage = total - (pagerCount - 2);
    for (let i = startPage; i < total; i++) {
      array.push(i);
    }
  } else if (!showPrevMore && showNextMore) {
    for (let i = 2; i < pagerCount; i++) {
      array.push(i);
    }
  } else if (showPrevMore && showNextMore) {
    const offset = Math.floor(pagerCount / 2) - 1;
    for (let i = current - offset; i <= current + offset; i++) {
      array.push(i);
    }
  } else {
    for (let i = 2; i < total; i++) {
      array.push(i);
    }
  }
  
  return {
    pages: array,
    showPrevMore,
    showNextMore
  };
});

const quickJumperValue = ref<string>('');

const handleQuickJumperInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  let val = target.value;
  // 约束输入类型为整数
  val = val.replace(/[^\d]/g, '');
  if (target.value !== val) {
    quickJumperValue.value = val;
  }
};

const handleQuickJumperBlurOrEnter = () => {
  const val = Number(quickJumperValue.value);
  if (val && !isNaN(val)) {
    handlePageChange(val);
  }
  quickJumperValue.value = '';
};

const simpleJumperValue = ref<string>(String(internalCurrent.value));

watch(() => internalCurrent.value, (val) => {
  simpleJumperValue.value = String(val);
});

const handleSimpleJumperInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  let val = target.value;
  // 约束输入类型为整数
  val = val.replace(/[^\d]/g, '');
  if (target.value !== val) {
    simpleJumperValue.value = val;
  }
};

const handleSimpleJumperChange = () => {
  let val = Number(simpleJumperValue.value);
  if (val && !isNaN(val)) {
    handlePageChange(val);
  } else {
    // Revert if invalid
    simpleJumperValue.value = String(internalCurrent.value);
  }
};

</script>

<template>
  <div 
    :class="[
      $style['pagination'],
      $style[`theme-${theme}`],
      $style[`size-${size}`],
      { [$style['is-disabled']]: disabled }
    ]"
  >
    <!-- Total Data (Left Side) -->
    <span v-if="showTotal" :class="$style['pagination-total']">
      共 {{ total }} 条
    </span>

    <!-- Theme: Simple -->
    <template v-if="theme === 'simple'">
      <ul>
        <!-- Prev Button -->
        <li 
          :class="[$style['page-item'], $style['page-nav'], { [$style['is-disabled']]: internalCurrent === 1 || disabled }]"
          @click="handlePageChange(internalCurrent - 1)"
        >
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </li>
        
        <li :class="$style['simple-jumper']">
          <Input 
            v-model="simpleJumperValue"
            :class="$style['simple-input-wrapper']"
            :size="size"
            :disabled="disabled"
            @input="handleSimpleJumperInput"
            @blur="handleSimpleJumperChange"
            @keydown.enter="handleSimpleJumperChange"
          /> 
          <span :class="$style['changer-text']">/{{ totalPages }}</span>
        </li>

        <!-- Next Button -->
        <li 
          :class="[$style['page-item'], $style['page-nav'], { [$style['is-disabled']]: internalCurrent === totalPages || disabled }]"
          @click="handlePageChange(internalCurrent + 1)"
        >
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </li>
      </ul>
    </template>

    <!-- Theme: Default -->
    <template v-else>
      <ul>
        <!-- Prev Button -->
        <li 
          :class="[$style['page-item'], $style['page-nav'], { [$style['is-disabled']]: internalCurrent === 1 || disabled }]"
          @click="handlePageChange(internalCurrent - 1)"
        >
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </li>

        <!-- Page 1 -->
        <li 
          :class="[$style['page-item'], { [$style['is-active']]: internalCurrent === 1 }]"
          @click="handlePageChange(1)"
        >
          1
        </li>

        <!-- Prev Ellipsis -->
        <li 
          v-if="pagers.showPrevMore" 
          :class="[$style['page-item'], $style['is-ellipsis']]"
        >
          ...
        </li>

        <!-- Middle Pages -->
        <li 
          v-for="page in pagers.pages" 
          :key="page"
          :class="[$style['page-item'], { [$style['is-active']]: internalCurrent === page }]"
          @click="handlePageChange(page)"
        >
          {{ page }}
        </li>

        <!-- Next Ellipsis -->
        <li 
          v-if="pagers.showNextMore" 
          :class="[$style['page-item'], $style['is-ellipsis']]"
        >
          ...
        </li>

        <!-- Last Page -->
        <li 
          v-if="totalPages > 1"
          :class="[$style['page-item'], { [$style['is-active']]: internalCurrent === totalPages }]"
          @click="handlePageChange(totalPages)"
        >
          {{ totalPages }}
        </li>

        <!-- Next Button -->
        <li 
          :class="[$style['page-item'], $style['page-nav'], { [$style['is-disabled']]: internalCurrent === totalPages || disabled }]"
          @click="handlePageChange(internalCurrent + 1)"
        >
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </li>
      </ul>

      <!-- Options (Right Side) -->
      <div v-if="showSizeChanger || showQuickJumper" :class="$style['pagination-options']">
        <div v-if="showSizeChanger" :class="$style['size-changer']">
          <span :class="$style['changer-text']">每页</span>
          <Select 
            :disabled="disabled" 
            v-model="internalPageSize" 
            :options="pageSizeOptions.map(opt => ({ label: String(opt), value: opt }))"
            :size="size"
            :class="$style['changer-select-wrapper']"
            @change="handleSizeChange"
          />
          <span :class="$style['changer-text']">条</span>
        </div>
        
        <div v-if="showQuickJumper" :class="$style['quick-jumper']">
          <span :class="$style['changer-text']">前往</span>
          <Input 
            v-model="quickJumperValue"
            :class="$style['jumper-input-wrapper']"
            :size="size"
            :disabled="disabled"
            placeholder=""
            @input="handleQuickJumperInput"
            @blur="handleQuickJumperBlurOrEnter"
            @keydown.enter="handleQuickJumperBlurOrEnter"
          /> 
          <span :class="$style['changer-text']">/{{ totalPages }} 页</span>
        </div>
      </div>
    </template>
  </div>
</template>

<style module src="./Pagination.module.scss"></style>
