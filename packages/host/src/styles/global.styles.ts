import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html,
  body,
  #root {
    min-height: 100vh;
    font-family: 'Montserrat', sans-serif;
    scroll-behavior: smooth;
    max-width: 100vw;
    font-size: 16px;
  }

  body {
    overflow-y: auto;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    overflow-y: auto;
  }
  ol,
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: none;
  }
`;

export default GlobalStyle;
