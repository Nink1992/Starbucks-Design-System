export type InputSize = 'large' | 'medium' | 'small';
export type InputStatus = 'default' | 'error' | 'warning';
export type InputType = 'text' | 'password' | 'textarea';

export interface InputProps {
  modelValue?: string | number;
  type?: InputType;
  placeholder?: string;
  size?: InputSize;
  status?: InputStatus;
  disabled?: boolean;
  readonly?: boolean;
  clearable?: boolean;
  showCount?: boolean;
  maxLength?: number;
  autosize?: boolean | { minRows?: number; maxRows?: number };
  prefixIcon?: boolean;
  suffixIcon?: boolean;
  filled?: boolean;
  tips?: string;
  prepend?: string;
  append?: string;
}

export interface InputEmits {
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
  (e: 'clear'): void;
  (e: 'input', event: Event): void;
}
