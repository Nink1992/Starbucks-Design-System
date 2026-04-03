import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Cascader } from '../../Cascader';
import type { CascaderOption } from '../../Cascader';

const options: CascaderOption[] = [
  {
    value: 'beijing',
    label: '北京市',
    children: [
      {
        value: 'beijingshi',
        label: '北京市',
        children: [
          { value: 'dongcheng', label: '东城区' },
          { value: 'xicheng', label: '西城区' },
          { value: 'chaoyang', label: '朝阳区' },
          { value: 'haidian', label: '海淀区' },
        ],
      },
    ],
  },
  {
    value: 'shanghai',
    label: '上海市',
    children: [
      {
        value: 'shanghaishi',
        label: '上海市',
        children: [
          { value: 'huangpu', label: '黄浦区' },
          { value: 'xuhui', label: '徐汇区' },
          { value: 'changning', label: '长宁区' },
          { value: 'jingan', label: '静安区' },
        ],
      },
    ],
  },
  {
    value: 'guangdong',
    label: '广东省',
    children: [
      {
        value: 'guangzhou',
        label: '广州市',
        children: [
          { value: 'tianhe', label: '天河区' },
          { value: 'yuexiu', label: '越秀区' },
          { value: 'haizhu', label: '海珠区' },
        ],
      },
      {
        value: 'shenzhen',
        label: '深圳市',
        children: [
          { value: 'nanshan', label: '南山区' },
          { value: 'futian', label: '福田区' },
          { value: 'luohu', label: '罗湖区' },
        ],
      },
    ],
  },
];

const meta = {
  title: '数据录入/级联选择 Cascader',
  component: Cascader,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '输入框大小',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    clearable: {
      control: 'boolean',
      description: '是否支持清除',
    },
    multiple: {
      control: 'boolean',
      description: '是否多选',
    },
    maxTagCount: {
      control: 'number',
      description: '多选时最多显示的标签数量（可折叠）',
    },
    filterable: {
      control: 'boolean',
      description: '是否可搜索过滤',
    },
    expandTrigger: {
      control: 'select',
      options: ['click', 'hover'],
      description: '次级菜单的展开方式',
    },
    checkStrictly: {
      control: 'boolean',
      description: '是否允许选择任意一级的选项',
    },
    showAllLevels: {
      control: 'boolean',
      description: '输入框中是否显示选中值的完整路径',
    },
    separator: {
      control: 'text',
      description: '选项分隔符',
    }
  },
  args: {
    options,
    placeholder: 'Please select',
    size: 'medium',
    disabled: false,
    clearable: true,
    multiple: false,
    filterable: false,
    expandTrigger: 'click',
    checkStrictly: false,
    showAllLevels: true,
    separator: ' / ',
  },
} satisfies Meta<typeof Cascader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args: any) => ({
    components: { Cascader },
    setup() {
      const value = ref<(string | number)[]>([]);
      return { args, value };
    },
    template: `
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">单选级联选择器</h3>
        <div style="width: 300px;">
          <Cascader v-bind="args" v-model="value" />
        </div>
      </div>
    `,
  }),
};

export const Hover: Story = {
  args: {
    expandTrigger: 'hover',
    options,
  },
  render: (args: any) => ({
    components: { Cascader },
    setup() {
      const value = ref<(string | number)[]>([]);
      return { args, value };
    },
    template: `
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">Hover 触发</h3>
        <div style="width: 300px;">
          <Cascader v-bind="args" v-model="value" />
        </div>
      </div>
    `,
  }),
};

export const CheckStrictly: Story = {
  args: {
    checkStrictly: true,
    options,
  },
  render: (args: any) => ({
    components: { Cascader },
    setup() {
      const value = ref<(string | number)[]>([]);
      return { args, value };
    },
    template: `
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">选择任意一项的级联选择器</h3>
        <div style="width: 300px;">
          <Cascader v-bind="args" v-model="value" />
        </div>
      </div>
    `,
  }),
};

export const ShowLastLevel: Story = {
  name: 'Show Last Level',
  args: {
    showAllLevels: false,
    options,
  },
  render: (args: any) => ({
    components: { Cascader },
    setup() {
      const value = ref<(string | number)[]>([]);
      return { args, value };
    },
    template: `
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">只显示最后一级的级联选择器</h3>
        <div style="width: 300px;">
          <Cascader v-bind="args" v-model="value" />
        </div>
      </div>
    `,
  }),
};

export const Multiple: Story = {
  name: 'Multiple',
  args: {
    multiple: true,
    options,
  },
  render: (args: any) => ({
    components: { Cascader },
    setup() {
      const value = ref<(string | number)[][]>([]);
      return { args, value };
    },
    template: `
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">多选级联选择器</h3>
        <div style="width: 300px;">
          <Cascader v-bind="args" v-model="value" />
        </div>
      </div>
    `,
  }),
};

export const MaxTagCount: Story = {
  name: 'Max Tag Count',
  args: {
    multiple: true,
    maxTagCount: 1,
    options,
  },
  render: (args: any) => ({
    components: { Cascader },
    setup() {
      const value = ref<(string | number)[][]>([
        ['beijing', 'beijingshi', 'chaoyang'],
        ['guangdong', 'shenzhen', 'nanshan']
      ]);
      return { args, value };
    },
    template: `
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">可折叠选项多选选择器</h3>
        <div style="width: 300px;">
          <Cascader v-bind="args" v-model="value" />
        </div>
      </div>
    `,
  }),
};

export const Searchable: Story = {
  name: 'Searchable',
  args: {
    filterable: true,
    options,
  },
  render: (args: any) => ({
    components: { Cascader },
    setup() {
      const value = ref<(string | number)[]>([]);
      return { args, value };
    },
    template: `
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">可过滤的级联选择器</h3>
        <div style="width: 300px;">
          <Cascader v-bind="args" v-model="value" />
        </div>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    options: [
      {
        value: 'beijing',
        label: '北京市',
        children: [
          {
            value: 'beijingshi',
            label: '北京市',
            children: [
              { value: 'dongcheng', label: '东城区' },
              { value: 'xicheng', label: '西城区' },
              { value: 'chaoyang', label: '朝阳区' },
              { value: 'haidian', label: '海淀区' },
            ],
          },
        ],
      },
      {
        value: 'shanghai',
        label: '上海市',
        disabled: true,
        children: [
          {
            value: 'shanghaishi',
            label: '上海市',
            children: [
              { value: 'huangpu', label: '黄浦区' },
              { value: 'xuhui', label: '徐汇区' },
              { value: 'changning', label: '长宁区' },
              { value: 'jingan', label: '静安区' },
            ],
          },
        ],
      },
    ],
  },
  render: (args: any) => ({
    components: { Cascader },
    setup() {
      const value = ref<(string | number)[]>([]);
      return { args, value };
    },
    template: `
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">禁用的级联选择器</h3>
        <div style="width: 300px;">
          <Cascader v-bind="args" v-model="value" />
        </div>
      </div>
    `,
  }),
};
