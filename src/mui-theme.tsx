import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      light: "#14141b",
      dark: "#0f0f0f",
    },
    secondary: {
      main: "#d135ef",
      light: "#c895cd",
      dark: "#491f72",
    },
    error: {
      main: "#c5394f",
      light: "#d8657d",
      dark: "#8c2b44",
    },
    warning: {
      main: "#ffd54f", // Pastel yellow
      light: "#ffee58",
      dark: "#fbc02d",
    },
    info: {
      main: "#f0f0f0",
      light: "#c9c9c9",
      dark: "#4f4f4f",
    },
    success: {
      main: "#81c784", // Pastel green
      light: "#a5d6a7",
      dark: "#4caf50",
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 384,
      md: 670,
      lg: 1024,
      xl: 1368,
    },
  },
});

export default theme;
