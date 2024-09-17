import React from "react";
import { useAuth } from "react-oidc-context";
import { buttonVariants } from "./ui/button";

export const AuthButton: React.FC = () => {
  const auth = useAuth();

  if (auth.activeNavigator === "signinSilent" || auth.isLoading) {
    return (
      <button className={buttonVariants({ variant: "ghost" })} disabled>
        Loading...
      </button>
    );
  }

  if (auth.error) {
    return (
      <button className={buttonVariants({ variant: "ghost" })} disabled>
        Error: {auth.error.message}
      </button>
    );
  }

  if (auth.isAuthenticated) {
    return (
      <button
        className={buttonVariants({ variant: "ghost" })}
        onClick={() => void auth.signoutPopup()}
      >
        Log out
      </button>
    );
  }

  return (
    <button
      className={buttonVariants({ variant: "ghost" })}
      onClick={() => void auth.signinRedirect()}
    >
      Log in
    </button>
  );
};
