<template>
  <div
    :class="[
      $style['tabs'],
      $style[`type-${type}`],
      $style[`size-${size}`],
      $style[`placement-${placement}`]
    ]"
  >
    <div :class="$style['tabs-header']">
      <!-- Scroll Button Left -->
      <div
        v-if="scrollable.left"
        :class="[$style['scroll-btn'], $style['scroll-btn-left']]"
        @click="scroll('left')"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </div>

      <!-- Tabs Nav Scroll Container -->
      <div :class="$style['tabs-nav-wrap']" ref="navWrap">
        <div :class="$style['tabs-nav-scroll']" ref="navScroll">
          <div :class="$style['tabs-nav']" role="tablist">
            <!-- Tab Items -->
            <div
              v-for="(pane, index) in panes"
              :key="pane.name"
              :class="[
                $style['tabs-tab'],
                {
                  [$style['is-active']]: pane.name === modelValue,
                  [$style['is-disabled']]: pane.disabled,
                  [$style['is-closable']]: (editable || closable || pane.closable) && !pane.disabled,
                }
              ]"
              role="tab"
              :aria-selected="pane.name === modelValue"
              :tabindex="pane.disabled ? -1 : 0"
              @click="(e) => handleTabClick(pane, e)"
            >
              <div :class="$style['tab-content']">
                <!-- Icon -->
                <span v-if="$slots.icon || pane.icon || (pane.slots && pane.slots.icon)" :class="$style['tab-icon']">
                  <slot name="icon" :pane="pane">
                    <component :is="pane.slots.icon" v-if="pane.slots && pane.slots.icon" />
                    <!-- Fallback to simple icon prop if no slot -->
                    <i v-else-if="pane.icon" :class="pane.icon"></i>
                  </slot>
                </span>

                <!-- Label -->
                <span :class="$style['tab-label']">
                  <slot name="label" :pane="pane">{{ pane.label }}</slot>
                </span>

                <!-- Close Icon -->
                <span
                  v-if="(editable || closable || pane.closable) && !pane.disabled"
                  :class="$style['tab-close']"
                  @click.stop="(e) => handleTabRemove(pane.name, e)"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.70013 3.75781L7.99996 7.05764L11.2998 3.75781L12.2426 4.70062L8.94277 8.00045L12.2426 11.3003L11.2998 12.2431L7.99996 8.94326L4.70013 12.2431L3.75732 11.3003L7.05716 8.00045L3.75732 4.70062L4.70013 3.75781Z" fill="currentColor" fill-opacity="0.6"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Button Right -->
      <div
        v-if="scrollable.right"
        :class="[$style['scroll-btn'], $style['scroll-btn-right']]"
        @click="scroll('right')"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </div>
      
      <!-- Add Button (Outside Scroll Area) -->
      <div
        v-if="addable || editable"
        :class="$style['tabs-add-btn']"
        @click="handleTabAdd"
        role="button"
        aria-label="Add tab"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 3.33334V12.6667M3.33333 8.00001H12.6667" stroke="currentColor" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>

    <!-- Tab Content -->
    <div :class="$style['tabs-content']">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch, useSlots, onMounted, onUpdated, onBeforeUnmount, nextTick, type ComponentInternalInstance, getCurrentInstance, type VNode, computed, h } from 'vue';
import type { TabsProps, TabsEmits, TabPaneProps, TabsContext } from './Tabs.types';

defineOptions({
  name: 'TraeTabs',
});

const props = withDefaults(defineProps<TabsProps>(), {
  modelValue: '',
  type: 'normal',
  size: 'medium',
  placement: 'top',
  closable: false,
  addable: false,
  editable: false,
});

const emit = defineEmits<TabsEmits>();
const slots = useSlots();
const navWrap = ref<HTMLElement>();
const navScroll = ref<HTMLElement>();
const scrollable = ref({
  left: false,
  right: false,
});

// Scroll logic
const updateScrollState = () => {
  const wrap = navWrap.value;
  if (!wrap) return;
  
  const { scrollWidth, clientWidth, scrollLeft } = wrap;
  const isScrollable = scrollWidth > clientWidth;
  
  // Use a small tolerance for float calculation errors
  const newScrollable = {
    left: isScrollable && scrollLeft > 0,
    right: isScrollable && scrollLeft < scrollWidth - clientWidth - 1,
  };

  if (scrollable.value.left !== newScrollable.left || scrollable.value.right !== newScrollable.right) {
    scrollable.value = newScrollable;
  }
};

// Get panes from slots
const getPanes = () => {
  const defaultSlot = slots.default?.();
  if (!defaultSlot) return [];
  
  const paneNodes: VNode[] = [];
  
  // Handle Fragment or Array of VNodes
  const traverse = (nodes: VNode[]) => {
    nodes.forEach((node) => {
      const type = node.type as any;
      
      // Handle Component VNodes (both standard and functional)
      if (type && (type.name === 'TraeTabPane' || type.__name === 'TraeTabPane' || (typeof type === 'object' && type.name === 'TraeTabPane'))) {
        paneNodes.push(node);
      } else if (typeof node.type === 'symbol' && Array.isArray(node.children)) { 
        // Fragment (e.g. v-for)
        traverse(node.children as VNode[]);
      }
    });
  };

  traverse(defaultSlot);

  return paneNodes.map((node) => {
    const props = node.props || {};
    return {
      label: props.label || '',
      name: props.name,
      disabled: props.disabled === '' || props.disabled === true,
      closable: props.closable === '' || props.closable === true,
      icon: props.icon,
      slots: node.children, // Store children to access slots
    };
  });
};

const panes = ref<TabPaneProps[]>(getPanes());

const updatePanes = () => {
  const newPanes = getPanes();
  
  // Compare without slots to avoid circular structure issues with JSON.stringify
  const comparePanes = (panes: TabPaneProps[]) => {
    return panes.map(({ slots, ...rest }) => rest);
  };
  
  const currentStr = JSON.stringify(comparePanes(panes.value));
  const newStr = JSON.stringify(comparePanes(newPanes));
  
  if (currentStr !== newStr) {
    panes.value = newPanes;
  }
};

const scroll = (direction: 'left' | 'right') => {
  const wrap = navWrap.value;
  if (!wrap) return;
  
  const scrollAmount = wrap.clientWidth * 0.8; // Scroll 80% of view
  const targetScrollLeft = direction === 'left' 
    ? wrap.scrollLeft - scrollAmount 
    : wrap.scrollLeft + scrollAmount;
    
  wrap.scrollTo({
    left: targetScrollLeft,
    behavior: 'smooth',
  });
};

// ResizeObserver to detect size changes
let resizeObserver: ResizeObserver | null = null;

onMounted(() => {
  updatePanes();
  
  if (navWrap.value) {
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(updateScrollState);
      resizeObserver.observe(navWrap.value);
    }
    navWrap.value.addEventListener('scroll', updateScrollState);
    // Check initial state
    nextTick(updateScrollState);
  }
});

onBeforeUnmount(() => {
  if (resizeObserver && navWrap.value) {
    resizeObserver.disconnect();
    navWrap.value.removeEventListener('scroll', updateScrollState);
  }
});

onUpdated(() => {
  updatePanes();
  nextTick(updateScrollState);
});

const handleTabClick = (pane: TabPaneProps, event: Event) => {
  if (pane.disabled) return;
  emit('update:modelValue', pane.name);
  emit('change', pane.name);
  emit('tab-click', pane, event);
};

const handleTabRemove = (name: string | number, event: Event) => {
  emit('tab-remove', name);
  emit('edit', 'remove', name);
};

const handleTabAdd = () => {
  emit('tab-add');
  emit('edit', 'add');
};

provide<TabsContext>('TabsContext', {
  activeKey: computed(() => props.modelValue),
  type: computed(() => props.type),
  size: computed(() => props.size),
  placement: computed(() => props.placement),
  handleTabClick,
  handleTabRemove,
});

// Expose internal state if needed
defineExpose({
  panes,
});
</script>

<style module>
@import './Tabs.module.scss';
</style>
