import { css } from "styled-components";

export type BreakpointName = "xs" | "sm" | "md" | "lg" | "xl";

export const breakpoints: { [key: string]: number } = {
  // Mobile XS
  xs: 380,

  // Mobile M/L
  sm: 768,

  // Tablet
  md: 1024,

  // Desktop
  lg: 1368,

  // 4K
  xl: 2560,
};

// Generates a media query that applies the provided style to screen sizes LARGER than the provided size.
export function mediaQueryUp(breakpointName: BreakpointName, content: string) {
  const breakpoint = `${breakpoints[breakpointName]}px`;

  return css`
    @media only screen and (min-width: ${breakpoint}) {
      ${content}
    }
  `;
}

// Generates a media query that applies the provided style to screen sizes LOWER than the provided size.
export function mediaQueryBelow(
  breakpointName: BreakpointName,
  content: string
) {
  const breakpoint = `${breakpoints[breakpointName]}px`;

  return css`
    @media only screen and (max-width: ${breakpoint}) {
      ${content}
    }
  `;
}

// Generates a media query that applies the provided style to screen sizes BETWEEN the provided size.
export function mediaQueryBetween(
  { from, to }: { [key: string]: BreakpointName },
  content: string
) {
  const toBreakpoint = `${breakpoints[to]}px`;
  const fromBreakpoint = `${breakpoints[from]}px`;

  return css`
    @media only screen and (min-width: ${fromBreakpoint}) and (max-width: ${toBreakpoint}) {
      ${content}
    }
  `;
}

export function xsOnly(content: string) {
  return mediaQueryBelow("xs", content);
}

export function smOnly(content: string) {
  return mediaQueryBetween({ from: "xs", to: "sm" }, content);
}
export function mdOnly(content: string) {
  return mediaQueryBetween({ from: "sm", to: "md" }, content);
}

export function lgOnly(content: string) {
  return mediaQueryBetween({ from: "lg", to: "xl" }, content);
}

export function xlOnly(content: string) {
  return mediaQueryUp("xl", content);
}
