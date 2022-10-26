import * as React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import { theme, darkTheme } from "./theme";
import { ContextProvider } from "./context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <ContextProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </ContextProvider>
);
