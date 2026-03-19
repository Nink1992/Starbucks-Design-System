// .storybook/preview.ts
import type { Preview } from '@storybook/vue3';
import '../src/styles/variables.css';
import '../src/styles/typography.scss';
import theme from './theme';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          '通用', 
          ['颜色 Colors', '阴影 Shadows', '栅格 Grid', '按钮 Button'],
          '导航', 
          '数据录入', 
          '*'
        ],
      },
    },
    docs: {
      theme: theme,
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f5f6f8' },
        { name: 'white', value: '#ffffff' },
        { name: 'dark', value: '#323338' },
      ],
    },
  },
};

export default preview;
