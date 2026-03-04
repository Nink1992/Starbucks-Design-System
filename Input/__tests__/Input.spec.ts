import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import TraeInput from '../index';

describe('TraeInput', () => {
  it('renders correctly', () => {
    const wrapper = mount(TraeInput);
    expect(wrapper.find('.input-core').exists()).toBe(true);
  });

  it('syncs modelValue', async () => {
    const wrapper = mount(TraeInput, {
      props: {
        modelValue: 'initial',
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
      },
    });
    await wrapper.find('.input-core').setValue('changed');
    expect(wrapper.props('modelValue')).toBe('changed');
  });

  it('shows prefix and suffix', () => {
    const wrapper = mount(TraeInput, {
      props: {
        prefix: '$',
        suffix: 'RMB',
      },
    });
    expect(wrapper.find('.input-prefix').text()).toBe('$');
    expect(wrapper.find('.input-suffix').text()).toBe('RMB');
  });

  it('clears the input when allowClear is true', async () => {
    const wrapper = mount(TraeInput, {
      props: {
        allowClear: true,
        modelValue: 'test',
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
      },
    });
    await wrapper.trigger('mouseenter');
    await wrapper.find('.input-clear-icon').trigger('click');
    expect(wrapper.props('modelValue')).toBe('');
  });

  it('shows character count when showCount is true', () => {
    const wrapper = mount(TraeInput, {
      props: {
        showCount: true,
        maxLength: 10,
        modelValue: 'hello',
      },
    });
    expect(wrapper.find('.input-count').text()).toBe('5/10');
  });

  it('is disabled when disabled prop is true', () => {
    const wrapper = mount(TraeInput, {
      props: {
        disabled: true,
      },
    });
    expect(wrapper.find('.input-core').attributes('disabled')).toBeDefined();
    expect(wrapper.classes()).toContain('is-disabled');
  });

  it('is readonly when readonly prop is true', () => {
    const wrapper = mount(TraeInput, {
      props: {
        readonly: true,
      },
    });
    expect(wrapper.find('.input-core').attributes('readonly')).toBeDefined();
    expect(wrapper.classes()).toContain('is-readonly');
  });

  it('shows error state', () => {
    const wrapper = mount(TraeInput, {
      props: {
        status: 'error',
      },
    });
    expect(wrapper.classes()).toContain('is-error');
  });
});
