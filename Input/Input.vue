<template>
  <div :class="['input-wrapper', `input-size-${size}`, { 'is-disabled': disabled, 'is-readonly': readonly, 'is-error': status === 'error' }]" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <span v-if="prefix" class="input-prefix">
      <slot name="prefix">{{ prefix }}</slot>
    </span>
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxLength"
      class="input-core"
      @input="handleInput"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
    <span v-if="suffix || allowClear || showCount" class="input-suffix">
      <slot name="suffix">{{ suffix }}</slot>
      <span v-if="allowClear && modelValue && isHovered" @click="handleClear" class="input-clear-icon">
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"></path><path fill="currentColor" d="M545.6 512l137.6-137.6a22.4 22.4 0 1 0-31.2-32L512 480.8 374.4 343.2a22.4 22.4 0 1 0-32 31.2L480.8 512 343.2 649.6a22.4 22.4 0 0 0 32 31.2L512 543.2l137.6 137.6a22.4 22.4 0 1 0 31.2-32L545.6 512z"></path></svg>
      </span>
      <span v-if="showCount" class="input-count">{{ modelValue.length }}/{{ maxLength }}</span>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import type { PropType } from 'vue';

type InputSize = 'large' | 'medium' | 'small';
type InputStatus = 'normal' | 'error';

export default defineComponent({
  name: 'Input',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    size: {
      type: String as PropType<InputSize>,
      default: 'medium',
    },
    placeholder: {
      type: String,
      default: '请输入内容',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    allowClear: {
      type: Boolean,
      default: false,
    },
    showCount: {
      type: Boolean,
      default: false,
    },
    maxLength: {
      type: Number,
    },
    prefix: {
      type: String,
    },
    suffix: {
      type: String,
    },
    status: {
      type: String as PropType<InputStatus>,
      default: 'normal',
    },
  },
  emits: ['update:modelValue', 'input', 'change', 'clear'],
  setup(props, { emit }) {
    const isFocused = ref(false);
    const isHovered = ref(false);

    const handleInput = (event: Event) => {
      const target = event.target as HTMLInputElement;
      emit('update:modelValue', target.value);
      emit('input', event);
    };

    const handleClear = () => {
      emit('update:modelValue', '');
      emit('clear');
    };

    return {
      isFocused,
      isHovered,
      handleInput,
      handleClear,
    };
  },
});
</script>

<style scoped lang="scss">
@import './Input.module.scss';
</style>
