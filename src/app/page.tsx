import About from '@/components/About';
import Benefits from '@/components/Benefits';
import DashboardCard from '@/components/DashboardCard';
import Footer from '@/components/Footer';
import HomeNavbar from '@/components/HomeNavbar';
import PricingPlans from '@/components/PricingPlans';
import VivaChatHero from '@/components/VivaChatHero';
import Home from '@/pages/home';

const Page = () => {
  return (
    <div className="">
      <HomeNavbar />
      <Home />
      <About />
      <Benefits />
      <PricingPlans />
      <VivaChatHero />
      <Footer />
    </div>
  );
};

export default Page;
