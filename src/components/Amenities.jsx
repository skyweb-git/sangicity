import React from 'react';
import {
  Gamepad2, Waves, Building2, ShoppingBag, Dumbbell, Dices,
  Footprints, PhoneCall, ArrowUpDown, Trees, ShieldCheck,
  Trophy, Activity, Target, PartyPopper, CreditCard
} from 'lucide-react';

export default function Amenities() {
  const amenitiesList = [
    {
      name: 'Playing Area',
      icon: Gamepad2,
      img: '/images/Icons/playingArea.webp',
      category: 'Recreation'
    },
    {
      name: 'Swimming Pool',
      icon: Waves,
      img: '/images/Icons/swimming.webp',
      category: 'Wellness'
    },
    {
      name: 'Club House',
      icon: Building2,
      img: '/images/Icons/clubhouse.webp',
      category: 'Community'
    },
    {
      name: 'Grocery Store',
      icon: ShoppingBag,
      img: '/images/Icons/groceryStore.webp',
      category: 'Convenience'
    },
    {
      name: 'Gym',
      icon: Dumbbell,
      img: '/images/Icons/gym.webp',
      category: 'Fitness'
    },
    {
      name: 'Indoor Games',
      icon: Dices,
      img: '/images/Icons/indoorGames.webp',
      category: 'Leisure'
    },
    {
      name: 'Jogging',
      icon: Footprints,
      img: '/images/Icons/jogging.webp',
      category: 'Fitness'
    },
    {
      name: 'Intercom',
      icon: PhoneCall,
      img: '/images/Icons/intercom.webp',
      category: 'Security'
    },
    {
      name: 'Lift',
      icon: ArrowUpDown,
      img: '/images/Icons/lift.webp',
      category: 'Infrastructure'
    },
    {
      name: 'Park',
      icon: Trees,
      img: '/images/Icons/park.webp',
      category: 'Nature'
    },
    {
      name: 'Security',
      icon: ShieldCheck,
      img: '/images/Icons/security.webp',
      category: 'Safety'
    },
    {
      name: 'Tennis',
      icon: Trophy,
      img: '/images/Icons/tennis.webp',
      category: 'Sports'
    },
    {
      name: 'Shuttle',
      icon: Activity,
      img: '/images/Icons/shuttle.webp',
      category: 'Sports'
    },
    {
      name: 'Squash',
      icon: Target,
      img: '/images/Icons/squash.webp',
      category: 'Sports'
    },
    {
      name: 'Banquets',
      icon: PartyPopper,
      img: '/images/Icons/banquets.webp',
      category: 'Celebration'
    },
    {
      name: 'ATM',
      icon: CreditCard,
      img: '/images/Icons/atm.webp',
      category: 'Convenience'
    }
  ];

  return (
    <section id="amenities" className="section-wrapper amenities-section" aria-label="Township Amenities">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="eyebrow-tag">RESORT-STYLE CONVENIENCES</span>
          <h2 className="section-title">
            Amenities
          </h2>
          <p className="section-subtitle">
            A comprehensive suite of modern lifestyle, wellness, sports, and daily conveniences curated for all age groups.
          </p>
        </div>

        {/* 4-column Grid */}
        <div className="amenities-grid">
          {amenitiesList.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="amenity-card">
                <div className="amenity-icon-wrapper">
                  <img
                    src={item.img}
                    alt={`${item.name} amenity at Maytri Ambhuja`}
                    className="amenity-custom-icon"
                    onError={(e) => {
                      // Gracefully hide image and let lucide icon render if custom asset is not found
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <IconComponent size={24} className="amenity-lucide-icon" strokeWidth={1.8} />
                </div>
                <h3 className="amenity-name">{item.name}</h3>
                <span className="amenity-tag">{item.category}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
