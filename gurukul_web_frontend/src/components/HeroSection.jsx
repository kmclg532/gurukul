import React, { useState, useEffect, useCallback } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const slides = [
  { src: '/hero-section-images/slide1.jpg', alt: 'Gurukul Campus View' },
  { src: '/hero-section-images/slide2.jpg', alt: 'College Campus Life' },
];

const AUTOPLAY_INTERVAL = 6000; // 6 seconds
const ZOOM_DURATION = 8; // seconds for Ken Burns zoom

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Autoplay logic
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative w-full h-screen min-h-150 max-h-300 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Background Image Slider ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          {/* Ken Burns zoom effect */}
          <motion.img
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: 1.06 }}
            transition={{
              duration: ZOOM_DURATION,
              ease: 'linear',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Gradient Overlay ── */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0B1F3F]/90 via-[#0B1F3F]/0 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-[#0B1F3F]/40 via-transparent to-transparent" />

      {/* ── Main Content ── */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Headline — line by line reveal */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              <motion.p
                className="text-[#FF9500] text-sm sm:text-base font-semibold tracking-widest uppercase mb-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: 'easeOut' },
                  },
                }}
              >
                Welcome to
              </motion.p>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: 'easeOut' },
                  },
                }}
              >
                Shree Swaminarayan
              </motion.h1>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mt-1"
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: 'easeOut' },
                  },
                }}
              >
                College 
                {/* College of{' '} */}
                {/* <span className="text-[#FF9500]">Computer Science</span> */}
              </motion.h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-white/70 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
            >
              Empowering future leaders through excellence in education,
              innovation, and values — affiliated by MKBU, Bhavnagar.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
            >
              <a
                href="#admission"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#FF9500] text-white font-semibold text-sm sm:text-base rounded-lg shadow-lg shadow-[#FF9500]/25 hover:bg-[#e68600] hover:shadow-xl hover:shadow-[#FF9500]/30 hover:scale-[1.03] transition-all duration-300 w-full sm:w-auto"
              >
                Apply for Admission
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-white/30 text-white font-semibold text-sm sm:text-base rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 w-full sm:w-auto"
              >
                Explore Campus
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Arrow Buttons (subtle) ── */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/70 hover:bg-white/20 hover:text-white hover:border-white/25 transition-all duration-300 opacity-0 hover:opacity-100 group-hover:opacity-100 focus:opacity-100"
        style={{ opacity: isPaused ? 0.7 : 0 }}
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/70 hover:bg-white/20 hover:text-white hover:border-white/25 transition-all duration-300 opacity-0 hover:opacity-100 group-hover:opacity-100 focus:opacity-100"
        style={{ opacity: isPaused ? 0.7 : 0 }}
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* ── Slide Indicators (right side, vertical dots) ── */}
      <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="group relative"
          >
            <span
              className={`block w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? 'bg-[#FF9500] scale-110 shadow-md shadow-[#FF9500]/40'
                  : 'bg-white/30 hover:bg-white/60'
              }`}
            />
          </button>
        ))}
      </div>

      {/* ── Bottom Progress Bar ── */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/10 z-20">
        <motion.div
          className="h-full bg-[#FF9500]/70"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          key={currentSlide}
          transition={{
            duration: AUTOPLAY_INTERVAL / 1000,
            ease: 'linear',
          }}
          style={isPaused ? { animationPlayState: 'paused' } : {}}
        />
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-medium">
          Scroll
        </span>
        <ChevronDown size={18} className="text-white/40" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
