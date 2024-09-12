import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing";
import GcdfDemo from "./pages/gcdf-na-demo";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/demo" element={<GcdfDemo />} />
    </Routes>
  );
}

export default AppRouter;
