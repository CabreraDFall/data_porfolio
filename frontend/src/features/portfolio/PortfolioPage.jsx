import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import SEO from '../../shared/components/SEO';

const PortfolioPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-surface text-on-surface">
      <SEO 
        title="Home" 
        description="Data Architecture & Engineering Portfolio - Specialized in High-Performance Data Ingestion & Analytics Systems." 
      />
      <Navbar />
      <main>
        <Hero />
        <div id="expertise">
          <Expertise />
        </div>
        <Projects />
        <div id="about">
          <AboutMe />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
