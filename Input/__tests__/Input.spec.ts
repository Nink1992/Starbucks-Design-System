/**
 * @vitest-environment jsdom
 */
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { Input } from '../index';

describe('Input', () => {
  it('renders correctly', () => {
    const wrapper = mount(Input, {
      props: { placeholder: 'Test Placeholder' },
    });
    const input = wrapper.find('input');
    expect(input.exists()).toBe(true);
    expect(input.attributes('placeholder')).toBe('Test Placeholder');
  });

  it('updates modelValue', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        'onUpdate:modelValue': (e: string) => wrapper.setProps({ modelValue: e }),
      },
    });

    const input = wrapper.find('input');
    await input.setValue('test');
    expect(wrapper.props('modelValue')).toBe('test');
  });

  it('clears input when clearable is true', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'test',
        clearable: true,
        'onUpdate:modelValue': (e: string) => wrapper.setProps({ modelValue: e }),
      },
    });

    const spans = wrapper.findAll('span');
    const clearIconWrapper = spans.find(span => span.find('svg').exists());
    
    expect(clearIconWrapper).toBeDefined();
    await clearIconWrapper!.trigger('click');
    expect(wrapper.props('modelValue')).toBe('');
  });

  it('toggles password visibility', async () => {
    const wrapper = mount(Input, {
      props: {
        type: 'password',
        modelValue: '123456',
      },
    });

    const input = wrapper.find('input');
    expect(input.attributes('type')).toBe('password');

    const spans = wrapper.findAll('span');
    const toggleIconWrapper = spans.find(span => span.find('svg').exists());
    
    expect(toggleIconWrapper).toBeDefined();
    await toggleIconWrapper!.trigger('click');
    
    expect(wrapper.find('input').attributes('type')).toBe('text');
  });

  it('renders textarea', () => {
    const wrapper = mount(Input, {
      props: { type: 'textarea' },
    });
    expect(wrapper.find('textarea').exists()).toBe(true);
    expect(wrapper.find('input').exists()).toBe(false);
  });

  it('shows character count', () => {
    const wrapper = mount(Input, {
      props: {
        showCount: true,
        maxLength: 10,
        modelValue: 'hello',
      },
    });
    expect(wrapper.text()).toContain('5/10');
  });

  it('disabled state', () => {
    const wrapper = mount(Input, {
      props: { disabled: true },
    });
    const input = wrapper.find('input');
    expect(input.attributes('disabled')).toBeDefined();
  });
});
