import { ThemeProvider } from "@/components/theme-provider";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes";

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AppRouter />
      </ThemeProvider>
    </Router>
  );
}

export default App;
