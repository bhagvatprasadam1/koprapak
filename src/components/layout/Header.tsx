import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { siteConfig } from '../../data/siteConfig';
import { kopraPakProduct } from '../../data/products';
import { MobileMenu } from './MobileMenu';
import { getWhatsAppUrl } from '../../lib/whatsapp';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Our Story', path: '/about' },
    { label: 'Our Process', path: '/process' },
    { label: 'Ingredients', path: '/ingredients' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-cream/95 backdrop-blur-md py-1.5 sm:py-2 border-b border-light-beige'
            : 'bg-cream py-2 sm:py-2.5 lg:py-3 border-b border-light-beige/60'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-between min-h-[72px] sm:min-h-[80px] lg:min-h-[90px] xl:min-h-[98px]">
          
          {/* Left: Brand Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center group select-none py-1 transition-transform duration-200"
              aria-label={`${siteConfig.brandName} Traditional Sweets Home`}
            >
              <img
                src="/images/logo.webp"
                alt="Kopra Pak - Authentic Gujarati Coconut Barfi & Nariyal Barfi Sweets by Bhagvat Prasadam"
                width="1024"
                height="452"
                className="w-36 sm:w-44 md:w-52 lg:w-60 xl:w-68 2xl:w-72 h-auto max-h-14 sm:max-h-16 lg:max-h-20 xl:max-h-22 object-contain transition-transform duration-300 group-hover:scale-105"
                loading="eager"
              />
            </Link>
          </div>

          {/* Center: Desktop Navigation Links (Centered mathematically with reduced gap) */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-1.5 absolute left-1/2 -translate-x-1/2"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 text-sm xl:text-base font-semibold rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-primary text-deep-brown font-bold shadow-sm'
                      : 'text-dark-text/90 hover:text-deep-brown hover:bg-primary/20'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: Actions, Desktop CTAs & Mobile Sidebar Button */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Official Store Link */}
            <a
              href={kopraPakProduct.productUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-1.5 text-xs text-deep-brown hover:bg-primary/25 font-bold px-3.5 py-2 rounded-full border border-primary/50 bg-white/80 transition-colors"
            >
              <span>Official Store</span>
              <ExternalLink className="w-3.5 h-3.5 text-deep-brown" />
            </a>

            {/* Desktop WhatsApp CTA */}
            <a
              href={getWhatsAppUrl({ context: 'general' })}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-deep-brown font-bold text-sm px-4 xl:px-5 py-2 rounded-full shadow-sm transition-all active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 text-deep-brown" />
              <span>Order / Enquire</span>
            </a>

            {/* Mobile Sidebar (Menu Drawer) Trigger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              className="lg:hidden p-2 text-deep-brown hover:text-primary hover:bg-light-beige/60 rounded-xl border border-light-beige/80 focus:outline-none focus:ring-2 focus:ring-primary transition-all active:scale-95 flex items-center justify-center"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;
