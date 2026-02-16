import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-white"
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
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3F] tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#0B1F3F]/50 max-w-xl mx-auto leading-relaxed">
            We&apos;re here to assist you with admissions and inquiries.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm shadow-[#0B1F3F]/4 border border-[#0B1F3F]/5">
              <form className="space-y-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-[#0B1F3F]/70 mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg border border-[#0B1F3F]/10 bg-[#FAFAFA] text-[#0B1F3F] text-sm placeholder:text-[#0B1F3F]/30 focus:outline-none focus:border-[#FF9500] focus:ring-2 focus:ring-[#FF9500]/15 transition-all duration-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#0B1F3F]/70 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg border border-[#0B1F3F]/10 bg-[#FAFAFA] text-[#0B1F3F] text-sm placeholder:text-[#0B1F3F]/30 focus:outline-none focus:border-[#FF9500] focus:ring-2 focus:ring-[#FF9500]/15 transition-all duration-200"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#0B1F3F]/70 mb-1.5"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 rounded-lg border border-[#0B1F3F]/10 bg-[#FAFAFA] text-[#0B1F3F] text-sm placeholder:text-[#0B1F3F]/30 focus:outline-none focus:border-[#FF9500] focus:ring-2 focus:ring-[#FF9500]/15 transition-all duration-200"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[#0B1F3F]/70 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject of inquiry"
                    className="w-full px-4 py-3 rounded-lg border border-[#0B1F3F]/10 bg-[#FAFAFA] text-[#0B1F3F] text-sm placeholder:text-[#0B1F3F]/30 focus:outline-none focus:border-[#FF9500] focus:ring-2 focus:ring-[#FF9500]/15 transition-all duration-200"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#0B1F3F]/70 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-lg border border-[#0B1F3F]/10 bg-[#FAFAFA] text-[#0B1F3F] text-sm placeholder:text-[#0B1F3F]/30 resize-none focus:outline-none focus:border-[#FF9500] focus:ring-2 focus:ring-[#FF9500]/15 transition-all duration-200"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-[#FF9500] text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-[#E88600] hover:shadow-md active:scale-[0.98] transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right — Map + Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-sm shadow-[#0B1F3F]/4 border border-[#0B1F3F]/5 aspect-video">
              <iframe
                title="Gurukul Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.6363321220556!2d72.15100507512625!3d21.75562008008188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5a6e052be6b7%3A0x6c83a1f2434e62ba!2sSwaminarayan%20Gurukul!5e0!3m2!1sen!2sin!4v1771269824974!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-[#FF9500] mt-0.5 shrink-0"
                  strokeWidth={2}
                />
                <p className="text-sm text-[#0B1F3F]/60 leading-relaxed">
                  Shree Swaminarayan Gurukul, Ahmedabad, Gujarat, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-[#FF9500] shrink-0"
                  strokeWidth={2}
                />
                <p className="text-sm text-[#0B1F3F]/60">
                  0278 256 8222
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-[#FF9500] shrink-0"
                  strokeWidth={2}
                />
                <p className="text-sm text-[#0B1F3F]/60">
                  info@gurukulschool.edu.in
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
