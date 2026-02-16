import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { CalendarDays, ArrowRight, Newspaper, FileText, ChevronDown } from 'lucide-react';
import { circularsData, newsData } from '../../constants/updatesData';

/* ── Helper: Format date nicely ── */
const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

/* ── Circular List Item ── */
const CircularItem = ({ circular }) => (
  <div className="group flex gap-4 py-4 border-b border-gray-100 last:border-b-0 transition-colors duration-200 hover:bg-[#FFF7ED]/40 px-4 -mx-4 rounded-lg">
    {/* Date Badge */}
    <div className="shrink-0 w-14 h-14 rounded-xl bg-[#0B1F3F] flex flex-col items-center justify-center text-white">
      <span className="text-lg font-bold leading-none">
        {new Date(circular.date).getDate()}
      </span>
      <span className="text-[10px] uppercase tracking-wider opacity-70 mt-0.5">
        {new Date(circular.date).toLocaleString('en-IN', { month: 'short' })}
      </span>
    </div>

    {/* Content */}
    <div className="min-w-0 flex-1">
      <h4 className="text-sm font-semibold text-[#0B1F3F] leading-snug mb-1 line-clamp-2">
        {circular.title}
      </h4>
      <p className="text-xs text-[#0B1F3F]/45 leading-relaxed line-clamp-2 mb-1.5">
        {circular.description}
      </p>
      <a
        href={circular.link}
        className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF9500] hover:text-[#e68600] transition-colors duration-200"
      >
        Read More
        <ArrowRight size={12} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform duration-200" />
      </a>
    </div>
  </div>
);

/* ── News Card ── */
const NewsCard = ({ news }) => (
  <div className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex flex-col">
    {/* Image placeholder */}
    <div className="relative h-40 bg-linear-to-br from-[#0B1F3F]/5 to-[#0B1F3F]/10 overflow-hidden">
      {news.image ? (
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <Newspaper size={32} className="text-[#0B1F3F]/15" strokeWidth={1.5} />
        </div>
      )}
      {/* Date chip */}
      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg">
        <CalendarDays size={12} className="text-[#FF9500]" strokeWidth={2} />
        <span className="text-[11px] font-medium text-[#0B1F3F]/70">
          {formatDate(news.date)}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-5 flex flex-col flex-1">
      <h4 className="text-sm font-semibold text-[#0B1F3F] leading-snug mb-2 line-clamp-2">
        {news.title}
      </h4>
      <p className="text-xs text-[#0B1F3F]/45 leading-relaxed line-clamp-3 flex-1">
        {news.description}
      </p>
    </div>
  </div>
);

/* ══════════════ Main Section ══════════════ */
const UpdatesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section id="updates" ref={sectionRef} className="relative py-20 sm:py-28 bg-white overflow-hidden">
      {/* Subtle top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-sm font-semibold text-[#FF9500] uppercase tracking-widest mb-3">
            Stay Updated
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3F] tracking-tight">
            Latest Circulars & Updates
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#0B1F3F]/60 max-w-2xl mx-auto leading-relaxed">
            Stay informed with the latest announcements, events, and news from Gurukul.
          </p>
        </motion.div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Left — Circulars */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-[#FFF7ED] flex items-center justify-center">
                <FileText size={18} className="text-[#FF9500]" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F3F]">Circulars</h3>
            </div>

            <div className="group/card bg-white rounded-xl border border-gray-100 shadow-sm hover:border-gray-200 hover:shadow-md transition-all duration-300 p-4 sm:p-5">
              {/* Scrollable list with fade mask */}
              <div className="circular-scroll-container">
                <div className="max-h-105 overflow-y-auto slim-scrollbar pr-1">
                  {circularsData.map((circular) => (
                    <CircularItem key={circular.id} circular={circular} />
                  ))}
                </div>
              </div>

              {/* Scroll hint indicator */}
              <div className="flex items-center justify-center gap-1.5 mt-3 pt-2 border-t border-gray-50">
                <ChevronDown size={14} className="text-[#0B1F3F]/25 animate-bounce" strokeWidth={2} />
                <span className="text-[11px] text-[#0B1F3F]/30 font-medium">
                  Scroll to view more updates
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right — News */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-[#FFF7ED] flex items-center justify-center">
                <Newspaper size={18} className="text-[#FF9500]" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F3F]">News & Events</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5">
              {newsData.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;
