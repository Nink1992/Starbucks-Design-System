/**
 * @vitest-environment jsdom
 */
import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import { Tabs, TabPane } from '../index';
import { nextTick } from 'vue';

const TabsWrapper = {
  components: { Tabs, TabPane },
  props: ['modelValue', 'type', 'addable', 'closable'],
  template: `
    <Tabs v-bind="$props" @update:modelValue="$emit('update:modelValue', $event)" @tab-add="$emit('tab-add')" @tab-remove="$emit('tab-remove', $event)">
      <TabPane label="Tab 1" name="1">Content 1</TabPane>
      <TabPane label="Tab 2" name="2">Content 2</TabPane>
      <TabPane label="Tab 3" name="3" disabled>Content 3</TabPane>
    </Tabs>
  `,
};

describe('Tabs', () => {
  it('renders correctly', () => {
    const wrapper = mount(TabsWrapper, {
      props: { modelValue: '1' },
    });
    
    expect(wrapper.findAll('[role="tab"]')).toHaveLength(3);
    expect(wrapper.find('[role="tab"][aria-selected="true"]').text()).toContain('Tab 1');
    expect(wrapper.text()).toContain('Content 1');
  });

  it('changes active tab on click', async () => {
    const wrapper = mount(TabsWrapper, {
      props: { 
        modelValue: '1',
        'onUpdate:modelValue': (e: string) => wrapper.setProps({ modelValue: e }),
      },
    });

    const tabs = wrapper.findAll('[role="tab"]');
    await tabs[1].trigger('click');
    
    expect(wrapper.props('modelValue')).toBe('2');
    expect(wrapper.text()).toContain('Content 2');
  });

  it('does not change tab when disabled', async () => {
    const wrapper = mount(TabsWrapper, {
      props: { 
        modelValue: '1',
        'onUpdate:modelValue': (e: string) => wrapper.setProps({ modelValue: e }),
      },
    });

    const tabs = wrapper.findAll('[role="tab"]');
    await tabs[2].trigger('click'); // Tab 3 is disabled
    
    expect(wrapper.props('modelValue')).toBe('1');
  });

  it('renders card type', () => {
    const wrapper = mount(TabsWrapper, {
      props: { modelValue: '1', type: 'card' },
    });
    
    expect(wrapper.html()).toContain('type-card');
  });

  it('emits add event', async () => {
    const wrapper = mount(TabsWrapper, {
      props: { modelValue: '1', addable: true },
    });
    
    const addBtn = wrapper.find('[aria-label="Add tab"]');
    expect(addBtn.exists()).toBe(true);
    
    await addBtn.trigger('click');
    expect(wrapper.emitted('tab-add')).toBeTruthy();
  });

  it('emits remove event', async () => {
    const wrapper = mount(TabsWrapper, {
      props: { modelValue: '1', closable: true },
    });
    
    // We can use a partial class selector since we know it contains "tab-close"
    const closeIcon = wrapper.find('[class*="tab-close"]');
    expect(closeIcon.exists()).toBe(true);
    
    await closeIcon.trigger('click');
    expect(wrapper.emitted('tab-remove')).toBeTruthy();
    expect(wrapper.emitted('tab-remove')![0]).toEqual(['1']);
  });
});
