import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import Pagination from '../../Pagination/Pagination.vue';

const meta = {
  title: '导航/分页 Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '将大体量数据划分成多个页面，帮助用户进行页面跳转，并定位当前位置。',
      },
    },
  },
  argTypes: {
    current: {
      control: 'number',
      description: '当前页数',
    },
    total: {
      control: 'number',
      description: '数据总条数',
    },
    pageSize: {
      control: 'number',
      description: '每页展示条数',
    },
    size: {
      control: 'select',
      options: ['medium', 'small'],
      description: '分页器尺寸',
    },
    theme: {
      control: 'select',
      options: ['default', 'simple'],
      description: '分页器风格',
    },
    showTotal: {
      control: 'boolean',
      description: '是否展示数据总量',
    },
    showSizeChanger: {
      control: 'boolean',
      description: '是否展示页面展示数量选择',
    },
    showQuickJumper: {
      control: 'boolean',
      description: '是否展示快速跳转',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
  },
  args: {
    current: 1,
    total: 480,
    pageSize: 10,
    size: 'medium',
    theme: 'default',
    showTotal: false,
    showSizeChanger: false,
    showQuickJumper: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 1. 基础分页 (默认展示：带快速跳转的分页 & 极简版分页)
export const Basic: Story = {
  render: (args: any) => ({
    components: { Pagination },
    setup() {
      const current1 = ref(1); // Set default selected page back to 1
      const current2 = ref(1);
      const pageSize = ref(20);
      return { args, current1, current2, pageSize };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 40px;">
        <div>
          <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">带快速跳转的分页</h3>
          <Pagination 
            v-bind="args" 
            v-model:current="current1" 
            v-model:pageSize="pageSize" 
            show-size-changer 
            show-quick-jumper 
            show-total 
            :total="480"
          />
        </div>
        <div>
          <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">极简版分页</h3>
          <Pagination 
            v-bind="args" 
            v-model:current="current2" 
            theme="simple" 
            show-total 
            :total="480"
          />
        </div>
      </div>
    `,
  }),
};

// 2. 带数据总量显示的分页
export const WithTotal: Story = {
  render: (args: any) => ({
    components: { Pagination },
    setup() {
      const current = ref(1);
      return { args, current };
    },
    template: `
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">带数据总量显示的分页</h3>
        <Pagination v-bind="args" v-model:current="current" show-total />
      </div>
    `,
  }),
};

// 3. 带页面展示数量选择的分页
export const WithSizeChanger: Story = {
  render: (args: any) => ({
    components: { Pagination },
    setup() {
      const current = ref(1);
      const pageSize = ref(20);
      return { args, current, pageSize };
    },
    template: `
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">带页面展示数量选择的分页</h3>
        <Pagination v-bind="args" v-model:current="current" v-model:pageSize="pageSize" show-size-changer />
      </div>
    `,
  }),
};

// 4. 带快速跳转的分页
export const WithQuickJumper: Story = {
  render: (args: any) => ({
    components: { Pagination },
    setup() {
      const current = ref(1);
      const pageSize = ref(20);
      return { args, current, pageSize };
    },
    template: `
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">带快速跳转的分页</h3>
        <Pagination 
          v-bind="args" 
          v-model:current="current" 
          v-model:pageSize="pageSize" 
          show-size-changer 
          show-quick-jumper 
        />
      </div>
    `,
  }),
};

// 5. 极简版分页
export const Simple: Story = {
  render: (args: any) => ({
    components: { Pagination },
    setup() {
      const current = ref(1);
      return { args, current };
    },
    template: `
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">极简版分页</h3>
        <Pagination 
          v-bind="args" 
          v-model:current="current" 
          theme="simple" 
          show-total 
        />
      </div>
    `,
  }),
};

// 6. 禁用状态
export const Disabled: Story = {
  render: (args: any) => ({
    components: { Pagination },
    setup() {
      const current = ref(1);
      return { args, current };
    },
    template: `
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">禁用状态</h3>
        <Pagination 
          v-bind="args" 
          v-model:current="current" 
          show-total 
          show-size-changer 
          show-quick-jumper 
          disabled 
        />
      </div>
    `,
  }),
};

// 7. 小尺寸分页
export const SmallSize: Story = {
  render: (args: any) => ({
    components: { Pagination },
    setup() {
      const current1 = ref(1);
      const current2 = ref(1);
      return { args, current1, current2 };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 40px;">
        <div>
          <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">小尺寸带快速跳转的分页</h3>
          <Pagination 
            v-bind="args" 
            v-model:current="current1" 
            size="small"
            show-total 
            show-size-changer 
            show-quick-jumper 
          />
        </div>
        <div>
          <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">小尺寸极简版分页</h3>
          <Pagination 
            v-bind="args" 
            v-model:current="current2" 
            size="small"
            theme="simple"
            show-total 
          />
        </div>
      </div>
    `,
  }),
};
