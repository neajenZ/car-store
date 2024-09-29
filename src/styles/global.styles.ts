/// <reference types="@emotion/react/types/css-prop" />

export const GLOBAL_STYLES = {
  "*": {
    boxSizing: "border-box",
  } as const,
  "html, body, #root": {
    margin: 0,
    padding: 0,
    height: "100%",
  },
  "h1, h2, h3, h4, h5, h6": {
    margin: 0,
    padding: 0,
  },
  "p": {
    margin: 0,
    padding: 0,
  },
  "img": {
    margin: 0,
    padding: 0,
  },
};
