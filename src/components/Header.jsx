import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Phone, ArrowUpRight } from 'lucide-react';
import { CLOUDINARY_MEDIA, useWebsiteMedia } from '../services/mediaConfig';

export default function Header({ onOpenEnquiry, onOpenBrochure }) {
  const media = useWebsiteMedia();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Club House', href: '#clubhouse', id: 'clubhouse' },
    { name: 'Elevations', href: '#elevations', id: 'elevations' },
    { name: 'Floor Plans', href: '#floorplans', id: 'floorplans' },
    { name: 'Amenities', href: '#amenities', id: 'amenities' },
    { name: 'Our Projects', href: '#projects', id: 'projects' },
    { name: 'Specifications', href: '#specifications', id: 'specifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section tracking for active state
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <div className="header-inner">
        {/* Brand Logos Side by Side: 1) Sanghi City, 2) Ambhuja by Maytri */}
        <div className="header-brand-group">
          <a href="#home" className="header-brand-secondary" onClick={(e) => handleNavClick(e, '#home')} title="Sanghi City">
            <img
              src={media.sanghiLogo || CLOUDINARY_MEDIA.sanghiLogo || '/sanghicity-logo.png'}
              alt="Sanghi City Logo"
              className="header-secondary-logo-img"
            />
          </a>

          <div className="header-brand-divider" aria-hidden="true" />

          <a href="#home" className="header-brand" onClick={(e) => handleNavClick(e, '#home')} title="Ambhuja by Maytri">
            <img
              src={media.logo || CLOUDINARY_MEDIA.logo}
              alt="Ambhuja by Maytri Logo"
              className="header-logo-img"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.id ? 'nav-link--active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                  {activeSection === link.id && <span className="nav-active-dot" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Right Actions */}
        <div className="header-right">
          <div className="rera-badge" title="Telangana RERA Registered">
            <Shield size={13} className="rera-icon" />
            <span className="rera-text">RERA: <strong>P02400007647</strong></span>
          </div>

          <button
            className="header-cta-btn"
            onClick={onOpenEnquiry}
            aria-label="Enquire about Maytri Ambhuja"
          >
            <span>Enquire Now</span>
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer & Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="mobile-nav-backdrop" 
          onClick={() => setMobileMenuOpen(false)} 
          aria-hidden="true" 
        />
      )}

      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'mobile-nav-drawer--open' : ''}`}>
        <div className="mobile-nav-content">
          <div className="mobile-drawer-top">
            <div className="mobile-drawer-logo-wrap">
              <img
                src={media.sanghiLogo || CLOUDINARY_MEDIA.sanghiLogo || '/sanghicity-logo.png'}
                alt="Sanghi City"
                className="mobile-drawer-secondary-logo"
              />
              <div className="mobile-drawer-divider" aria-hidden="true" />
              <img
                src={media.logo || CLOUDINARY_MEDIA.logo}
                alt="Ambhuja by Maytri"
                className="mobile-drawer-logo"
              />
            </div>
            <button 
              className="mobile-drawer-close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mobile-rera-tag">
            <Shield size={14} />
            <span>RERA NO: P02400007647</span>
          </div>

          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.id ? 'mobile-nav-link--active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-actions">
            <button className="btn-primary w-full" onClick={() => { setMobileMenuOpen(false); onOpenEnquiry(); }}>
              <span>Enquire Now</span>
              <ArrowUpRight size={16} />
            </button>
            <button className="btn-secondary w-full" onClick={() => { setMobileMenuOpen(false); onOpenBrochure(); }}>
              <span>Download Brochure</span>
            </button>
            <a href="tel:9849012345" className="mobile-call-link">
              <Phone size={15} />
              <span>Call: +91 98490 12345</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
