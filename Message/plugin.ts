import { createApp, createVNode, render, ref } from 'vue';
import type { App, VNode } from 'vue';
import MessageComponent from './Message.vue';
import type { MessageProps, MessageInstance, MessagePlugin, MessageMethod } from './Message.types';

const instances: Map<string, VNode> = new Map();
let seed = 0;

// Container for messages
let container: HTMLElement | null = null;

const createContainer = () => {
  if (!container) {
    container = document.createElement('div');
    // We attach the list class which handles the flex-column stack
    container.className = 'message-list-container';
    container.style.position = 'fixed';
    container.style.top = '24px';
    container.style.left = '0';
    container.style.right = '0';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '6000';
    document.body.appendChild(container);
  }
  return container;
};

export interface MessagePluginType extends MessagePlugin {
  _context?: App['_context'] | null;
}

export const Message: MessagePluginType = Object.assign(
  (options: MessageProps): Promise<MessageInstance> => {
    return new Promise((resolve) => {
      const id = options.id || `message_${seed++}`;
      const containerNode = createContainer();
      
      const wrapper = document.createElement('div');
      // Give the wrapper some margin to stack nicely
      wrapper.style.marginBottom = '12px';
      wrapper.style.pointerEvents = 'auto'; // allow interaction with message itself
      containerNode.appendChild(wrapper);

      // Wrapper around options to handle programmatic close
      const props: any = {
        ...options,
        id,
        onDurationEnd: () => {
          if (options.onDurationEnd) options.onDurationEnd();
          remove(id, wrapper);
        },
        onCloseBtnClick: (ctx: any) => {
          if (options.onCloseBtnClick) options.onCloseBtnClick(ctx);
          remove(id, wrapper);
        },
      };

      const vnode = createVNode(MessageComponent, props);
      vnode.appContext = Message._context || null;
      render(vnode, wrapper);
      instances.set(id, vnode);

      resolve({
        close: () => {
          vnode.component?.exposed?.close();
          remove(id, wrapper);
        },
      });
    });
  },
  {
    _context: null as App['_context'] | null,
    info: (content: string | MessageProps, duration?: number) => {
      const options = typeof content === 'string' ? { content, duration } : content;
      return Message({ ...options, theme: 'info' });
    },
    success: (content: string | MessageProps, duration?: number) => {
      const options = typeof content === 'string' ? { content, duration } : content;
      return Message({ ...options, theme: 'success' });
    },
    warning: (content: string | MessageProps, duration?: number) => {
      const options = typeof content === 'string' ? { content, duration } : content;
      return Message({ ...options, theme: 'warning' });
    },
    error: (content: string | MessageProps, duration?: number) => {
      const options = typeof content === 'string' ? { content, duration } : content;
      return Message({ ...options, theme: 'error' });
    },
    loading: (content: string | MessageProps, duration?: number) => {
      const options = typeof content === 'string' ? { content, duration: duration ?? 0 } : content; // Default 0 for loading
      return Message({ ...options, theme: 'loading' });
    },
    question: (content: string | MessageProps, duration?: number) => {
      const options = typeof content === 'string' ? { content, duration } : content;
      return Message({ ...options, theme: 'question' });
    },
    close: (id: string) => {
      const vnode = instances.get(id);
      if (vnode && vnode.component) {
        vnode.component.exposed?.close();
      }
    },
    closeAll: () => {
      instances.forEach((vnode, id) => {
        if (vnode.component) {
          vnode.component.exposed?.close();
        }
      });
    },
  }
);

function remove(id: string, wrapper: HTMLElement) {
  setTimeout(() => {
    if (instances.has(id)) {
      render(null, wrapper);
      wrapper.parentNode?.removeChild(wrapper);
      instances.delete(id);
    }
  }, 300); // Wait for transition
}

export default Message;