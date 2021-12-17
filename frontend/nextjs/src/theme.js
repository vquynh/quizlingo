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
    darkgray: {
      main: "#212121",
    },
    lightgray: {
      main: "#C4C4C4",
    },
    spain_flag_yellow_light: {
      main: "#FAF1D1",
    },
    spain_flag_yellow_dark: {
      main: "#B89614",
    },
  },
  typography: {
    fontFamily: [
      "Rubik",
      "Outfit",
      "BioRhyme",
      "Readex Pro",
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
      color: "#212121",
    },
    h3: {
      fontFamily: "BioRhyme",
      fontWeight: 700,
      fontSize: "1.67rem",
      color: "#212121",
    },
    h4: {
      fontFamily: "Rubik",
      fontWeight: 600,
      fontSize: "1.67rem",
      color: "#212121",
    },
    body1: {
      fontFamily: "Rubik",
      fontWeight: 400,
      fontSize: "1.17rem",
      color: "#212121",
    },
    body2: {
      fontFamily: "Rubik",
      fontWeight: 400,
      fontSize: "1rem",
      color: "#212121",
    },
  },
});

export default theme;
