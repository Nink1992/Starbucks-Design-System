import { createVNode, render, type App, type ComponentInternalInstance } from 'vue';
import Dialog from './Dialog.vue';
import type { DialogProps, DialogInstance, DialogPluginType, DialogCloseTrigger } from './Dialog.types';

let appInstance: App | null = null;

const createDialogInstance = (options: DialogProps): DialogInstance => {
  const container = document.createElement('div');
  document.body.appendChild(container);

  let isDestroyed = false;

  const destroy = () => {
    if (isDestroyed) return;
    isDestroyed = true;
    render(null, container);
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
  };

  const handleClosed = () => {
    if (options.destroyOnClose !== false) {
      destroy();
    }
  };

  const update = (newOptions: DialogProps) => {
    if (isDestroyed) return;
    const mergedOptions = {
      ...options,
      ...newOptions,
      // Pass the callbacks so Dialog.vue can trigger them
      onClose: (context: { e: Event; trigger: DialogCloseTrigger }) => {
        if (options.onClose) options.onClose(context);
        hide();
      },
      onCancel: (context: { e: Event }) => {
        if (options.onCancel) options.onCancel(context);
        else hide(); // default action if no onCancel provided
      },
      onConfirm: (context: { e: Event }) => {
        if (options.onConfirm) options.onConfirm(context);
        else hide(); // default action if no onConfirm provided
      },
      'onUpdate:visible': (val: boolean) => {
        if (!val) hide();
      },
      onClosed: handleClosed,
    };
    const vnode = createVNode(Dialog, mergedOptions);
    vnode.appContext = appInstance?._context || null;
    render(vnode, container);
  };

  const hide = () => {
    if (isDestroyed) return;
    update({ visible: false });
  };

  const show = () => {
    if (isDestroyed) return;
    update({ visible: true });
  };

  // Initial render
  const initialOptions: DialogProps = {
    ...options,
    visible: false, // Start hidden to trigger animation
  };

  const vnode = createVNode(Dialog, {
    ...initialOptions,
    'onUpdate:visible': (val: boolean) => {
      if (!val) hide();
    },
    onClosed: handleClosed,
  });

  vnode.appContext = appInstance?._context || null;
  render(vnode, container);

  // Trigger enter animation
  setTimeout(() => {
    show();
  }, 10);

  return {
    show,
    hide,
    destroy,
    update,
  };
};

const plugin: any = (options: DialogProps) => createDialogInstance(options);

plugin.confirm = (options: DialogProps) => {
  return createDialogInstance({
    ...options,
    theme: 'default', // Confirm typically default or info
  });
};

plugin.alert = (options: DialogProps) => {
  return createDialogInstance({
    cancelBtn: null,
    ...options,
    theme: 'info',
  });
};

plugin.install = (app: App) => {
  appInstance = app;
  app.config.globalProperties.$dialog = plugin;
};

export const DialogPlugin = plugin as DialogPluginType;
export default DialogPlugin;
