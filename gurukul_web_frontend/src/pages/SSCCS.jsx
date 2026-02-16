import React from 'react';
import MainLayout from '../components/MainLayout';

const SSCCS = () => {
  return (
    <MainLayout>
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <span className="inline-block text-xs font-bold text-[#FF9500] bg-[#FFF7ED] px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
            Computer Science
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3F] tracking-tight leading-tight">
            SSCCS
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-[#0B1F3F]/50 leading-relaxed">
            Detailed Information Coming Soon
          </p>
          <div className="mt-8 w-16 h-1 bg-[#FF9500]/30 rounded-full mx-auto" />
        </div>
      </section>
    </MainLayout>
  );
};

export default SSCCS;
