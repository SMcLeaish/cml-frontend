import React from "react";
import { Helmet } from "react-helmet";
import KcNavbar from "@/components/kc/kc-navbar";
import "@/styles/globals.css";

interface KcLayoutProps {
  title?: string;
}

const KcLayout: React.FC<KcLayoutProps> = ({ title = "CivMil Labs" }) => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>{title}</title>
      </Helmet>
      <header>
        <KcNavbar />
      </header>
    </>
  );
};

export default KcLayout;
