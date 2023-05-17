// import Header from './Header';
import Home from './pages/Home';
import React, { useState } from 'react';
import About from './pages/About';
import Inventory from './pages/Inventory';
import Navigation from './Navigation';
import Footer from "./Footer";


function Container() {

  const [currentPage, setCurrentPage] = useState("Home");

  

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Inventory") {
      return <Inventory />;
    }
   
  };

  

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
    <Navigation
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
      {renderPage()}
     <Footer/>
      </div>
);
}

export default Container;
