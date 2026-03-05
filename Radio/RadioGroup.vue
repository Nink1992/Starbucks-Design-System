<template>
  <div
    :class="[
      'radio-group',
      `is-${direction}`,
      { 
        [$style['radio-group-vertical']]: direction === 'vertical'
      }
    ]"
    role="radiogroup"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, toRef } from 'vue';
import type { RadioGroupProps, RadioValue } from './Radio.types';

defineOptions({
  name: 'TraeRadioGroup',
});

const props = withDefaults(defineProps<RadioGroupProps>(), {
  direction: 'horizontal',
  disabled: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: RadioValue): void;
  (e: 'change', value: RadioValue): void;
}>();

const updateValue = (value: RadioValue) => {
  emit('update:modelValue', value);
  emit('change', value);
};

provide('RadioGroupContext', {
  name: props.name,
  modelValue: toRef(props, 'modelValue'),
  disabled: toRef(props, 'disabled'),
  updateValue,
});
</script>

<style module>
@import './Radio.module.scss';
</style>

<style scoped>
.radio-group {
  display: flex;
}

.radio-group.is-horizontal {
  flex-direction: row;
  flex-wrap: wrap;
}

.radio-group.is-vertical {
  flex-direction: column;
}
</style>
