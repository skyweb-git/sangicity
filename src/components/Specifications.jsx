import React, { useState } from 'react';
import {
  ChevronDown, Building, Paintbrush, Layers, DoorOpen,
  Utensils, Bath, Sun, Shield, Zap, Wifi, ArrowUpDown, FileText, ArrowUpRight
} from 'lucide-react';

export default function Specifications({ onOpenEnquiry }) {
  const [openIndex, setOpenIndex] = useState(0);

  const specCategories = [
    { 
      name: 'Structure', 
      icon: Building, 
      desc: 'RCC Framed Structure designed to withstand wind and seismic loads (Zone II compliant) with high-grade steel and ready-mix concrete.' 
    },
    { 
      name: 'Wall and Surface Finishes', 
      icon: Layers, 
      desc: 'Internal walls finished with smooth gypsum plaster/putty with premium acrylic emulsion. External walls with weatherproof texture paint.' 
    },
    { 
      name: 'Painting', 
      icon: Paintbrush, 
      desc: 'Premium low-VOC washable plastic emulsion for interior walls and ceilings. Long-life weatherproof elastomeric exterior paint.' 
    },
    { 
      name: 'Facade', 
      icon: Building, 
      desc: 'Contemporary modern facade with architectural louvers, double-height glass panels, stone cladding highlights, and weather-shield coating.' 
    },
    { 
      name: 'Flooring', 
      icon: Layers, 
      desc: '800x800mm premium glazed vitrified tiles in living, dining, and bedrooms. Anti-skid vitrified ceramic tiles in all bathrooms and balconies.' 
    },
    { 
      name: 'Doors & Windows', 
      icon: DoorOpen, 
      desc: 'Main door with engineered teakwood frame & designer shutter. UPVC/powder-coated aluminum sliding windows with integrated mosquito mesh.' 
    },
    { 
      name: 'Kitchen', 
      icon: Utensils, 
      desc: 'Polished granite countertop with stainless steel sink, 2-foot ceramic tile dado, dedicated RO drinking water point, and piped gas provision.' 
    },
    { 
      name: 'Bathrooms & Powder Room', 
      icon: Bath, 
      desc: 'Premium branded sanitary ware and CP fittings (Kohler/Grohe/equivalent) with wall-mounted EWCs, concealed flush tanks & hot/cold diverters.' 
    },
    { 
      name: 'Terrace', 
      icon: Sun, 
      desc: 'Waterproofed open terrace with high-albedo heat-reflective tiles, parapet safety railings, and provision for solar rooftop water heating.' 
    },
    { 
      name: 'Water Proofing', 
      icon: Shield, 
      desc: 'Multi-barrier waterproofing treatment for sunken slabs, bathrooms, terrace, overhead tanks, and exterior foundation walls.' 
    },
    { 
      name: 'Electrical', 
      icon: Zap, 
      desc: 'Concealed fire-resistant copper wiring (Finolex/Havells) with modular switches, MCBs, inverter wiring provision, and EV charging point in parking.' 
    },
    { 
      name: 'Telecom / Cable / Internet', 
      icon: Wifi, 
      desc: 'Fiber-to-the-Home (FTTH) high-speed internet conduit, DTH TV points in living and all bedrooms, and telephone cabling points.' 
    },
    { 
      name: 'Security', 
      icon: Shield, 
      desc: '24x7 security monitoring with CCTV cameras across township avenues, automated boom barrier access, and video door phone provision.' 
    },
    { 
      name: 'Back-up for Power', 
      icon: Zap, 
      desc: '100% DG power backup for common areas, streetlights, and dedicated 3-5 KVA backup for every individual villa with auto-changeover.' 
    },
    { 
      name: 'Lift', 
      icon: ArrowUpDown, 
      desc: 'Structural shaft and electrical provision for a private 4-passenger hydraulic/gearless lift connecting Ground, First, and Terrace levels.' 
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(prev => (prev === index ? -1 : index));
  };

  return (
    <section id="specifications" className="section-wrapper specs-section" aria-label="Villa Technical Specifications">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="eyebrow-tag">BUILD QUALITY &amp; FINISHES</span>
          <h2 className="section-title">
            Specifications
          </h2>
          <p className="section-subtitle">
            Engineered with high standards of craftsmanship and superior structural durability across every villa.
          </p>
        </div>

        {/* Specifications Accordion Grid */}
        <div className="specs-accordion-container">
          <div className="specs-grid">
            {specCategories.map((spec, idx) => {
              const IconComponent = spec.icon;
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`spec-accordion-item ${isOpen ? 'spec-accordion-item--open' : ''}`}
                >
                  <button
                    className="spec-accordion-header"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`spec-content-${idx}`}
                  >
                    <div className="spec-header-left">
                      <div className="spec-icon-box">
                        <IconComponent size={18} strokeWidth={1.8} />
                      </div>
                      <h3 className="spec-category-title">{spec.name}</h3>
                    </div>
                    <div className={`spec-chevron ${isOpen ? 'spec-chevron--rotated' : ''}`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  <div
                    id={`spec-content-${idx}`}
                    className="spec-accordion-body"
                    hidden={!isOpen}
                  >
                    <div className="spec-content-inner">
                      <p className="spec-text">
                        {spec.desc}
                      </p>
                      <button
                        className="spec-enquire-link"
                        onClick={onOpenEnquiry}
                      >
                        <span>Request {spec.name} Details</span>
                        <ArrowUpRight size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Specification CTA Card */}
          <div className="specs-cta-banner">
            <div className="specs-cta-text">
              <FileText size={28} className="text-cyan" />
              <div>
                <h4 className="specs-cta-title">Looking for the Complete Specification Sheet?</h4>
                <p className="specs-cta-sub">
                  Request the full technical datasheet directly from the Maytri Group sales engineering desk.
                </p>
              </div>
            </div>
            <button
              className="btn-primary"
              onClick={onOpenEnquiry}
              aria-label="Request Complete Specification Sheet"
            >
              <span>Get Full Specifications</span>
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
