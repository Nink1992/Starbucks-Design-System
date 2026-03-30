import type { Meta, StoryObj } from '@storybook/vue3';
import TraeButtonGroup from '../../ButtonGroup/ButtonGroup.vue';
import TraeButtonGroupItem from '../../ButtonGroup/ButtonGroupItem.vue';
import { ref } from 'vue';

const meta = {
  title: '数据录入/按钮组 ButtonGroup',
  component: TraeButtonGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '<span style="font-size: 14px; color: #666;">ButtonGroup 组件用于展示一组互斥选项，支持不同的视觉层级。</span>',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'primary-filled', 'default-filled'],
      description: '按钮组类型',
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
      description: '尺寸',
    },
    disabled: { control: 'boolean', description: '是否禁用' },
    modelValue: { control: 'text', description: '当前选中的值' },
  },
  args: {
    options: [
      { label: 'Option 1', value: 1 },
      { label: 'Option 2', value: 2 },
      { label: 'Option 3', value: 3 },
    ],
    variant: 'outline',
    size: 'medium',
  },
} satisfies Meta<typeof TraeButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  render: (args) => ({
    components: { TraeButtonGroup },
    setup() {
      const selected = ref(1);
      return { args, selected };
    },
    template: `
      <div>
        <TraeButtonGroup v-bind="args" v-model="selected" />
        <div style="margin-top: 10px; color: #666; font-size: 14px;">Selected Value: {{ selected }}</div>
      </div>
    `,
  }),
};

// 变体展示
export const Variants: Story = {
  render: (args) => ({
    components: { TraeButtonGroup },
    setup() {
      const outlineVal = ref(1);
      const primaryFilledVal = ref(1);
      const defaultFilledVal = ref(1);
      const options = [
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
        { label: 'Option 3', value: 3 },
      ];
      return { outlineVal, primaryFilledVal, defaultFilledVal, options };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h4 style="margin-bottom: 12px;">Outline (描边型)</h4>
          <TraeButtonGroup variant="outline" :options="options" v-model="outlineVal" />
        </div>
        <div>
          <h4 style="margin-bottom: 12px;">Primary Filled (品牌填充)</h4>
          <TraeButtonGroup variant="primary-filled" :options="options" v-model="primaryFilledVal" />
        </div>
        <div>
          <h4 style="margin-bottom: 12px;">Default Filled (默认填充)</h4>
          <TraeButtonGroup variant="default-filled" :options="options" v-model="defaultFilledVal" />
        </div>
      </div>
    `,
  }),
};

// 尺寸展示
export const Sizes: Story = {
  render: (args) => ({
    components: { TraeButtonGroup },
    setup() {
      const val1 = ref(1);
      const val2 = ref(1);
      const val3 = ref(1);
      const options = [
        { label: 'Small', value: 1 },
        { label: 'Medium', value: 2 },
        { label: 'Large', value: 3 },
      ];
      return { val1, val2, val3, options };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <TraeButtonGroup size="small" :options="options" v-model="val1" />
        <TraeButtonGroup size="medium" :options="options" v-model="val2" />
        <TraeButtonGroup size="large" :options="options" v-model="val3" />
      </div>
    `,
  }),
};

// 使用 Slot
export const WithSlot: Story = {
  render: (args) => ({
    components: { TraeButtonGroup, TraeButtonGroupItem },
    setup() {
      const selected = ref('b');
      return { selected };
    },
    template: `
      <div>
        <TraeButtonGroup v-model="selected" variant="outline">
          <TraeButtonGroupItem value="a">Apple</TraeButtonGroupItem>
          <TraeButtonGroupItem value="b">Banana</TraeButtonGroupItem>
          <TraeButtonGroupItem value="c" disabled>Cherry (Disabled)</TraeButtonGroupItem>
        </TraeButtonGroup>
        <div style="margin-top: 10px; color: #666; font-size: 14px;">Selected Value: {{ selected }}</div>
      </div>
    `,
  }),
};

// 状态展示
export const Status: Story = {
  render: (args) => ({
    components: { TraeButtonGroup },
    setup() {
      const val = ref(1);
      const options = [
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
        { label: 'Option 3', value: 3 },
      ];
      return { val, options };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <TraeButtonGroup disabled :options="options" v-model="val" />
      </div>
    `,
  }),
};
