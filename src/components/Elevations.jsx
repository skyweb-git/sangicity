import React, { useState } from 'react';
import { Maximize2, Filter, Building, Sparkles, Trees, Trophy } from 'lucide-react';
import { CLOUDINARY_MEDIA } from '../services/mediaConfig';

export default function Elevations({ onOpenLightbox }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      src: CLOUDINARY_MEDIA.elevations?.elevation01 || '/elevations/elevation_01.webp',
      alt: 'Maytri Ambhuja Luxury Villa Elevation - Front Facade View 01',
      title: 'Modern Villa Front Facade',
      category: 'villas',
      badge: 'Villa Elevation 01'
    },
    {
      src: CLOUDINARY_MEDIA.elevations?.elevation02 || '/elevations/elevation_02.webp',
      alt: 'Maytri Ambhuja Luxury Villa Elevation - Corner Angle View 02',
      title: 'Corner Villa Perspective',
      category: 'villas',
      badge: 'Villa Elevation 02'
    },
    {
      src: CLOUDINARY_MEDIA.elevations?.elevation03 || '/elevations/elevation_03.webp',
      alt: 'Maytri Ambhuja Luxury Villa Elevation - Grand Modern View 03',
      title: 'Grand Contemporary Architecture',
      category: 'villas',
      badge: 'Villa Elevation 03'
    },
    {
      src: CLOUDINARY_MEDIA.elevations?.elevation04 || '/elevations/elevation_04.webp',
      alt: 'Maytri Ambhuja Luxury Villa Elevation - Street Enclave View 04',
      title: 'Villa Enclave Streetscape',
      category: 'villas',
      badge: 'Villa Elevation 04'
    },
    {
      src: CLOUDINARY_MEDIA.elevations?.elevation05 || '/elevations/elevation_05.webp',
      alt: 'Maytri Ambhuja Luxury Villa Elevation - Contemporary Architecture 05',
      title: 'Boutique Villa Elevation',
      category: 'villas',
      badge: 'Villa Elevation 05'
    },
    {
      src: CLOUDINARY_MEDIA.elevations?.elevation06 || '/elevations/elevation_06.webp',
      alt: 'Maytri Ambhuja Luxury Villa Elevation - Private Garden Perspective 06',
      title: 'Private Garden Villa Elevation',
      category: 'villas',
      badge: 'Villa Elevation 06'
    },
    {
      src: CLOUDINARY_MEDIA.elevations?.elevation07 || '/elevations/elevation_07.webp',
      alt: 'Maytri Ambhuja Luxury Villa Elevation - Terrace & Balcony View 07',
      title: 'Terrace & Balcony Architecture',
      category: 'villas',
      badge: 'Villa Elevation 07'
    },
    {
      src: CLOUDINARY_MEDIA.elevations?.pool || '/elevations/elevation_pool.webp',
      alt: 'Maytri Ambhuja 90,000 SFT Clubhouse Resort Swimming Pool & Deck',
      title: 'Resort Swimming Pool & Deck',
      category: 'clubhouse',
      badge: 'Clubhouse Amenity'
    },
    {
      src: CLOUDINARY_MEDIA.elevations?.cricketPitch || '/elevations/elevation_cricket_pitch.webp',
      alt: 'Maytri Ambhuja Professional Cricket Pitch & Outdoor Sports Arena',
      title: 'Cricket Pitch & Sports Arena',
      category: 'amenities',
      badge: 'Outdoor Sports'
    },
    {
      src: CLOUDINARY_MEDIA.elevations?.parkDay || '/elevations/elevation_park_day.webp',
      alt: 'Maytri Ambhuja 4.5 Acres Central Park & Landscaped Promenade',
      title: '4.5 Acres Central Park (Day View)',
      category: 'amenities',
      badge: 'Central Park'
    }
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="elevations" className="section-wrapper elevations-section" aria-label="Villa Elevations and Community Gallery">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="eyebrow-tag">ARCHITECTURAL DESIGN &amp; ELEVATIONS</span>
          <h2 className="section-title">
            Project Elevations &amp; Landscapes
          </h2>
          <p className="section-subtitle">
            Explore authentic architectural elevations of our luxury villas, resort clubhouse amenities, and the expansive 4.5-acre central park.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="gallery-filter-bar">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'filter-btn--active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Elevations ({galleryItems.length})
          </button>
          <button
            className={`filter-btn ${activeFilter === 'villas' ? 'filter-btn--active' : ''}`}
            onClick={() => setActiveFilter('villas')}
          >
            Villa Elevations (7)
          </button>
          <button
            className={`filter-btn ${activeFilter === 'clubhouse' ? 'filter-btn--active' : ''}`}
            onClick={() => setActiveFilter('clubhouse')}
          >
            Clubhouse &amp; Pool
          </button>
          <button
            className={`filter-btn ${activeFilter === 'amenities' ? 'filter-btn--active' : ''}`}
            onClick={() => setActiveFilter('amenities')}
          >
            Parks &amp; Sports Arena
          </button>
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="elevations-grid">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="elevation-card"
              onClick={() => onOpenLightbox(filteredItems, idx)}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onOpenLightbox(filteredItems, idx);
                }
              }}
            >
              <div className="elevation-img-wrapper">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="elevation-img"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/hero-bg.png";
                  }}
                />
                <div className="elevation-hover-overlay">
                  <span className="elevation-zoom-icon">
                    <Maximize2 size={20} />
                  </span>
                  <div className="elevation-details">
                    <h3 className="elevation-title">{item.title}</h3>
                    <span className="elevation-category">{item.alt}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
