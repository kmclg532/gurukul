import React, { useRef, useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import statsData from '../../constants/statsData';

/* ── Animated Counter ── */
const AnimatedCounter = ({ value, suffix, shouldAnimate }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 16;
    const steps = Math.ceil(duration / stepTime);
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [shouldAnimate, value]);

  const formattedCount = count.toLocaleString('en-IN');

  return (
    <span>
      {formattedCount}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#00122E] md:bg-white"
    >
      {/* ── Navy Strip — absolute, full-width, bottom-aligned (desktop only) ── */}
      {/* <div className="hidden md:block absolute bottom-15 left-0 w-full h-30 bg-[#00122E]" /> */}
      <div className="hidden md:block absolute left-0 w-full h-[115px] bg-[#00122E] top-[62%] z-0" />

      {/* ── All content above the strip ── */}
      <div className="relative z-10">
        {/* Section Header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-6 sm:pt-28 sm:pb-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="text-sm font-semibold text-[#FF9500] uppercase tracking-widest mb-3">
              Our Impact
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white md:text-[#0B1F3F] tracking-tight">
              Numbers That Define Us
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/40 md:text-[#0B1F3F]/50 max-w-xl mx-auto leading-relaxed">
              A snapshot of Gurukul&apos;s growing legacy of excellence in education.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mt-14 md:mt-14">
            {statsData.map((stat, index) => {
              const isHighlight = stat.highlight;

              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 28 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                    ease: 'easeOut',
                  }}
                  className="flex flex-col items-center text-center"
                >
                  {isHighlight ? (
                    /* ── Highlight Card (Students / Faculties) ── */
                    <div className="w-full rounded-xl px-6 py-7 sm:px-8 sm:py-8 md:-translate-y-12 border border-[#FF9500]/20 shadow-lg shadow-[#FF9500]/5 hover:shadow-xl hover:shadow-[#FF9500]/8 hover:-translate-y-1 md:hover:-translate-y-14 transition-all duration-300 bg-[#001F3F] md:bg-[#FF9500]">
                      <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#001F3F] tracking-tight leading-none mb-3">
                        <AnimatedCounter
                          value={stat.value}
                          suffix={stat.suffix}
                          shouldAnimate={isInView}
                        />
                      </h3>
                      <p className="text-base sm:text-lg font-semibold text-white/80 md:text-[#0B1F3F]/70">
                        {stat.label}
                      </p>
                      <p className="text-xs text-white/30 md:text-[#0B1F3F]/35 mt-1 leading-relaxed">
                        {stat.description}
                      </p>
                    </div>
                  ) : (
                    /* ── Plain Stat (Subjects / Classrooms) ── */
                    <div className="w-full px-4 py-7 mt-1 sm:py-8">
                      {/* Number — floats in white area on desktop */}
                      <div className="md:-translate-y-8">
                        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white md:text-[#0B1F3F] tracking-tight leading-none">
                          <AnimatedCounter
                            value={stat.value}
                            suffix={stat.suffix}
                            shouldAnimate={isInView}
                          />
                        </h3>
                      </div>
                      {/* Label — visible inside navy strip */}
                      <div className="mt-3 md:mt-4">
                        <p className="text-base sm:text-lg font-semibold text-white/70">
                          {stat.label}
                        </p>
                        <p className="text-xs text-white/30 mt-1 leading-relaxed">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
