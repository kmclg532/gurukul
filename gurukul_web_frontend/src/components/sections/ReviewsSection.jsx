import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import reviewsData from '../../constants/reviewsData';

const ReviewCard = ({ review, index, isInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: 0.15 + index * 0.1, ease: 'easeOut' }}
    className="relative bg-white rounded-xl p-6 sm:p-7 shadow-sm shadow-[#0B1F3F]/4 border border-[#0B1F3F]/5 hover:shadow-md hover:shadow-[#0B1F3F]/6 hover:scale-[1.02] transition-all duration-300"
  >
    {/* Subtle quote icon */}
    <Quote
      size={28}
      className="absolute top-5 right-5 text-[#FF9500]/10"
      strokeWidth={2}
    />

    {/* Profile + Info */}
    <div className="flex items-center gap-4 mb-5">
      <div className="w-13 h-13 rounded-full overflow-hidden border-2 border-[#FF9500]/15 shrink-0">
        <img
          src={review.image}
          alt={review.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.classList.add(
              'bg-[#0B1F3F]/8',
              'flex',
              'items-center',
              'justify-center'
            );
            const span = document.createElement('span');
            span.textContent = review.name.charAt(0);
            span.className = 'text-lg font-bold text-[#0B1F3F]/50';
            e.target.parentElement.appendChild(span);
          }}
        />
      </div>
      <div>
        <h4 className="text-base font-semibold text-[#0B1F3F]">
          {review.name}
        </h4>
        <p className="text-sm text-[#0B1F3F]/45">{review.role}</p>
      </div>
    </div>

    {/* Star Rating */}
    <div className="flex items-center gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={15}
          className={
            i < review.rating
              ? 'text-[#F97316] fill-[#F97316]'
              : 'text-[#0B1F3F]/10 fill-[#0B1F3F]/5'
          }
          strokeWidth={1.5}
        />
      ))}
    </div>

    {/* Testimonial */}
    <p className="text-sm sm:text-base text-[#0B1F3F]/60 leading-relaxed line-clamp-4">
      {review.text}
    </p>
  </motion.div>
);

const ReviewsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-[#FAFAFA]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-sm font-semibold text-[#FF9500] uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3F] tracking-tight">
            Voices of Our Students
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#0B1F3F]/50 max-w-xl mx-auto leading-relaxed">
            Hear from our students and alumni about their experience at Gurukul.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {reviewsData.map((review, index) => (
            <ReviewCard
              key={review.id}
              review={review}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
