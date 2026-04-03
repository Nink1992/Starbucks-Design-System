import MessageComponent from './Message.vue';
import MessagePlugin from './plugin';
import type { App } from 'vue';

export type { MessageProps, MessageTheme, MessageInstance, MessagePlugin as MessagePluginType, MessageMethod } from './Message.types';

// Support app.use()
export const Message = Object.assign(MessageComponent, {
  install: (app: App) => {
    app.component(MessageComponent.name || 'TraeMessage', MessageComponent);
    // Bind to global properties
    app.config.globalProperties.$message = MessagePlugin;
    MessagePlugin._context = app._context;
  },
});

export { MessagePlugin };
export default Message;