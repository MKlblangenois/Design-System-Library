import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#EF802E',
  colorSecondary: '#1c1b18',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#E9E9E7',
  appBorderRadius: 3,

  // Typography
  fontBase: '"Source Sans Pro", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#1C1B18',
  barSelectedColor: 'black',
  barBg: '#E9E9E7',

  // Form colors
  inputBg: 'white',
  inputBorder: '#E9E9E7',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Mediakod Design System',
  brandUrl: 'https://mediakod.com',
  brandImage: 'https://42fvc01o0ieurveb3pe0ym64-wpengine.netdna-ssl.com/wp-content/themes/materiakod/assets/img/logos/mklogo-title.png',
});