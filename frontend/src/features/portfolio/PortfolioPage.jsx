import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

const PortfolioPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-surface text-on-surface">
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
