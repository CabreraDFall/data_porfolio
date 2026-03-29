import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import NetworkSection from './components/NetworkSection';
import Footer from './components/Footer';

const PortfolioPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-surface text-on-surface">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Metrics />
        <NetworkSection />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
