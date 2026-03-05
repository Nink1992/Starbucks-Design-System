import type { Ref } from 'vue';

export type RadioValue = string | number | boolean;

export interface RadioProps {
  value: RadioValue;
  label?: string;
  disabled?: boolean;
  variant?: 'basic' | 'button-primary-filled' | 'button-default-filled' | 'button-outline';
  size?: 'small' | 'medium' | 'large';
  error?: boolean;
  name?: string;
}

export interface RadioGroupProps {
  modelValue?: RadioValue;
  direction?: 'horizontal' | 'vertical';
  spacing?: string | number; // 24px horizontal, 16px vertical default
  name?: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'basic' | 'button-primary-filled' | 'button-default-filled' | 'button-outline';
}

export interface RadioGroupContext {
  name: string | undefined;
  modelValue: Ref<RadioValue | undefined>;
  disabled: Ref<boolean>;
  size: Ref<'small' | 'medium' | 'large' | undefined>;
  variant?: Ref<'basic' | 'button-primary-filled' | 'button-default-filled' | 'button-outline' | undefined>;
  updateValue: (value: RadioValue) => void;
}
