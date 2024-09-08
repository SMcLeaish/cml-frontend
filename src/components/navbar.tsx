import React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import Logo from "@/components/Logo";

interface NavbarProps {
  isKeycloakPage: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isKeycloakPage }) => {
  return (
    <nav className="border-b border-none p-4 outline-none">
      <div className="flex justify-between items-center px-4">
        <Logo />
        <div className="flex space-x-4">
          {!isKeycloakPage && (
            <a
              href="https://auth.civmillabs.com/login"
              className={buttonVariants({ variant: "ghost" })}
            >
              Login
            </a>
          )}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
