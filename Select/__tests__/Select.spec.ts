/**
 * @vitest-environment jsdom
 */
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Select from '../Select.vue';

describe('Select.vue', () => {
  const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3, disabled: true }
  ];

  it('renders placeholder correctly', () => {
    const wrapper = mount(Select, {
      props: {
        placeholder: 'Select an option'
      }
    });
    expect(wrapper.text()).toContain('Select an option');
  });

  it('renders selected value correctly', () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: 2,
        options
      }
    });
    expect(wrapper.text()).toContain('Option 2');
  });

  it('toggles dropdown when clicked', async () => {
    const wrapper = mount(Select, {
      props: {
        options
      }
    });
    
    // Dropdown is initially closed
    expect(wrapper.find('ul').exists()).toBe(false);
    
    // Click to open
    const trigger = wrapper.find('div[tabindex="0"]');
    await trigger.trigger('click');
    expect(wrapper.find('ul').exists()).toBe(true);
    expect(wrapper.findAll('li').length).toBe(3);
    
    // Click to close
    await trigger.trigger('click');
    expect(wrapper.find('ul').exists()).toBe(false);
  });

  it('emits update:modelValue when an option is selected', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options
      }
    });
    
    const trigger = wrapper.find('div[tabindex="0"]');
    await trigger.trigger('click');
    await wrapper.findAll('li')[0].trigger('click');
    
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([1]);
    expect(wrapper.emitted('change')).toBeTruthy();
    expect(wrapper.emitted('change')?.[0]).toEqual([1]);
  });

  it('does not select disabled options', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options
      }
    });
    
    const trigger = wrapper.find('div[tabindex="0"]');
    await trigger.trigger('click');
    await wrapper.findAll('li')[2].trigger('click'); // Disabled option
    
    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  });

  it('handles multiple selection correctly', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: [1],
        multiple: true,
        options
      }
    });
    
    const trigger = wrapper.find('div[tabindex="0"]');
    await trigger.trigger('click');
    await wrapper.findAll('li')[1].trigger('click'); // Click Option 2
    
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([[1, 2]]);
  });

  it('handles clearable correctly', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: 1,
        options,
        clearable: true
      }
    });
    
    // Find the clear icon by finding an SVG inside the suffix group
    // The clear icon is the first SVG when clearable is true and value exists
    const trigger = wrapper.find('div[tabindex="0"]');
    const svgs = trigger.findAll('svg');
    // In our template, the clear icon is rendered before the arrow icon
    await svgs[0].trigger('click');
    
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['']);
    expect(wrapper.emitted('clear')).toBeTruthy();
  });
});
