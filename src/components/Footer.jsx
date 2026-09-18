import React, { useState } from 'react';
import { ShieldCheck, Phone, Mail, Globe, ArrowUp, MapPin, Navigation, ExternalLink, Star, Info } from 'lucide-react';
import { CLOUDINARY_MEDIA } from '../services/mediaConfig';
import { useWebsiteContent } from '../services/contentService';

export default function Footer({ onOpenPrivacy }) {
  const websiteContent = useWebsiteContent();
  const contactData = websiteContent?.contact || {};
  const heroData = websiteContent?.hero || {};

  const phone = contactData.phone || '+91 98490 12345';
  const email = contactData.email || contactData.infoEmail || 'info@sanghicity.in';
  const websiteUrl = contactData.websiteUrl || 'https://www.sanghicity.in';
  const reraNo = heroData.reraNumber || 'P02400007647';

  // Toggle state between Site Office & Head Office Map
  const [activeMap, setActiveMap] = useState('site'); // 'site' | 'head'

  const siteMapEmbedUrl = "https://maps.google.com/maps?q=Pedda+Amberpet,+ORR+Exit-11,+Hyderabad,+Telangana+501511&t=&z=14&ie=UTF8&iwloc=&output=embed";
  const headOfficeMapEmbedUrl = "https://maps.google.com/maps?q=Old+Bata+Showroom+Building,+Vanasthalipuram,+Next+to+Dmart,+Hyderabad+-+500070&t=&z=15&ie=UTF8&iwloc=&output=embed";

  const siteMapDirectUrl = "https://maps.app.goo.gl/NmLwb4SvKnMXnbpc8";
  const headOfficeMapDirectUrl = "https://maps.app.goo.gl/sofp2YKZLr2iHCzy8";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Club House', href: '#clubhouse' },
    { name: 'Elevations', href: '#elevations' },
    { name: 'Floor Plans', href: '#floorplans' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Location Map', href: '#location' },
    { name: 'Specifications', href: '#specifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="site-footer" aria-label="Site Footer">
      <div className="footer-main-container">
        
        {/* Experience Center Map Block with Circular/Rounded Edge */}
        <div className="footer-experience-section">
          <div className="footer-experience-header">
            <h3 className="footer-experience-title">EXPERIENCE CENTER</h3>
            <div className="footer-map-toggle-pills">
              <button 
                type="button"
                className={`footer-map-toggle-btn ${activeMap === 'site' ? 'active' : ''}`}
                onClick={() => setActiveMap('site')}
              >
                <MapPin size={14} />
                <span>Site Office</span>
              </button>
              <button 
                type="button"
                className={`footer-map-toggle-btn ${activeMap === 'head' ? 'active' : ''}`}
                onClick={() => setActiveMap('head')}
              >
                <MapPin size={14} />
                <span>Head Office</span>
              </button>
            </div>
          </div>

          <div className="footer-experience-content">
            <div className="footer-map-card">
              <iframe
                title={activeMap === 'site' ? "Ambhuja Villas Experience Center Map" : "Head Office Map"}
                src={activeMap === 'site' ? siteMapEmbedUrl : headOfficeMapEmbedUrl}
                className="footer-map-iframe"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* White Popover Card inside Map matching exact user reference image */}
              <div className="map-info-popover">
                <div className="map-popover-top">
                  <h4 className="map-popover-title">
                    {activeMap === 'site' ? 'Ambhuja Villas' : 'Maytri Group Head Office'}
                  </h4>
                  <a
                    href={activeMap === 'site' ? siteMapDirectUrl : headOfficeMapDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-popover-external-btn"
                    title="Open in Google Maps"
                    aria-label="Open in Google Maps"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
                <p className="map-popover-address">
                  {activeMap === 'site'
                    ? 'Survey no:156, ORR Exit-11, Pedda Amberpet, Hyderabad, Telangana 501511'
                    : 'Old Bata Showroom Building, Vanasthalipuram, Next to Dmart, Hyderabad - 500070'}
                </p>
                <div className="map-popover-rating">
                  <span className="rating-score">4.9</span>
                  <div className="rating-stars">
                    <Star size={13} fill="#f59e0b" color="#f59e0b" />
                  </div>
                  <a
                    href={activeMap === 'site' ? siteMapDirectUrl : headOfficeMapDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rating-reviews-link"
                  >
                    (34)
                  </a>
                  <Info size={13} className="rating-info-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Details Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand & RERA */}
          <div className="footer-brand-col">
            <div className="footer-brand-logos">
              <a href="#home" title="Sanghi City">
                <img
                  src={CLOUDINARY_MEDIA.sanghiLogo || '/sanghicity-logo.png'}
                  alt="Sanghi City Logo"
                  className="footer-secondary-logo-img"
                />
              </a>
              <div className="footer-brand-divider" aria-hidden="true" />
              <a href="#home" title="Maytri Ambhuja">
                <img
                  src={CLOUDINARY_MEDIA.logo}
                  alt="Maytri Ambhuja Logo"
                  className="footer-logo-img"
                />
              </a>
            </div>
            <p className="footer-brand-tagline">
              Exclusive Villa Township in Hyderabad by Maytri Group.
            </p>
            <div className="footer-rera-box">
              <ShieldCheck size={16} className="text-cyan" />
              <div>
                <span className="footer-rera-lbl">Telangana RERA Reg.</span>
                <strong className="footer-rera-num">{reraNo}</strong>
              </div>
            </div>
            <p className="footer-firm-note">
              Maytri Group — 13+ years of reputed real-estate craftsmanship in Hyderabad.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Head Office */}
          <div className="footer-office-col">
            <h4 className="footer-heading">Head Office</h4>
            <address className="footer-address">
              Old Bata Showroom Building,<br />
              Vanasthalipuram, Next to Dmart,<br />
              Hyderabad - 500070.
            </address>
            <div className="footer-office-cta-row">
              <a 
                href={headOfficeMapDirectUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-directions-btn"
              >
                <Navigation size={14} />
                <span>Get Directions</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Column 4: Contact Channels */}
          <div className="footer-contact-col">
            <h4 className="footer-heading">Contact Details</h4>
            <ul className="footer-contact-list">
              <li>
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="footer-contact-link">
                  <Phone size={15} className="text-cyan" />
                  <span>{phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className="footer-contact-link" title="Official Email">
                  <Mail size={15} className="text-cyan" />
                  <span>{email}</span>
                </a>
              </li>
              <li>
                <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                  <Globe size={15} className="text-cyan" />
                  <span>www.sanghicity.in</span>
                </a>
              </li>
            </ul>

            <button onClick={scrollToTop} className="footer-scroll-top-btn" aria-label="Scroll to top of page">
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; 2026 MAYTRI GROUP, All Rights Reserved.
          </p>
          <div className="footer-legal-links">
            <button className="legal-link-btn" onClick={onOpenPrivacy}>
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
