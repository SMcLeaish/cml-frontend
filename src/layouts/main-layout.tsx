import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbar";
import "@/styles/globals.css";

interface MainLayoutProps {
  title?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ title = "CivMil Labs" }) => {
  const [isKeycloakPage, setIsKeycloakPage] = useState(false);

  useEffect(() => {
    if (window.kcContext) {
      setIsKeycloakPage(true);
    } else {
      setIsKeycloakPage(false);
    }
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>{title}</title>
      </Helmet>
      <header>
        <Navbar isKeycloakPage={isKeycloakPage} />
      </header>
    </>
  );
};

export default MainLayout;
