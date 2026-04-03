<template>
  <Teleport :to="attach" :disabled="!attach">
    <!-- Overlay Transition -->
    <transition :name="$style['drawer-fade']">
      <div
        v-if="visible"
        :class="[$style['drawer-wrap'], $style[`is-${placement}`]]"
        :style="{ zIndex }"
        @click.self="handleOverlayClick"
      >
        <div v-if="showOverlay" :class="$style['drawer-overlay']" @click.self="handleOverlayClick"></div>
      </div>
    </transition>

    <!-- Drawer Panel Transition -->
    <transition :name="$style[`drawer-slide-${placement}`]" @after-leave="handleAfterLeave" appear>
      <div
        v-show="visible"
        :class="[
          $style['drawer-container'],
          $style[`is-${placement}`],
          $style['is-fixed']
        ]"
        :style="computedPanelStyle"
        role="dialog"
        aria-modal="true"
        @keydown.esc="handleEsc"
        tabindex="0"
        ref="drawerRef"
      >
        <!-- Header -->
        <div v-if="header !== false" :class="$style['drawer-header']">
          <div :class="$style['title-content']">
            <slot name="header">{{ header }}</slot>
          </div>

          <div v-if="closeBtn !== false" :class="$style['close-btn']" @click="handleCloseBtnClick">
            <slot name="closeBtn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
            </slot>
          </div>
        </div>

        <!-- Body -->
        <div :class="$style['drawer-body']">
          <slot name="body">
            <slot>{{ body }}</slot>
          </slot>
        </div>

        <!-- Footer -->
        <div v-if="footer !== false" :class="[$style['drawer-footer'], { [$style['is-right-aligned']]: isRightAlignedFooter }]">
          <slot name="footer">
            <Button v-if="cancelBtn !== false && cancelBtn !== null" v-bind="cancelBtnProps" @click="handleCancelClick">
              {{ cancelBtnText }}
            </Button>
            <Button v-if="confirmBtn !== false && confirmBtn !== null" v-bind="confirmBtnProps" @click="handleConfirmClick">
              {{ confirmBtnText }}
            </Button>
          </slot>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue';
import type { DrawerProps, DrawerCloseTrigger } from './Drawer.types';
import Button from '../Button/Button.vue';

defineOptions({
  name: 'TraeDrawer',
});

const props = withDefaults(defineProps<DrawerProps>(), {
  visible: false,
  attach: 'body',
  cancelBtn: '取消',
  closeBtn: true,
  closeOnEscKeydown: true,
  closeOnOverlayClick: true,
  confirmBtn: '确认',
  destroyOnClose: false,
  footer: true,
  header: true,
  placement: 'right',
  size: 'medium', // small, medium, large, or CSS string
  preventScrollThrough: true,
  showOverlay: true,
  zIndex: 2000,
});

const emit = defineEmits<{
  (e: 'update:visible', visible: boolean): void;
  (e: 'cancel', context: { e: Event }): void;
  (e: 'confirm', context: { e: Event }): void;
  (e: 'close', context: { e: Event; trigger: DrawerCloseTrigger }): void;
  (e: 'closed'): void;
  (e: 'opened'): void;
}>();

const drawerRef = ref<HTMLElement | null>(null);

// Size mapping
const getSizeValue = (size: string | number) => {
  if (typeof size === 'number') return `${size}px`;
  const sizeMap: Record<string, string> = {
    small: '300px',
    medium: '500px',
    large: '800px',
  };
  return sizeMap[size] || size;
};

const computedPanelStyle = computed(() => {
  const sizeVal = getSizeValue(props.size);
  const baseStyle: any = { zIndex: props.zIndex + 1 };
  
  if (props.placement === 'left') {
    baseStyle.width = sizeVal;
    baseStyle.left = 0;
    baseStyle.top = 0;
  } else if (props.placement === 'right') {
    baseStyle.width = sizeVal;
    baseStyle.right = 0;
    baseStyle.top = 0;
  } else if (props.placement === 'top') {
    baseStyle.height = sizeVal;
    baseStyle.top = 0;
    baseStyle.left = 0;
  } else if (props.placement === 'bottom') {
    baseStyle.height = sizeVal;
    baseStyle.bottom = 0;
    baseStyle.left = 0;
  }
  
  return baseStyle;
});

// For footer alignment, TDesign typically puts them on left for Drawer or sometimes right based on specific designs. 
// We will default to right-aligned if it's top/bottom placement, and left if it's left/right, based on Figma common patterns, 
// or you can adjust this logic. Let's make it left by default as per the Figma screenshot's footer variant '按钮位置=left 左'.
const isRightAlignedFooter = computed(() => {
  // In the provided figma data, we see '按钮位置=left 左' and 'right 右'. We'll assume right-aligned is needed sometimes.
  // For this generic component, we'll align left by default, and right if placement is left (to keep it near the content edge).
  return props.placement === 'left';
});

// Button props parsing
const cancelBtnText = computed(() => {
  if (typeof props.cancelBtn === 'string') return props.cancelBtn;
  if (typeof props.cancelBtn === 'object' && props.cancelBtn !== null) return (props.cancelBtn as any).default || '取消';
  return '取消';
});

const cancelBtnProps = computed(() => {
  const defaults = { theme: 'default' as const, variant: 'outline' as const, size: 'medium' as const };
  if (typeof props.cancelBtn === 'object' && props.cancelBtn !== null) {
    return { ...defaults, ...props.cancelBtn };
  }
  return defaults;
});

const confirmBtnText = computed(() => {
  if (typeof props.confirmBtn === 'string') return props.confirmBtn;
  if (typeof props.confirmBtn === 'object' && props.confirmBtn !== null) return (props.confirmBtn as any).default || '确认';
  return '确认';
});

const confirmBtnProps = computed(() => {
  const defaults = { theme: 'primary' as const, variant: 'base' as const, size: 'medium' as const };
  if (typeof props.confirmBtn === 'object' && props.confirmBtn !== null) {
    return { ...defaults, ...props.confirmBtn };
  }
  return defaults;
});

// Event Handlers
const triggerClose = (e: Event, trigger: DrawerCloseTrigger) => {
  emit('update:visible', false);
  emit('close', { e, trigger });
};

const handleCloseBtnClick = (e: Event) => {
  triggerClose(e, 'close-btn');
};

const handleCancelClick = (e: Event) => {
  emit('cancel', { e });
  triggerClose(e, 'cancel');
};

const handleConfirmClick = (e: Event) => {
  emit('confirm', { e });
  triggerClose(e, 'confirm');
};

const handleOverlayClick = (e: Event) => {
  if (props.closeOnOverlayClick) {
    triggerClose(e, 'overlay');
  }
};

const handleEsc = (e: KeyboardEvent) => {
  if (props.closeOnEscKeydown) {
    triggerClose(e, 'esc');
  }
};

const handleAfterLeave = () => {
  emit('closed');
};

// Scroll lock
watch(() => props.visible, (val) => {
  if (val) {
    nextTick(() => {
      drawerRef.value?.focus();
      emit('opened');
    });
    if (props.preventScrollThrough && typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  } else {
    if (props.preventScrollThrough && typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
}, { immediate: true });
</script>

<style module>
@import './Drawer.module.scss';
</style>
