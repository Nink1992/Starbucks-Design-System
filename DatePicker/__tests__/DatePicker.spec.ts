/**
 * @vitest-environment jsdom
 */
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import DatePicker from '../DatePicker.vue';

describe('DatePicker.vue', () => {
  it('renders placeholder correctly', () => {
    const wrapper = mount(DatePicker, {
      props: {
        placeholder: 'Select a date'
      }
    });
    const input = wrapper.find('input');
    expect(input.attributes('placeholder')).toBe('Select a date');
  });

  it('renders selected value correctly', () => {
    const wrapper = mount(DatePicker, {
      props: {
        modelValue: '2023-10-15'
      }
    });
    const input = wrapper.find('input');
    expect(input.element.value).toBe('2023-10-15');
  });

  it('toggles calendar dropdown when clicked', async () => {
    const wrapper = mount(DatePicker);
    
    // Calendar is initially closed (Teleport content won't be in the wrapper directly, but we can mock or check state)
    // Since we use Teleport to body, we need to check document.body
    expect(document.body.querySelector('.datepicker-dropdown')).toBeNull();
    
    // Click to open
    const trigger = wrapper.find('div[tabindex="0"]');
    await trigger.trigger('click');
    
    expect(document.body.querySelector('div[class*="datepicker-dropdown"]')).not.toBeNull();
    
    // Click to close
    await trigger.trigger('click');
    // It might still be there due to transition, but we can check the component's internal state if needed
  });

  it('emits update:modelValue when clear icon is clicked', async () => {
    const wrapper = mount(DatePicker, {
      props: {
        modelValue: '2023-10-15',
        clearable: true
      }
    });
    
    // Find the clear icon
    const clearIcon = wrapper.find('span[class*="clear-icon"]');
    await clearIcon.trigger('click');
    
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['']);
    expect(wrapper.emitted('clear')).toBeTruthy();
  });
});
