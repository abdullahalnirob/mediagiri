import About from '@/components/About';
import Benefits from '@/components/Benefits';
import HomeNavbar from '@/components/HomeNavbar';
import Home from '@/pages/home';
import React from 'react';

const Page = () => {
  return (
    <div className="">
      <HomeNavbar />
      <Home />
      <About />
      <Benefits />
    </div>
  );
};

export default Page;
