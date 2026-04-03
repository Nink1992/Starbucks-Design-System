import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { DatePicker } from '../../DatePicker';

const meta = {
  title: '数据录入/日期选择器 DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '输入或选择日期的控件，支持选择具体的日期。',
      },
    },
  },
  argTypes: {
    modelValue: {
      control: 'text',
      description: '绑定值，range 类型下为数组',
    },
    type: {
      control: 'select',
      options: ['date', 'range'],
      description: '选择器类型',
    },
    placeholder: {
      control: 'text',
      description: '占位符，range 类型下可为数组',
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
    clearable: {
      control: 'boolean',
      description: '是否可以清空选项',
    },
    showTime: {
      control: 'boolean',
      description: '增加时间选择功能',
    },
    format: {
      control: 'text',
      description: '日期显示格式',
    },
    'onUpdate:modelValue': { action: 'update:modelValue' },
    onChange: { action: 'change' },
    onClear: { action: 'clear' },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  render: (args: any) => ({
    components: { DatePicker },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <div style="width: 240px;">
        <DatePicker v-bind="args" v-model="value" />
      </div>
    `,
  }),
};

export const Clearable: Story = {
  render: (args: any) => ({
    components: { DatePicker },
    setup() {
      const value = ref('2026-03-24');
      return { args, value };
    },
    template: `
      <div style="width: 240px;">
        <DatePicker v-bind="args" v-model="value" clearable />
      </div>
    `,
  }),
};

export const Sizes: Story = {
  name: 'Sizes',
  render: (args: any) => ({
    components: { DatePicker },
    setup() {
      const value1 = ref('');
      const value2 = ref('');
      const value3 = ref('');
      return { args, value1, value2, value3 };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 240px;">
        <DatePicker v-model="value1" size="large" placeholder="大尺寸 (Large)" />
        <DatePicker v-model="value2" size="medium" placeholder="中尺寸 (Medium)" />
        <DatePicker v-model="value3" size="small" placeholder="小尺寸 (Small)" />
      </div>
    `,
  }),
};

export const WithTime: Story = {
  render: (args: any) => ({
    components: { DatePicker },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <div style="width: 240px;">
        <DatePicker v-bind="args" v-model="value" showTime format="YYYY-MM-DD HH:mm:ss" placeholder="选择日期和时间" />
      </div>
    `,
  }),
};

export const Range: Story = {
  render: (args: any) => ({
    components: { DatePicker },
    setup() {
      const value = ref(['', '']);
      return { args, value };
    },
    template: `
      <div style="width: 320px;">
        <DatePicker v-bind="args" v-model="value" type="range" :placeholder="['开始日期', '结束日期']" />
      </div>
    `,
  }),
};

export const Disabled: Story = {
  render: (args: any) => ({
    components: { DatePicker },
    setup() {
      const value1 = ref('');
      const value2 = ref('2026-03-24');
      return { args, value1, value2 };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 240px;">
        <DatePicker v-model="value1" disabled placeholder="禁用状态" />
        <DatePicker v-model="value2" disabled />
      </div>
    `,
  }),
};
