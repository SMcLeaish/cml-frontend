import React, { ReactNode } from "react";
import { ThemeProvider } from "./contexts/theme-provider";
import { TooltipProvider } from "@radix-ui/react-tooltip";

interface ProviderProps {
  children?: ReactNode;
}
export const Providers: React.FC<ProviderProps> = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
};
