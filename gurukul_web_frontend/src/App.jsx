import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Top info bar — scrolls away with page */}
      <TopBar />

      {/* Section 2: Sticky navbar with glass blur */}
      <Navbar />

      {/* Page content */}
      <Home />
    </div>
  );
};

export default App;