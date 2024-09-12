import { Route, Routes } from "react-router-dom";
import LandingCard from "./components/LandingCard";
import MainLayout from "./layouts/main-layout";
import GcdfDemo from "./pages/gcdf-na-demo";

function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout title="CivMil Labs">
            <LandingCard />
          </MainLayout>
        }
      />
      <Route path="/test" element={<MainLayout title="test"></MainLayout>} />
      <Route path="/demo" element={<GcdfDemo />} />
    </Routes>
  );
}

export default AppRouter;
