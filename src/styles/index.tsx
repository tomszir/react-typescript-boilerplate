import { createGlobalStyle } from "styled-components";

import { fluidType, globals as typography } from "./typography";

const minFontSize = 16;
const maxFontSize = 20;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    ${fluidType(minFontSize, maxFontSize)}

    font-family: 'Fira Sans', 'Arial', sans-serif;  
  }


  ${typography}
`;
