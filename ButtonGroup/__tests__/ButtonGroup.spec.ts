/**
 * @vitest-environment jsdom
 */
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { ButtonGroup, ButtonGroupItem } from '../index';

describe('ButtonGroup', () => {
  const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
  ];

  it('renders correctly with options', () => {
    const wrapper = mount(ButtonGroup, {
      props: { options },
    });
    const items = wrapper.findAllComponents(ButtonGroupItem);
    expect(items).toHaveLength(2);
    expect(wrapper.text()).toContain('Option 1');
    expect(wrapper.text()).toContain('Option 2');
  });

  it('renders correctly with slots', () => {
    const wrapper = mount(ButtonGroup, {
      slots: {
        default: `
          <ButtonGroupItem :value="1">Slot 1</ButtonGroupItem>
          <ButtonGroupItem :value="2">Slot 2</ButtonGroupItem>
        `
      },
      global: {
        components: { ButtonGroupItem }
      }
    });
    const items = wrapper.findAllComponents(ButtonGroupItem);
    expect(items).toHaveLength(2);
    expect(wrapper.text()).toContain('Slot 1');
  });

  it('updates modelValue when item is clicked', async () => {
    const wrapper = mount(ButtonGroup, {
      props: {
        options,
        modelValue: 1
      },
    });

    const items = wrapper.findAllComponents(ButtonGroupItem);
    await items[1].trigger('click');
    
    // Check emitted event
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([2]);
  });

  it('does not update when disabled', async () => {
    const wrapper = mount(ButtonGroup, {
      props: {
        options,
        modelValue: 1,
        disabled: true
      },
    });

    const items = wrapper.findAllComponents(ButtonGroupItem);
    await items[1].trigger('click');
    
    // Should not emit event
    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  });
});
