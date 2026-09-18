import React from 'react';
import { Building2, MapPin, Sparkles, ArrowUpRight, CheckCircle2, ShieldCheck, Home, Trees, Layers } from 'lucide-react';
import { useWebsiteContent } from '../services/contentService';

export default function OurProjects({ onOpenProjectInquiry }) {
  const content = useWebsiteContent();
  const projectsSection = content?.projectsSection || {};
  const eyebrowTag = projectsSection.eyebrowTag || 'LANDMARK DEVELOPMENTS';
  const title = projectsSection.title || 'Our Projects';
  const subtitle = projectsSection.subtitle || 'Explore premier master-planned townships and signature villa communities developed with unmatched luxury, architectural brilliance, and strategic connectivity.';
  const projects = projectsSection.items && projectsSection.items.length > 0 
    ? projectsSection.items 
    : [];

  return (
    <section id="projects" className="section-wrapper projects-section" aria-label="Our Projects and Townships">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="eyebrow-tag">{eyebrowTag}</span>
          <h2 className="section-title">
            {title}
          </h2>
          <p className="section-subtitle">
            {subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id || index} className="project-card">
              <div className="project-card-image-wrap">
                <img
                  src={project.image}
                  alt={`${project.title} - Luxury Villa Development in Hyderabad`}
                  className="project-card-img"
                  loading="lazy"
                />
                {project.status && (
                  <div className="project-status-badge">
                    <Sparkles size={13} className="text-gold" />
                    <span>{project.status}</span>
                  </div>
                )}
              </div>

              <div className="project-card-content">
                <div className="project-header-row">
                  <h3 className="project-card-title">{project.title}</h3>
                  {project.tagline && <span className="project-tagline">{project.tagline}</span>}
                </div>

                {project.location && (
                  <div className="project-location-row">
                    <MapPin size={14} className="text-cyan" />
                    <span>{project.location}</span>
                  </div>
                )}

                {/* Specs Grid */}
                {Array.isArray(project.specs) && project.specs.length > 0 && (
                  <div className="project-specs-grid">
                    {project.specs.map((spec, i) => (
                      <div key={i} className="project-spec-item">
                        <span className="project-spec-lbl">{spec.label}</span>
                        <span className="project-spec-val">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Features Bullet List */}
                {Array.isArray(project.features) && project.features.length > 0 && (
                  <div className="project-features-list">
                    {project.features.map((feat, i) => (
                      <div key={i} className="project-feature-item">
                        <CheckCircle2 size={13} className="text-emerald-500" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Card Action Button */}
                <div className="project-card-actions">
                  <button
                    className="btn-primary project-cta-btn"
                    onClick={() => onOpenProjectInquiry(project.title)}
                    aria-label={`Get more info for ${project.title}`}
                  >
                    <span>{project.buttonText || 'For More Info'}</span>
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
