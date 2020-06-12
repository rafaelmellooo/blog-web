import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Ubuntu', sans-serif;
  }

  h1, h2 {
    font-weight: 700;
  }

  h3, h4, h5, h6 {
    font-weight: 500;
  }

  p, input, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  label {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
  }
`;
