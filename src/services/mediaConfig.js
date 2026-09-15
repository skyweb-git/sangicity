// Cloudinary Media Configuration & Dynamic Cloud Fetcher
// Connected to Cloudinary Cloud: s8b4ps7b

export const getApiBaseUrl = () => {
  const envUrl = (typeof process !== 'undefined' && process.env?.REACT_APP_API_URL) || 
                 (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_URL);
  if (envUrl) {
    const clean = envUrl.replace(/\/+$/, '');
    return clean.endsWith('/api') ? clean : `${clean}/api`;
  }
  return 'https://api.sanghicity.in/api';
};

export const API_BASE_URL = getApiBaseUrl();

export const CLOUDINARY_MEDIA = {
  // Brand & Logos
  logo: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1788786505/maytri_ambhuja/brand/ambhuja_logo.png',
  sanghiLogo: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064425/maytri_ambhuja/brand/sanghicity_logo.png',
  heroPoster: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1788786507/maytri_ambhuja/brand/hero_poster.jpg',
  heroBgImage: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1788786507/maytri_ambhuja/brand/hero_poster.jpg',
  ctaPoster: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1788786509/maytri_ambhuja/brand/cta_poster.jpg',
  ctaBgImage: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1788786509/maytri_ambhuja/brand/cta_poster.jpg',
  
  // Streaming Optimized Videos on Cloudinary CDN
  heroVideo: 'https://res.cloudinary.com/s8b4ps7b/video/upload/v1788786606/maytri_ambhuja/videos/hero_video.mp4',
  ctaVideo: 'https://res.cloudinary.com/s8b4ps7b/video/upload/v1788786656/maytri_ambhuja/videos/cta_video.mp4',

  // Floor Plans
  floorplans: {
    east222Ground: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064446/maytri_ambhuja/floorplans/222_east_ground.webp',
    east222First: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064448/maytri_ambhuja/floorplans/222_east_first.webp',
    east222Terrace: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064449/maytri_ambhuja/floorplans/222_east_terrace.webp',
    west222Ground: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064450/maytri_ambhuja/floorplans/222_west_ground.jpg',
    west222First: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064452/maytri_ambhuja/floorplans/222_west_first.jpg',
    west222Terrace: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064453/maytri_ambhuja/floorplans/222_west_terrace.jpg',
    east300Ground: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064455/maytri_ambhuja/floorplans/300_east_ground.jpg',
    east300First: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064456/maytri_ambhuja/floorplans/300_east_first.jpg',
    east300Terrace: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064457/maytri_ambhuja/floorplans/300_east_terrace.jpg',
    west300Ground: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064458/maytri_ambhuja/floorplans/300_west_ground.jpg',
    west300First: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064459/maytri_ambhuja/floorplans/300_west_first.jpg',
    west300Terrace: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064461/maytri_ambhuja/floorplans/300_west_terrace.jpg',
  },

  // Clubhouse Specific Renders
  clubhouse: {
    frontPanorama: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064427/maytri_ambhuja/clubhouse/clubhouse_front_panorama.webp',
    poolAerial: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064428/maytri_ambhuja/clubhouse/clubhouse_pool_aerial.webp',
    eveningElevation: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064429/maytri_ambhuja/clubhouse/clubhouse_evening_elevation.webp',
    courtyardLawn: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064430/maytri_ambhuja/clubhouse/clubhouse_courtyard_lawn.webp',
  },

  // Villa & Community Elevations
  elevations: {
    elevation01: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064432/maytri_ambhuja/elevations/elevation_01.webp',
    elevation02: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064433/maytri_ambhuja/elevations/elevation_02.webp',
    elevation03: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064435/maytri_ambhuja/elevations/elevation_03.webp',
    elevation04: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064436/maytri_ambhuja/elevations/elevation_04.webp',
    elevation05: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064437/maytri_ambhuja/elevations/elevation_05.webp',
    elevation06: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064438/maytri_ambhuja/elevations/elevation_06.webp',
    elevation07: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064440/maytri_ambhuja/elevations/elevation_07.webp',
    pool: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064442/maytri_ambhuja/elevations/elevation_pool.webp',
    cricketPitch: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064443/maytri_ambhuja/elevations/elevation_cricket_pitch.webp',
    parkDay: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064444/maytri_ambhuja/elevations/elevation_park_day.webp',
  },

  // Gallery & Clubhouse Showcase Images
  gallery: [
    {
      id: 1,
      title: 'Grand 90,000 SFT Club House & Pool',
      subtitle: '90,000 Sq.Ft of Unmatched Opulence with Infinity Pool Deck',
      category: 'Clubhouse',
      tag: 'Grand Facade',
      url: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064427/maytri_ambhuja/clubhouse/clubhouse_front_panorama.webp',
    },
    {
      id: 2,
      title: 'Resort Style Pool & Sun Deck',
      subtitle: 'Grand Swimming Pool with Loungers & Private Cabanas',
      category: 'Aquatics',
      tag: 'Sun Deck',
      url: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064428/maytri_ambhuja/clubhouse/clubhouse_pool_aerial.webp',
    },
    {
      id: 3,
      title: 'Illuminated Evening Clubhouse Elevation',
      subtitle: 'Breathtaking Night View with Poolside Reflection',
      category: 'Architecture',
      tag: 'Night Elevation',
      url: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064429/maytri_ambhuja/clubhouse/clubhouse_evening_elevation.webp',
    },
    {
      id: 4,
      title: 'Landscaped Courtyard & Central Lawn',
      subtitle: 'Lush Green Courtyard Promenade with Palm Trees',
      category: 'Landscaping',
      tag: 'Central Lawn',
      url: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064430/maytri_ambhuja/clubhouse/clubhouse_courtyard_lawn.webp',
    },
    {
      id: 5,
      title: 'Indoor International Multi-Sport Arena',
      subtitle: 'Hardwood Badminton Courts & Squash',
      category: 'Sports',
      tag: 'Sports Arena',
      url: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1788786519/maytri_ambhuja/gallery/gallery_005.jpg',
    },
    {
      id: 6,
      title: 'Boutique Executive Air-Conditioned Guest Suites',
      subtitle: 'Hotel-Grade Hospitality for Relatives & Guests',
      category: 'Suites',
      tag: 'Guest Suites',
      url: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1788786520/maytri_ambhuja/gallery/gallery_006.jpg',
    },
    {
      id: 7,
      title: 'Children\'s Creative Activity Creche & Play Zone',
      subtitle: 'Safe, Monitored Edutainment for Toddlers & Kids',
      category: 'Kids Zone',
      tag: 'Kids Arena',
      url: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1788786522/maytri_ambhuja/gallery/gallery_007.jpg',
    },
    {
      id: 8,
      title: 'Private 4K Dolby Atmos Acoustic Preview Theatre',
      subtitle: 'Recliner Seating for Private Movie Screenings',
      category: 'Entertainment',
      tag: 'Preview Theatre',
      url: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1788786523/maytri_ambhuja/gallery/gallery_008.jpg',
    },
    {
      id: 9,
      title: 'State-of-the-Art Technogym Fitness Center',
      subtitle: 'Cardio, Strength & Dedicated CrossFit Studio',
      category: 'Fitness',
      tag: 'Fitness Center',
      url: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1788786525/maytri_ambhuja/gallery/gallery_009.jpg',
    },
    {
      id: 10,
      title: 'Starlit Rooftop Sky Lounge & Alfresco Deck',
      subtitle: 'Panoramic 360° Views of Hyderabad Skyline',
      category: 'Lounge',
      tag: 'Sky Lounge',
      url: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1788786526/maytri_ambhuja/gallery/gallery_010.jpg',
    },
  ]
};

// Function to dynamically fetch updated Cloudinary media from Backend API (if online)
export async function getDynamicCloudMedia() {
  try {
    const res = await fetch(`${API_BASE_URL}/media`);
    if (!res.ok) throw new Error('API fetch failed');
    const json = await res.json();
    if (json.success && json.map) {
      return {
        ...CLOUDINARY_MEDIA,
        ...json.map,
      };
    }
  } catch (err) {
    // Graceful fallback to static Cloudinary CDN mappings
  }
  return CLOUDINARY_MEDIA;
}
