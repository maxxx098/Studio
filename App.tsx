import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedWork from './components/FeaturedWork';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Plan from './components/Plan';
import CaseStudyDetail from './projects/page';
import Process from './components/Process';
// Home Page Component
const HomePage: React.FC = () => {
  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      <Navbar />
      <Hero />

      <Process />
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

// Main App with Router
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
      </Routes>
    </Router>
  );
};

export default App;