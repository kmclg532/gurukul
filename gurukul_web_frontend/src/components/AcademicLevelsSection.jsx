import React from 'react';
import academicLevelsData from '../constants/academicLevelsData';

const AcademicLevelsSection = () => {
  // Duplicate the array for seamless infinite loop
  const duplicatedLevels = [...academicLevelsData, ...academicLevelsData];

  return (
    <section className="py-20 sm:py-28 bg-linear-to-b from-[#FFF7ED] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          <p className="text-sm font-semibold text-[#FF9500] uppercase tracking-widest mb-3">
            Our Academic Journey
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3F] tracking-tight">
            Academic Levels
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#0B1F3F]/60 max-w-2xl mx-auto leading-relaxed">
            A structured pathway from early childhood to professional education.
          </p>
        </div>
      </div>

      {/* Scrolling Cards Container */}
      <div className="academic-scroll-container group">
        <div className="academic-scroll-track">
          {duplicatedLevels.map((level, index) => {
            const Icon = level.icon;
            return (
              <div
                key={`${level.id}-${index}`}
                className="academic-card shrink-0 w-64 sm:w-72 bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Accent Line */}
                <div className="w-10 h-1 bg-[#FF9500]/40 rounded-full mb-5" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#FFF7ED] flex items-center justify-center mb-4">
                  <Icon
                    size={24}
                    className="text-[#FF9500]"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#0B1F3F] mb-2 leading-snug">
                  {level.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#0B1F3F]/50 leading-relaxed">
                  {level.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AcademicLevelsSection;
