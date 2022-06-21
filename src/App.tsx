import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "assets/styles/theme";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  return (
    /* implementar o tema criado na pasta styles */
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <QueryClientProvider client={new QueryClient}>
          <Router />
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
