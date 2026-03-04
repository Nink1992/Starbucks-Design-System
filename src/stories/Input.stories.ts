import type { Meta, StoryObj } from '@storybook/vue3';
import TraeInput from '../../Input/index';

const meta = {
  title: 'Components/Input',
  component: TraeInput,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['large', 'medium', 'small'] },
    status: { control: 'select', options: ['normal', 'error'] },
  },
} satisfies Meta<typeof TraeInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Default Input',
  },
};

export const WithPrefix: Story = {
  args: {
    prefix: '$',
    placeholder: 'Amount',
  },
};

export const WithSuffix: Story = {
  args: {
    suffix: 'RMB',
    placeholder: 'Price',
  },
};

export const Clearable: Story = {
  args: {
    allowClear: true,
    placeholder: 'Clearable Input',
    modelValue: 'Some text to clear',
  },
};

export const WithCount: Story = {
  args: {
    showCount: true,
    maxLength: 20,
    placeholder: 'Input with character count',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled Input',
  },
};

export const Readonly: Story = {
  args: {
    readonly: true,
    placeholder: 'Readonly Input',
    modelValue: 'This is a readonly input',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    placeholder: 'Error Input',
  },
};
