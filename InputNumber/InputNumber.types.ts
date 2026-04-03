export interface InputNumberProps {
  /** 绑定值 */
  modelValue?: number | null;
  /** 主题样式 (双侧调整 | 右侧调整) */
  theme?: 'row' | 'column';
  /** 尺寸 */
  size?: 'large' | 'medium' | 'small';
  /** 状态 */
  status?: 'normal' | 'error' | 'warning';
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否为填充模式 */
  filled?: boolean;
  /** 最小值 */
  min?: number;
  /** 最大值 */
  max?: number;
  /** 步长 */
  step?: number;
  /** 精度 */
  precision?: number;
  /** 占位提示 */
  placeholder?: string;
  /** 只读 */
  readonly?: boolean;
}

export interface InputNumberEmits {
  (e: 'update:modelValue', value: number | null): void;
  (e: 'change', value: number | null, oldValue: number | null): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
}
