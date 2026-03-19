export type ButtonGroupVariant = 'outline' | 'primary-filled' | 'default-filled';
export type ButtonGroupSize = 'large' | 'medium' | 'small';

export interface ButtonGroupOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface ButtonGroupProps {
  modelValue?: string | number;
  options?: ButtonGroupOption[];
  variant?: ButtonGroupVariant;
  size?: ButtonGroupSize;
  disabled?: boolean;
}

export interface ButtonGroupItemProps {
  label?: string;
  value: string | number;
  disabled?: boolean;
}

export interface ButtonGroupContext {
  modelValue: string | number | undefined;
  updateValue: (value: string | number) => void;
  variant: ButtonGroupVariant;
  size: ButtonGroupSize;
  disabled: boolean;
}
