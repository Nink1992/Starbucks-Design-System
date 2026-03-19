export type SearchSize = 'large' | 'medium' | 'small';

export interface SearchProps {
  modelValue?: string;
  placeholder?: string;
  size?: SearchSize;
  disabled?: boolean;
  clearable?: boolean;
  borderless?: boolean;
  fill?: boolean;
  prefix?: boolean;
  suffix?: boolean;
  multiline?: boolean;
  maxLength?: number;
}

export interface SearchEmits {
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
  (e: 'clear'): void;
  (e: 'search', value: string): void;
}
