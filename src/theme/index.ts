import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#ECECF9", // main / 05%
      main: "#8080d6", // main color
      dark: "#1F1F60", // main / 95%
      contrastText: "#000",
    },
    secondary: {
      light: "#F8EBFA", // main / 05%
      main: "#CE72DC", // main color
      dark: "#81248F", // main / 95%
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: "Open Sans, sans-serif",
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: "primary",
      },
      styleOverrides: {
        root: {
          height: "40px",
          borderRadius: "20px",
          paddingRight: "24px",
          paddingLeft: "24px",
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          height: "40px",
          color: "#fff",
          borderRadius: "16px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "rgb(255,255,255,0.3)",
          fontSize: "12px",
          lineHeight: "12px",
          fontWeight: "300",
          verticalAlign: "middle",
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
