export type UploadStatus = 'ready' | 'uploading' | 'success' | 'error' | 'removed';

export interface UploadFile {
  uid: string;
  name: string;
  size?: number;
  status?: UploadStatus;
  percent?: number;
  url?: string;
  preview?: string;
  originFileObj?: File;
  error?: any;
}

export interface UploadProps {
  /** 发到后台的文件参数名 */
  name?: string;
  /** 上传的地址 */
  action?: string;
  /** 设置上传的请求头部 */
  headers?: Record<string, string>;
  /** 是否支持多选文件 */
  multiple?: boolean;
  /** 接受上传的文件类型 */
  accept?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否支持拖拽上传 */
  drag?: boolean;
  /** 限制上传数量 */
  maxCount?: number;
  /** 文件列表 */
  fileList?: UploadFile[];
  /** 默认已经上传的文件列表 */
  defaultFileList?: UploadFile[];
  /** 上传列表的内建样式 */
  listType?: 'text' | 'picture' | 'picture-card';
  /** 是否展示文件列表 */
  showUploadList?: boolean;
  /** 自定义上传行为，如果返回 false 则停止默认上传 */
  customRequest?: (options: any) => void;
  /** 上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。支持返回 Promise */
  beforeUpload?: (file: File, fileList: File[]) => boolean | Promise<File | boolean>;
}

export interface UploadEmits {
  (e: 'update:fileList', fileList: UploadFile[]): void;
  (e: 'change', info: { file: UploadFile; fileList: UploadFile[]; event?: any }): void;
  (e: 'remove', file: UploadFile): void;
  (e: 'preview', file: UploadFile): void;
  (e: 'drop', event: DragEvent): void;
}
