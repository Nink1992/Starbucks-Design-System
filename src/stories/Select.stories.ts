import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Select } from '../../Select';

const meta = {
  title: '数据录入/选择器 Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '是一种用于从预设选项中进行选择的输入组件，支持单选、多选及分组选择等形式。',
      },
    },
  },
  argTypes: {
    modelValue: {
      control: 'text',
      description: '绑定值',
    },
    options: {
      control: 'object',
      description: '选项数据',
    },
    placeholder: {
      control: 'text',
      description: '占位符',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '选择器尺寸',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    multiple: {
      control: 'boolean',
      description: '是否多选',
    },
    clearable: {
      control: 'boolean',
      description: '是否可以清空选项',
    },
    filled: {
      control: 'boolean',
      description: '是否为填充样式',
    },
    prefixIcon: {
      control: 'boolean',
      description: '是否显示前置图标',
    },
    'onUpdate:modelValue': { action: 'update:modelValue' },
    onChange: { action: 'change' },
    onClear: { action: 'clear' },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
  { label: '选项三', value: '3' },
  { label: '选项四 (禁用)', value: '4', disabled: true },
  { label: '选项五', value: '5' },
];

const groupOptions = [
  {
    label: '分组名称',
    options: [
      { label: '选择器选项', value: 'g1-1' },
      { label: '选择器选项', value: 'g1-2' },
    ],
  },
  {
    label: '分组名称',
    options: [
      { label: '选择器选项', value: 'g2-1' },
      { label: '选择器选项', value: 'g2-2' },
      { label: '选择器选项', value: 'g2-3' },
    ],
  },
];

export const Default: Story = {
  name: '默认选择器',
  render: (args: any) => ({
    components: { Select },
    setup() {
      const value = ref('');
      return { args, value, defaultOptions };
    },
    template: `
      <div style="width: 240px;">
        <Select v-bind="args" v-model="value" :options="defaultOptions" />
      </div>
    `,
  }),
};

export const Multiple: Story = {
  name: '多选选择器',
  render: (args: any) => ({
    components: { Select },
    setup() {
      const value = ref(['1', '2']);
      return { args, value, defaultOptions };
    },
    template: `
      <div style="width: 300px;">
        <Select v-bind="args" v-model="value" :options="defaultOptions" multiple />
      </div>
    `,
  }),
};

export const Clearable: Story = {
  name: '可清空选择器',
  render: (args: any) => ({
    components: { Select },
    setup() {
      const value = ref('1');
      return { args, value, defaultOptions };
    },
    template: `
      <div style="width: 240px;">
        <Select v-bind="args" v-model="value" :options="defaultOptions" clearable />
      </div>
    `,
  }),
};

export const Sizes: Story = {
  name: '不同尺寸',
  render: (args: any) => ({
    components: { Select },
    setup() {
      const value1 = ref('');
      const value2 = ref('');
      const value3 = ref('');
      return { args, value1, value2, value3, defaultOptions };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 240px;">
        <Select v-model="value1" :options="defaultOptions" size="large" placeholder="大尺寸 (Large)" />
        <Select v-model="value2" :options="defaultOptions" size="medium" placeholder="中尺寸 (Medium)" />
        <Select v-model="value3" :options="defaultOptions" size="small" placeholder="小尺寸 (Small)" />
      </div>
    `,
  }),
};

export const Filled: Story = {
  name: '填充样式',
  render: (args: any) => ({
    components: { Select },
    setup() {
      const value = ref('');
      return { args, value, defaultOptions };
    },
    template: `
      <div style="width: 240px;">
        <Select v-bind="args" v-model="value" :options="defaultOptions" filled placeholder="填充背景样式" />
      </div>
    `,
  }),
};

export const Disabled: Story = {
  name: '禁用状态',
  render: (args: any) => ({
    components: { Select },
    setup() {
      const value1 = ref('');
      const value2 = ref('1');
      return { args, value1, value2, defaultOptions };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 240px;">
        <Select v-model="value1" :options="defaultOptions" disabled placeholder="禁用选择器" />
        <Select v-model="value2" :options="defaultOptions" disabled />
      </div>
    `,
  }),
};

export const PrefixIcon: Story = {
  name: '带前置图标',
  render: (args: any) => ({
    components: { Select },
    setup() {
      const value = ref('');
      return { args, value, defaultOptions };
    },
    template: `
      <div style="width: 240px;">
        <Select v-bind="args" v-model="value" :options="defaultOptions" prefixIcon placeholder="选择选项" />
      </div>
    `,
  }),
};

export const Group: Story = {
  name: '分组选择器',
  render: (args: any) => ({
    components: { Select },
    setup() {
      const value = ref('');
      return { args, value, groupOptions };
    },
    template: `
      <div style="width: 280px;">
        <Select v-bind="args" v-model="value" :options="groupOptions" placeholder="请选择内容" />
      </div>
    `,
  }),
};
