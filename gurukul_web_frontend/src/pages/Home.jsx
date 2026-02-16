import React from 'react';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <main>
      {/* Hero Section with cinematic image slider */}
      <HeroSection />

      {/* Placeholder for upcoming sections */}
      <section className="min-h-screen bg-linear-to-b from-[#FFF7ED] to-white flex items-center justify-center">
        <p className="text-2xl text-[#0B1F3F]/40 font-medium">
          More sections coming soon...
        </p>
      </section>
    </main>
  );
};

export default Home;
