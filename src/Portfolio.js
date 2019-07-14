import React from 'react';
import Header from './layout/Header';
import About from './layout/About';
import Services from './layout/Services';
import Work from './layout/Work';
import Footer from './layout/Footer';


function Portfolio() {
  return (
    <div className="portfolio">
      <Header />
      <About />
      <Services />
      <Work />
      <Footer />
    </div>
  );
}

export default Portfolio;
