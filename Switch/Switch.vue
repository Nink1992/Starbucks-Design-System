<script setup lang="ts">
import { computed } from 'vue';
import styles from './Switch.module.scss';

// Props 定义
const props = defineProps<{
  modelValue?: boolean; // v-model 绑定
  disabled?: boolean;
  loading?: boolean;
  size?: 'medium' | 'large';
  activeColor?: string;
  inactiveColor?: string;
}>();

// Emits 定义
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'change', value: boolean): void;
}>();

// 计算是否为激活状态
const isChecked = computed(() => props.modelValue === true);

// 处理点击事件
const handleClick = () => {
  if (props.disabled || props.loading) return;

  const newValue = !isChecked.value;
  emit('update:modelValue', newValue);
  emit('change', newValue);
};

// 动态样式类
const wrapperClasses = computed(() => ({
  [styles['switch-wrapper']]: true,
  [styles['is-checked']]: isChecked.value,
  [styles['is-disabled']]: props.disabled,
  [styles['is-loading']]: props.loading,
  [styles[`size-${props.size || 'medium'}`]]: true,
}));

// 动态内联样式 (自定义颜色)
const wrapperStyles = computed(() => {
  const customStyles: Record<string, string> = {};
  if (props.activeColor && isChecked.value) {
    customStyles.backgroundColor = props.activeColor;
  }
  if (props.inactiveColor && !isChecked.value) {
    customStyles.backgroundColor = props.inactiveColor;
  }
  return customStyles;
});
</script>

<template>
  <div
    :class="wrapperClasses"
    :style="wrapperStyles"
    @click="handleClick"
    role="switch"
    :aria-checked="isChecked"
    :aria-disabled="disabled"
  >
    <span :class="styles['switch-thumb']">
      <span v-if="loading" :class="styles['switch-loading-icon']"></span>
    </span>
  </div>
</template>
