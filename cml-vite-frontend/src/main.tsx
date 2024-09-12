import { AuthProvider } from "react-oidc-context";
import { User } from "oidc-client-ts";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

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

createRoot(document.getElementById("root")!).render(
  <AuthProvider {...oidcConfig}>
    <StrictMode>
      <App />
    </StrictMode>
  </AuthProvider>,
);
