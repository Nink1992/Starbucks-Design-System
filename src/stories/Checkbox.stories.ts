import type { Meta, StoryObj } from '@storybook/vue3';
import TraeCheckbox from '../../Checkbox/index';
import { ref, computed } from 'vue';

const meta = {
  title: '数据录入/复选框 Checkbox',
  component: TraeCheckbox,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'boolean' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
} satisfies Meta<typeof TraeCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// 默认状态
export const Default: Story = {
  args: {
    modelValue: false,
    label: 'Checkbox',
  },
  render: (args) => ({
    components: { TraeCheckbox },
    setup() {
      return { args };
    },
    template: '<TraeCheckbox v-bind="args" v-model="args.modelValue" />',
  }),
};

// 选中状态
export const Checked: Story = {
  args: {
    modelValue: true,
    label: 'Checked',
  },
  render: (args) => ({
    components: { TraeCheckbox },
    setup() {
      return { args };
    },
    template: '<TraeCheckbox v-bind="args" v-model="args.modelValue" />',
  }),
};

// 禁用状态
export const Disabled: Story = {
  args: {
    modelValue: true,
    label: 'Disabled',
    disabled: true,
  },
};

// 部分选中状态
export const Indeterminate: Story = {
  args: {
    modelValue: false,
    label: 'Indeterminate',
    indeterminate: true,
  },
};

// 复选框组
export const CheckboxGroup: Story = {
  render: () => ({
    components: { TraeCheckbox },
    setup() {
      const checkedList = ref(['Apple']);
      return { checkedList };
    },
    template: `
      <div style="display: flex; gap: 16px;">
        <TraeCheckbox v-model="checkedList" value="Apple" label="Apple" />
        <TraeCheckbox v-model="checkedList" value="Pear" label="Pear" />
        <TraeCheckbox v-model="checkedList" value="Orange" label="Orange" />
      </div>
      <div style="margin-top: 10px; color: #666;">
        Selected: {{ checkedList }}
      </div>
    `,
  }),
};

// 父子层级复选框
export const IndeterminateGroup: Story = {
  render: () => ({
    components: { TraeCheckbox },
    setup() {
      const options = ['选项一', '选项二', '选项三', '选项四'];
      const checkedList = ref(['选项一', '选项二']);

      // 全选框的 modelValue
      const checkAll = computed({
        get: () => checkedList.value.length === options.length,
        set: (val: boolean) => {
          checkedList.value = val ? [...options] : [];
        },
      });

      // 全选框的 indeterminate 状态
      const isIndeterminate = computed(() => {
        return checkedList.value.length > 0 && checkedList.value.length < options.length;
      });

      return { options, checkedList, checkAll, isIndeterminate };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <!-- 全选框 -->
        <div style="padding-bottom: 8px; border-bottom: 1px solid #eee;">
          <TraeCheckbox 
            v-model="checkAll" 
            :indeterminate="isIndeterminate"
            label="全部" 
          />
        </div>
        
        <!-- 子选项列表 -->
        <div style="display: flex; gap: 16px;">
          <TraeCheckbox 
            v-for="item in options" 
            :key="item"
            v-model="checkedList" 
            :value="item" 
            :label="item" 
          />
        </div>
        
        <div style="margin-top: 8px; font-size: 12px; color: #666;">
          选中项: {{ checkedList }}
        </div>
      </div>
    `,
  }),
};
