import About from '@/components/About';
import Benefits from '@/components/Benefits';
import DashboardCard from '@/components/DashboardCard';
import HomeNavbar from '@/components/HomeNavbar';
import PricingPlans from '@/components/PricingPlans';
import Team from '@/components/Team';
import VivaChatHero from '@/components/VivaChatHero';
import Home from '@/pages/home';
import React from 'react';

const Page = () => {
  return (
    <div className="">
      <HomeNavbar />
      <Home />
      <About />
      <Benefits />
      <DashboardCard />
      {/* <Team /> */}
      <PricingPlans />
      <VivaChatHero />
    </div>
  );
};

export default Page;
