import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { CLOUDINARY_MEDIA, useWebsiteMedia } from '../services/mediaConfig';
import { useWebsiteContent } from '../services/contentService';

export default function ClubHouse({ onOpenLightbox }) {
  const websiteContent = useWebsiteContent();
  const media = useWebsiteMedia();
  const clubhouseData = websiteContent?.clubhouse || {};
  const aboutData = websiteContent?.about || {};

  const sectionTitle = clubhouseData.title || 'Club House';
  const tagline = clubhouseData.tagline || 'RESORT-STYLE LIVING';
  const description = clubhouseData.description || 'Indulge in resort-style amenities at the Club House designed to enhance your well-being and offer a luxurious escape within your own community. Also enjoy a dedicated central park of 4.5 acres.';
  const clubhouseSize = aboutData.clubhouseSize || '90,000 S.ft Club House';

  const clubhouseImages = [
    {
      src: media.clubhouse?.frontPanorama || CLOUDINARY_MEDIA.clubhouse?.frontPanorama || '/clubhouse/clubhouse_front_panorama.webp',
      alt: 'Maytri Ambhuja 90,000 SFT Club House Grand Facade & Swimming Pool',
      title: '90,000 SFT Grand Club House & Pool',
      caption: 'World-Class Architecture with Temperature-Controlled Infinity Pool Deck'
    },
    {
      src: media.clubhouse?.poolAerial || CLOUDINARY_MEDIA.clubhouse?.poolAerial || '/clubhouse/clubhouse_pool_aerial.webp',
      alt: 'Maytri Ambhuja Club House Swimming Pool & Sun Deck',
      title: 'Resort Swimming Pool & Sun Deck',
      caption: 'Olympic Dimension Lap Pool with Private Cabanas & Loungers'
    },
    {
      src: media.clubhouse?.eveningElevation || CLOUDINARY_MEDIA.clubhouse?.eveningElevation || '/clubhouse/clubhouse_evening_elevation.webp',
      alt: 'Maytri Ambhuja Evening Illuminated Club House Elevation',
      title: 'Evening Illumination & Poolside',
      caption: 'Breathtaking Night View with Poolside Reflection'
    },
    {
      src: media.clubhouse?.courtyardLawn || CLOUDINARY_MEDIA.clubhouse?.courtyardLawn || '/clubhouse/clubhouse_courtyard_lawn.webp',
      alt: 'Maytri Ambhuja Club House Landscaped Courtyard & Lawn',
      title: 'Landscaped Courtyard & Lawn',
      caption: 'Lush Green Promenade with Palm Trees and Seating Alcoves'
    },
    {
      src: media.elevations?.pool || CLOUDINARY_MEDIA.elevations?.pool || '/elevations/elevation_pool.webp',
      alt: 'Maytri Ambhuja Resort Swimming Pool & Deck',
      title: 'Resort Swimming Pool Deck',
      caption: 'Tropical Landscape and Poolside Relaxation Area'
    },
    {
      src: media.elevations?.cricketPitch || CLOUDINARY_MEDIA.elevations?.cricketPitch || '/elevations/elevation_cricket_pitch.webp',
      alt: 'Maytri Ambhuja Professional Cricket Pitch & Sports Arena',
      title: 'Cricket Pitch & Outdoor Sports',
      caption: 'Professional Turf Pitch for Weekend Tournaments and Sports Enthusiasts'
    },
    {
      src: media.elevations?.parkDay || CLOUDINARY_MEDIA.elevations?.parkDay || '/elevations/elevation_park_day.webp',
      alt: 'Maytri Ambhuja 4.5 Acres Central Park & Promenade',
      title: '4.5 Acres Central Park',
      caption: 'Expansive Serene Parkland with Jogging Tracks and Family Pavilions'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="clubhouse" className="section-wrapper clubhouse-section" aria-label="Clubhouse Showcase">
      <div className="section-container">
        <div className="clubhouse-header-grid">
          <div>
            <span className="eyebrow-tag">{tagline}</span>
            <h2 className="section-title">
              {sectionTitle}
            </h2>
          </div>
          <div className="clubhouse-intro-box">
            <p className="section-lead-text">
              {description}
            </p>
            <div className="club-badge-row">
              <span className="pill-badge">{clubhouseSize}</span>
              <span className="pill-badge">4.5 Acres Central Park</span>
            </div>
          </div>
        </div>

        {/* Interactive Gallery Showcase */}
        <div className="clubhouse-gallery-container">
          {/* Main Featured View */}
          <div
            className="clubhouse-main-display"
            onClick={() => onOpenLightbox(clubhouseImages, activeIndex)}
            role="button"
            tabIndex={0}
            aria-label={`View full image: ${clubhouseImages[activeIndex].title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onOpenLightbox(clubhouseImages, activeIndex);
              }
            }}
          >
            <img
              src={clubhouseImages[activeIndex].src}
              alt={clubhouseImages[activeIndex].alt}
              className="clubhouse-featured-img"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/hero-bg.png";
              }}
            />
            <div className="clubhouse-overlay-card">
              <div className="overlay-info">
                <span className="overlay-tag">Featured View</span>
                <h3 className="overlay-title">{clubhouseImages[activeIndex].title}</h3>
                <p className="overlay-caption">{clubhouseImages[activeIndex].caption}</p>
              </div>
              <div className="overlay-zoom-btn" title="Expand view">
                <Maximize2 size={18} />
              </div>
            </div>
          </div>

          {/* Thumbnail Selectors */}
          <div className="clubhouse-thumbs-grid">
            {clubhouseImages.map((img, idx) => (
              <button
                key={idx}
                className={`thumb-card ${activeIndex === idx ? 'thumb-card--active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Select ${img.title}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="thumb-img"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/hero-bg.png";
                  }}
                />
                <div className="thumb-info">
                  <span className="thumb-title">{img.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
