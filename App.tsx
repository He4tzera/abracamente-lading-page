
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import About from './components/About';
import HowWeHelp from './components/HowWeHelp';
import Services from './components/Services';
import TargetAudience from './components/TargetAudience';
import Impact from './components/Impact';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#F9FAFB] text-gray-700 antialiased">
      <Header />
      <main>
        <Hero />
        <ImageCarousel />
        <About />
        <HowWeHelp />
        <Services />
        <TargetAudience />
        <Impact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
