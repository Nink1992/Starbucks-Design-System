export interface PaginationProps {
  /** 当前页数 */
  current?: number;
  /** 数据总条数 */
  total?: number;
  /** 每页展示条数 */
  pageSize?: number;
  /** 分页器尺寸 */
  size?: 'small' | 'medium';
  /** 分页器风格 */
  theme?: 'default' | 'simple';
  /** 是否展示数据总量 */
  showTotal?: boolean;
  /** 是否展示页面展示数量选择 (Page Size Changer) */
  showSizeChanger?: boolean;
  /** 是否展示快速跳转 (Quick Jumper) */
  showQuickJumper?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 每页展示条数配置选项 */
  pageSizeOptions?: number[];
}

export interface PaginationEmits {
  (e: 'update:current', page: number): void;
  (e: 'update:pageSize', size: number): void;
  (e: 'change', page: number, pageSize: number): void;
}
