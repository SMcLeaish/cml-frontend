import { Navbar } from "@/components/navbar";
import { MainLayout } from "@/layouts/main-layout";
import { LandingCard } from "@/components/landing-card";

const LandingPage: React.FC = () => {
  return (
    <MainLayout title="CML" header={<Navbar />} children={<LandingCard />} />
  );
};

export default LandingPage;
