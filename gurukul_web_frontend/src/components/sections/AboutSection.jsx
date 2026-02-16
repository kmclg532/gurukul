import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #FFF7ED, #ffffff)',
      }}
    >
      {/* Top gradient overlay — smooth transition from Stats navy */}
      <div
        className="absolute top-0 left-0 w-full h-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, white, transparent)',
        }}
      />

      {/* Swirl Background — subtle, positioned top-right */}
      <img
        src="/others/swirl.png"
        alt=""
        aria-hidden="true"
        className="absolute top-0 right-0 w-[500px] sm:w-[700px] opacity-[0.06] pointer-events-none select-none"
        style={{ zIndex: 0 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Trustee Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-[#0B1F3F]/8 aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <img
                src="/others/trustee.jpg"
                alt="Trustee of Gurukul"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-linear-to-t from-[#0B1F3F]/40 to-transparent" />
            </div>


          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          >
            <p className="text-sm font-semibold text-[#FF9500] uppercase tracking-widest mb-3">
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#0B1F3F] leading-tight tracking-tight mb-6">
              About Gurukul
            </h2>

            <p className="text-base sm:text-lg text-[#0B1F3F]/60 leading-relaxed mb-5">
              Shree Swaminarayan Gurukul School & College stands
              as a beacon of holistic education, combining academic rigor with
              cultural values and character building since its inception.
            </p>
            <p className="text-base text-[#0B1F3F]/50 leading-relaxed mb-8">
              Our institution is committed to nurturing future leaders through a
              balanced curriculum, experienced faculty, and an environment that
              fosters innovation, discipline, and compassion. We prepare
              students not just for exams, but for life.
            </p>

            {/* Highlight Quote */}
            <div className="relative bg-[#0B1F3F]/[0.03] border-l-4 border-[#FF9500] rounded-r-xl p-5 sm:p-6 mb-8">
              <Quote
                size={20}
                className="text-[#FF9500]/40 absolute top-4 right-4"
                strokeWidth={2}
              />
              <p className="text-base sm:text-lg font-medium text-[#0B1F3F]/75 italic leading-relaxed">
                "Education is not just about filling minds — it is about
                igniting souls and shaping character."
              </p>
            </div>

            {/* Learn More Button */}
            <a
              href="#"
              className="inline-flex items-center gap-2.5 px-7 py-3 bg-[#0B1F3F] text-white text-sm font-semibold rounded-xl shadow-sm hover:bg-[#0a1a35] hover:shadow-md hover:scale-[1.03] active:scale-100 transition-all duration-300"
            >
              Learn More
              <ArrowRight size={18} strokeWidth={2.2} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
