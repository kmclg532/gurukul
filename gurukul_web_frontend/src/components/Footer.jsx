import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/', isRoute: true },
  { label: 'About', href: '#about' },
  { label: 'Departments', href: '#departments' },
  { label: 'Contact', href: '#contact' },
];

const academics = [
  { label: 'SSCCS', href: '/ssccs', isRoute: true },
  { label: 'SSCCM', href: '/ssccm', isRoute: true },
  { label: 'Admissions', href: '#contact' },
  { label: 'Circulars', href: '#updates' },
];

const socials = [
  { label: 'Facebook', icon: Facebook, href: '#' },
  { label: 'Instagram', icon: Instagram, href: '#' },
  { label: 'LinkedIn', icon: Linkedin, href: '#' },
  { label: 'YouTube', icon: Youtube, href: '#' },
];

const Footer = () => {
  return (
    <footer className="bg-[#00122E] text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 sm:pt-20 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo/logo.png"
                alt="Gurukul Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-lg font-bold tracking-tight text-white">
                Gurukul
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-5 max-w-xs">
              Shree Swaminarayan Gurukul School &amp; College — nurturing
              excellence through values, discipline, and holistic education.
            </p>
            <div className="space-y-2.5 text-sm text-white/45">
              <p>Rupani Sardar Nagar Road, Sardar Nagar, Bhavnagar, Gujarat 364001</p>
              <p>0278 256 8222</p>
              <p>info@gurukulschool.edu.in</p>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-sm text-white/50 hover:text-[#FF9500] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-white/50 hover:text-[#FF9500] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Academics */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Academics
            </h4>
            <ul className="space-y-3">
              {academics.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-sm text-white/50 hover:text-[#FF9500] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-white/50 hover:text-[#FF9500] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Connect */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Connect
            </h4>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-6">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-white/50 hover:text-[#FF9500] hover:border-[#FF9500]/25 hover:bg-[#FF9500]/8 transition-all duration-200"
                  >
                    <Icon size={16} strokeWidth={2} />
                  </a>
                );
              })}
            </div>

            {/* Apply Now CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#FF9500] text-white text-sm font-semibold rounded-lg hover:bg-[#E88600] hover:shadow-md active:scale-[0.98] transition-all duration-200"
            >
              Apply Now
              <ArrowRight size={16} strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-white/8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30 text-center sm:text-left">
            &copy; 2026 Shree Swaminarayan Gurukul. All rights reserved.
          </p>
          <p className="text-xs text-white/20 text-center sm:text-right">
            Designed &amp; Developed by Midnight Sphere Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
