import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { Award, ShieldCheck, Users } from 'lucide-react';
import whyStudyData from '../../constants/whyStudyData';

/* Mini stat highlights for left column bottom */
const miniStats = [
  { label: '25+ Years Legacy', icon: Award },
  { label: 'NAAC Accredited', icon: ShieldCheck },
  { label: '100+ Faculty Members', icon: Users },
];

const WhyStudySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 bg-white overflow-hidden">
      {/* Subtle top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col"
          >
            <p className="text-sm font-semibold text-[#FF9500] uppercase tracking-widest mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#0B1F3F] leading-tight tracking-tight mb-6">
              Why Study at Gurukul?
            </h2>
            <p className="text-base sm:text-lg text-[#0B1F3F]/60 leading-relaxed mb-6 max-w-lg">
              At Gurukul, we believe in nurturing not just academic excellence
              but well-rounded individuals ready to lead in the real world.
            </p>
            <p className="text-base text-[#0B1F3F]/50 leading-relaxed max-w-lg">
              Our commitment to quality education, modern infrastructure, and
              value-based learning sets us apart as a preferred destination for
              higher studies.
            </p>

            {/* Accent line */}
            <div className="mt-8 w-16 h-1 rounded-full bg-[#FF9500]/40" />

            {/* Mini Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {miniStats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 bg-[#FFF7ED] rounded-lg px-4 py-2.5"
                  >
                    <Icon size={16} className="text-[#FF9500] shrink-0" strokeWidth={2} />
                    <span className="text-xs sm:text-sm font-semibold text-[#0B1F3F]/70 whitespace-nowrap">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right — Feature Cards Grid (2x2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whyStudyData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + index * 0.08,
                    ease: 'easeOut',
                  }}
                  className="group relative bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ease-out flex flex-col"
                >
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-lg bg-[#FFF7ED] flex items-center justify-center mb-4 group-hover:bg-[#FF9500]/10 transition-colors duration-300">
                    <Icon
                      size={22}
                      className="text-[#FF9500]"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-[#0B1F3F] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#0B1F3F]/50 leading-relaxed flex-1">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyStudySection;
