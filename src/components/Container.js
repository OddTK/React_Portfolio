import React, { useState } from 'react';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Navigation from './Navigation';
import Projects from '../pages/Projects';
import '../style/Style.css'

export default function Container() {
  const [currentPage, setCurrentPage] = useState('Home');


  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
