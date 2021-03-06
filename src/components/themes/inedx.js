// https://github.com/diegohaz/arc/wiki/Styling
import { reversePalette } from "styled-theme/composer";

const theme = {};

theme.palette = {
    primary: ["#1976d2", "#027aff", "#2196f3", "#71bcf7", "#c2e2fb"],
    secondary: ["#c2185b", "#e91e63", "#f06292", "#f8bbd0"],
    danger: ["#d32f2f", "#f44336", "#f8877f", "#ffcdd2"],
    alert: ["#ffa000", "#ffc107", "#ffd761", "#ffecb3"],
    success: ["#388e3c", "#4caf50", "#7cc47f", "#c8e6c9"],
    white: ["#fff", "#fff", "#eee"],
    grayscale: [
        "#212121",
        "#414141",
        "#616161",
        "#9e9e9e",
        "#bdbdbd",
        "#d5d5d5",
        "#e0e0e0",
        "#eeeeee",
        "#ffffff",
    ],
};

theme.reversePalette = reversePalette(theme.palette);

theme.fonts = {
    primary: "Dexa, Helvetica Neue, Helvetica, Roboto, sans-serif",
    pre: "Consolas, Liberation Mono, Menlo, Courier, monospace",
    quote: "Georgia, serif",
};

theme.sizes = {
    maxWidth: "1100px",
    small: "12px",
    medium: "14px",
    large: "16px",
};

// theme.fontSizes = {};

const reversedTheme = {
    ...theme,
    palette: theme.reversePalette,
    reversePalette: theme.palette,
};
export { theme, reversedTheme };