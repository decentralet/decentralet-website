import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#ECECF9",
      main: "#8080d6",
      dark: "#1F1F60",
      contrastText: "#000",
    },
    secondary: {
      light: "#F8EBFA",
      main: "#CE72DC",
      dark: "#81248F",
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
