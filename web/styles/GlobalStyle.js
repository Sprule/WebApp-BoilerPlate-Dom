import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @media only screen and (min-width: ${(props) => props.theme.mobileWidth}) {
    .hide-desktop {
      display: none !important;
    }
  }

  @media only screen and (max-width: ${(props) => props.theme.mobileWidth}) {
    .app-padding {
      max-width: 100%;
    }
    .hide-mobile {
      display: none !important;
    }
  }
`;

export default GlobalStyle;
