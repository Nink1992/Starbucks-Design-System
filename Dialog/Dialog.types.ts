import type { ButtonProps } from '../Button/Button.types';

export type DialogTheme = 'default' | 'info' | 'warning' | 'danger' | 'success';
export type DialogPlacement = 'top' | 'center';
export type DialogMode = 'modal' | 'modeless' | 'full-screen';

export interface DialogProps {
  /**
   * 是否显示对话框（支持 v-model）
   */
  visible?: boolean;
  /**
   * 对话框挂载的节点，默认挂载到 body
   */
  attach?: string | HTMLElement;
  /**
   * 对话框内容
   */
  body?: string;
  /**
   * 取消按钮，可配置为文字或按钮属性，设为 null 或 false 则不显示
   */
  cancelBtn?: string | ButtonProps | null | false;
  /**
   * 是否显示右上角关闭按钮，可自定义文字
   */
  closeBtn?: boolean | string;
  /**
   * 按下 ESC 键时是否关闭对话框
   */
  closeOnEscKeydown?: boolean;
  /**
   * 点击遮罩层时是否关闭对话框
   */
  closeOnOverlayClick?: boolean;
  /**
   * 确认按钮，可配置为文字或按钮属性，设为 null 或 false 则不显示
   */
  confirmBtn?: string | ButtonProps | null | false;
  /**
   * 关闭对话框时是否销毁 DOM 节点
   */
  destroyOnClose?: boolean;
  /**
   * 对话框底部内容，设为 false 则不显示底部
   */
  footer?: boolean;
  /**
   * 对话框标题
   */
  header?: string | boolean;
  /**
   * 模态、非模态或全屏对话框
   */
  mode?: DialogMode;
  /**
   * 垂直弹出位置
   */
  placement?: DialogPlacement;
  /**
   * 防止滚动穿透
   */
  preventScrollThrough?: boolean;
  /**
   * 是否显示遮罩层
   */
  showOverlay?: boolean;
  /**
   * 对话框主题
   */
  theme?: DialogTheme;
  /**
   * 自定义距离顶部的位置，仅在 placement=top 时有效
   */
  top?: string | number;
  /**
   * 对话框宽度
   */
  width?: string | number;
  /**
   * z-index 层级
   */
  zIndex?: number;
  /**
   * 唯一标识
   */
  id?: string;
  /**
   * 点击确认回调
   */
  onConfirm?: (context: { e: Event }) => void;
  /**
   * 点击取消回调
   */
  onCancel?: (context: { e: Event }) => void;
  /**
   * 关闭回调
   */
  onClose?: (context: { e: Event; trigger: DialogCloseTrigger }) => void;
  /**
   * 完全关闭后回调
   */
  onClosed?: () => void;
  /**
   * 完全打开后回调
   */
  onOpened?: () => void;
}

export type DialogCloseTrigger = 'cancel' | 'confirm' | 'close-btn' | 'esc' | 'overlay';

export interface DialogContext {
  e: Event;
  trigger: DialogCloseTrigger;
}

export interface DialogInstance {
  show: () => void;
  hide: () => void;
  destroy: () => void;
  update: (options: DialogProps) => void;
}

export type DialogMethod = (options: DialogProps) => DialogInstance;

export interface DialogPluginType {
  (options: DialogProps): DialogInstance;
  confirm: DialogMethod;
  alert: DialogMethod;
  install: (app: import('vue').App) => void;
}
