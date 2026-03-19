import type { Ref } from 'vue';

export type TabsType = 'card' | 'normal';
export type TabsSize = 'large' | 'medium';
export type TabsPlacement = 'top' | 'left';

export interface TabPaneProps {
  label: string;
  name: string | number;
  disabled?: boolean;
  closable?: boolean;
  icon?: string;
  slots?: any; // To store slots from VNode
}

export interface TabsProps {
  modelValue: string | number;
  type?: TabsType;
  size?: TabsSize;
  placement?: TabsPlacement;
  closable?: boolean;
  addable?: boolean;
  editable?: boolean;
}

export interface TabsEmits {
  (e: 'update:modelValue', value: string | number): void;
  (e: 'change', value: string | number): void;
  (e: 'tab-click', pane: TabPaneProps, event: Event): void;
  (e: 'tab-remove', name: string | number): void;
  (e: 'tab-add'): void;
  (e: 'edit', action: 'add' | 'remove', name?: string | number): void;
}

export interface TabsContext {
  activeKey: Ref<string | number>;
  type: Ref<TabsType>;
  size: Ref<TabsSize>;
  placement: Ref<TabsPlacement>;
  handleTabClick: (pane: TabPaneProps, event: Event) => void;
  handleTabRemove: (name: string | number, event: Event) => void;
}
