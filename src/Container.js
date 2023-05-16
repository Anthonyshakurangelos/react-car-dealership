// import Header from './Header';
import Home from './pages/Home';
import React, { useState } from 'react';
import About from './pages/About';
import Inventory from './pages/Inventory';
import Navigation from './Navigation';


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

      </div>
);
}

export default Container;
