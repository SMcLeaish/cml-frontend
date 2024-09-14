import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing";
import { Dashboard } from "./pages/dashboard";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRouter;
