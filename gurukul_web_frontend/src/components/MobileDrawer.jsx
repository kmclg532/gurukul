import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  X,
  ChevronDown,
  MapPin,
  Mail,
  Phone,
} from 'lucide-react';

const MobileDrawer = ({ isOpen, onClose, navLinks }) => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleDropdown = (name) => {
    setExpandedItem(expandedItem === name ? null : name);
  };

  const handleLinkClick = () => {
    setExpandedItem(null);
    onClose();
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-998 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 z-999 h-full w-75 max-w-[85vw] bg-white/85 backdrop-blur-2xl shadow-2xl transition-transform duration-300 ease-out lg:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200/50">
          <div className="flex items-center gap-2.5">
            <img
              src="/logo/logo.png"
              alt="Gurukul Logo"
              className="h-9 w-auto object-contain"
            />
            <div>
              <h2 className="text-sm font-bold text-[#0B1F3F] leading-tight">
                SSCCS
              </h2>
              <p className="text-[10px] text-[#0B1F3F]/50 font-medium">
                Gurukul Campus
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-[#0B1F3F]/5 text-[#0B1F3F]/70 transition-colors duration-200"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-3 px-3">
          <ul className="space-y-0.5">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium text-[#0B1F3F]/80 hover:text-[#0B1F3F] hover:bg-[#0B1F3F]/5 transition-all duration-200"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        size={16}
                        className={`text-[#0B1F3F]/40 transition-transform duration-200 ${
                          expandedItem === link.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        expandedItem === link.name
                          ? 'max-h-40 opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <ul className="ml-4 pl-4 border-l-2 border-[#FF9500]/20 space-y-0.5 py-1">
                        {link.dropdown.map((item) => (
                          <li key={item.name}>
                            {item.isRoute ? (
                              <Link
                                to={item.href}
                                onClick={handleLinkClick}
                                className="block px-3 py-2.5 rounded-lg text-sm text-[#0B1F3F]/70 hover:text-[#FF9500] hover:bg-[#FF9500]/5 transition-all duration-200"
                              >
                                {item.name}
                              </Link>
                            ) : (
                              <a
                                href={item.href}
                                onClick={handleLinkClick}
                                className="block px-3 py-2.5 rounded-lg text-sm text-[#0B1F3F]/70 hover:text-[#FF9500] hover:bg-[#FF9500]/5 transition-all duration-200"
                              >
                                {item.name}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block px-4 py-3 rounded-xl text-[15px] font-medium text-[#0B1F3F]/80 hover:text-[#0B1F3F] hover:bg-[#0B1F3F]/5 transition-all duration-200"
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Section: CTA + Info */}
        <div className="border-t border-gray-200/50 px-5 py-4 space-y-4 bg-white/50">
          {/* Admission Button */}
          <a
            href="#admission"
            onClick={handleLinkClick}
            className="flex items-center justify-center w-full px-5 py-3 bg-[#FF9500] hover:bg-[#e68600] text-white text-sm font-semibold rounded-xl shadow-md shadow-[#FF9500]/25 transition-all duration-200"
          >
            Admission Now!
          </a>

          {/* Contact Info */}
          <div className="space-y-2.5">
            <a
              href="https://maps.google.com/?q=Gurukul+Campus+Sardarnagar+Bhavnagar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-xs text-[#0B1F3F]/60 hover:text-[#FF9500] transition-colors duration-200"
            >
              <MapPin size={13} className="text-[#FF9500] mt-0.5 shrink-0" />
              <span>Gurukulcampus, Sardarnagar, Bhavnagar</span>
            </a>
            <a
              href="mailto:director@swamigurukul.com"
              className="flex items-center gap-2 text-xs text-[#0B1F3F]/60 hover:text-[#FF9500] transition-colors duration-200"
            >
              <Mail size={13} className="text-[#FF9500] shrink-0" />
              <span>director@swamigurukul.com</span>
            </a>
            <a
              href="tel:+912782568222"
              className="flex items-center gap-2 text-xs text-[#0B1F3F]/60 hover:text-[#FF9500] transition-colors duration-200"
            >
              <Phone size={13} className="text-[#FF9500] shrink-0" />
              <span>91.278.2568222</span>
            </a>
          </div>

          {/* Certifications & Affiliations */}
          <div className="pt-2 border-t border-gray-100">
            <p className="text-[10px] text-[#0B1F3F]/40 leading-relaxed">
              <span className="text-[#FF9500] font-medium">ISO 9001:2015</span>
              {' · '}
              <span className="text-[#FF9500] font-medium">ISO 14001:2015</span>
              {' · '}
              <span className="text-[#FF9500] font-medium">ISO 21001:2018</span>
              {' Certified College'}
              <br />
              Affiliated by MKBU Bhavnagar · Managed by SSP
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
