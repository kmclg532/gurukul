import React from 'react';
import { useNavigate } from 'react-router-dom';
import departmentsData from '../constants/departmentsData';

const DepartmentsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="departments" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          <p className="text-sm font-semibold text-[#FF9500] uppercase tracking-widest mb-3">
            Our Departments
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3F] tracking-tight">
            Explore Our Departments
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#0B1F3F]/60 max-w-2xl mx-auto leading-relaxed">
            Empowering students through excellence in Commerce and Computer Science.
          </p>
        </div>

        {/* Department Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {departmentsData.map((dept) => {
            const Icon = dept.icon;
            return (
              <div
                key={dept.id}
                className="group relative bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1 overflow-hidden"
              >
                {/* Left Orange Accent Stripe */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF9500] rounded-l-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="p-8 sm:p-10 pl-10 sm:pl-12">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#FFF7ED] flex items-center justify-center mb-6 group-hover:bg-[#FF9500]/10 transition-colors duration-300">
                    <Icon
                      size={28}
                      className="text-[#FF9500]"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Badge */}
                  <span className="inline-block text-xs font-bold text-[#0B1F3F] bg-[#0B1F3F]/5 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                    {dept.name}
                  </span>

                  {/* Full Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F3F] leading-snug mb-3">
                    {dept.fullName}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#0B1F3F]/55 leading-relaxed mb-8">
                    {dept.description}
                  </p>

                  {/* View More Button */}
                  <button
                    onClick={() => navigate(dept.path)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#FF9500] text-white text-sm font-semibold rounded-lg shadow-sm shadow-[#FF9500]/20 hover:bg-[#e68600] hover:shadow-md hover:shadow-[#FF9500]/25 hover:scale-[1.03] active:scale-100 transition-all duration-300"
                  >
                    View More
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
