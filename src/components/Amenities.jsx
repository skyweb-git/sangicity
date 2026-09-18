import React from 'react';
import * as Icons from 'lucide-react';
import { useWebsiteContent } from '../services/contentService';

const ICON_MAP = {
  Gamepad2: Icons.Gamepad2,
  Waves: Icons.Waves,
  Building2: Icons.Building2,
  ShoppingBag: Icons.ShoppingBag,
  Dumbbell: Icons.Dumbbell,
  Dices: Icons.Dices,
  Footprints: Icons.Footprints,
  PhoneCall: Icons.PhoneCall,
  ArrowUpDown: Icons.ArrowUpDown,
  Trees: Icons.Trees,
  ShieldCheck: Icons.ShieldCheck,
  Trophy: Icons.Trophy,
  Activity: Icons.Activity,
  Target: Icons.Target,
  PartyPopper: Icons.PartyPopper,
  CreditCard: Icons.CreditCard,
  Sparkles: Icons.Sparkles,
  Heart: Icons.Heart,
  Car: Icons.Car,
  Coffee: Icons.Coffee,
  Sun: Icons.Sun
};

export default function Amenities() {
  const websiteContent = useWebsiteContent();
  const amenitiesSection = websiteContent?.amenitiesSection || {};

  const eyebrowTag = amenitiesSection.eyebrowTag || 'RESORT-STYLE CONVENIENCES';
  const title = amenitiesSection.title || 'Amenities';
  const subtitle = amenitiesSection.subtitle || 'A comprehensive suite of modern lifestyle, wellness, sports, and daily conveniences curated for all age groups.';
  const items = (amenitiesSection.items && amenitiesSection.items.length > 0)
    ? amenitiesSection.items
    : [
        { name: 'Playing Area', category: 'Recreation', img: '/images/Icons/playingArea.webp', iconName: 'Gamepad2' },
        { name: 'Swimming Pool', category: 'Wellness', img: '/images/Icons/swimming.webp', iconName: 'Waves' },
        { name: 'Club House', category: 'Community', img: '/images/Icons/clubhouse.webp', iconName: 'Building2' },
        { name: 'Grocery Store', category: 'Convenience', img: '/images/Icons/groceryStore.webp', iconName: 'ShoppingBag' },
        { name: 'Gym', category: 'Fitness', img: '/images/Icons/gym.webp', iconName: 'Dumbbell' },
        { name: 'Indoor Games', category: 'Leisure', img: '/images/Icons/indoorGames.webp', iconName: 'Dices' },
        { name: 'Jogging Track', category: 'Fitness', img: '/images/Icons/jogging.webp', iconName: 'Footprints' },
        { name: 'Intercom System', category: 'Security', img: '/images/Icons/intercom.webp', iconName: 'PhoneCall' },
        { name: 'High-Speed Lifts', category: 'Infrastructure', img: '/images/Icons/lift.webp', iconName: 'ArrowUpDown' },
        { name: '4.5 Acre Central Park', category: 'Nature', img: '/images/Icons/park.webp', iconName: 'Trees' },
        { name: '24/7 Security & CCTV', category: 'Safety', img: '/images/Icons/security.webp', iconName: 'ShieldCheck' },
        { name: 'Tennis Court', category: 'Sports', img: '/images/Icons/tennis.webp', iconName: 'Trophy' },
        { name: 'Badminton & Shuttle', category: 'Sports', img: '/images/Icons/shuttle.webp', iconName: 'Activity' },
        { name: 'Squash Arena', category: 'Sports', img: '/images/Icons/squash.webp', iconName: 'Target' },
        { name: 'Grand Banquets', category: 'Celebration', img: '/images/Icons/banquets.webp', iconName: 'PartyPopper' },
        { name: 'ATM & Banking Kiosk', category: 'Convenience', img: '/images/Icons/atm.webp', iconName: 'CreditCard' }
      ];

  return (
    <section id="amenities" className="section-wrapper amenities-section" aria-label="Township Amenities">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="eyebrow-tag">{eyebrowTag}</span>
          <h2 className="section-title">
            {title}
          </h2>
          <p className="section-subtitle">
            {subtitle}
          </p>
        </div>

        {/* 4-column Grid */}
        <div className="amenities-grid">
          {items.map((item, idx) => {
            const IconComponent = (item.iconName && ICON_MAP[item.iconName]) 
              ? ICON_MAP[item.iconName] 
              : (Icons[item.iconName] || Icons.Sparkles);

            return (
              <div key={idx} className="amenity-card">
                <div className="amenity-icon-wrapper">
                  {item.img && (
                    <img
                      src={item.img}
                      alt={`${item.name} amenity at Maytri Ambhuja`}
                      className="amenity-custom-icon"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  )}
                  <IconComponent size={24} className="amenity-lucide-icon" strokeWidth={1.8} />
                </div>
                <h3 className="amenity-name">{item.name}</h3>
                <span className="amenity-tag">{item.category || 'Amenity'}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
