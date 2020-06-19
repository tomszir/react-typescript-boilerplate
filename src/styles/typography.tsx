import { css } from "styled-components";

import { breakpoints } from "./breakpoints";

// Typography variables, these can be tweaked.
const baseHeaderSize = 12;
const mobileHeaderModifier = 1.2;
const desktopHeaderModifier = 1.4;

// Credit goes to:
// https://css-tricks.com/snippets/css/fluid-typography/
// Honestly, I don't really know how this works.
export function fluidType(
  minFont: number,
  maxFont: number,
  minVw: number = breakpoints["xs"],
  maxVw: number = breakpoints["xl"]
) {
  return css`
    font-size: ${minFont}px;

    @media screen and (min-width: ${minVw}px) {
      font-size: calc(
        ${minFont}px + (${maxFont} - ${minFont}) *
          ((100vw - ${minVw}px) / (${maxVw} + ${minVw}))
      );
    }

    @media screen and (min-width: ${maxVw}px) {
      font-size: ${maxFont}px;
    }
  `;
}

// Some default global typography styles.
export const globals = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.4;
    color: #151617;
  }

  p {
    color: #373d3f;

    line-height: 1.8;

    font-weight: 400;
    font-family: "Merriweather", "Arial", sans-serif;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  h1 {
    ${fluidType(
      baseHeaderSize * Math.pow(mobileHeaderModifier, 6),
      baseHeaderSize * Math.pow(desktopHeaderModifier, 6)
    )}
  }

  h2 {
    ${fluidType(
      baseHeaderSize * Math.pow(mobileHeaderModifier, 5),
      baseHeaderSize * Math.pow(desktopHeaderModifier, 5)
    )}
  }

  h3 {
    ${fluidType(
      baseHeaderSize * Math.pow(mobileHeaderModifier, 4),
      baseHeaderSize * Math.pow(desktopHeaderModifier, 4)
    )}
  }

  h4 {
    ${fluidType(
      baseHeaderSize * Math.pow(mobileHeaderModifier, 3),
      baseHeaderSize * Math.pow(desktopHeaderModifier, 3)
    )}
  }

  h5 {
    ${fluidType(
      baseHeaderSize * Math.pow(mobileHeaderModifier, 2),
      baseHeaderSize * Math.pow(desktopHeaderModifier, 2)
    )}
  }

  h6 {
    ${fluidType(
      baseHeaderSize * Math.pow(mobileHeaderModifier, 1),
      baseHeaderSize * Math.pow(desktopHeaderModifier, 1)
    )}
  }
`;
