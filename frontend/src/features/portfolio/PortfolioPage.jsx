import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Projects from './components/Projects';
import Footer from './components/Footer';

const PortfolioPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-surface text-on-surface">
      <main>
        <Hero />
        <Metrics />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
