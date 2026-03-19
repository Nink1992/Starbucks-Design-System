<template>
  <div
    :class="[
      $style['input-container'],
      {
        [$style['has-prepend']]: $slots.prepend || prepend,
        [$style['has-append']]: $slots.append || append,
      }
    ]"
  >
    <!-- Prepend Label -->
    <div v-if="$slots.prepend || prepend" :class="$style['input-prepend']">
      <slot name="prepend">{{ prepend }}</slot>
    </div>

    <div
      :class="[
        $style['input-wrapper'],
        $style[`size-${size}`],
        $style[`status-${status}`],
        {
          [$style['is-disabled']]: disabled,
          [$style['is-readonly']]: readonly,
          [$style['is-focused']]: isFocused,
          [$style['is-filled']]: filled,
          [$style['is-textarea']]: type === 'textarea',
        }
      ]"
    >
      <!-- Prefix -->
    <span v-if="$slots.prefix || prefixIcon" :class="$style['prefix']">
      <slot name="prefix">
        <!-- Default Prefix Icon if needed -->
      </slot>
    </span>

    <!-- Input Core -->
    <div :class="$style['input-content']">
      <template v-if="type === 'textarea'">
        <textarea
          ref="textareaRef"
          :class="$style['input-core']"
          :value="modelValue"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          :maxlength="maxLength"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          @change="handleChange"
          :style="textareaStyle"
        ></textarea>
      </template>
      <template v-else>
        <input
          ref="inputRef"
          :type="inputType"
          :class="$style['input-core']"
          :value="modelValue"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          :maxlength="maxLength"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          @change="handleChange"
        />
      </template>
    </div>

    <!-- Actions (Clear, Password Toggle, Suffix) -->
    <span v-if="type !== 'textarea'" :class="$style['suffix-group']">
      <!-- Clear Icon -->
      <span
        v-if="clearable && modelValue && !disabled && !readonly"
        :class="$style['clear-icon']"
        @click="handleClear"
        @mousedown.prevent
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" fill="#C5C5C5"/>
          <path d="M4.66669 4.66666L9.33335 9.33332M4.66669 9.33332L9.33335 4.66666" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>

      <!-- Password Toggle -->
      <span
        v-if="type === 'password' && !disabled"
        :class="$style['password-icon']"
        @click="togglePassword"
        @mousedown.prevent
      >
        <svg v-if="passwordVisible" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 8C1 8 3.5 3 8 3C12.5 3 15 8 15 8C15 8 12.5 13 8 13C3.5 13 1 8 1 8Z" stroke="currentColor" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="currentColor" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.9 11.9L14.65 14.65M1.35 1.35L4.1 4.1M4.1 4.1C2.85 5.15 1.85 6.5 1 8C1 8 3.5 13 8 13C10.05 13 11.85 12.25 13.25 11.1M4.1 4.1L6.6 6.6M6.6 6.6C6.15 6.95 5.95 7.5 6.05 8.05C6.15 8.6 6.55 9 7.1 9.1C7.65 9.2 8.2 9 8.55 8.55L9.4 9.4M9.4 9.4C9 9.8 8.5 10 8 10C6.9 10 6 9.1 6 8M9.4 9.4L11.9 11.9M11.9 11.9C10.75 12.65 9.4 13 8 13" stroke="currentColor" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 3C10.25 3 12.25 3.8 13.75 5.15" stroke="currentColor" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>

      <!-- Character Count -->
      <span v-if="showCount && maxLength" :class="$style['count']">
        {{ String(modelValue).length }}/{{ maxLength }}
      </span>

      <!-- Suffix -->
      <span v-if="$slots.suffix || suffixIcon" :class="$style['suffix']">
        <slot name="suffix">
          <!-- Default Suffix Icon if needed -->
        </slot>
      </span>
    </span>

    <!-- Textarea Suffix Group (Outside Content) -->
    <div v-if="type === 'textarea'" :class="$style['suffix-group']">
      <span v-if="showCount && maxLength" :class="$style['count']">
        {{ String(modelValue).length }}/{{ maxLength }}
      </span>
    </div>
  </div>

  <!-- Append Label -->
  <div v-if="$slots.append || append" :class="$style['input-append']">
    <slot name="append">{{ append }}</slot>
  </div>
  </div>
  
  <!-- Tips -->
  <div v-if="tips" :class="$style['tips']">{{ tips }}</div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue';
import type { InputProps, InputEmits } from './Input.types';

defineOptions({
  name: 'TraeInput',
});

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  type: 'text',
  placeholder: '请输入内容',
  size: 'medium',
  status: 'default',
  disabled: false,
  readonly: false,
  clearable: false,
  showCount: false,
  prefixIcon: false,
  suffixIcon: false,
  filled: false,
  autosize: false,
  prepend: '',
  append: '',
});

const emit = defineEmits<InputEmits>();

const inputRef = ref<HTMLInputElement | null>(null);
const textareaRef = ref<HTMLTextAreaElement | null>(null);
const isFocused = ref(false);
const passwordVisible = ref(false);

const inputType = computed(() => {
  if (props.type === 'password') {
    return passwordVisible.value ? 'text' : 'password';
  }
  return props.type;
});

const textareaStyle = ref({});

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
  emit('input', event);
  if (props.type === 'textarea' && props.autosize) {
    adjustTextareaHeight();
  }
};

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
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
  inputRef.value?.focus();
  textareaRef.value?.focus();
};

const togglePassword = () => {
  passwordVisible.value = !passwordVisible.value;
  inputRef.value?.focus();
};

const adjustTextareaHeight = () => {
  const el = textareaRef.value;
  if (!el) return;
  
  el.style.height = 'auto';
  el.style.height = `${el.scrollHeight}px`;
};

watch(
  () => props.modelValue,
  () => {
    if (props.type === 'textarea' && props.autosize) {
      nextTick(adjustTextareaHeight);
    }
  }
);
</script>

<style module>
@import './Input.module.scss';
</style>
