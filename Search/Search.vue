<template>
  <div
    :class="[
      $style['search'],
      $style[`size-${size}`],
      {
        [$style['is-disabled']]: disabled,
        [$style['is-focused']]: isFocused,
        [$style['is-borderless']]: borderless,
        [$style['is-filled']]: fill,
        [$style['is-multiline']]: multiline,
      }
    ]"
  >
    <!-- Prefix Icon -->
    <span v-if="prefix || $slots.prefix" :class="$style['prefix-icon']">
      <slot name="prefix">
        <svg v-if="prefix" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 14L11.1 11.1" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </slot>
    </span>

    <!-- Input Area -->
    <div :class="$style['input-wrapper']">
      <component
        :is="multiline ? 'textarea' : 'input'"
        ref="inputRef"
        :class="$style['input-core']"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :maxlength="maxLength"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown.enter="handleSearch"
      />
    </div>

    <!-- Clear Icon -->
    <span
      v-if="clearable && modelValue && !disabled"
      :class="$style['clear-icon']"
      @click="handleClear"
      @mousedown.prevent
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" fill="#C5C5C5"/>
        <path d="M4.66669 4.66666L9.33335 9.33332M4.66669 9.33332L9.33335 4.66666" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>

    <!-- Suffix Icon -->
    <span v-if="suffix || $slots.suffix" :class="$style['suffix-icon']">
      <slot name="suffix">
        <svg v-if="suffix" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 14L11.1 11.1" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { SearchProps, SearchEmits } from './Search.types';

defineOptions({
  name: 'TraeSearch',
});

const props = withDefaults(defineProps<SearchProps>(), {
  modelValue: '',
  placeholder: '请输入内容',
  size: 'medium',
  disabled: false,
  clearable: false,
  borderless: false,
  fill: false,
  prefix: false,
  suffix: false,
  multiline: false,
});

const emit = defineEmits<SearchEmits>();

const inputRef = ref<HTMLInputElement | HTMLTextAreaElement | null>(null);
const isFocused = ref(false);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
  emit('change', target.value);
};

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true;
  emit('focus', event);
};

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false;
  emit('blur', event);
};

const handleClear = () => {
  emit('update:modelValue', '');
  emit('change', '');
  emit('clear');
  // Keep focus after clear
  inputRef.value?.focus();
};

const handleSearch = () => {
  if (props.multiline) return; // Multiline usually doesn't trigger search on Enter
  emit('search', props.modelValue);
};

defineExpose({
  focus: () => inputRef.value?.focus(),
  blur: () => inputRef.value?.blur(),
});
</script>

<style module>
@import './Search.module.scss';
</style>
