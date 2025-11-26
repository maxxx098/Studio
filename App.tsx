import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedWork from './components/FeaturedWork';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';
import Plan from './components/Plan';

const App: React.FC = () => {
  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <FeaturedWork />
      <Services />
      <Team />
      <Testimonials />
      <Plan />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;