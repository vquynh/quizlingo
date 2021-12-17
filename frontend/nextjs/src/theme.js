import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#AA151B",
    },
    secondary: {
      main: "#F1BF00",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      "Outfit",
      "BioRhyme",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontFamily: "BioRhyme",
      fontWeight: 700,
      fontSize: "4rem",
    },
    h2: {
      fontFamily: "BioRhyme",
      fontWeight: 700,
      fontSize: "2rem",
    },
    h3: {
      fontFamily: "Outfit",
      fontWeight: 500,
      fontSize: "1.67rem",
    },
    body1: {
      fontFamily: "Outfit",
      fontWeight: 400,
      fontSize: "1.17rem",
    },
    body2: {
      fontFamily: "Outfit",
      fontWeight: 400,
      fontSize: "1rem",
    },
  },
});

export default theme;
