import type { PropType } from 'vue';

export type InputSize = 'large' | 'medium' | 'small';
export type InputStatus = 'normal' | 'error';

export const inputProps = {
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
} as const;

export const inputEmits = ['update:modelValue', 'input', 'change', 'clear'];
