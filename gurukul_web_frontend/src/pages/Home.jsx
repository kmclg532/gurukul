import React from 'react';

const Home = () => {
  return (
    <main>
      {/* Placeholder content to test scrolling behavior */}
      <section className="min-h-screen bg-gradient-to-b from-[#001F3F] to-[#0B1F3F] flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Shree Swaminarayan College
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            of Computer Science — Sardarnagar, Bhavnagar
          </p>
        </div>
      </section>

      {/* Extra scroll content for testing sticky nav */}
      <section className="min-h-screen bg-gradient-to-b from-[#FFF7ED] to-white flex items-center justify-center">
        <p className="text-2xl text-[#0B1F3F]/40 font-medium">
          More sections coming soon...
        </p>
      </section>
    </main>
  );
};

export default Home;
