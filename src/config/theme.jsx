import { createTheme } from "@mui/material";

const appTheme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontFamily: "Tahoma",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#F8F9FA",
    },
    secondary: {
      main: "#202124",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: '#1A73E8',
        color: 'white',
      },
    },
  },
});

export default appTheme;
