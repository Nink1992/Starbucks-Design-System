export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface SelectOptionGroup {
  label: string;
  options: SelectOption[];
}

export type SelectSize = 'small' | 'medium' | 'large';
export type SelectState = 'normal' | 'hover' | 'active' | 'focus' | 'disabled';

export interface SelectProps {
  modelValue?: string | number | (string | number)[];
  options?: (SelectOption | SelectOptionGroup)[];
  placeholder?: string;
  size?: SelectSize;
  disabled?: boolean;
  multiple?: boolean;
  clearable?: boolean;
  searchable?: boolean;
  filled?: boolean;
  prefixIcon?: boolean; // For simplicity in this implementation, can also be string/slot
}

export interface SelectEmits {
  (e: 'update:modelValue', value: string | number | (string | number)[]): void;
  (e: 'change', value: string | number | (string | number)[]): void;
  (e: 'clear'): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
}
