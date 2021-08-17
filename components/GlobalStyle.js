import { createGlobalStyle } from 'styled-components';
import { media } from './theme';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Monument Extended';
    src: url('/fonts/MonumentExtended-Regular.otf');
    src: url('/fonts/MonumentExtended-Regular.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Monument Extended';
    src: url('/fonts/MonumentExtended-Ultrabold.otf');
    src: url('/fonts/MonumentExtended-Ultrabold.otf') format('opentype');
    font-weight: 900;
    font-style: normal;
    font-display: fallback;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    scroll-behavior: smooth;

  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: ${({ theme }) => theme.font.family};
    background: ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.black};
    font-size: 1.6rem;
  }

  h1 {
    font-family: ${({ theme }) => theme.font.heading};
    margin: 2.5rem 0;
  }
  h2 {
    color: ${({ theme }) => theme.orange};
    font-size: 3rem;
    text-transform: uppercase;
    ${media.break`
      font-size: 6rem;
    `}
    font-family: ${({ theme }) => theme.font.heading};
  }

  h3 {
    font-family: ${({ theme }) => theme.font.heading};
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyle;
