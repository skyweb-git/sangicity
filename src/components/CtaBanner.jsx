import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CLOUDINARY_MEDIA, useWebsiteMedia } from '../services/mediaConfig';

export default function CtaBanner() {
  const media = useWebsiteMedia();

  return (
    <section className="cta-banner-section">
      <div className="cta-banner">
        {/* Background video */}
        <video
          src={media.ctaVideo || CLOUDINARY_MEDIA.ctaVideo}
          poster={media.ctaPoster || CLOUDINARY_MEDIA.ctaPoster}
          autoPlay
          loop
          muted
          playsInline
          className="cta-banner__bg"
        />
        {/* Dark navy overlay */}
        <div className="cta-banner__overlay" />

        {/* Center content */}
        <div className="cta-banner__content">
          <h2 className="cta-banner__heading">
            Melt rigid assets into{'\n'}fluid yield.
          </h2>

          <div className="cta-banner__buttons">
            <button className="cta-btn cta-btn--primary">
              <span>Launch App</span>
              <div className="cta-btn__arrow">
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </div>
            </button>

            <button className="cta-btn cta-btn--secondary">
              <span>Read Docs</span>
              <ArrowUpRight size={14} strokeWidth={2} className="cta-btn__inline-arrow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
