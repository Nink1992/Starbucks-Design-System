import type { Meta, StoryObj } from '@storybook/vue3';
import TraeTabs from '../../Tabs/Tabs.vue';
import TraeTabPane from '../../Tabs/TabPane.vue';
import { ref } from 'vue';

const meta = {
  title: '导航/选项卡 Tabs',
  component: TraeTabs,
  subcomponents: { TraeTabPane }, // Note: Storybook 7+ subcomponents property
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '<span style="font-size: 14px; color: #666;">Tabs 组件用于在不同的内容区域之间进行切换。</span>',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['normal', 'card'],
      description: '风格类型',
    },
    size: {
      control: 'select',
      options: ['large', 'medium'],
      description: '尺寸',
    },
    placement: {
      control: 'select',
      options: ['top', 'left'],
      description: '选项卡位置',
    },
    closable: { control: 'boolean', description: '是否可关闭' },
    addable: { control: 'boolean', description: '是否可添加' },
    editable: { control: 'boolean', description: '是否可编辑（同时开启添加和删除）' },
    modelValue: { control: 'text', description: '当前激活的 tab name' },
  },
  args: {
    type: 'normal',
    size: 'medium',
    placement: 'top',
  },
} satisfies Meta<typeof TraeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  render: (args) => ({
    components: { TraeTabs, TraeTabPane },
    setup() {
      const activeName = ref('first');
      // Remove modelValue from args to avoid conflict with v-model
      const { modelValue, ...restArgs } = args;
      return { args: restArgs, activeName };
    },
    template: `
      <TraeTabs v-model="activeName" v-bind="args">
        <TraeTabPane label="用户管理" name="first">用户管理内容</TraeTabPane>
        <TraeTabPane label="配置管理" name="second">配置管理内容</TraeTabPane>
        <TraeTabPane label="角色管理" name="third">角色管理内容</TraeTabPane>
        <TraeTabPane label="定时任务补偿" name="fourth">定时任务补偿内容</TraeTabPane>
      </TraeTabs>
    `,
  }),
  args: {
    // This value is used by Storybook controls but we filter it out in render
    modelValue: 'first',
  },
};

// 卡片风格
export const CardStyle: Story = {
  render: () => ({
    components: { TraeTabs, TraeTabPane },
    setup() {
      const activeName = ref('1');
      return { activeName };
    },
    template: `
      <TraeTabs v-model="activeName" type="card">
        <TraeTabPane label="选项一" name="1">内容一</TraeTabPane>
        <TraeTabPane label="选项二" name="2">内容二</TraeTabPane>
        <TraeTabPane label="选项三" name="3">内容三</TraeTabPane>
      </TraeTabs>
    `,
  }),
  args: {
    modelValue: '1',
    type: 'card',
  },
};

// 尺寸展示
export const Sizes: Story = {
  render: () => ({
    components: { TraeTabs, TraeTabPane },
    setup() {
      const activeName1 = ref('1');
      const activeName2 = ref('1');
      return { activeName1, activeName2 };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h4>Large Size</h4>
          <TraeTabs v-model="activeName1" size="large">
            <TraeTabPane label="用户管理" name="1">用户管理</TraeTabPane>
            <TraeTabPane label="配置管理" name="2">配置管理</TraeTabPane>
          </TraeTabs>
        </div>
        <div>
          <h4>Medium Size</h4>
          <TraeTabs v-model="activeName2" size="medium">
            <TraeTabPane label="用户管理" name="1">用户管理</TraeTabPane>
            <TraeTabPane label="配置管理" name="2">配置管理</TraeTabPane>
          </TraeTabs>
        </div>
      </div>
    `,
  }),
  args: {
    modelValue: '1',
    size: 'medium',
  },
};

// 位置展示 (Left)
export const Position: Story = {
  render: () => ({
    components: { TraeTabs, TraeTabPane },
    setup() {
      const activeName = ref('1');
      return { activeName };
    },
    template: `
      <TraeTabs v-model="activeName" placement="left" style="height: 200px;">
        <TraeTabPane label="用户管理" name="1">用户管理内容</TraeTabPane>
        <TraeTabPane label="配置管理" name="2">配置管理内容</TraeTabPane>
        <TraeTabPane label="角色管理" name="3">角色管理内容</TraeTabPane>
        <TraeTabPane label="定时任务" name="4">定时任务补偿内容</TraeTabPane>
      </TraeTabs>
    `,
  }),
  args: {
    modelValue: '1',
    placement: 'left',
  },
};

// 带图标
export const WithIcons: Story = {
  render: () => ({
    components: { TraeTabs, TraeTabPane },
    setup() {
      const activeName = ref('1');
      return { activeName };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <!-- Normal Style with Icons -->
        <div>
          <h4>Normal Style</h4>
          <TraeTabs v-model="activeName">
            <TraeTabPane label="用户" name="1">
              <template #icon>
                <span>👤</span>
              </template>
              用户管理
            </TraeTabPane>
            <TraeTabPane label="配置" name="2">
               <template #icon>
                <span>⚙️</span>
              </template>
              配置管理
            </TraeTabPane>
          </TraeTabs>
        </div>

        <!-- Card Style with Icons -->
        <div>
          <h4>Card Style</h4>
          <TraeTabs v-model="activeName" type="card">
            <TraeTabPane label="用户" name="1">
              <template #icon>
                <span>👤</span>
              </template>
              用户管理
            </TraeTabPane>
            <TraeTabPane label="配置" name="2">
               <template #icon>
                <span>⚙️</span>
              </template>
              配置管理
            </TraeTabPane>
          </TraeTabs>
        </div>
      </div>
    `,
  }),
  args: {
    modelValue: '1',
  },
};

// 动态增减
export const Editable: Story = {
  render: () => ({
    components: { TraeTabs, TraeTabPane },
    setup() {
      const activeName = ref('2');
      const tabs = ref([
        { title: 'Tab 1', name: '1', content: 'Tab 1 content' },
        { title: 'Tab 2', name: '2', content: 'Tab 2 content' },
      ]);
      let tabIndex = 2;

      const handleAdd = () => {
        const newTabName = `${++tabIndex}`;
        tabs.value.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content',
        });
        activeName.value = newTabName;
      };

      const handleRemove = (targetName: string) => {
        const tabsValue = tabs.value;
        let activeNameValue = activeName.value;
        if (activeNameValue === targetName) {
          tabsValue.forEach((tab, index) => {
            if (tab.name === targetName) {
              const nextTab = tabsValue[index + 1] || tabsValue[index - 1];
              if (nextTab) {
                activeNameValue = nextTab.name;
              }
            }
          });
        }
        activeName.value = activeNameValue;
        tabs.value = tabsValue.filter((tab) => tab.name !== targetName);
      };

      return { activeName, tabs, handleAdd, handleRemove };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h4>Normal Editable</h4>
          <TraeTabs
            v-model="activeName"
            type="normal"
            editable
            @edit="(action, name) => action === 'add' ? handleAdd() : handleRemove(name)"
          >
            <TraeTabPane
              v-for="item in tabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
            >
              {{ item.content }}
            </TraeTabPane>
          </TraeTabs>
        </div>
        
        <div>
          <h4>Card Editable</h4>
          <TraeTabs
            v-model="activeName"
            type="card"
            editable
            @edit="(action, name) => action === 'add' ? handleAdd() : handleRemove(name)"
          >
            <TraeTabPane
              v-for="item in tabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
            >
              {{ item.content }}
            </TraeTabPane>
          </TraeTabs>
        </div>
      </div>
    `,
  }),
  args: {
    modelValue: '2',
    editable: true,
    type: 'normal',
  },
};
