<template>
  <Teleport :to="attach" :disabled="!attach">
    <!-- Overlay Transition -->
    <transition :name="$style['dialog-fade']">
      <div
        v-if="visible"
        :class="[$style['dialog-wrap'], $style[`is-${placement}`]]"
        :style="{ zIndex }"
        @click.self="handleOverlayClick"
      >
        <div v-if="showOverlay" :class="$style['dialog-overlay']" @click.self="handleOverlayClick"></div>
      </div>
    </transition>

    <!-- Dialog Panel Transition -->
    <transition :name="$style[`dialog-scale-${placement}`]" @after-leave="handleAfterLeave" appear>
      <div
        v-show="visible"
        :class="[
          $style['dialog-container'],
          { [$style['is-fullscreen']]: mode === 'full-screen' },
          $style['is-fixed'],
          $style[`is-${placement}`]
        ]"
        :style="{ width: computedWidth, top: computedTop, zIndex: zIndex + 1 }"
        role="dialog"
        aria-modal="true"
        @keydown.esc="handleEsc"
        tabindex="0"
        ref="dialogRef"
      >
        <!-- Header -->
        <div v-if="header !== false" :class="[$style['dialog-header'], { [$style['has-bg']]: theme === 'default' }]">
          <!-- Icon based on theme -->
          <span v-if="theme !== 'default'" :class="[$style['header-icon'], $style[`theme-${theme}`]]">
            <svg v-if="theme === 'info'" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <svg v-if="theme === 'success'" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            <svg v-if="theme === 'warning'" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
            <svg v-if="theme === 'danger'" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
          </span>

          <!-- Title Content -->
          <div :class="$style['title-content']">
            <slot name="header">{{ header }}</slot>
          </div>

          <!-- Close Button -->
          <div v-if="closeBtn !== false" :class="$style['close-btn']" @click="handleCloseBtnClick">
            <slot name="closeBtn">
              <span v-if="typeof closeBtn === 'string'">{{ closeBtn }}</span>
              <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
            </slot>
          </div>
        </div>

        <!-- Body -->
        <div :class="$style['dialog-body']">
          <slot name="body">
            <slot>{{ body }}</slot>
          </slot>
        </div>

        <!-- Footer -->
        <div v-if="footer !== false" :class="[$style['dialog-footer'], { [$style['has-bg']]: theme === 'default' }]">
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
import type { DialogProps, DialogCloseTrigger } from './Dialog.types';
import Button from '../Button/Button.vue';

defineOptions({
  name: 'TraeDialog',
});

const props = withDefaults(defineProps<DialogProps>(), {
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
  mode: 'modal',
  placement: 'top',
  preventScrollThrough: true,
  showOverlay: true,
  theme: 'default',
  zIndex: 2500,
});

const emit = defineEmits<{
  (e: 'update:visible', visible: boolean): void;
  (e: 'cancel', context: { e: Event }): void;
  (e: 'confirm', context: { e: Event }): void;
  (e: 'close', context: { e: Event; trigger: DialogCloseTrigger }): void;
  (e: 'closed'): void;
  (e: 'opened'): void;
}>();

const dialogRef = ref<HTMLElement | null>(null);

// Computed styles
const computedWidth = computed(() => {
  if (!props.width) return undefined;
  return typeof props.width === 'number' ? `${props.width}px` : props.width;
});

const computedTop = computed(() => {
  if (props.placement !== 'top' || !props.top) return undefined;
  return typeof props.top === 'number' ? `${props.top}px` : props.top;
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
const triggerClose = (e: Event, trigger: DialogCloseTrigger) => {
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
      dialogRef.value?.focus();
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
@import './Dialog.module.scss';
</style>
