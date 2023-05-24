import { createContext } from "react";

export const GrayContext = createContext();
export const themes = {
  gray: {
    background: { backgroundColor: "#f5f5f5" },
    containerBorder: { border: "#717171" },
    buttonBoxInputBorders: { border: "#404040" },
    bgRandom: { backgroundColor: "#c4c4c4" },
    bgAdd: { backgroundColor: "#d0d0d0" },
    bgWindow: { backgroundColor: "#e1e1e1" },
    innerBorder: { innerHeaderBorder: "#c6c6c6" },
    bgSandbox: { backgroundColor: "#f1f1f1" },
    bgPaintbox: { backgroundColor: "#ececec" },
    bgBasic: { backgroundColor: "#d9d9d9" },
    bgReallySafe: { backgroundColor: "#e2e2e2" },
    bgSafe: { backgroundColor: "#f0f0f0" },
    bgHTML: { backgroundColor: "#ebebeb" },
    headerFont: { color: "#464646" },
    windowFont: { color: "#0d0d0d" },
    inputDefaultFont: { color: "#939393" },
    inputFont: { color: "#717171" },
    pxFont: { color: "#898989" },
    hexNumFont: { color: "#0d0d0d" },
    buttonFont: { color: "#404040" },
    // ^ and dark ghost plus emoji and borders, and #/height in window sizer box (not px)
  },
};
