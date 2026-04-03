import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Upload } from '../../Upload';
import Button from '../../Button/Button.vue';
import type { UploadFile } from '../../Upload';

const meta = {
  title: '数据录入/上传 Upload',
  component: Upload,
  tags: ['autodocs'],
  argTypes: {
    listType: {
      control: 'select',
      options: ['text', 'picture', 'picture-card'],
      description: '上传列表的内建样式',
    },
    multiple: {
      control: 'boolean',
      description: '是否支持多选文件',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    drag: {
      control: 'boolean',
      description: '是否开启拖拽上传',
    },
    maxCount: {
      control: 'number',
      description: '限制上传数量',
    },
  },
  args: {
    listType: 'text',
    multiple: false,
    disabled: false,
    drag: false,
    showUploadList: true,
  },
} satisfies Meta<typeof Upload>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. 基础点击上传
export const Basic: Story = {
  render: (args: any) => ({
    components: { Upload, Button },
    setup() {
      const fileList = ref<UploadFile[]>([]);
      return { args, fileList };
    },
    template: `
      <div>
        <Upload v-bind="args" v-model:fileList="fileList">
          <Button variant="outline" theme="default" :icon="true" iconType="prefixIcon">
            <template #prefix>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            </template>
            Upload
          </Button>
        </Upload>
      </div>
    `,
  }),
};

// 2. 状态展示
export const AllStates: Story = {
  render: (args: any) => ({
    components: { Upload, Button },
    setup() {
      const fileList = ref<UploadFile[]>([
        {
          uid: '-1',
          name: 'xxx.png',
          status: 'uploading',
          percent: 50,
        },
        {
          uid: '-2',
          name: 'yyy.png',
          status: 'success',
        },
        {
          uid: '-3',
          name: 'zzz.png',
          status: 'error',
        },
      ]);
      return { args, fileList };
    },
    template: `
      <div>
        <Upload v-bind="args" v-model:fileList="fileList">
          <Button variant="outline" theme="default" :icon="true" iconType="prefixIcon">
            <template #prefix>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            </template>
            Upload
          </Button>
        </Upload>
      </div>
    `,
  }),
};

// 2. 照片墙上传
export const PictureCard: Story = {
  render: (args: any) => ({
    components: { Upload },
    setup() {
      const fileList = ref<UploadFile[]>([
        {
          uid: '-1',
          name: 'image.png',
          status: 'uploading',
          percent: 50,
        },
        {
          uid: '-2',
          name: 'image.png',
          status: 'error',
        },
        {
          uid: '-3',
          name: 'starbucks-frappuccino.png',
          status: 'success',
          // A classic Starbucks Frappuccino with the iconic green siren logo
          url: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80', 
        },
      ]);
      return { args, fileList };
    },
    template: `
      <div>
        <Upload 
          v-bind="args" 
          list-type="picture-card" 
          v-model:fileList="fileList"
        />
      </div>
    `,
  }),
};

// 3. 图片列表样式
export const PictureList: Story = {
  render: (args: any) => ({
    components: { Upload, Button },
    setup() {
      const fileList = ref<UploadFile[]>([
        {
          uid: '-1',
          name: 'uploading-image.png',
          status: 'uploading',
          percent: 50,
        },
        {
          uid: '-2',
          name: 'starbucks-frappuccino.png',
          status: 'success',
          url: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80',
        },
        {
          uid: '-3',
          name: 'image2.png',
          status: 'error',
        },
      ]);
      return { args, fileList };
    },
    template: `
      <div>
        <Upload 
          v-bind="args" 
          list-type="picture" 
          v-model:fileList="fileList"
        >
          <Button variant="outline" theme="default" :icon="true" iconType="prefixIcon">
            <template #prefix>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            </template>
            Upload
          </Button>
        </Upload>
      </div>
    `,
  }),
};

// 4. 拖拽上传
export const Drag: Story = {
  render: (args: any) => ({
    components: { Upload },
    setup() {
      const fileList = ref<UploadFile[]>([]);
      return { args, fileList };
    },
    template: `
      <div style="height: 200px">
        <Upload 
          v-bind="args" 
          drag 
          multiple
          v-model:fileList="fileList"
        />
      </div>
    `,
  }),
};

// 5. 禁用状态
export const Disabled: Story = {
  render: (args: any) => ({
    components: { Upload, Button },
    setup() {
      const fileList = ref<UploadFile[]>([]);
      return { args, fileList };
    },
    template: `
      <div>
        <Upload 
          v-bind="args" 
          disabled
          v-model:fileList="fileList"
        >
          <Button variant="outline" theme="default" :icon="true" iconType="prefixIcon" disabled>
            <template #prefix>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            </template>
            Upload
          </Button>
        </Upload>
      </div>
    `,
  }),
};
