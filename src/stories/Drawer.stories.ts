import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Drawer, DrawerPlugin } from '../../Drawer';
import Button from '../../Button/Button.vue';

const meta = {
  title: '消息提醒/抽屉 Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    visible: { control: 'boolean', description: '控制抽屉显示隐藏' },
    header: { control: 'text', description: '抽屉标题' },
    body: { control: 'text', description: '抽屉内容' },
    placement: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: '弹出位置',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '抽屉尺寸',
    },
    showOverlay: { control: 'boolean', description: '是否显示遮罩层' },
    closeBtn: { control: 'boolean', description: '是否显示关闭按钮' },
  },
  parameters: {
    docs: {
      description: {
        component: '抽屉组件，在当前页面从屏幕边缘滑出的面板，用于展示或操作信息。',
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
    components: { Drawer, Button },
    setup() {
      const visible = ref(false);
      return { args, visible };
    },
    template: `
      <div>
        <Button theme="primary" @click="visible = true">打开抽屉</Button>
        <Drawer v-bind="args" v-model:visible="visible" header="这里是标题" body="详情内容区域详情内容区域详情内容区域。" />
      </div>
    `,
  }),
};

// 2. 弹出位置
export const Placements: Story = {
  name: 'Placements',
  render: () => ({
    components: { Drawer, Button },
    setup() {
      const visibleRight = ref(false);
      const visibleLeft = ref(false);
      const visibleTop = ref(false);
      const visibleBottom = ref(false);
      return { visibleRight, visibleLeft, visibleTop, visibleBottom };
    },
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <Button theme="default" variant="outline" @click="visibleLeft = true">左侧抽屉</Button>
        <Button theme="default" variant="outline" @click="visibleRight = true">右侧抽屉</Button>
        <Button theme="default" variant="outline" @click="visibleTop = true">上方抽屉</Button>
        <Button theme="default" variant="outline" @click="visibleBottom = true">下方抽屉</Button>

        <Drawer v-model:visible="visibleLeft" placement="left" header="左侧抽屉" body="这里是从左侧弹出的抽屉内容。" />
        <Drawer v-model:visible="visibleRight" placement="right" header="右侧抽屉" body="这里是从右侧弹出的抽屉内容。" />
        <Drawer v-model:visible="visibleTop" placement="top" header="上方抽屉" body="这里是从上方弹出的抽屉内容。" />
        <Drawer v-model:visible="visibleBottom" placement="bottom" header="下方抽屉" body="这里是从下方弹出的抽屉内容。" />
      </div>
    `,
  }),
};

// 3. 不带蒙层
export const NoOverlay: Story = {
  name: 'NoOverlay',
  render: () => ({
    components: { Drawer, Button },
    setup() {
      const visible = ref(false);
      return { visible };
    },
    template: `
      <div>
        <Button theme="default" variant="outline" @click="visible = true">无蒙层抽屉</Button>
        <Drawer v-model:visible="visible" :showOverlay="false" header="不带蒙层抽屉" body="这通常用于不阻断用户查看背后信息的场景。" />
      </div>
    `,
  }),
};

// 4. 不同尺寸
export const Sizes: Story = {
  name: 'Sizes',
  render: () => ({
    components: { Drawer, Button },
    setup() {
      const visibleSmall = ref(false);
      const visibleMedium = ref(false);
      const visibleLarge = ref(false);
      return { visibleSmall, visibleMedium, visibleLarge };
    },
    template: `
      <div style="display: flex; gap: 16px;">
        <Button theme="default" variant="outline" @click="visibleSmall = true">小尺寸 (300px)</Button>
        <Button theme="default" variant="outline" @click="visibleMedium = true">中尺寸 (500px)</Button>
        <Button theme="default" variant="outline" @click="visibleLarge = true">大尺寸 (800px)</Button>

        <Drawer v-model:visible="visibleSmall" size="small" header="小尺寸抽屉" body="适合放置较少内容的抽屉。" />
        <Drawer v-model:visible="visibleMedium" size="medium" header="中尺寸抽屉" body="默认标准尺寸的抽屉。" />
        <Drawer v-model:visible="visibleLarge" size="large" header="大尺寸抽屉" body="适合放置复杂表单或大量图文的抽屉。" />
      </div>
    `,
  }),
};

// 5. 插件调用
export const PluginUsage: Story = {
  name: 'PluginUsage',
  render: () => ({
    components: { Button },
    setup() {
      const showDrawer = () => {
        const instance = DrawerPlugin({
          header: '插件调用的抽屉',
          body: '您可以通过函数调用的方式快速唤起抽屉，无需在模板中挂载节点。',
          onConfirm: () => {
            console.log('确认操作');
            instance.hide();
          },
        });
      };
      
      return { showDrawer };
    },
    template: `
      <div>
        <Button theme="primary" variant="outline" @click="showDrawer">DrawerPlugin()</Button>
      </div>
    `,
  }),
};
