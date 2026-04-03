import type { Meta, StoryObj } from '@storybook/vue3';
import { MessagePlugin } from '../../Message';
import Button from '../../Button/Button.vue';

const meta = {
  title: '消息提醒/全局提示 Message',
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error', 'loading', 'question'],
      description: '消息主题类型',
    },
    content: {
      control: 'text',
      description: '消息内容',
    },
    duration: {
      control: 'number',
      description: '持续时间（毫秒），0 表示不自动关闭',
      defaultValue: 3000,
    },
    closeBtn: {
      control: 'boolean',
      description: '是否显示关闭按钮，支持 boolean 或 string (自定义文字)',
      defaultValue: false,
    },
    zIndex: {
      control: 'number',
      description: '层级控制',
      defaultValue: 6000,
    },
  },
  parameters: {
    docs: {
      description: {
        component: '全局提示，用于全局展示重要通知及操作反馈。支持函数式和插件式调用。',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 1. 普通全局提示
export const Basic: Story = {
  name: 'Basic',
  render: () => ({
    components: { Button },
    setup() {
      const showInfo = () => MessagePlugin.info('用于表示普通操作信息提示');
      const showSuccess = () => MessagePlugin.success('用于表示操作顺利达成');
      const showWarning = () => MessagePlugin.warning('用于表示操作引起一定后果');
      const showError = () => MessagePlugin.error('用于表示操作引起严重的后果');
      const showQuestion = () => MessagePlugin.question('用于帮助用户操作的信息提示');

      return { showInfo, showSuccess, showWarning, showError, showQuestion };
    },
    template: `
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">普通全局提示：使用简洁文字描述操作反馈。常规全局提示包含：普通信息、成功信息、警示信息、错误信息、帮助信息和加载中。</h3>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <Button theme="default" variant="outline" size="medium" @click="showInfo" style="color: var(--information5-color-normal); border-color: var(--information5-color-normal);">信息</Button>
          <Button theme="default" variant="outline" size="medium" @click="showSuccess" style="color: var(--success5-color-normal); border-color: var(--success5-color-normal);">成功</Button>
          <Button theme="default" variant="outline" size="medium" @click="showWarning" style="color: var(--warning5-color-normal); border-color: var(--warning5-color-normal);">警示</Button>
          <Button theme="default" variant="outline" size="medium" @click="showError" style="color: var(--error5-color-normal); border-color: var(--error5-color-normal);">错误</Button>
          <Button theme="default" variant="outline" size="medium" @click="showQuestion">帮助</Button>
        </div>
      </div>
    `,
  }),
};

// 2. 加载中信息提示
export const Loading: Story = {
  name: 'Loading',
  render: () => ({
    components: { Button },
    setup() {
      const showLoading = () => {
        // duration 0 means it won't auto close
        const msg = MessagePlugin.loading({ content: '用于表示操作正在生效的过程中', duration: 0 });
        // Simulate close after 3s
        setTimeout(() => {
          MessagePlugin.closeAll();
        }, 3000);
      };
      
      const showLoadingSuccess = () => {
        const msg = MessagePlugin.loading('正在加载中...(10s)', 10000);
      };

      return { showLoading, showLoadingSuccess };
    },
    template: `
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">加载中信息提示</h3>
        <div style="display: flex; gap: 16px;">
          <Button theme="default" variant="outline" size="medium" @click="showLoading">加载中 (3s后手动关闭)</Button>
          <Button theme="default" variant="outline" size="medium" @click="showLoadingSuccess">加载中 (10s)</Button>
        </div>
      </div>
    `,
  }),
};

// 3. 关闭全局提示
export const Closable: Story = {
  name: 'Closable',
  render: () => ({
    components: { Button },
    setup() {
      const showClosable = () => {
        MessagePlugin.info({
          content: '带关闭按钮的全局提示',
          closeBtn: true,
          duration: 0,
        });
      };
      const showClosableText = () => {
        MessagePlugin.info({
          content: '自定义关闭按钮（文字）',
          closeBtn: '关闭',
          duration: 0,
        });
      };

      return { showClosable, showClosableText };
    },
    template: `
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">关闭全局提示：如果不希望通过计时关闭，也可以配置关闭按钮。</h3>
        <div style="display: flex; gap: 16px;">
          <Button theme="default" variant="outline" size="medium" @click="showClosable">默认关闭按钮</Button>
          <Button theme="default" variant="outline" size="medium" @click="showClosableText">文字关闭按钮</Button>
        </div>
      </div>
    `,
  }),
};
