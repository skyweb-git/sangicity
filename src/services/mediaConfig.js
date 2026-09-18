// Cloudinary Media Configuration & Dynamic Cloud Fetcher
// Connected to Cloudinary Cloud: li8lgd5l

export const getApiBaseUrl = () => {
  if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    return 'http://localhost:5000/api';
  }
  const envUrl = (typeof process !== 'undefined' && process.env?.REACT_APP_API_URL) || 
                 (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_URL);
  if (envUrl) {
    const clean = envUrl.replace(/\/+$/, '');
    return clean.endsWith('/api') ? clean : `${clean}/api`;
  }
  return 'https://api.sanghicity.in/api';
};

export const API_BASE_URL = getApiBaseUrl();

// ─── Mapping from flat API media keys → nested CLOUDINARY_MEDIA paths ───
// The API stores media with flat keys like "elevation_01", "clubhouse_front_panorama"
// but the frontend components reference them as CLOUDINARY_MEDIA.elevations.elevation01 etc.
const API_KEY_TO_NESTED_PATH = {
  // Brand & top-level
  logo: ['logo'],
  sanghiLogo: ['sanghiLogo'],
  heroPoster: ['heroPoster'],
  heroBgImage: ['heroBgImage'],
  ctaPoster: ['ctaPoster'],
  ctaBgImage: ['ctaBgImage'],
  heroVideo: ['heroVideo'],
  ctaVideo: ['ctaVideo'],

  // Elevations
  elevation_01: ['elevations', 'elevation01'],
  elevation_02: ['elevations', 'elevation02'],
  elevation_03: ['elevations', 'elevation03'],
  elevation_04: ['elevations', 'elevation04'],
  elevation_05: ['elevations', 'elevation05'],
  elevation_06: ['elevations', 'elevation06'],
  elevation_07: ['elevations', 'elevation07'],
  elevation_pool: ['elevations', 'pool'],
  elevation_cricket_pitch: ['elevations', 'cricketPitch'],
  elevation_park_day: ['elevations', 'parkDay'],

  // Clubhouse
  clubhouse_front_panorama: ['clubhouse', 'frontPanorama'],
  clubhouse_pool_aerial: ['clubhouse', 'poolAerial'],
  clubhouse_evening_elevation: ['clubhouse', 'eveningElevation'],
  clubhouse_courtyard_lawn: ['clubhouse', 'courtyardLawn'],

  // Floor Plans
  floorplan_222_east_ground: ['floorplans', 'east222Ground'],
  floorplan_222_east_first: ['floorplans', 'east222First'],
  floorplan_222_east_terrace: ['floorplans', 'east222Terrace'],
  floorplan_222_west_ground: ['floorplans', 'west222Ground'],
  floorplan_222_west_first: ['floorplans', 'west222First'],
  floorplan_222_west_terrace: ['floorplans', 'west222Terrace'],
  floorplan_300_east_ground: ['floorplans', 'east300Ground'],
  floorplan_300_east_first: ['floorplans', 'east300First'],
  floorplan_300_east_terrace: ['floorplans', 'east300Terrace'],
  floorplan_300_west_ground: ['floorplans', 'west300Ground'],
  floorplan_300_west_first: ['floorplans', 'west300First'],
  floorplan_300_west_terrace: ['floorplans', 'west300Terrace'],
};

const CLD = 'https://res.cloudinary.com/li8lgd5l/image/upload';

export const CLOUDINARY_MEDIA = {
  // Brand & Logos
  logo: `${CLD}/v1789727192/maytri_ambhuja/brand/ambhuja_logo.png`,
  sanghiLogo: `${CLD}/v1789729319/maytri_ambhuja/sanghiLogo.jpg`,
  heroPoster: `${CLD}/v1789727192/maytri_ambhuja/brand/hero_poster.jpg`,
  heroBgImage: `${CLD}/v1789727192/maytri_ambhuja/brand/hero_poster.jpg`,
  ctaPoster: `${CLD}/v1789727192/maytri_ambhuja/brand/cta_poster.jpg`,
  ctaBgImage: `${CLD}/v1789727192/maytri_ambhuja/brand/cta_poster.jpg`,
  
  // Streaming Optimized Videos on Cloudinary CDN
  heroVideo: 'https://res.cloudinary.com/li8lgd5l/video/upload/v1789727192/maytri_ambhuja/videos/hero_video.mp4',
  ctaVideo: 'https://res.cloudinary.com/li8lgd5l/video/upload/v1789727192/maytri_ambhuja/videos/cta_video.mp4',

  // Floor Plans
  floorplans: {
    east222Ground: `${CLD}/v1789727210/maytri_ambhuja/floorplans/222_east_ground.webp`,
    east222First: `${CLD}/v1789727211/maytri_ambhuja/floorplans/222_east_first.webp`,
    east222Terrace: `${CLD}/v1789727212/maytri_ambhuja/floorplans/222_east_terrace.webp`,
    west222Ground: `${CLD}/v1789727213/maytri_ambhuja/floorplans/222_west_ground.jpg`,
    west222First: `${CLD}/v1789727214/maytri_ambhuja/floorplans/222_west_first.jpg`,
    west222Terrace: `${CLD}/v1789727215/maytri_ambhuja/floorplans/222_west_terrace.jpg`,
    east300Ground: `${CLD}/v1789727216/maytri_ambhuja/floorplans/300_east_ground.jpg`,
    east300First: `${CLD}/v1789727217/maytri_ambhuja/floorplans/300_east_first.jpg`,
    east300Terrace: `${CLD}/v1789727218/maytri_ambhuja/floorplans/300_east_terrace.jpg`,
    west300Ground: `${CLD}/v1789727220/maytri_ambhuja/floorplans/300_west_ground.jpg`,
    west300First: `${CLD}/v1789727221/maytri_ambhuja/floorplans/300_west_first.jpg`,
    west300Terrace: `${CLD}/v1789727222/maytri_ambhuja/floorplans/300_west_terrace.jpg`,
  },

  // Clubhouse Specific Renders
  clubhouse: {
    frontPanorama: `${CLD}/v1789727206/maytri_ambhuja/clubhouse/clubhouse_front_panorama.webp`,
    poolAerial: `${CLD}/v1789727207/maytri_ambhuja/clubhouse/clubhouse_pool_aerial.webp`,
    eveningElevation: `${CLD}/v1789727208/maytri_ambhuja/clubhouse/clubhouse_evening_elevation.webp`,
    courtyardLawn: `${CLD}/v1789727209/maytri_ambhuja/clubhouse/clubhouse_courtyard_lawn.webp`,
  },

  // Villa & Community Elevations
  elevations: {
    elevation01: `${CLD}/v1789727192/maytri_ambhuja/elevations/elevation_01.webp`,
    elevation02: `${CLD}/v1789727194/maytri_ambhuja/elevations/elevation_02.webp`,
    elevation03: `${CLD}/v1789727195/maytri_ambhuja/elevations/elevation_03.webp`,
    elevation04: `${CLD}/v1789727197/maytri_ambhuja/elevations/elevation_04.webp`,
    elevation05: `${CLD}/v1789727198/maytri_ambhuja/elevations/elevation_05.webp`,
    elevation06: `${CLD}/v1789727199/maytri_ambhuja/elevations/elevation_06.webp`,
    elevation07: `${CLD}/v1789727201/maytri_ambhuja/elevations/elevation_07.webp`,
    pool: `${CLD}/v1789727202/maytri_ambhuja/elevations/elevation_pool.webp`,
    cricketPitch: `${CLD}/v1789727203/maytri_ambhuja/elevations/elevation_cricket_pitch.webp`,
    parkDay: `${CLD}/v1789727204/maytri_ambhuja/elevations/elevation_park_day.webp`,
  },

  // Gallery & Clubhouse Showcase Images
  gallery: [
    {
      id: 1,
      title: 'Grand 90,000 SFT Club House & Pool',
      subtitle: '90,000 Sq.Ft of Unmatched Opulence with Infinity Pool Deck',
      category: 'Clubhouse',
      tag: 'Grand Facade',
      url: `${CLD}/v1789727206/maytri_ambhuja/clubhouse/clubhouse_front_panorama.webp`,
    },
    {
      id: 2,
      title: 'Resort Style Pool & Sun Deck',
      subtitle: 'Grand Swimming Pool with Loungers & Private Cabanas',
      category: 'Aquatics',
      tag: 'Sun Deck',
      url: `${CLD}/v1789727207/maytri_ambhuja/clubhouse/clubhouse_pool_aerial.webp`,
    },
    {
      id: 3,
      title: 'Illuminated Evening Clubhouse Elevation',
      subtitle: 'Breathtaking Night View with Poolside Reflection',
      category: 'Architecture',
      tag: 'Night Elevation',
      url: `${CLD}/v1789727208/maytri_ambhuja/clubhouse/clubhouse_evening_elevation.webp`,
    },
    {
      id: 4,
      title: 'Landscaped Courtyard & Central Lawn',
      subtitle: 'Lush Green Courtyard Promenade with Palm Trees',
      category: 'Landscaping',
      tag: 'Central Lawn',
      url: `${CLD}/v1789727209/maytri_ambhuja/clubhouse/clubhouse_courtyard_lawn.webp`,
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
// Maps flat API keys (e.g. "elevation_01") into nested paths (e.g. elevations.elevation01)
export async function getDynamicCloudMedia() {
  try {
    const res = await fetch(`${API_BASE_URL}/media`);
    if (!res.ok) throw new Error('API fetch failed');
    const json = await res.json();
    if (json.success && json.map) {
      // Deep clone the default media config
      const merged = JSON.parse(JSON.stringify(CLOUDINARY_MEDIA));

      // Apply API overrides using the key→path mapping
      for (const [apiKey, url] of Object.entries(json.map)) {
        const path = API_KEY_TO_NESTED_PATH[apiKey];
        if (path && path.length === 1) {
          // Top-level key (logo, heroPoster, etc.)
          merged[path[0]] = url;
        } else if (path && path.length === 2) {
          // Nested key (elevations.elevation01, clubhouse.frontPanorama, etc.)
          if (merged[path[0]] && typeof merged[path[0]] === 'object' && !Array.isArray(merged[path[0]])) {
            merged[path[0]][path[1]] = url;
          }
        }
      }

      return merged;
    }
  } catch (err) {
    // Graceful fallback to static Cloudinary CDN mappings
  }
  return CLOUDINARY_MEDIA;
}

