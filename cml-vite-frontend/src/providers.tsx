import React, { ReactNode } from "react";
import { ThemeProvider } from "./contexts/theme-provider";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { AuthProvider } from "react-oidc-context";
import { User } from "oidc-client-ts";

interface ProviderProps {
  children?: ReactNode;
}

const oidcConfig = {
  authority: "https://auth.civmillabs.com/realms/civmillabs",
  client_id: "cml-frontend-client",
  redirect_uri: "https://civmillabs.com",
  onSigninCallback: (user: User | void) => {
    const cleanUrl = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, cleanUrl);

    if (user) {
      console.log("User signed in:", user);
    }
  },
};

export const Providers: React.FC<ProviderProps> = ({ children }) => {
  return (
    <AuthProvider {...oidcConfig}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <TooltipProvider>{children}</TooltipProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};
