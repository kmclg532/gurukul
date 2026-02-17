import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import MobileDrawer from './MobileDrawer';

const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'Departments',
    href: '#departments',
    dropdown: [
      { name: 'SSCCS', href: '/ssccs', isRoute: true },
      { name: 'SSCCM', href: '/ssccm', isRoute: true },
    ],
  },
  { name: 'Updates', href: '#updates' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact Us', href: '#contact' },
];

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownTimeout = useRef(null);

  // Hover handlers for dropdown with small delay to prevent flicker
  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left: Logo + Title */}
            <a href="#" className="flex items-center gap-3 shrink-0">
              <img
                src="/logo/logo.png"
                alt="Gurukul Logo"
                className="h-10 md:h-14 w-auto object-contain"
              />
              <div className="sm:block">
                <h1 className="text-base md:text-lg font-bold text-[#0B1F3F] leading-tight tracking-tight">
                  Shree Swaminarayan College
                </h1>
                <p className="text-[11px] md:text-xs text-[#0B1F3F]/60 font-medium -mt-0.5">
                  of Computer Science, Commerce & Management
                </p>
              </div>
            </a>

            {/* Middle: Nav Links (Desktop) */}
            <ul className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <li
                    key={link.name}
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className="relative flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-[#0B1F3F]/70 hover:text-[#0B1F3F] transition-colors duration-200 group"
                    >
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          dropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                      {/* Hover underline accent */}
                      <span className="absolute bottom-0.5 left-4 right-4 h-[2px] bg-[#FF9500] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                    </button>

                    {/* Dropdown */}
                    <div
                      className={`absolute top-full left-0 mt-1.5 w-48 bg-white rounded-xl shadow-lg shadow-[#0B1F3F]/6 border border-[#0B1F3F]/6 overflow-hidden transition-all duration-200 origin-top ${
                        dropdownOpen
                          ? 'opacity-100 scale-100 translate-y-0'
                          : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      {link.dropdown.map((item) =>
                        item.isRoute ? (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-2 px-4 py-3 text-sm text-[#0B1F3F]/70 hover:text-[#FF9500] hover:bg-[#FF9500]/5 transition-colors duration-150 border-b border-[#0B1F3F]/4 last:border-0"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#FF9500]/40" />
                            {item.name}
                          </Link>
                        ) : (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-2 px-4 py-3 text-sm text-[#0B1F3F]/70 hover:text-[#FF9500] hover:bg-[#FF9500]/5 transition-colors duration-150 border-b border-[#0B1F3F]/4 last:border-0"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#FF9500]/40" />
                            {item.name}
                          </a>
                        )
                      )}
                    </div>
                  </li>
                ) : link.href === '/' ? (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="relative px-4 py-2 rounded-lg text-sm font-medium text-[#0B1F3F]/70 hover:text-[#0B1F3F] transition-colors duration-200 group"
                    >
                      {link.name}
                      <span className="absolute bottom-0.5 left-4 right-4 h-[2px] bg-[#FF9500] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                    </Link>
                  </li>
                ) : (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="relative px-4 py-2 rounded-lg text-sm font-medium text-[#0B1F3F]/70 hover:text-[#0B1F3F] transition-colors duration-200 group"
                    >
                      {link.name}
                      <span className="absolute bottom-0.5 left-4 right-4 h-[2px] bg-[#FF9500] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                    </a>
                  </li>
                )
              )}
            </ul>

            {/* Right: CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="#admission"
                className="hidden lg:inline-flex items-center px-5 py-2.5 bg-[#FF9500] hover:bg-[#e68600] text-white text-sm font-semibold rounded-lg shadow-md shadow-[#FF9500]/25 hover:shadow-lg hover:shadow-[#FF9500]/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                Admission Now!
              </a>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="lg:hidden p-2 rounded-lg text-[#0B1F3F] hover:bg-[#0B1F3F]/5 transition-colors duration-200"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};

export default Navbar;
