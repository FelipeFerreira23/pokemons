import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  :root {
    --primary: #785afd;
    --secondary: #2a75bb;
    --white: #FFFFFF;
    --gray: #f6f6f6;
    --darkgray: #7a7a7a;
    --dark: #333;
  }
  body {
    background-color: var(--secondary);
    color: var(--dark);
    -webkit-font-smoothing: antialiased
  }
  body, input, button, textarea {
    font: 1rem 'Montserrat', sans-serif;
  }
  button {
    cursor: pointer;
  }
`;