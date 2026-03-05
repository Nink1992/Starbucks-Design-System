<template>
  <label
    :class="[
      $style['radio-wrapper'],
      $style['radio-basic'],
      {
        [$style['is-checked']]: isChecked,
        [$style['is-disabled']]: isDisabled,
        [$style['is-error']]: error,
      }
    ]"
    @click="handleChange"
  >
    <span :class="$style['radio-input-wrapper']">
      <input
        type="radio"
        :class="$style['radio-input']"
        :value="value"
        :name="name"
        :disabled="isDisabled"
        :checked="isChecked"
        tabindex="0"
      />
      <span :class="$style['radio-indicator']"></span>
    </span>
    <span v-if="label || $slots.default" :class="$style['radio-label']">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue';
import type { RadioProps, RadioGroupContext } from './Radio.types';

defineOptions({
  name: 'TraeRadio',
});

const props = withDefaults(defineProps<RadioProps>(), {
  disabled: false,
  error: false,
});

const groupContext = inject<RadioGroupContext | null>('RadioGroupContext', null);

const isChecked = computed(() => {
  if (groupContext && groupContext.modelValue) {
    // Access .value explicitly because modelValue is a Ref
    return groupContext.modelValue.value === props.value;
  }
  return false;
});

const isDisabled = computed(() => {
  return props.disabled || (groupContext?.disabled.value || false);
});

const name = computed(() => {
  return props.name || groupContext?.name;
});

const handleChange = () => {
  if (isDisabled.value) return;
  if (groupContext) {
    groupContext.updateValue(props.value);
  }
};
</script>

<style module lang="scss">
@import './Radio.module.scss';
</style>
