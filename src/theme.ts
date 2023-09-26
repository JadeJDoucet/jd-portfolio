import { MantineColorsTuple, createTheme } from '@mantine/core';

const primary: MantineColorsTuple = [
  '#f0eefc',
  '#dbd8f2',
  '#b4ade7',
  '#8c7fdd',
  '#6b59d4',
  '#5640d0',
  '#4b34cf',
  '#3d28b7',
  '#3423a4',
  '#2b1d91',
];

export default createTheme({
  colors: {
    primary,
  },

  defaultGradient: {
    from: primary[4],
    to: primary[8],
    deg: 45,
  },

  shadows: {
    md: 'rgba(255, 255, 255, 0.5) 0px 0px 10px',
  },

  primaryColor: 'primary',

  headings: {
    fontWeight: '700',
  },
});
