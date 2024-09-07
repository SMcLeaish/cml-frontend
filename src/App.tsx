import { ThemeProvider } from "@/components/theme-provider";
import LandingCard from "./components/LandingCard";
import MainLayout from "@/layouts/main-layout";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainLayout title="CML">
        <LandingCard />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
