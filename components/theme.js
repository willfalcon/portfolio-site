import { css } from 'styled-components';

const theme = {
  blue: '#cbf1f1',
  red: '#c72030',
  orange: '#ff914d',
  black: '#2c1a4f',
  white: 'white',
  purple: '#682df1',
  purple2: '#682d51',
  deco: {
    orange: '#F3DFAE',
    yellow: '#EEF1D1',
    pink: '#EEDDD1',
  },
  font: {
    family: '"Open Sans", sans-serif',
    heading: '"Monument Extended", sans-serif',
    headingRegular: '"Monument Extended", sans-serif',
    headingItalic: '"Monument Extended", sans-serif',
    code: 'source-code-pro,monospace',
    medium: 500,
    bold: 700,
    extrabold: 900,
  },
  sizes: {
    break: 768,
    large: 1024,
    content: 800,
    header: 140,
  },
  grid: {
    enabled: true,
  },
};

const media = Object.keys(theme.sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${theme.sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});


export default theme;
export { media };
