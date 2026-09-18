import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, ShieldCheck, Trees, Home, Sparkles, Shield, Building2 } from 'lucide-react';
import { CLOUDINARY_MEDIA, useWebsiteMedia } from '../services/mediaConfig';
import { useWebsiteContent } from '../services/contentService';

export default function Hero({ onOpenBookVisit }) {
  const websiteContent = useWebsiteContent();
  const media = useWebsiteMedia();
  const heroData = websiteContent?.hero || {};

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setIsVideoLoaded(true);
    }
  }, []);

  const videoUrl = heroData.videoUrl || media.heroVideo || CLOUDINARY_MEDIA.heroVideo;
  const posterUrl = media.heroPoster || CLOUDINARY_MEDIA.heroPoster || '/hero-bg.png';
  const badgeText = heroData.eyebrowBadge || heroData.badge || 'MAYTRI GROUP & SANGHI CITY';
  const reraNo = heroData.reraNumber || 'P02400007647';
  const mainTitle = heroData.title || 'Exclusive Premium Villa Township near ORR, EXIT no 11.';
  const startingPrice = heroData.startingPrice ? `Spacious Villa Starts from ${heroData.startingPrice} + Amenities Extra` : 'Spacious Villa Starts from ₹3.8 Cr* + Amenities Extra';
  const heroDescription = heroData.description || "Experience ultra-luxury living spread across a magnificent 55-acre master-planned township with 516 bespoke triplex villas and Hyderabad's grandest 90,000 sq.ft clubhouse.";

  const defaultHighlightIcons = [Trees, Home, Building2, Shield];
  const keyHighlights = (heroData.highlights && heroData.highlights.length > 0)
    ? heroData.highlights.map((h, i) => ({
        icon: defaultHighlightIcons[i % defaultHighlightIcons.length],
        title: h.title,
        subtitle: h.subtitle
      }))
    : [
        {
          icon: Trees,
          title: '55 Acres',
          subtitle: 'Project Areas'
        },
        {
          icon: Home,
          title: '516',
          subtitle: 'Premium Villas'
        },
        {
          icon: Building2,
          title: '90,000 Sft',
          subtitle: 'Club House'
        },
        {
          icon: Shield,
          title: 'Gated Community',
          subtitle: '3-Tier Security'
        }
      ];

  return (
    <section id="home" className="hero-section" aria-label="Maytri Ambhuja Hero">
      {/* Background Visual Layer */}
      <div className="hero-media-wrapper">
        {!isVideoLoaded && (
          <div className="hero-video-loader" aria-hidden="true">
            <div className="hero-loader-pulse">
              <div className="hero-loader-ring" />
              <img src="/sanghicity-icon.png" alt="Sanghi City" className="hero-loader-icon" />
            </div>
            <span className="hero-loader-text">Loading Experience...</span>
          </div>
        )}

        <video
          ref={videoRef}
          className={`hero-media-bg ${isVideoLoaded ? 'hero-media-bg--loaded' : 'hero-media-bg--loading'}`}
          src={videoUrl}
          poster={posterUrl}
          autoPlay
          loop
          muted
          playsInline
          onPlay={() => setIsVideoLoaded(true)}
          onPlaying={() => setIsVideoLoaded(true)}
          onCanPlay={() => setIsVideoLoaded(true)}
          onLoadedData={() => setIsVideoLoaded(true)}
        />
        <div className="hero-media-overlay" />
      </div>

      {/* Hero Content Container on Video */}
      <div className="hero-container">
        <div className="hero-content">
          {/* Top Developer & RERA Eyebrow */}
          <div className="hero-eyebrow">
            <span className="eyebrow-pill">{badgeText}</span>
            <span className="eyebrow-rera">
              <ShieldCheck size={14} className="eyebrow-rera-icon" />
              RERA NO: {reraNo}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title">
            {mainTitle}
          </h1>

          {/* Pricing Subtitle Below Main Title */}
          <div className="hero-price-badge">
            <span className="hero-price-highlight">
              {startingPrice}
            </span>
          </div>

          {/* Supporting Description */}
          <p className="hero-description">
            {heroDescription}
          </p>

          {/* Single Prominent CTA Button: Book Your Villa Visit */}
          <div className="hero-cta-group hero-cta-group--single">
            <button
              className="btn-primary hero-btn hero-btn--featured"
              onClick={onOpenBookVisit}
              aria-label="Book Your Villa Visit at Maytri Ambhuja"
            >
              <span className="hero-btn-text">Book Your Villa Visit</span>
              <div className="btn-icon-bubble">
                <ArrowUpRight size={17} strokeWidth={2.5} />
              </div>
            </button>
          </div>
        </div>

        {/* 4 Details for First Section (Hero Highlights Strip) */}
        <div className="hero-highlights-strip" role="region" aria-label="4 Key Township Highlights">
          <div className="highlights-grid">
            {keyHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="highlight-item" onClick={onOpenBookVisit} style={{ cursor: 'pointer' }} title="Click to Book Villa Visit">
                  <div className="highlight-icon-box">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <div className="highlight-text">
                    <span className="highlight-title">{item.title}</span>
                    <span className="highlight-subtitle">{item.subtitle}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
