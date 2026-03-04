// .storybook/theme.js
import { create } from '@storybook/theming';

export default create({
  base: 'light',

  // 品牌信息 (模拟 Vibe)
  brandTitle: 'Trae Design System',
  brandUrl: 'https://example.com',
  brandImage: '/Logo-Starbucks.svg',
  brandTarget: '_self',

  // 主题色 (恢复为您的品牌色)
  colorPrimary: '#00754A',
  colorSecondary: '#1A9162',

  // UI 颜色 (参考 Vibe 的界面)
  appBg: '#f5f6f8', // Vibe 的浅灰色背景
  appContentBg: '#ffffff',
  appBorderColor: '#e6e9ef',
  appBorderRadius: 6,

  // 字体
  fontBase: '"Figtree", sans-serif', // Vibe 使用的字体
  fontCode: 'monospace',

  // 字体颜色
  textColor: '#323338', // Vibe 的主文本颜色
  textInverseColor: '#ffffff',

  // 工具栏颜色
  barTextColor: '#6e7382',
  barSelectedColor: '#0073ea',
  barBg: '#ffffff',
});
