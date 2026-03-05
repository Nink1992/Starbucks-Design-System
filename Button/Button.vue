<template>
  <button
    :class="[
      $style['button'],
      $style[`variant-${variant}`],
      $style[`theme-${theme}`],
      $style[`size-${size}`],
      $style[`shape-${shape}`],
      {
        [$style['is-loading']]: loading,
        [$style['is-disabled']]: disabled,
        [$style['is-block']]: block,
        [$style['has-icon']]: icon,
        [$style['icon-only']]: iconType === 'singleIcon',
      }
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <!-- Loading Spinner -->
    <span v-if="loading" :class="$style['loading-spinner']">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" class="opacity-25" style="opacity: 0.25;"></circle>
        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </span>

    <!-- Prefix Icon -->
    <span v-if="icon && iconType === 'prefixIcon' && !loading && $slots.prefix" :class="$style['icon-prefix']">
      <slot name="prefix"></slot>
    </span>

    <!-- Content -->
    <span :class="$style['content']">
      <slot></slot>
    </span>

    <!-- Suffix Icon -->
    <span v-if="icon && iconType === 'suffixIcon' && !loading && $slots.suffix" :class="$style['icon-suffix']">
      <slot name="suffix"></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import type { ButtonProps } from './Button.types';

defineOptions({
  name: 'TraeButton',
});

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'base',
  theme: 'default',
  size: 'medium',
  shape: 'rectangle',
  icon: false,
  iconType: 'prefixIcon',
  loading: false,
  disabled: false,
  block: false,
});

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) return;
  emit('click', event);
};
</script>

<style module>
@import './Button.module.scss';
</style>
