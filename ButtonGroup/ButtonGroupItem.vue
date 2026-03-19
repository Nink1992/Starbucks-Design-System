<template>
  <button
    type="button"
    :class="[
      $style['button-group-item'],
      $style[`variant-${variant}`],
      $style[`size-${size}`],
      {
        [$style['is-selected']]: isSelected,
        [$style['is-disabled']]: isDisabled,
      }
    ]"
    :disabled="isDisabled"
    @click="handleClick"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue';
import type { ButtonGroupItemProps, ButtonGroupContext } from './ButtonGroup.types';

defineOptions({
  name: 'TraeButtonGroupItem',
});

const props = withDefaults(defineProps<ButtonGroupItemProps>(), {
  disabled: false,
});

const groupContext = inject<ButtonGroupContext | null>('ButtonGroupContext', null);

const isSelected = computed(() => {
  if (groupContext) {
    return groupContext.modelValue === props.value;
  }
  return false;
});

const isDisabled = computed(() => {
  return props.disabled || (groupContext?.disabled || false);
});

const variant = computed(() => groupContext?.variant || 'outline');
const size = computed(() => groupContext?.size || 'medium');

const handleClick = () => {
  if (isDisabled.value) return;
  if (groupContext) {
    groupContext.updateValue(props.value);
  }
};
</script>

<style module>
@import './ButtonGroup.module.scss';
</style>
