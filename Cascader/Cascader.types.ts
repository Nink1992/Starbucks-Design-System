export interface CascaderOption {
  value: string | number;
  label: string;
  disabled?: boolean;
  children?: CascaderOption[];
  isLeaf?: boolean;
  [key: string]: any;
}

export interface CascaderProps {
  /**
   * 指定选中项 (单选为数组，多选为二维数组)
   */
  modelValue?: (string | number)[] | (string | number)[][];
  /**
   * 可选项数据源
   */
  options?: CascaderOption[];
  /**
   * 是否多选
   */
  multiple?: boolean;
  /**
   * 多选时最多显示多少个 tag，超出部分折叠
   */
  maxTagCount?: number;
  /**
   * 是否可搜索过滤
   */
  filterable?: boolean;
  /**
   * 输入框占位文本
   */
  placeholder?: string;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 支持清除
   */
  clearable?: boolean;
  /**
   * 输入框大小
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 次级菜单的展开方式，可选 'click' 和 'hover'
   */
  expandTrigger?: 'click' | 'hover';
  /**
   * 单选时生效，点选每级菜单选项值都会发生变化 (类似 checkStrictly 选择任意一项)
   */
  checkStrictly?: boolean;
  /**
   * 输入框中是否显示选中值的完整路径，只显示最后一级时设为 false
   */
  showAllLevels?: boolean;
  /**
   * 分隔符
   */
  separator?: string;
  /**
   * 选择后展示的渲染函数
   */
  displayRender?: (labels: string[], selectedOptions: CascaderOption[]) => string;
}

export interface CascaderEmits {
  (e: 'update:modelValue', value: any): void;
  (e: 'change', value: any, selectedOptions: any): void;
}
