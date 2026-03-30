export type DatePickerSize = 'small' | 'medium' | 'large';
export type DatePickerType = 'date' | 'range';

export interface DatePickerProps {
  modelValue?: string | Date | [string | Date, string | Date];
  type?: DatePickerType;
  placeholder?: string | [string, string];
  size?: DatePickerSize;
  disabled?: boolean | [boolean, boolean];
  clearable?: boolean;
  format?: string;
  showTime?: boolean;
}

export interface DatePickerEmits {
  (e: 'update:modelValue', value: string | [string, string]): void;
  (e: 'change', value: string | [string, string], date: Date | null | [Date, Date] | null): void;
  (e: 'clear'): void;
}
