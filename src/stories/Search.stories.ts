import type { Meta, StoryObj } from '@storybook/vue3';
import TraeSearch from '../../Search/Search.vue';
import { ref } from 'vue';

const meta = {
  title: '数据录入/搜索 Search',
  component: TraeSearch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '<span style="font-size: 14px; color: #666;">Search 组件用于在大量内容中查找特定信息。</span>',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
      description: '尺寸',
    },
    disabled: { control: 'boolean', description: '是否禁用' },
    clearable: { control: 'boolean', description: '是否可清空' },
    borderless: { control: 'boolean', description: '是否无边框' },
    fill: { control: 'boolean', description: '是否填充背景' },
    prefix: { control: 'boolean', description: '是否显示前缀图标' },
    suffix: { control: 'boolean', description: '是否显示后缀图标' },
    multiline: { control: 'boolean', description: '是否为多行搜索框' },
    modelValue: { control: 'text', description: '搜索框的值' },
    placeholder: { control: 'text', description: '占位符' },
  },
  args: {
    placeholder: '请输入内容',
    size: 'medium',
    prefix: true,
  },
} satisfies Meta<typeof TraeSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  name: '基础搜索框',
  render: (args) => ({
    components: { TraeSearch },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <div style="width: 300px;">
        <TraeSearch v-bind="args" v-model="value" />
        <div style="margin-top: 10px; color: #666; font-size: 14px;">Value: {{ value }}</div>
      </div>
    `,
  }),
};

// 尺寸展示
export const Sizes: Story = {
  name: '不同尺寸',
  render: (args) => ({
    components: { TraeSearch },
    setup() {
      const val1 = ref('');
      const val2 = ref('');
      const val3 = ref('');
      return { val1, val2, val3 };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeSearch size="small" placeholder="Small size" prefix v-model="val1" />
        <TraeSearch size="medium" placeholder="Medium size" prefix v-model="val2" />
        <TraeSearch size="large" placeholder="Large size" prefix v-model="val3" />
      </div>
    `,
  }),
};

// 变体展示
export const Variants: Story = {
  name: '不同变体',
  render: (args) => ({
    components: { TraeSearch },
    setup() {
      const val1 = ref('');
      const val2 = ref('');
      const val3 = ref('');
      const val4 = ref('');
      return { val1, val2, val3, val4 };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeSearch placeholder="Borderless" borderless v-model="val1" />
        <TraeSearch placeholder="Filled" fill v-model="val2" />
        <TraeSearch placeholder="With Prefix Icon" prefix v-model="val3" />
        <TraeSearch placeholder="With Suffix Icon" suffix v-model="val4" />
      </div>
    `,
  }),
};

// 功能展示
export const Features: Story = {
  name: '功能展示',
  render: (args) => ({
    components: { TraeSearch },
    setup() {
      const val1 = ref('Initial value');
      const val2 = ref('');
      const val3 = ref('');
      return { val1, val2, val3 };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeSearch placeholder="Clearable" clearable v-model="val1" />
        <TraeSearch placeholder="Disabled" disabled v-model="val2" />
        <TraeSearch placeholder="Multiline" multiline v-model="val3" />
      </div>
    `,
  }),
};

// 自定义图标
export const CustomIcons: Story = {
  name: '自定义图标',
  render: (args) => ({
    components: { TraeSearch },
    setup() {
      const val = ref('');
      return { val };
    },
    template: `
      <div style="width: 300px;">
        <TraeSearch v-model="val">
          <template #prefix>
            <span style="color: #00754A;">★</span>
          </template>
          <template #suffix>
            <span style="font-size: 12px; color: #666;">RMB</span>
          </template>
        </TraeSearch>
      </div>
    `,
  }),
};
