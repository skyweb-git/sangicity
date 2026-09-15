import React from 'react';
import { Building2, MapPin, Sparkles, ArrowUpRight, CheckCircle2, ShieldCheck, Home, Trees, Layers } from 'lucide-react';
import { CLOUDINARY_MEDIA } from '../services/mediaConfig';

export default function OurProjects({ onOpenProjectInquiry }) {
  const projects = [
    {
      id: 'ambhuja',
      title: 'Maytri Ambhuja',
      tagline: 'Flagship 55-Acre Villa Township',
      location: 'Sanghi City, Near ORR Exit 11, Hyderabad',
      status: 'Ready for VIP Booking',
      image: CLOUDINARY_MEDIA.gallery[0]?.url || 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1788847939/maytri_ambhuja/gallery/gallery_001.jpg',
      specs: [
        { label: 'Project Area', value: '55 Acres' },
        { label: 'Villas', value: '516 Premium Units' },
        { label: 'Clubhouse', value: '90,000 Sq.Ft' },
        { label: 'Starting Price', value: '3.2 Cr*' }
      ],
      features: ['222 & 300 SQ YDS Triplex Villas', '4.5-Acre Central Park', 'RERA: P02400007647']
    },
    {
      id: 'palms',
      title: 'Sanghi City Palms',
      tagline: 'Signature Luxury Gated Enclave',
      location: 'Sanghi City Master Township, Hyderabad',
      status: 'Phase 1 Fast Selling',
      image: CLOUDINARY_MEDIA.gallery[1]?.url || 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1788847941/maytri_ambhuja/gallery/gallery_002.jpg',
      specs: [
        { label: 'Project Area', value: '35 Acres' },
        { label: 'Villas', value: '280 Luxury Villas' },
        { label: 'Clubhouse', value: '50,000 Sq.Ft' },
        { label: 'Configuration', value: '4 & 5 BHK Triplex' }
      ],
      features: ['Private Temperature Pool', 'Lush Forest Avenues', 'Gated 3-Tier Security']
    },
    {
      id: 'meadows',
      title: 'Maytri Green Meadows',
      tagline: 'Eco-Luxury Sustainable Villa Estates',
      location: 'Growth Corridor, East Hyderabad',
      status: 'Exclusive Preview',
      image: CLOUDINARY_MEDIA.gallery[3]?.url || 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1788847942/maytri_ambhuja/gallery/gallery_004.jpg',
      specs: [
        { label: 'Project Area', value: '40 Acres' },
        { label: 'Villas', value: '320 Eco Villas' },
        { label: 'Open Space', value: '60% Greenery' },
        { label: 'Type', value: 'Contemporary Villas' }
      ],
      features: ['Solar Powered Community', 'Organic Orchards', 'Outdoor Amphitheater']
    },
    {
      id: 'grandeur',
      title: 'Maytri Grandeur Suites',
      tagline: 'Boutique High-End Township Living',
      location: 'ORR Connectivity Hub, Hyderabad',
      status: 'Upcoming Launch',
      image: CLOUDINARY_MEDIA.gallery[8]?.url || 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1788847947/maytri_ambhuja/gallery/gallery_009.jpg',
      specs: [
        { label: 'Project Area', value: '20 Acres' },
        { label: 'Residences', value: 'Executive Suites' },
        { label: 'Amenities', value: 'Sky Lounge & Spa' },
        { label: 'Access', value: '2 Mins to ORR' }
      ],
      features: ['Infinity Sky Deck', 'Concierge & Valet', 'Smart Home Automation']
    }
  ];

  return (
    <section id="projects" className="section-wrapper projects-section" aria-label="Our Projects and Townships">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="eyebrow-tag">LANDMARK DEVELOPMENTS</span>
          <h2 className="section-title">
            Our Projects
          </h2>
          <p className="section-subtitle">
            Explore premier master-planned townships and signature villa communities developed with unmatched luxury, architectural brilliance, and strategic connectivity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card-image-wrap">
                <img
                  src={project.image}
                  alt={`${project.title} - Luxury Villa Development in Hyderabad`}
                  className="project-card-img"
                  loading="lazy"
                />
                <div className="project-status-badge">
                  <Sparkles size={13} className="text-gold" />
                  <span>{project.status}</span>
                </div>
              </div>

              <div className="project-card-content">
                <div className="project-header-row">
                  <h3 className="project-card-title">{project.title}</h3>
                  <span className="project-tagline">{project.tagline}</span>
                </div>

                <div className="project-location-row">
                  <MapPin size={14} className="text-cyan" />
                  <span>{project.location}</span>
                </div>

                {/* Specs Grid */}
                <div className="project-specs-grid">
                  {project.specs.map((spec, i) => (
                    <div key={i} className="project-spec-item">
                      <span className="project-spec-lbl">{spec.label}</span>
                      <span className="project-spec-val">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Key Features Bullet List */}
                <div className="project-features-list">
                  {project.features.map((feat, i) => (
                    <div key={i} className="project-feature-item">
                      <CheckCircle2 size={13} className="text-emerald-500" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action Button */}
                <div className="project-card-actions">
                  <button
                    className="btn-primary project-cta-btn"
                    onClick={() => onOpenProjectInquiry(project.title)}
                    aria-label={`Get more info for ${project.title}`}
                  >
                    <span>For More Info</span>
                    <ArrowUpRight size={15} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
