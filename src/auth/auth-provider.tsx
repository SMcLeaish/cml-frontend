import React, { createContext, useState, useEffect, ReactNode } from "react";
import Keycloak from "keycloak-js";

interface AuthContextType {
  isAuthenticated: boolean;
  keycloak: Keycloak | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [keycloak, setKeycloak] = useState<Keycloak | null>(null);

  useEffect(() => {
    const keycloakInstance = new Keycloak({
      url: "https://auth.civmillabs.com",
      realm: "civmillabs",
      clientId: "cml-frontend-client",
    });

    keycloakInstance
      .init({ onLoad: "login-required" })
      .then((authenticated) => {
        setIsAuthenticated(authenticated);
        setKeycloak(keycloakInstance);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, keycloak }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
