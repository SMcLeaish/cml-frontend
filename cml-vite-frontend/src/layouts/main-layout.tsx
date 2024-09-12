import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";

interface MainLayoutProps {
  title?: string;
  header?: ReactNode;
  children?: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, header, children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>{title}</title>
      </Helmet>
      <header className="w-full">{header}</header>
      <main className="w-full flex items-center justify-center min-h-screen  px-4">
        {children}
      </main>
    </>
  );
};

export default MainLayout;
