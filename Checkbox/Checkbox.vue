<script setup lang="ts">
import { computed } from 'vue';
import styles from './Checkbox.module.scss';

// Props 定义
const props = defineProps<{
  modelValue?: boolean | any[]; // v-model 绑定
  label?: string; // 显示的文本
  value?: string | number | boolean; // 复选框的值（组合使用时必填）
  disabled?: boolean;
  indeterminate?: boolean; // 部分选中状态
}>();

// Emits 定义
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean | any[]): void;
  (e: 'change', value: boolean | any[]): void;
}>();

// 计算是否选中
const isChecked = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(props.value);
  }
  return !!props.modelValue;
});

// 处理点击事件
const handleClick = () => {
  if (props.disabled) return;

  let newValue;
  if (Array.isArray(props.modelValue)) {
    // 数组模式
    const newArray = [...props.modelValue];
    if (isChecked.value) {
      // 取消选中
      const index = newArray.indexOf(props.value);
      if (index > -1) newArray.splice(index, 1);
    } else {
      // 选中
      newArray.push(props.value);
    }
    newValue = newArray;
  } else {
    // 布尔模式
    newValue = !props.modelValue;
  }

  emit('update:modelValue', newValue);
  emit('change', newValue);
};

// 动态样式类
const wrapperClasses = computed(() => ({
  [styles['checkbox-wrapper']]: true,
  [styles['is-checked']]: isChecked.value,
  [styles['is-indeterminate']]: props.indeterminate,
  [styles['is-disabled']]: props.disabled,
}));
</script>

<template>
  <label
    :class="wrapperClasses"
    @click.prevent="handleClick"
    role="checkbox"
    :aria-checked="indeterminate ? 'mixed' : isChecked"
    :aria-disabled="disabled"
  >
    <span :class="styles['checkbox-box']">
      <!-- 勾选图标 (选中状态) -->
      <svg 
        v-if="isChecked && !indeterminate" 
        :class="styles['checkbox-icon']"
        width="10" 
        height="8" 
        viewBox="0 0 10 8" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.66667 7.5L0.5 4.33333L1.66667 3.16667L3.66667 5.16667L8.33333 0.5L9.5 1.66667L3.66667 7.5Z" fill="currentColor"/>
      </svg>
      
      <!-- 横线图标 (部分选中状态) -->
      <span v-if="indeterminate" :class="styles['checkbox-dash-icon']"></span>
    </span>
    
    <!-- 文本标签 -->
    <span v-if="label || $slots.default" :class="styles['checkbox-label']">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
