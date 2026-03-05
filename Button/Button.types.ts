export type ButtonVariant = 'base' | 'outline' | 'dashed' | 'text';
export type ButtonTheme = 'primary' | 'default' | 'danger';
export type ButtonSize = 'large' | 'medium' | 'small';
export type ButtonShape = 'rectangle' | 'round' | 'square' | 'circle';
export type ButtonIconType = 'prefixIcon' | 'suffixIcon' | 'singleIcon';

export interface ButtonProps {
  variant?: ButtonVariant;
  theme?: ButtonTheme;
  size?: ButtonSize;
  shape?: ButtonShape;
  icon?: boolean;
  iconType?: ButtonIconType;
  loading?: boolean;
  disabled?: boolean;
  block?: boolean;
}
