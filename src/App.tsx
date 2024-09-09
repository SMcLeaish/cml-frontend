import { ThemeProvider } from "@/components/theme-provider";
import MainLayout from "@/layouts/main-layout";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes";
function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <MainLayout title="CML" />
        <AppRouter />
      </ThemeProvider>
    </Router>
  );
}

export default App;
