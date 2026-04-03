import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import InputNumber from '../../InputNumber/InputNumber.vue';

const meta = {
  title: '数据录入/计数器 Input_number',
  component: InputNumber,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: ['row', 'column'],
      description: '主题样式 (双侧调整 | 右侧调整)',
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
      description: '尺寸',
    },
    status: {
      control: 'select',
      options: ['normal', 'error', 'warning'],
      description: '状态',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    filled: {
      control: 'boolean',
      description: '是否为填充模式',
    },
    min: {
      control: 'number',
      description: '最小值',
    },
    max: {
      control: 'number',
      description: '最大值',
    },
    step: {
      control: 'number',
      description: '步长',
    },
    precision: {
      control: 'number',
      description: '数值精度',
    },
  },
  args: {
    theme: 'row',
    size: 'medium',
    disabled: false,
    filled: false,
    status: 'normal',
    placeholder: '请输入',
  },
} satisfies Meta<typeof InputNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  render: (args: any) => ({
    components: { InputNumber },
    setup() {
      const value1 = ref(null);
      const value2 = ref(8888);
      return { args, value1, value2 };
    },
    template: `
      <div style="display: flex; gap: 24px; flex-direction: column;">
        <div>
          <div style="margin-bottom: 8px; color: #666;">双侧调整数字输入框 (Theme: row)</div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <InputNumber v-bind="args" v-model="value1" />
            <InputNumber v-bind="args" v-model="value2" filled />
          </div>
        </div>
        <div>
          <div style="margin-bottom: 8px; color: #666;">右侧调整数字输入框 (Theme: column)</div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <InputNumber v-bind="args" v-model="value1" theme="column" />
            <InputNumber v-bind="args" v-model="value2" theme="column" filled />
          </div>
        </div>
      </div>
    `,
  }),
};

// 状态展示
export const Status: Story = {
  render: (args: any) => ({
    components: { InputNumber },
    setup() {
      const val = ref(8888);
      return { args, val };
    },
    template: `
      <div style="display: flex; gap: 24px; flex-direction: column;">
        <div>
          <div style="margin-bottom: 8px; color: #666;">Normal / Hover / Focus (Simulated via Status prop)</div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <InputNumber v-bind="args" v-model="val" filled />
            <InputNumber v-bind="args" v-model="val" filled status="warning" />
            <InputNumber v-bind="args" v-model="val" filled status="error" />
          </div>
        </div>
        <div>
          <div style="margin-bottom: 8px; color: #666;">Disabled</div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <InputNumber v-bind="args" v-model="val" disabled />
            <InputNumber v-bind="args" v-model="val" disabled filled />
            <InputNumber v-bind="args" v-model="val" disabled theme="column" />
            <InputNumber v-bind="args" v-model="val" disabled theme="column" filled />
          </div>
        </div>
      </div>
    `,
  }),
};

// 尺寸展示
export const Sizes: Story = {
  render: (args: any) => ({
    components: { InputNumber },
    setup() {
      const val = ref(100);
      return { args, val };
    },
    template: `
      <div style="display: flex; gap: 24px; flex-direction: column;">
        <div style="display: flex; gap: 16px; align-items: center;">
          <InputNumber v-bind="args" v-model="val" size="large" />
          <InputNumber v-bind="args" v-model="val" size="medium" />
          <InputNumber v-bind="args" v-model="val" size="small" />
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <InputNumber v-bind="args" v-model="val" size="large" theme="column" />
          <InputNumber v-bind="args" v-model="val" size="medium" theme="column" />
          <InputNumber v-bind="args" v-model="val" size="small" theme="column" />
        </div>
      </div>
    `,
  }),
};

// 极值与步长
export const MinMaxStep: Story = {
  render: (args: any) => ({
    components: { InputNumber },
    setup() {
      const val = ref(0);
      return { args, val };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="color: #666;">Min: 0, Max: 10, Step: 2</div>
        <InputNumber v-bind="args" v-model="val" :min="0" :max="10" :step="2" />
      </div>
    `,
  }),
};

// 精度 (小数)
export const Precision: Story = {
  render: (args: any) => ({
    components: { InputNumber },
    setup() {
      const val = ref(1.5);
      return { args, val };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="color: #666;">Precision: 2 (e.g. 1.50)</div>
        <InputNumber v-bind="args" v-model="val" :precision="2" :step="0.1" />
      </div>
    `,
  }),
};
