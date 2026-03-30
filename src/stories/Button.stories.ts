import type { Meta, StoryObj } from '@storybook/vue3';
import TraeButton from '../../Button/Button.vue';
import { ref } from 'vue';

const meta = {
  title: '通用/按钮 Button',
  component: TraeButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '<span style="font-size: 14px; color: #666;">Button 组件用于触发具体的业务逻辑或交互行为。</span>',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['base', 'outline', 'dashed', 'text'],
      description: '按钮类型',
    },
    theme: {
      control: 'select',
      options: ['primary', 'default', 'danger'],
      description: '主题样式',
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
      description: '尺寸',
    },
    shape: {
      control: 'select',
      options: ['rectangle', 'round', 'square', 'circle'],
      description: '形状',
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    block: { control: 'boolean' },
    icon: { control: 'boolean' },
    iconType: {
      control: 'select',
      options: ['prefixIcon', 'suffixIcon', 'singleIcon'],
    },
  },
  args: {
    default: '按钮',
  },
} satisfies Meta<typeof TraeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基础按钮
export const Base: Story = {
  args: {
    variant: 'base',
    theme: 'primary',
  }
};

// 变体展示
export const Variants: Story = {
  render: () => ({
    components: { TraeButton },
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <TraeButton variant="base">Base</TraeButton>
        <TraeButton variant="outline">Outline</TraeButton>
        <TraeButton variant="dashed">Dashed</TraeButton>
        <TraeButton variant="text">Text</TraeButton>
      </div>
    `,
  }),
};

// 主题展示
export const Themes: Story = {
  render: () => ({
    components: { TraeButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; gap: 16px; align-items: center;">
          <TraeButton theme="primary">Primary</TraeButton>
          <TraeButton theme="primary" variant="outline">Primary Outline</TraeButton>
          <TraeButton theme="primary" variant="dashed">Primary Dashed</TraeButton>
          <TraeButton theme="primary" variant="text">Primary Text</TraeButton>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <TraeButton theme="default">Default</TraeButton>
          <TraeButton theme="default" variant="outline">Default Outline</TraeButton>
          <TraeButton theme="default" variant="dashed">Default Dashed</TraeButton>
          <TraeButton theme="default" variant="text">Default Text</TraeButton>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <TraeButton theme="danger">Danger</TraeButton>
          <TraeButton theme="danger" variant="outline">Danger Outline</TraeButton>
          <TraeButton theme="danger" variant="dashed">Danger Dashed</TraeButton>
          <TraeButton theme="danger" variant="text">Danger Text</TraeButton>
        </div>
      </div>
    `,
  }),
};

// 状态展示
export const States: Story = {
  render: () => ({
    components: { TraeButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; gap: 16px; align-items: center;">
          <TraeButton theme="primary">Normal</TraeButton>
          <TraeButton theme="primary" disabled>Disabled</TraeButton>
          <TraeButton theme="primary" loading>Loading</TraeButton>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <TraeButton theme="default" variant="outline">Normal</TraeButton>
          <TraeButton theme="default" variant="outline" disabled>Disabled</TraeButton>
          <TraeButton theme="default" variant="outline" loading>Loading</TraeButton>
        </div>
      </div>
    `,
  }),
};

// 尺寸展示
export const Sizes: Story = {
  render: () => ({
    components: { TraeButton },
    template: `
      <div style="display: flex; gap: 16px; align-items: flex-end;">
        <TraeButton size="small">Small</TraeButton>
        <TraeButton size="medium">Medium</TraeButton>
        <TraeButton size="large">Large</TraeButton>
      </div>
    `,
  }),
};

// 形状展示
export const Shapes: Story = {
  render: () => ({
    components: { TraeButton },
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <TraeButton shape="rectangle">Rectangle</TraeButton>
        <TraeButton shape="round">Round</TraeButton>
        <TraeButton shape="square" icon iconType="singleIcon">
          <template #default>+</template>
        </TraeButton>
        <TraeButton shape="circle" icon iconType="singleIcon">
          <template #default>+</template>
        </TraeButton>
      </div>
    `,
  }),
};

// 图标展示
export const Icons: Story = {
  render: () => ({
    components: { TraeButton },
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <TraeButton icon iconType="prefixIcon">
          <template #prefix><span>🔍</span></template>
          Prefix
        </TraeButton>
        <TraeButton icon iconType="suffixIcon">
          Suffix
          <template #suffix><span>➔</span></template>
        </TraeButton>
        <TraeButton icon iconType="singleIcon" shape="square">
          <template #default><span>✖</span></template>
        </TraeButton>
      </div>
    `,
  }),
};

// Block 按钮
export const Block: Story = {
  render: () => ({
    components: { TraeButton },
    template: `
      <div style="width: 300px; padding: 20px; border: 1px dashed #ccc;">
        <TraeButton block theme="primary">Block Button</TraeButton>
        <div style="height: 16px;"></div>
        <TraeButton block theme="default">Block Button</TraeButton>
      </div>
    `,
  }),
};
