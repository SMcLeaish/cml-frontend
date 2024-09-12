import React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import Logo from "@/components/Logo";
import AuthButton from "./auth-button";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full border-b border-none p-4 outline-none">
      <div className="flex justify-between items-center px-4">
        <Logo />
        <div className="flex space-x-4">
          <AuthButton />
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
