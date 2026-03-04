// .storybook/preview.js
import '../src/styles/variables.css';
import '../src/styles/typography.scss';
import theme from './theme.js';

const preview = {
  parameters: {
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
