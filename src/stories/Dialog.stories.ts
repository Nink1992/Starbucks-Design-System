import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Dialog, DialogPlugin } from '../../Dialog';
import Button from '../../Button/Button.vue';

const meta = {
  title: '消息提醒/对话框 Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    visible: { control: 'boolean', description: '控制对话框显示隐藏' },
    header: { control: 'text', description: '对话框标题' },
    body: { control: 'text', description: '对话框内容' },
    theme: {
      control: 'select',
      options: ['default', 'info', 'warning', 'danger', 'success'],
      description: '对话框主题',
    },
    placement: {
      control: 'select',
      options: ['top', 'center'],
      description: '弹出位置',
    },
    mode: {
      control: 'select',
      options: ['modal', 'modeless', 'full-screen'],
      description: '模式：模态、非模态或全屏',
    },
    width: { control: 'text', description: '对话框宽度，默认 480px' },
    closeBtn: { control: 'boolean', description: '是否显示关闭按钮' },
  },
  parameters: {
    docs: {
      description: {
        component: '对话框组件，用于全局展示重要通知及操作反馈。支持函数式和插件式调用。',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 1. 基础用法
export const Basic: Story = {
  name: 'Basic',
  render: (args) => ({
    components: { Dialog, Button },
    setup() {
      const visible = ref(false);
      return { args, visible };
    },
    template: `
      <div>
        <Button theme="primary" @click="visible = true">打开对话框</Button>
        <Dialog v-bind="args" v-model:visible="visible" header="这里是标题" body="详情内容区域详情内容区域详情内容区域。" />
      </div>
    `,
  }),
};

// 2. 主题与状态
export const Themes: Story = {
  name: 'Themes',
  render: () => ({
    components: { Dialog, Button },
    setup() {
      const visibleInfo = ref(false);
      const visibleSuccess = ref(false);
      const visibleWarning = ref(false);
      const visibleDanger = ref(false);
      return { visibleInfo, visibleSuccess, visibleWarning, visibleDanger };
    },
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <Button theme="default" variant="outline" @click="visibleInfo = true" style="color: var(--information5-color-normal); border-color: var(--information5-color-normal);">信息 Dialog</Button>
        <Button theme="default" variant="outline" @click="visibleSuccess = true" style="color: var(--success5-color-normal); border-color: var(--success5-color-normal);">成功 Dialog</Button>
        <Button theme="default" variant="outline" @click="visibleWarning = true" style="color: var(--warning5-color-normal); border-color: var(--warning5-color-normal);">警示 Dialog</Button>
        <Button theme="default" variant="outline" @click="visibleDanger = true" style="color: var(--error5-color-normal); border-color: var(--error5-color-normal);">错误 Dialog</Button>

        <Dialog v-model:visible="visibleInfo" theme="info" header="系统提示" body="这是一个信息提示对话框。" />
        <Dialog v-model:visible="visibleSuccess" theme="success" header="操作成功" body="您的操作已顺利完成。" />
        <Dialog v-model:visible="visibleWarning" theme="warning" header="警示操作" body="这可能会带来一些不确定的后果。" />
        <Dialog v-model:visible="visibleDanger" theme="danger" header="危险操作" body="您正在执行不可逆的删除操作！" :confirmBtn="{ theme: 'danger', variant: 'base', default: '确认删除' }" />
      </div>
    `,
  }),
};

// 3. 插件调用
export const PluginUsage: Story = {
  name: 'PluginUsage',
  render: () => ({
    components: { Button },
    setup() {
      const showConfirm = () => {
        const instance = DialogPlugin.confirm({
          header: '确认提交',
          body: '您确认要提交这份数据吗？提交后不可修改。',
          onConfirm: () => {
            console.log('确认');
            instance.hide();
          },
          onCancel: () => {
            console.log('取消');
            instance.hide();
          },
        });
      };
      
      const showAlert = () => {
        const instance = DialogPlugin.alert({
          header: '温馨提示',
          body: '您的账号在异地登录，请注意安全！',
          onConfirm: () => {
            instance.hide();
          }
        });
      };

      return { showConfirm, showAlert };
    },
    template: `
      <div style="display: flex; gap: 16px;">
        <Button theme="primary" variant="outline" @click="showConfirm">DialogPlugin.confirm</Button>
        <Button theme="default" variant="outline" @click="showAlert">DialogPlugin.alert</Button>
      </div>
    `,
  }),
};
