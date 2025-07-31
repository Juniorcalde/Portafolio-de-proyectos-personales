import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import WhyUsSection from './components/sections/WhyUsSection';
import PortfolioSection from './components/sections/PortfolioSection';
import TeamSection from './components/sections/TeamSection';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <PortfolioSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
