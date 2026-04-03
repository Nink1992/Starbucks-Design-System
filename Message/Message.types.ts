export type MessageTheme = 'info' | 'success' | 'warning' | 'error' | 'loading' | 'question';

export interface MessageProps {
  /**
   * 消息主题类型
   */
  theme?: MessageTheme;
  /**
   * 消息内容
   */
  content?: string;
  /**
   * 持续时间，0 表示不自动关闭。单位毫秒
   */
  duration?: number;
  /**
   * 是否显示关闭按钮
   */
  closeBtn?: boolean | string | (() => any);
  /**
   * 图标，可以自定义或者根据 theme 自动提供
   */
  icon?: boolean | (() => any);
  /**
   * z-index 层级
   */
  zIndex?: number;
  /**
   * 唯一标识，用于关闭指定消息
   */
  id?: string;
  /**
   * 关闭时的回调
   */
  onCloseBtnClick?: (context: { e: MouseEvent }) => void;
  /**
   * 倒计时结束时的回调
   */
  onDurationEnd?: () => void;
}

export interface MessageInstance {
  close: () => void;
}

export type MessageMethod = (content: string | MessageProps, duration?: number) => Promise<MessageInstance>;

export interface MessagePlugin {
  (options: MessageProps): Promise<MessageInstance>;
  info: MessageMethod;
  success: MessageMethod;
  warning: MessageMethod;
  error: MessageMethod;
  loading: MessageMethod;
  question: MessageMethod;
  close: (id: string) => void;
  closeAll: () => void;
}
