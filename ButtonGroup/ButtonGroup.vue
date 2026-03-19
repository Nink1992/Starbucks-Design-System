<template>
  <div
    :class="[
      $style['button-group'],
      $style[`size-${size}`],
      $style[`variant-${variant}`]
    ]"
    role="group"
  >

    <template v-if="options && options.length > 0">
      <ButtonGroupItem
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :label="option.label"
        :disabled="option.disabled"
      />
    </template>
    <slot v-else></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, toRefs, reactive } from 'vue';
import type { ButtonGroupProps } from './ButtonGroup.types';
import ButtonGroupItem from './ButtonGroupItem.vue';

defineOptions({
  name: 'TraeButtonGroup',
});

const props = withDefaults(defineProps<ButtonGroupProps>(), {
  modelValue: undefined,
  options: () => [],
  variant: 'outline',
  size: 'medium',
  disabled: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
  (e: 'change', value: string | number): void;
}>();

const updateValue = (value: string | number) => {
  if (props.disabled) return;
  emit('update:modelValue', value);
  emit('change', value);
};

const { modelValue, variant, size, disabled, options } = toRefs(props);

const contextState = reactive({
  modelValue,
  updateValue,
  variant,
  size,
  disabled,
});

provide('ButtonGroupContext', contextState);
</script>

<style module>
@import './ButtonGroup.module.scss';
</style>
