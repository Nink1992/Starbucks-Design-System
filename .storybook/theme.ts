import { create } from '@storybook/theming';

export default create({
  base: 'light',

  // 品牌信息
  // Updated: 2026-03-05 Force Refresh
  brandTitle: 'Trae Design System',
  brandUrl: 'https://example.com',
  brandImage: '/logo2.svg',
  brandTarget: '_self',

  // 主题色 (Primary)
  colorPrimary: '#00754A', // primary-color
  colorSecondary: '#00754A', // primary-color-normal

  // UI 颜色 (纯白风格)
  appBg: '#FFFFFF', // white
  appContentBg: '#FFFFFF', // white
  appBorderColor: '#E7E7E7', // gray-3
  appBorderRadius: 4,

  // 字体
  fontBase: '"Figtree", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  fontCode: 'monospace',

  // 字体颜色
  textColor: '#333333',
  textInverseColor: '#FFFFFF',

  // 工具栏颜色
  barTextColor: '#777777', // gray-8
  barSelectedColor: '#00754A', // primary-color
  barBg: '#FFFFFF',

  // 输入框颜色
  inputBg: '#FFFFFF',
  inputBorder: '#DCDCDC', // gray-4
  inputTextColor: '#333333',
  inputBorderRadius: 4,
});
