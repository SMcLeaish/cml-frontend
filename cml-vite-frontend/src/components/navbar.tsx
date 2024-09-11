import React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import Logo from "@/components/Logo";
import AuthButton from "./auth-button";
import { useAuth } from "react-oidc-context";

interface NavbarProps {
  isKeycloakPage: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isKeycloakPage }) => {
  const auth = useAuth();
  return (
    <nav className="border-b border-none p-4 outline-none">
      <div className="flex justify-between items-center px-4">
        <Logo />
        {auth.isAuthenticated ? <div>{auth.user?.profile.email}</div> : null}
        <div className="flex space-x-4">
          {!isKeycloakPage && <AuthButton />}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
