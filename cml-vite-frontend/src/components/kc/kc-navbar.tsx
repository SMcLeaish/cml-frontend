import React from "react";
import Logo from "@/components/Logo";

const KcNavbar: React.FC = () => {
  return (
    <nav className="border-b border-none p-4 outline-none">
      <div className="flex justify-between items-center px-4">
        <Logo />
      </div>
    </nav>
  );
};

export default KcNavbar;
