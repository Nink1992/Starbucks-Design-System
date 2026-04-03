import type { Meta, StoryObj } from '@storybook/vue3';
import { TraeRadio, TraeRadioGroup } from '../../Radio';
import { ref } from 'vue';

const meta = {
  title: '数据录入/单选框 Radio',
  component: TraeRadio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '<span style="font-size: 14px; color: #666;">Radio 组件允许用户在一组互斥的选项中选择其中一个。它通常用于表单提交、设置偏好或切换特定视图。</span>',
      },
    },
  },
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    variant: { 
      control: 'select', 
      options: ['basic', 'button-primary-filled', 'button-default-filled', 'button-outline'] 
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    value: { control: false }, // Hide value from controls as it's specific per radio
  },
  args: {
    value: 'default', // Dummy value to satisfy required prop
    label: 'Radio Label',
  }
} satisfies Meta<typeof TraeRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Basic Radio',
  render: (args) => ({
    components: { TraeRadio, TraeRadioGroup },
    setup() {
      const selected = ref('1');
      // Exclude value from args to avoid overriding specific radio values
      const { value, ...radioArgs } = args;
      return { radioArgs, selected };
    },
    template: `
      <TraeRadioGroup v-model="selected">
        <TraeRadio value="1" label="Option 1" v-bind="radioArgs" />
        <TraeRadio value="2" label="Option 2" v-bind="radioArgs" />
        <TraeRadio value="3" label="Option 3" v-bind="radioArgs" />
      </TraeRadioGroup>
    `,
  }),
};

export const Disabled: Story = {
  name: 'Disabled',
  render: (args) => ({
    components: { TraeRadio, TraeRadioGroup },
    setup() {
      const selected = ref('1');
      const { value, ...radioArgs } = args;
      return { radioArgs, selected };
    },
    template: `
      <TraeRadioGroup v-model="selected" disabled>
        <TraeRadio value="1" label="Disabled 1" v-bind="radioArgs" />
        <TraeRadio value="2" label="Disabled 2" v-bind="radioArgs" />
      </TraeRadioGroup>
    `,
  }),
};

export const VerticalGroup: Story = {
  name: 'Vertical Group',
  render: (args) => ({
    components: { TraeRadio, TraeRadioGroup },
    setup() {
      const selected = ref('1');
      const { value, ...radioArgs } = args;
      return { radioArgs, selected };
    },
    template: `
      <TraeRadioGroup v-model="selected" direction="vertical">
        <TraeRadio value="1" label="Option 1" v-bind="radioArgs" />
        <TraeRadio value="2" label="Option 2" v-bind="radioArgs" />
        <TraeRadio value="3" label="Option 3" v-bind="radioArgs" />
      </TraeRadioGroup>
    `,
  }),
};
