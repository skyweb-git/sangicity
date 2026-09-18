import React from 'react';
import { Award, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { CLOUDINARY_MEDIA, useWebsiteMedia } from '../services/mediaConfig';
import { useWebsiteContent } from '../services/contentService';

export default function About({ onOpenEnquiry }) {
  const websiteContent = useWebsiteContent();
  const media = useWebsiteMedia();
  const aboutData = websiteContent?.about || {};
  const heroData = websiteContent?.hero || {};

  const title = aboutData.sectionTitle || 'About Maytri Group';
  const quote = aboutData.description1 || '"Maytri Group is one of the reputed and veteran real estate firms in Hyderabad with 13+ years of experience, known for its superior quality and dependability. We stood at the top because of our extensive experience, knowledge, quality, reasonable prices, and enormous facilities we provide to our customers."';
  const reraNo = heroData.reraNumber || 'P02400007647';

  return (
    <section id="about" className="section-wrapper about-section">
      <div className="section-container">
        <div className="about-grid">
          {/* Left Column: Story & Philosophy */}
          <div className="about-content">
            <div className="section-eyebrow">
              <span className="eyebrow-tag">DEVELOPER OVERVIEW</span>
            </div>

            <h2 className="section-title">
              {title}
            </h2>

            <p className="about-quote">
              {quote}
            </p>

            <div className="about-meta-row">
              <div className="meta-card">
                <div className="meta-icon-badge">
                  <Award size={20} className="text-cyan" />
                </div>
                <div className="meta-details">
                  <span className="meta-val">13+ Years</span>
                  <span className="meta-lbl">Industry Experience</span>
                </div>
              </div>

              <div className="meta-card">
                <div className="meta-icon-badge">
                  <ShieldCheck size={20} className="text-cyan" />
                </div>
                <div className="meta-details">
                  <span className="meta-val">{reraNo}</span>
                  <span className="meta-lbl">Telangana RERA Registered</span>
                </div>
              </div>
            </div>

            <div className="about-cta-row">
              <button
                className="btn-primary"
                onClick={onOpenEnquiry}
                aria-label="Know More About Maytri Group"
              >
                <span>Know More About Maytri Group</span>
                <div className="btn-icon-bubble">
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Trust Card */}
          <div className="about-visual">
            <div className="about-card-frame">
              <img
                src={media.elevations?.elevation01 || media.gallery?.[4]?.url || CLOUDINARY_MEDIA.gallery[4].url}
                alt="Maytri Ambhuja luxury villa exterior architecture in Hyderabad"
                className="about-img"
                loading="lazy"
              />
              <div className="about-card-badge">
                <span className="badge-title">Maytri Ambhuja</span>
                <span className="badge-subtitle">Exclusive Villa Township • Hyderabad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
