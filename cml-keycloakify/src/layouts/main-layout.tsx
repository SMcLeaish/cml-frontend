import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";

interface MainLayoutProps {
  title?: string;
  children?: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  title = "CivMil Labs",
  children,
}) => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>{title}</title>
      </Helmet>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
