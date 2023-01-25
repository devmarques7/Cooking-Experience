import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --color-background:rgb(42, 72, 88);
    --color-light: #fff;
    --color-dark: #000;
    --color-remove: #B02E2E;
  }


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body, input, button {
    font-family: 'Karla', sans-serif;
    background: red;
    
    
  }

  button {
    cursor: pointer;
  }

`;
