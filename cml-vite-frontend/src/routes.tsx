import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing";
import { Dashboard } from "./pages/dashboard";
import { withAuthenticationRequired } from "react-oidc-context";

const ProtectedDashboard = withAuthenticationRequired(Dashboard, {
  OnRedirecting: () => <div>Redirecting to the login page...</div>,
});

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<ProtectedDashboard />} />
    </Routes>
  );
};
