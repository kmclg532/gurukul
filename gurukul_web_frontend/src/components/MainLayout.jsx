import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top info bar — scrolls away with page */}
      <TopBar />

      {/* Sticky navbar with glass blur */}
      <Navbar />

      {/* Page content */}
      {children}
    </div>
  );
};

export default MainLayout;
