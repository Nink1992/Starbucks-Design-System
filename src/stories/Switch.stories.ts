import type { Meta, StoryObj } from '@storybook/vue3';
import TraeSwitch from '../../Switch/index';

const meta = {
  title: '数据录入/开关 Switch',
  component: TraeSwitch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '<span style="font-size: 14px; color: #666;">开关用于在两种状态（开启/关闭）之间进行切换。</span>',
      },
    },
  },
  argTypes: {
    modelValue: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['medium', 'large'],
      description: 'Size of the switch',
    },
    activeColor: { control: 'color' },
    inactiveColor: { control: 'color' },
  },
} satisfies Meta<typeof TraeSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

// 默认状态
export const Default: Story = {
  name: '基础开关',
  args: {
    modelValue: false,
    size: 'medium',
  },
  render: (args) => ({
    components: { TraeSwitch },
    setup() {
      return { args };
    },
    template: '<TraeSwitch v-bind="args" v-model="args.modelValue" />',
  }),
};

// 大尺寸
export const Large: Story = {
  args: {
    modelValue: true,
    size: 'large',
  },
  render: (args) => ({
    components: { TraeSwitch },
    setup() {
      return { args };
    },
    template: '<TraeSwitch v-bind="args" v-model="args.modelValue" />',
  }),
};

// 禁用状态
export const Disabled: Story = {
  name: '禁用状态',
  args: {
    modelValue: true,
    disabled: true,
  },
};

// 加载状态
export const Loading: Story = {
  args: {
    modelValue: true,
    loading: true,
  },
};

// 自定义颜色
export const CustomColor: Story = {
  args: {
    modelValue: true,
    activeColor: '#ff4d4f',
    inactiveColor: '#13c2c2',
  },
  render: (args) => ({
    components: { TraeSwitch },
    setup() {
      return { args };
    },
    template: '<TraeSwitch v-bind="args" v-model="args.modelValue" />',
  }),
};
