/* eslint-disable react-refresh/only-export-components */
import { createRoot } from "react-dom/client";
import { StrictMode, lazy, Suspense } from "react";
import { KcPage, type KcContext } from "./keycloak-theme/kc.gen";
import { AuthProvider } from "react-oidc-context";
import { User } from "oidc-client-ts";
const App = lazy(() => import("./App"));

//The following block can be uncommented to test a specific page with `yarn dev`
// Don't forget to comment back or your bundle size will increase
/*
import { getKcContextMock } from "./keycloak-theme/login/KcPageStory";

if (import.meta.env.DEV) {
  window.kcContext = getKcContextMock({
    pageId: "login.ftl",
    overrides: {},
  });
}
*/

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
  <StrictMode>
    {window.kcContext ? (
      <KcPage kcContext={window.kcContext} />
    ) : (
      <AuthProvider {...oidcConfig}>
        <Suspense>
          <App />
        </Suspense>
      </AuthProvider>
    )}
  </StrictMode>,
);

declare global {
  interface Window {
    kcContext?: KcContext;
  }
}
