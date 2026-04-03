import { createVNode, render, type App } from 'vue';
import Drawer from './Drawer.vue';
import type { DrawerProps, DrawerInstance, DrawerPluginType, DrawerCloseTrigger } from './Drawer.types';

let appInstance: App | null = null;

const createDrawerInstance = (options: DrawerProps): DrawerInstance => {
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

  const update = (newOptions: DrawerProps) => {
    if (isDestroyed) return;
    const mergedOptions = {
      ...options,
      ...newOptions,
      // Pass the callbacks so Drawer.vue can trigger them
      onClose: (context: { e: Event; trigger: DrawerCloseTrigger }) => {
        if (options.onClose) options.onClose(context);
        hide();
      },
      onCancel: (context: { e: Event }) => {
        if (options.onCancel) options.onCancel(context);
        else hide();
      },
      onConfirm: (context: { e: Event }) => {
        if (options.onConfirm) options.onConfirm(context);
        else hide();
      },
      'onUpdate:visible': (val: boolean) => {
        if (!val) hide();
      },
      onClosed: handleClosed,
    };
    const vnode = createVNode(Drawer, mergedOptions);
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
  const initialOptions: DrawerProps = {
    ...options,
    visible: false, // Start hidden to trigger animation
  };

  const vnode = createVNode(Drawer, {
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

const plugin: any = (options: DrawerProps) => createDrawerInstance(options);

plugin.install = (app: App) => {
  appInstance = app;
  app.config.globalProperties.$drawer = plugin;
};

export const DrawerPlugin = plugin as DrawerPluginType;
export default DrawerPlugin;
