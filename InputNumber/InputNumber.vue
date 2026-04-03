<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import type { InputNumberProps, InputNumberEmits } from './InputNumber.types';

const props = withDefaults(defineProps<InputNumberProps>(), {
  modelValue: null,
  theme: 'row',
  size: 'medium',
  status: 'normal',
  disabled: false,
  filled: false,
  min: -Infinity,
  max: Infinity,
  step: 1,
  precision: 0,
  readonly: false,
  placeholder: '请输入',
});

const emit = defineEmits<InputNumberEmits>();

const inputRef = ref<HTMLInputElement | null>(null);
const isFocused = ref(false);
const currentValue = ref<number | null>(props.modelValue ?? null);

watch(() => props.modelValue, (newVal) => {
  currentValue.value = newVal;
});

const displayValue = computed(() => {
  if (currentValue.value === null || currentValue.value === undefined) {
    return '';
  }
  if (props.precision > 0) {
    return currentValue.value.toFixed(props.precision);
  }
  return currentValue.value.toString();
});

const isMin = computed(() => currentValue.value !== null && currentValue.value <= props.min);
const isMax = computed(() => currentValue.value !== null && currentValue.value >= props.max);

const updateValue = (valStr: string) => {
  if (valStr.trim() === '') {
    if (currentValue.value !== null) {
      const oldVal = currentValue.value;
      currentValue.value = null;
      emit('update:modelValue', null);
      emit('change', null, oldVal);
    }
    return;
  }

  let num = Number(valStr);
  if (isNaN(num)) {
    // If invalid, revert to previous value visually
    if (inputRef.value) {
      inputRef.value.value = displayValue.value;
    }
    return;
  }

  if (num < props.min) num = props.min;
  if (num > props.max) num = props.max;
  
  if (props.precision > 0) {
    num = Number(num.toFixed(props.precision));
  } else {
    num = Math.round(num); // Default precision 0 means integer
  }

  if (num !== currentValue.value) {
    const oldVal = currentValue.value;
    currentValue.value = num;
    emit('update:modelValue', num);
    emit('change', num, oldVal);
  } else {
    // Re-format just in case
    if (inputRef.value) {
      inputRef.value.value = displayValue.value;
    }
  }
};

const handleFocus = (e: FocusEvent) => {
  if (props.disabled || props.readonly) return;
  isFocused.value = true;
  emit('focus', e);
};

const handleBlur = (e: FocusEvent) => {
  isFocused.value = false;
  
  if (inputRef.value) {
    const valStr = inputRef.value.value;
    updateValue(valStr);
  }
  
  emit('blur', e);
};

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  let val = target.value;
  
  if (props.precision === 0) {
    // Only allow digits and minus sign for integers
    val = val.replace(/[^\d-]/g, '');
  } else {
    // Allow digits, minus sign, and one decimal point
    val = val.replace(/[^\d.-]/g, '');
    const parts = val.split('.');
    if (parts.length > 2) {
      val = parts[0] + '.' + parts.slice(1).join('');
    }
  }
  
  if (target.value !== val) {
    target.value = val;
  }
};

const handleEnter = () => {
  if (inputRef.value) {
    inputRef.value.blur();
  }
};

const increase = () => {
  if (props.disabled || props.readonly || isMax.value) return;
  
  const val = currentValue.value === null ? 0 : currentValue.value;
  updateValue((val + props.step).toString());
};

const decrease = () => {
  if (props.disabled || props.readonly || isMin.value) return;
  
  const val = currentValue.value === null ? 0 : currentValue.value;
  updateValue((val - props.step).toString());
};
</script>

<template>
  <div
    :class="[
      $style['input-number'],
      $style[`theme-${theme}`],
      $style[`size-${size}`],
      {
        [$style['is-disabled']]: disabled,
        [$style['is-filled']]: filled,
        [$style['is-focused']]: isFocused,
        [$style[`status-${status}`]]: status !== 'normal',
      }
    ]"
  >
    <!-- Row Theme -->
    <template v-if="theme === 'row'">
      <button 
        :class="[$style['row-btn'], $style['decrease-btn'], { [$style['is-disabled']]: disabled || isMin }]" 
        :disabled="disabled || isMin" 
        @click="decrease" 
        type="button"
      >
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 8H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
      <div 
        :class="[
          $style['input-wrapper'],
          {
            [$style['is-disabled']]: disabled,
            [$style['is-readonly']]: readonly,
            [$style['is-focused']]: isFocused,
            [$style[`status-${status}`]]: status !== 'normal'
          }
        ]"
      >
        <input
          ref="inputRef"
          :class="$style['input-core']"
          :value="displayValue"
          :disabled="disabled"
          :readonly="readonly"
          :placeholder="placeholder"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          @keydown.enter="handleEnter"
          @keydown.up.prevent="increase"
          @keydown.down.prevent="decrease"
        />
      </div>

      <button 
        :class="[$style['row-btn'], $style['increase-btn'], { [$style['is-disabled']]: disabled || isMax }]" 
        :disabled="disabled || isMax" 
        @click="increase" 
        type="button"
      >
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 4V12M4 8H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </template>

    <!-- Column Theme -->
    <template v-else>
      <input
        ref="inputRef"
        :class="$style['input-core']"
        :value="displayValue"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown.enter="handleEnter"
        @keydown.up.prevent="increase"
        @keydown.down.prevent="decrease"
      />
      
      <div :class="$style['column-actions']">
        <button 
          :class="[$style['column-btn'], $style['increase-btn'], { [$style['is-disabled']]: disabled || isMax }]" 
          :disabled="disabled || isMax" 
          @click="increase" 
          type="button"
        >
          <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 7.5L6 3.5L9.5 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button 
          :class="[$style['column-btn'], $style['decrease-btn'], { [$style['is-disabled']]: disabled || isMin }]" 
          :disabled="disabled || isMin" 
          @click="decrease" 
          type="button"
        >
          <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 4.5L6 8.5L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </template>
  </div>
</template>

<style module src="./InputNumber.module.scss"></style>
