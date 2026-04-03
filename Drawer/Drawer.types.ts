export type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom';
export type DrawerSize = 'small' | 'medium' | 'large' | string | number;

export interface DrawerProps {
  /**
   * 控制抽屉显示隐藏
   */
  visible?: boolean;
  /**
   * 抽屉挂载节点，默认 document.body
   */
  attach?: string | HTMLElement;
  /**
   * 抽屉内容
   */
  body?: string;
  /**
   * 抽屉标题
   */
  header?: string | boolean;
  /**
   * 抽屉底部内容
   */
  footer?: boolean;
  /**
   * 是否显示遮罩层
   */
  showOverlay?: boolean;
  /**
   * 点击遮罩层是否关闭抽屉
   */
  closeOnOverlayClick?: boolean;
  /**
   * 按下 ESC 键是否关闭抽屉
   */
  closeOnEscKeydown?: boolean;
  /**
   * 是否显示右上角关闭按钮
   */
  closeBtn?: boolean;
  /**
   * 关闭时是否销毁 DOM 节点
   */
  destroyOnClose?: boolean;
  /**
   * 抽屉弹出方向
   */
  placement?: DrawerPlacement;
  /**
   * 抽屉尺寸：控制抽屉展现宽度/高度
   * small=300px, medium=500px, large=800px (或者传入特定数值)
   */
  size?: DrawerSize;
  /**
   * 层级 z-index
   */
  zIndex?: number;
  /**
   * 防止滚动穿透
   */
  preventScrollThrough?: boolean;
  /**
   * 底部取消按钮配置
   */
  cancelBtn?: string | Record<string, any> | null | false;
  /**
   * 底部确认按钮配置
   */
  confirmBtn?: string | Record<string, any> | null | false;
  
  // Events
  onConfirm?: (context: { e: Event }) => void;
  onCancel?: (context: { e: Event }) => void;
  onClose?: (context: { e: Event; trigger: DrawerCloseTrigger }) => void;
  onClosed?: () => void;
  onOpened?: () => void;
}

export type DrawerCloseTrigger = 'cancel' | 'confirm' | 'close-btn' | 'esc' | 'overlay';

export interface DrawerInstance {
  show: () => void;
  hide: () => void;
  destroy: () => void;
  update: (options: DrawerProps) => void;
}

export type DrawerMethod = (options: DrawerProps) => DrawerInstance;

export interface DrawerPluginType {
  (options: DrawerProps): DrawerInstance;
  install: (app: import('vue').App) => void;
}
