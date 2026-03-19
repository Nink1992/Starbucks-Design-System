import type { Meta, StoryObj } from '@storybook/vue3';
import TraeInput from '../../Input/Input.vue';
import { ref } from 'vue';

const meta = {
  title: '数据录入/输入框 Input',
  component: TraeInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '<span style="font-size: 14px; color: #666;">Input 组件用于用户输入文本信息。</span>',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
      description: '尺寸',
    },
    status: {
      control: 'select',
      options: ['default', 'error', 'warning'],
      description: '状态',
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'textarea'],
      description: '输入类型',
    },
    disabled: { control: 'boolean', description: '是否禁用' },
    readonly: { control: 'boolean', description: '是否只读' },
    clearable: { control: 'boolean', description: '是否可清空' },
    filled: { control: 'boolean', description: '是否填充背景' },
    prefixIcon: { control: 'boolean', description: '是否显示前缀图标' },
    suffixIcon: { control: 'boolean', description: '是否显示后缀图标' },
    showCount: { control: 'boolean', description: '是否显示字数统计' },
    autosize: { control: 'boolean', description: '是否自适应高度（仅textarea）' },
    maxLength: { control: 'number', description: '最大字符数' },
    tips: { control: 'text', description: '提示信息' },
    modelValue: { control: 'text', description: '输入框的值' },
    placeholder: { control: 'text', description: '占位符' },
  },
  args: {
    placeholder: '请输入内容',
    size: 'medium',
  },
} satisfies Meta<typeof TraeInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  render: (args) => ({
    components: { TraeInput },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <div style="width: 300px;">
        <TraeInput v-bind="args" v-model="value" />
        <div style="margin-top: 10px; color: #666; font-size: 14px;">Value: {{ value }}</div>
      </div>
    `,
  }),
};

// 尺寸展示
export const Sizes: Story = {
  render: () => ({
    components: { TraeInput },
    setup() {
      const val1 = ref('');
      const val2 = ref('');
      const val3 = ref('');
      return { val1, val2, val3 };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeInput size="small" placeholder="Small size" v-model="val1" />
        <TraeInput size="medium" placeholder="Medium size" v-model="val2" />
        <TraeInput size="large" placeholder="Large size" v-model="val3" />
      </div>
    `,
  }),
};

// 状态展示
export const Status: Story = {
  render: () => ({
    components: { TraeInput },
    setup() {
      const val1 = ref('');
      const val2 = ref('');
      return { val1, val2 };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeInput status="error" placeholder="Error status" v-model="val1" />
        <TraeInput status="warning" placeholder="Warning status" v-model="val2" />
      </div>
    `,
  }),
};

// 功能展示
export const Features: Story = {
  render: () => ({
    components: { TraeInput },
    setup() {
      const val1 = ref('Initial value');
      const val2 = ref('');
      const val3 = ref('123456');
      const val4 = ref('');
      return { val1, val2, val3, val4 };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeInput placeholder="Clearable" clearable v-model="val1" />
        <TraeInput placeholder="Filled" filled v-model="val2" />
        <TraeInput placeholder="Password" type="password" v-model="val3" />
        <TraeInput placeholder="With Tips" tips="这是一个提示信息" v-model="val4" />
      </div>
    `,
  }),
};

// 字数统计
export const CharacterCount: Story = {
  render: () => ({
    components: { TraeInput },
    setup() {
      const val = ref('');
      return { val };
    },
    template: `
      <div style="width: 300px;">
        <TraeInput showCount :maxLength="10" placeholder="Max length is 10" v-model="val" />
      </div>
    `,
  }),
};

// 文本域
export const Textarea: Story = {
  render: () => ({
    components: { TraeInput },
    setup() {
      const val1 = ref('');
      const val2 = ref('');
      return { val1, val2 };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeInput type="textarea" placeholder="Basic Textarea" v-model="val1" />
        <TraeInput type="textarea" autosize placeholder="Autosize Textarea" v-model="val2" />
      </div>
    `,
  }),
};

// 前后缀图标
export const Icons: Story = {
  render: () => ({
    components: { TraeInput },
    setup() {
      const val1 = ref('');
      const val2 = ref('');
      return { val1, val2 };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeInput placeholder="Prefix Slot" v-model="val1">
          <template #prefix>
            <span style="color: #00754A;">★</span>
          </template>
        </TraeInput>
        <TraeInput placeholder="Suffix Slot" v-model="val2">
          <template #suffix>
            <span style="font-size: 12px; color: #666;">RMB</span>
          </template>
        </TraeInput>
      </div>
    `,
  }),
};

// 前后缀标签
export const Adornments: Story = {
  render: () => ({
    components: { TraeInput },
    setup() {
      const val1 = ref('');
      const val2 = ref('');
      const val3 = ref('');
      return { val1, val2, val3 };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeInput placeholder="Prepend Label" prepend="http://" v-model="val1" />
        <TraeInput placeholder="Append Label" append=".com" v-model="val2" />
        <TraeInput placeholder="Both Labels" prepend="http://" append=".com" v-model="val3" />
      </div>
    `,
  }),
};
