import { Route, Routes } from "react-router-dom";
import LandingCard from "./components/LandingCard";
import GcdfDemo from "./pages/gcdf-na-demo";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingCard />} />
      <Route path="/demo" element={<GcdfDemo />} />
    </Routes>
  );
}

export default AppRouter;
