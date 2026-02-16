import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="w-full bg-[#0B1F3F] text-white text-xs md:text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
          <a
            href="https://maps.google.com/?q=Gurukul+Campus+Sardarnagar+Bhavnagar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#FF9500] transition-colors duration-200"
          >
            <MapPin size={14} className="text-[#FF9500] shrink-0" />
            <span>Gurukulcampus, Sardarnagar, Bhavnagar</span>
          </a>

          <a
            href="mailto:director@swamigurukul.com"
            className="flex items-center gap-1.5 hover:text-[#FF9500] transition-colors duration-200"
          >
            <Mail size={14} className="text-[#FF9500] shrink-0" />
            <span>director@swamigurukul.com</span>
          </a>

          <a
            href="tel:+912782568222"
            className="flex items-center gap-1.5 hover:text-[#FF9500] transition-colors duration-200"
          >
            <Phone size={14} className="text-[#FF9500] shrink-0" />
            <span>91.278.2568222</span>
          </a>
        </div>

        {/* Right: Certifications */}
        <div className="hidden lg:flex items-center gap-1 text-white/70 text-[11px]">
          <span className="bg-[#FF9500]/15 text-[#FF9500] px-2 py-0.5 rounded font-medium">
            ISO 9001:2015
          </span>
          <span className="bg-[#FF9500]/15 text-[#FF9500] px-2 py-0.5 rounded font-medium">
            ISO 14001:2015
          </span>
          <span className="bg-[#FF9500]/15 text-[#FF9500] px-2 py-0.5 rounded font-medium">
            ISO 21001:2018
          </span>
          <span className="ml-1 text-white/50">|</span>
          <span className="ml-1">Affiliated by MKBU Bhavnagar</span>
          <span className="text-white/50">|</span>
          <span>Managed by SSP</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
