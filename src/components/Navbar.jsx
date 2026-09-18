import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar-container">
      {/* Left Logo */}
      <div className="navbar-logo">
        <div className="logo-target-icon">
          <div className="logo-outer-ring">
            <div className="logo-inner-dot"></div>
          </div>
        </div>
        <span className="logo-text">RIVR</span>
      </div>

      {/* Center Desktop Navigation */}
      <nav className={`navbar-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <a href="#ecosystem" className="nav-link">Ecosystem</a>
        <a href="#economics" className="nav-link nav-link-dropdown">
          <span>Economics</span>
          <ChevronDown className="dropdown-icon" size={14} />
        </a>
        <a href="#developers" className="nav-link">Developers</a>
        <a href="#governance" className="nav-link">Governance</a>
      </nav>

      {/* Right Book Demo Button */}
      <div className="navbar-actions">
        <button className="book-demo-btn">
          <span className="book-demo-text">Book Demo</span>
          <div className="book-demo-arrow-badge">
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </div>
        </button>

        {/* Mobile Hamburger Menu */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
