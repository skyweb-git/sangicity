import React from 'react';
import { MapPin, Navigation, ExternalLink, Building, Compass } from 'lucide-react';
import { CLOUDINARY_MEDIA } from '../services/mediaConfig';
import { useWebsiteContent } from '../services/contentService';

export default function Location() {
  const websiteContent = useWebsiteContent();
  const contactData = websiteContent?.contact || {};

  const siteAddress = contactData.siteAddress || "Survey no: 156, ORR Exit-11, Pedda Amberpet, Hyderabad, Telangana 501511.";

  const projectMapUrl = "https://maps.app.goo.gl/NmLwb4SvKnMXnbpc8";
  const headOfficeMapUrl = "https://maps.app.goo.gl/sofp2YKZLr2iHCzy8";
  const siteOfficeMapUrl = "https://maps.app.goo.gl/DpsxVbJ5ckktLMZH9";

  return (
    <section id="location" className="section-wrapper location-section" aria-label="Location Map and Offices">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="eyebrow-tag">STRATEGIC CONNECTIVITY</span>
          <h2 className="section-title">
            Location Map
          </h2>
          <p className="section-subtitle">
            Located in Hyderabad, Maytri Ambhuja offers a thoughtfully planned villa township surrounded by green landscapes and tree-lined avenues.
          </p>
        </div>

        {/* Location Content Grid */}
        <div className="location-grid">
          {/* Left Column: Map Image Display */}
          <div className="location-map-frame">
            <img
              src={CLOUDINARY_MEDIA.gallery[1].url}
              alt="Maytri Ambhuja aerial layout and strategic connectivity in Hyderabad"
              className="location-map-img"
              loading="lazy"
            />
            <div className="location-map-overlay">
              <a
                href={projectMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary map-cta-btn"
                aria-label="Open Maytri Ambhuja on Google Maps"
              >
                <Navigation size={16} />
                <span>View on Google Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: Office Addresses & Details */}
          <div className="location-info-col">
            {/* Site Office Card */}
            <div className="office-card office-card--featured">
              <div className="office-card-header">
                <div className="office-icon-box">
                  <MapPin size={22} className="text-cyan" />
                </div>
                <div>
                  <span className="office-type-tag">TOWNSHIP EXPERIENCE CENTER</span>
                  <h3 className="office-title">Site Office</h3>
                </div>
              </div>
              <p className="office-address">
                {siteAddress}
              </p>
              <div className="office-action-row">
                <a
                  href={siteOfficeMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="office-link"
                >
                  <span>Open Site Directions</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Head Office Card */}
            <div className="office-card">
              <div className="office-card-header">
                <div className="office-icon-box">
                  <Building size={22} className="text-cyan" />
                </div>
                <div>
                  <span className="office-type-tag">CORPORATE HEADQUARTERS</span>
                  <h3 className="office-title">Head Office</h3>
                </div>
              </div>
              <p className="office-address">
                Old Bata Showroom Building, Vanasthalipuram, Next to Dmart, Hyderabad - 500070.
              </p>
              <div className="office-action-row">
                <a
                  href={headOfficeMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="office-link"
                >
                  <span>Open Head Office Directions</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Connectivity Note */}
            <div className="location-note-card">
              <Compass size={18} className="text-cyan" />
              <p className="location-note-text">
                Conveniently accessible via Hyderabad's Outer Ring Road (ORR Exit-11) offering smooth passage to prime residential and economic corridors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
