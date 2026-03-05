import { create } from '@storybook/theming';

export default create({
  base: 'light',

  // 品牌信息
  brandTitle: 'Trae Design System',
  brandUrl: 'https://example.com',
  brandImage: './logo2.svg',
  brandTarget: '_self',

  // 主题色 (Primary)
  colorPrimary: '#00754A', // primary-color
  colorSecondary: '#00754A', // primary-color-normal (也是 Focus 时的外圈颜色)

  // UI 颜色 (纯白风格)
  appBg: '#FFFFFF', // white
  appContentBg: '#FFFFFF', // white
  appBorderColor: '#E7E7E7', // gray-3
  appBorderRadius: 4,

  // 字体
  fontBase: '"Figtree", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  fontCode: 'monospace',

  // 字体颜色
  textColor: 'rgba(0, 0, 0, 0.90)', // text-primary
  textInverseColor: '#FFFFFF', // white

  // 工具栏颜色
  barTextColor: '#777777', // gray-8
  barSelectedColor: '#00754A', // primary-color
  barBg: '#FFFFFF', // white

  // 输入框颜色 (搜索框相关配置 - 仅修改颜色，保留默认圆角和尺寸)
  inputBg: '#FFFFFF',
  inputBorder: '#DCDCDC', // gray-4 (默认边框改为灰色，而非绿色)
  inputTextColor: '#000000',
  inputBorderRadius: 4, // 恢复为默认圆角 (与 appBorderRadius 一致)，避免布局错位
});
