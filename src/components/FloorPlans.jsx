import React, { useState } from 'react';
import { Layers, Maximize2, FileText, ArrowUpRight, Compass, Building, Sparkles, Home } from 'lucide-react';
import { CLOUDINARY_MEDIA } from '../services/mediaConfig';

export default function FloorPlans({ onOpenEnquiry, onOpenLightbox }) {
  const [selectedConfig, setSelectedConfig] = useState('222-east');
  const [activeFloorTab, setActiveFloorTab] = useState('ground');

  const configurations = [
    {
      id: '222-east',
      name: '222 SQ Yards East Facing',
      area: '222 SQ YDS',
      facing: 'East Facing',
      groundSft: '1397.37 SFT',
      firstSft: '1397.371 SFT',
      secondSft: '561.55 SFT',
      totalSft: '3356.291 SFT',
      floors: [
        {
          id: 'ground',
          name: 'Ground Floor Plan',
          area: '1397.37 SFT',
          img: CLOUDINARY_MEDIA.floorplans?.east222Ground || '/floorplans/222east_ground.webp',
          alt: 'Maytri Ambhuja 222 SQ Yards East Facing Ground Floor Plan'
        },
        {
          id: 'first',
          name: 'First Floor Plan',
          area: '1397.371 SFT',
          img: CLOUDINARY_MEDIA.floorplans?.east222First || '/floorplans/222east_first.webp',
          alt: 'Maytri Ambhuja 222 SQ Yards East Facing First Floor Plan'
        },
        {
          id: 'terrace',
          name: 'Terrace Floor Plan',
          area: '561.55 SFT',
          img: CLOUDINARY_MEDIA.floorplans?.east222Terrace || '/floorplans/222east_terrace.webp',
          alt: 'Maytri Ambhuja 222 SQ Yards East Facing Terrace Floor Plan'
        }
      ]
    },
    {
      id: '222-west',
      name: '222 SQ Yards West Facing',
      area: '222 SQ YDS',
      facing: 'West Facing',
      groundSft: '1397.37 SFT',
      firstSft: '1397.371 SFT',
      secondSft: '561.55 SFT',
      totalSft: '3356.291 SFT',
      floors: [
        {
          id: 'ground',
          name: 'Ground Floor Plan',
          area: '1397.37 SFT',
          img: CLOUDINARY_MEDIA.floorplans?.west222Ground || '/floorplans/222west_ground.jpg',
          alt: 'Maytri Ambhuja 222 SQ Yards West Facing Ground Floor Plan'
        },
        {
          id: 'first',
          name: 'First Floor Plan',
          area: '1397.371 SFT',
          img: CLOUDINARY_MEDIA.floorplans?.west222First || '/floorplans/222west_first.jpg',
          alt: 'Maytri Ambhuja 222 SQ Yards West Facing First Floor Plan'
        },
        {
          id: 'terrace',
          name: 'Terrace Floor Plan',
          area: '561.55 SFT',
          img: CLOUDINARY_MEDIA.floorplans?.west222Terrace || '/floorplans/222west_terrace.jpg',
          alt: 'Maytri Ambhuja 222 SQ Yards West Facing Terrace Floor Plan'
        }
      ]
    },
    {
      id: '300-east',
      name: '300 SQ Yards East Facing',
      area: '300 SQ YDS',
      facing: 'East Facing',
      groundSft: '1850.50 SFT',
      firstSft: '1850.50 SFT',
      secondSft: '820.00 SFT',
      totalSft: '4521.00 SFT',
      floors: [
        {
          id: 'ground',
          name: 'Ground Floor Plan',
          area: '1850.50 SFT',
          img: CLOUDINARY_MEDIA.floorplans?.east300Ground || '/floorplans/300east_ground.jpg',
          alt: 'Maytri Ambhuja 300 SQ Yards East Facing Ground Floor Plan'
        },
        {
          id: 'first',
          name: 'First Floor Plan',
          area: '1850.50 SFT',
          img: CLOUDINARY_MEDIA.floorplans?.east300First || '/floorplans/300east_first.jpg',
          alt: 'Maytri Ambhuja 300 SQ Yards East Facing First Floor Plan'
        },
        {
          id: 'terrace',
          name: 'Terrace Floor Plan',
          area: '820.00 SFT',
          img: CLOUDINARY_MEDIA.floorplans?.east300Terrace || '/floorplans/300east_terrace.jpg',
          alt: 'Maytri Ambhuja 300 SQ Yards East Facing Terrace Floor Plan'
        }
      ]
    },
    {
      id: '300-west',
      name: '300 SQ Yards West Facing',
      area: '300 SQ YDS',
      facing: 'West Facing',
      groundSft: '1850.50 SFT',
      firstSft: '1850.50 SFT',
      secondSft: '820.00 SFT',
      totalSft: '4521.00 SFT',
      floors: [
        {
          id: 'ground',
          name: 'Ground Floor Plan',
          area: '1850.50 SFT',
          img: CLOUDINARY_MEDIA.floorplans?.west300Ground || '/floorplans/300west_ground.jpg',
          alt: 'Maytri Ambhuja 300 SQ Yards West Facing Ground Floor Plan'
        },
        {
          id: 'first',
          name: 'First Floor Plan',
          area: '1850.50 SFT',
          img: CLOUDINARY_MEDIA.floorplans?.west300First || '/floorplans/300west_first.jpg',
          alt: 'Maytri Ambhuja 300 SQ Yards West Facing First Floor Plan'
        },
        {
          id: 'terrace',
          name: 'Terrace Floor Plan',
          area: '820.00 SFT',
          img: CLOUDINARY_MEDIA.floorplans?.west300Terrace || '/floorplans/300west_terrace.jpg',
          alt: 'Maytri Ambhuja 300 SQ Yards West Facing Terrace Floor Plan'
        }
      ]
    },
    {
      id: 'clubhouse',
      name: 'Club House',
      badge: '90,000 SFT Club House',
      area: '90,000 SFT',
      facing: 'Resort Amenities & Landscapes',
      isClubhouse: true,
      groundSft: 'Grand Lobby & 500-Guest Banquet',
      firstSft: 'Fitness Hub, Yoga & Spa Pavilion',
      secondSft: 'Badminton & Squash Arena',
      totalSft: '90,000 SFT Ultra-Luxury',
      metrics: [
        { label: 'TOTAL CLUB HOUSE', val: '90,000 SFT' },
        { label: 'CENTRAL PARK', val: '4.5 ACRES' },
        { label: 'INFINITY POOL', val: 'Temperature Controlled' },
        { label: 'LEISURE & BANQUET', val: '500-Guest Grand Hall' },
        { label: 'TOTAL SBUA', val: '90,000 SFT' }
      ],
      floors: [
        {
          id: 'front_panorama',
          name: 'Grand Pool & Deck',
          area: '90,000 SFT Grand Facade',
          img: CLOUDINARY_MEDIA.clubhouse?.frontPanorama || '/clubhouse/clubhouse_front_panorama.webp',
          alt: '90,000 SFT Club House Grand Facade & Swimming Pool'
        },
        {
          id: 'pool_aerial',
          name: 'Aerial Pool View',
          area: 'Olympic Pool Deck & Cabanas',
          img: CLOUDINARY_MEDIA.clubhouse?.poolAerial || '/clubhouse/clubhouse_pool_aerial.webp',
          alt: 'Club House Grand Swimming Pool & Sun Deck View'
        },
        {
          id: 'evening_elevation',
          name: 'Evening Elevation',
          area: 'Night Reflection View',
          img: CLOUDINARY_MEDIA.clubhouse?.eveningElevation || '/clubhouse/clubhouse_evening_elevation.webp',
          alt: 'Club House Evening Illumination & Poolside'
        },
        {
          id: 'courtyard_lawn',
          name: 'Courtyard & Lawn',
          area: '4.5 Acres Central Park Lawn',
          img: CLOUDINARY_MEDIA.clubhouse?.courtyardLawn || '/clubhouse/clubhouse_courtyard_lawn.webp',
          alt: 'Club House Landscaped Courtyard & Central Lawn'
        },
        {
          id: 'elevation_pool',
          name: 'Resort Swimming Pool',
          area: 'Tropical Pool Deck',
          img: CLOUDINARY_MEDIA.elevations?.pool || '/elevations/elevation_pool.webp',
          alt: 'Clubhouse Resort Swimming Pool & Deck'
        },
        {
          id: 'elevation_cricket',
          name: 'Cricket Pitch Arena',
          area: 'Professional Sports Arena',
          img: CLOUDINARY_MEDIA.elevations?.cricketPitch || '/elevations/elevation_cricket_pitch.webp',
          alt: 'Professional Cricket Pitch & Outdoor Sports Arena'
        },
        {
          id: 'elevation_park',
          name: '4.5 Acres Central Park',
          area: 'Central Park Day View',
          img: CLOUDINARY_MEDIA.elevations?.parkDay || '/elevations/elevation_park_day.webp',
          alt: '4.5 Acres Central Park & Landscaped Promenade'
        }
      ]
    },
    {
      id: 'villas-elevations',
      name: 'Villas',
      badge: '516 Luxury Villas',
      area: '55 ACRES',
      facing: 'Contemporary Architecture',
      isVillas: true,
      metrics: [
        { label: 'TOTAL VILLA UNITS', val: '516 Premium Villas' },
        { label: 'PLOT SIZES', val: '222 & 300 SQ YARDS' },
        { label: 'ORIENTATIONS', val: 'East & West Facing' },
        { label: 'TOWNSHIP AREA', val: '55 ACRES GATED COMMUNITY' },
        { label: 'VILLA SBUA', val: '3,356 SFT - 4,521 SFT' }
      ],
      floors: [
        {
          id: 'elevation_01',
          name: 'Villa Elevation 01',
          area: 'Front Facade View',
          img: CLOUDINARY_MEDIA.elevations?.elevation01 || '/elevations/elevation_01.webp',
          alt: 'Luxury Villa Elevation - Front Facade View 01'
        },
        {
          id: 'elevation_02',
          name: 'Villa Elevation 02',
          area: 'Corner Perspective',
          img: CLOUDINARY_MEDIA.elevations?.elevation02 || '/elevations/elevation_02.webp',
          alt: 'Luxury Villa Elevation - Corner Angle View 02'
        },
        {
          id: 'elevation_03',
          name: 'Villa Elevation 03',
          area: 'Grand Contemporary View',
          img: CLOUDINARY_MEDIA.elevations?.elevation03 || '/elevations/elevation_03.webp',
          alt: 'Luxury Villa Elevation - Grand Modern View 03'
        },
        {
          id: 'elevation_04',
          name: 'Villa Elevation 04',
          area: 'Enclave Streetscape',
          img: CLOUDINARY_MEDIA.elevations?.elevation04 || '/elevations/elevation_04.webp',
          alt: 'Luxury Villa Elevation - Street Enclave View 04'
        },
        {
          id: 'elevation_05',
          name: 'Villa Elevation 05',
          area: 'Contemporary Architecture',
          img: CLOUDINARY_MEDIA.elevations?.elevation05 || '/elevations/elevation_05.webp',
          alt: 'Luxury Villa Elevation - Contemporary Architecture 05'
        },
        {
          id: 'elevation_06',
          name: 'Villa Elevation 06',
          area: 'Private Garden View',
          img: CLOUDINARY_MEDIA.elevations?.elevation06 || '/elevations/elevation_06.webp',
          alt: 'Luxury Villa Elevation - Private Garden Perspective 06'
        },
        {
          id: 'elevation_07',
          name: 'Villa Elevation 07',
          area: 'Sky Terrace & Balcony',
          img: CLOUDINARY_MEDIA.elevations?.elevation07 || '/elevations/elevation_07.webp',
          alt: 'Luxury Villa Elevation - Terrace & Balcony View 07'
        }
      ]
    }
  ];

  const currentConfig = configurations.find(c => c.id === selectedConfig) || configurations[0];
  const activeFloor = currentConfig.floors.find(f => f.id === activeFloorTab) || currentConfig.floors[0];

  return (
    <section id="floorplans" className="section-wrapper floorplans-section" aria-label="Villa Floor Plans & Clubhouse">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="eyebrow-tag">SPACIOUS ARCHITECTURE, CLUBHOUSE &amp; VILLAS</span>
          <h2 className="section-title">
            Floor Plans &amp; Architectural Views
          </h2>
          <p className="section-subtitle">
            Explore meticulously planned villa layouts, grand architectural elevations, and the majestic 90,000 SFT clubhouse.
          </p>
        </div>

        {/* Configuration Tabs */}
        <div className="config-tabs-row" role="tablist">
          {configurations.map((config) => (
            <button
              key={config.id}
              role="tab"
              aria-selected={selectedConfig === config.id}
              className={`config-tab-btn ${selectedConfig === config.id ? 'config-tab-btn--active' : ''}`}
              onClick={() => {
                setSelectedConfig(config.id);
                setActiveFloorTab(config.floors[0].id);
              }}
            >
              <span className="config-tab-name">{config.name}</span>
            </button>
          ))}
        </div>

        {/* Floor Plan Display Card */}
        <div className="floorplan-card">
          <div className="floorplan-grid">
            {/* Left Column: Measurements & Floor Level Tabs */}
            <div className="floorplan-specs-col">
              <div className="specs-header">
                <div className="facing-badge">
                  {configIcon(currentConfig)}
                  <span>{currentConfig.facing}</span>
                </div>
                <h3 className="specs-config-title">{currentConfig.name}</h3>
              </div>

              {/* Area Breakdown Table */}
              <div className="area-metrics-list">
                {currentConfig.metrics ? (
                  currentConfig.metrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className={`area-metric-row ${metric.label.includes('TOTAL') ? 'area-metric-row--total' : ''}`}
                    >
                      <span className="area-lbl">{metric.label}</span>
                      <span className={`area-val ${metric.label.includes('TOTAL') ? 'highlight-val' : ''}`}>
                        {metric.val}
                      </span>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="area-metric-row">
                      <span className="area-lbl">GROUND FLOOR</span>
                      <span className="area-val">{currentConfig.groundSft}</span>
                    </div>
                    <div className="area-metric-row">
                      <span className="area-lbl">FIRST FLOOR</span>
                      <span className="area-val">{currentConfig.firstSft}</span>
                    </div>
                    <div className="area-metric-row">
                      <span className="area-lbl">SECOND FLOOR</span>
                      <span className="area-val">{currentConfig.secondSft}</span>
                    </div>
                    <div className="area-metric-row area-metric-row--total">
                      <span className="area-lbl">TOTAL SBUA</span>
                      <span className="area-val highlight-val">{currentConfig.totalSft}</span>
                    </div>
                  </>
                )}
              </div>

              {/* Floor Level / View Selector */}
              {currentConfig.floors.length > 1 && (
                <div className="floor-level-nav">
                  <span className="floor-nav-lbl">
                    {currentConfig.isClubhouse
                      ? 'Select Clubhouse View / Zone:'
                      : currentConfig.isVillas
                      ? 'Select Villa Elevation View:'
                      : 'Select Floor Level:'}
                  </span>
                  <div className={`floor-level-btns ${currentConfig.floors.length > 3 ? 'floor-level-btns--grid' : ''}`}>
                    {currentConfig.floors.map((floor) => (
                      <button
                        key={floor.id}
                        className={`floor-btn ${activeFloorTab === floor.id ? 'floor-btn--active' : ''}`}
                        onClick={() => setActiveFloorTab(floor.id)}
                        title={floor.name}
                      >
                        {floor.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="floorplan-cta-box">
                <button
                  className="btn-primary w-full"
                  onClick={onOpenEnquiry}
                  aria-label={currentConfig.isClubhouse ? 'Book Club House Visit' : currentConfig.isVillas ? 'Book Villa Visit' : 'Enquire for Floor Plan Details'}
                >
                  <span>{currentConfig.isClubhouse ? 'Book Club House Visit' : currentConfig.isVillas ? 'Book Villa Visit' : 'Enquire for Floor Plan Details'}</span>
                  <ArrowUpRight size={15} strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Right Column: Blueprint / Floor Render Viewer */}
            <div className="floorplan-viewer-col">
              <div
                className="blueprint-frame"
                onClick={() => onOpenLightbox(
                  currentConfig.floors.map(f => ({ src: f.img, alt: f.alt, title: `${currentConfig.name} - ${f.name}` })),
                  currentConfig.floors.findIndex(f => f.id === activeFloorTab)
                )}
                role="button"
                tabIndex={0}
                aria-label={`View full render: ${activeFloor.name}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onOpenLightbox(
                      currentConfig.floors.map(f => ({ src: f.img, alt: f.alt, title: `${currentConfig.name} - ${f.name}` })),
                      currentConfig.floors.findIndex(f => f.id === activeFloorTab)
                    );
                  }
                }}
              >
                <img
                  src={activeFloor.img}
                  alt={activeFloor.alt}
                  className="blueprint-img"
                  loading="lazy"
                />
                <div className="blueprint-overlay">
                  <div className="blueprint-tag">
                    {currentConfig.isClubhouse ? <Building size={14} /> : currentConfig.isVillas ? <Home size={14} /> : <Layers size={14} />}
                    <span>{activeFloor.name} • {activeFloor.area}</span>
                  </div>
                  <div className="blueprint-zoom-btn">
                    <Maximize2 size={16} />
                    <span>Enlarge</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function configIcon(config) {
  if (config.isClubhouse) return <Sparkles size={14} />;
  if (config.isVillas) return <Home size={14} />;
  return <Compass size={14} />;
}
