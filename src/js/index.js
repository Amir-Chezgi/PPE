import { ThemeProvider } from "@mui/material";
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDom from "react-dom";
import App from "./App";
import { theme } from "./theme";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
