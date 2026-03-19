/**
 * @vitest-environment jsdom
 */
import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import { Search } from '../index';

describe('Search', () => {
  it('renders correctly', () => {
    const wrapper = mount(Search, {
      props: { placeholder: 'Test Placeholder' },
    });
    const input = wrapper.find('input');
    expect(input.exists()).toBe(true);
    expect(input.attributes('placeholder')).toBe('Test Placeholder');
  });

  it('updates modelValue', async () => {
    const wrapper = mount(Search, {
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
    const wrapper = mount(Search, {
      props: {
        modelValue: 'test',
        clearable: true,
        'onUpdate:modelValue': (e: string) => wrapper.setProps({ modelValue: e }),
      },
    });

    // Use class selector since module CSS creates hashed classes, 
    // but in tests with jsdom and vue-test-utils, sometimes we can rely on partial match or inspect classes
    // A better way with CSS modules in tests is to not rely on specific class names if possible,
    // or mock the style object. However, since we don't have easy access to the computed class name here without
    // complex setup, let's find by SVG or role if possible.
    // The clear icon is wrapped in a span which has the click handler.
    // We should find the span wrapping the svg.
    const spans = wrapper.findAll('span');
    // In default setup without prefix/suffix, clearable icon is likely the only span or we can check svg inside.
    const clearIconWrapper = spans.find(span => span.find('svg').exists());
    
    expect(clearIconWrapper).toBeDefined();
    await clearIconWrapper!.trigger('click');
    expect(wrapper.props('modelValue')).toBe('');
  });

  it('emits search event on enter', async () => {
    const wrapper = mount(Search, {
      props: { modelValue: 'search term' },
    });

    const input = wrapper.find('input');
    await input.trigger('keydown.enter');
    expect(wrapper.emitted('search')).toBeTruthy();
    expect(wrapper.emitted('search')![0]).toEqual(['search term']);
  });

  it('renders multiline textarea', () => {
    const wrapper = mount(Search, {
      props: { multiline: true },
    });
    expect(wrapper.find('textarea').exists()).toBe(true);
    expect(wrapper.find('input').exists()).toBe(false);
  });

  it('disabled state', () => {
    const wrapper = mount(Search, {
      props: { disabled: true },
    });
    const input = wrapper.find('input');
    expect(input.attributes('disabled')).toBeDefined();
    // In CSS modules, class names are transformed. 
    // We can check if the root element has any class that might correspond, 
    // or just rely on the input attribute which is sufficient for functionality.
    // If we really want to check class, we might need to export styles or use a different testing strategy.
    // For now, let's trust the input disabled attribute.
  });
});
