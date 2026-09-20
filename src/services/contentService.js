import { useState, useEffect } from 'react';
import { API_BASE_URL } from './mediaConfig';

export const DEFAULT_CONTENT = {
  hero: {
    badge: 'MAYTRI GROUP',
    reraNumber: 'P02400007647',
    title: 'Exclusive Villa Township in Hyderabad',
    subheading: 'Spacious Villas with Picturesque Pathways & Rich Finishes',
    description: 'Surrounded by pristine landscapes and tree-lined avenues, experience an eco-friendly lifestyle designed for comfortable community living.',
    startingPrice: '₹3.8 Cr*',
    tokenAdvance: '₹5 Lakhs'
  },
  about: {
    sectionTitle: 'Where Nature Meets Architectural Opulence',
    tagline: 'A Masterpiece of Luxury Living in Shamshabad',
    description1: 'Nestled amidst 35+ acres of verdant serenity, Maytri Ambhuja is Hyderabad’s pinnacle luxury villa community crafted for discerning global citizens.',
    description2: 'Strategically located minutes from Shamshabad & ORR Exit 12, each villa is an epitome of timeless contemporary architecture with 100% Vaastu compliance.',
    totalVillas: '150+ Luxury Villas',
    totalAcres: '35+ Acres Township',
    clubhouseSize: '90,000 Sq.Ft Clubhouse'
  },
  clubhouse: {
    title: 'The Grand Ambhuja Clubhouse',
    tagline: '90,000 Sq.Ft of Resort-Class Leisure & Wellness',
    description: 'An architectural marvel offering 30+ bespoke luxury amenities including infinity pools, private 4K preview theatres, Olympic multi-sport arenas, and Ayurvedic spas.'
  },
  contact: {
    phone: '+91 98490 12345',
    whatsapp: '+91 98490 12345',
    email: 'info@sanghicity.in',
    infoEmail: 'info@sanghicity.in',
    websiteUrl: 'https://www.sanghicity.in',
    siteAddress: 'Maytri Ambhuja, Near ORR Exit 12, Shamshabad - Sanghi Nagar Road, Hyderabad, Telangana 501511',
    officeHours: 'Monday – Sunday: 9:30 AM – 7:30 PM'
  },
  brochure: {
    url: '/assets/maytri-ambhuja-brochure.pdf',
    modalTitle: 'Download Maytri Ambhuja Brochure',
    modalDesc: 'Receive the official villa township brochure featuring master plan details, 90,000 sq.ft clubhouse features, and 222 & 300 SQ YD floor plans.'
  },
  amenitiesSection: {
    eyebrowTag: 'RESORT-STYLE CONVENIENCES',
    title: 'Amenities',
    subtitle: 'A comprehensive suite of modern lifestyle, wellness, sports, and daily conveniences curated for all age groups.',
    items: [
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
    ]
  },
  projectsSection: {
    eyebrowTag: 'LANDMARK DEVELOPMENTS',
    title: 'Our Projects',
    subtitle: 'Explore premier master-planned townships and signature villa communities developed with unmatched luxury, architectural brilliance, and strategic connectivity.',
    items: [
      {
        id: 'ambhuja',
        title: 'Maytri Ambhuja',
        tagline: 'Flagship 55-Acre Villa Township',
        location: 'Sanghi City, Near ORR Exit 11, Hyderabad',
        status: 'Ready for VIP Booking',
        image: 'https://res.cloudinary.com/li8lgd5l/image/upload/v1788847939/maytri_ambhuja/gallery/gallery_001.jpg',
        specs: [
          { label: 'Project Area', value: '55 Acres' },
          { label: 'Villas', value: '516 Premium Units' },
          { label: 'Clubhouse', value: '90,000 Sq.Ft' },
          { label: 'Starting Price', value: '3.2 Cr*' }
        ],
        features: ['222 & 300 SQ YDS Triplex Villas', '4.5-Acre Central Park', 'RERA: P02400007647'],
        buttonText: 'For More Info'
      },
      {
        id: 'palms',
        title: 'Sanghi City Palms',
        tagline: 'Signature Luxury Gated Enclave',
        location: 'Sanghi City Master Township, Hyderabad',
        status: 'Phase 1 Fast Selling',
        image: 'https://res.cloudinary.com/li8lgd5l/image/upload/v1788847941/maytri_ambhuja/gallery/gallery_002.jpg',
        specs: [
          { label: 'Project Area', value: '35 Acres' },
          { label: 'Villas', value: '280 Luxury Villas' },
          { label: 'Clubhouse', value: '50,000 Sq.Ft' },
          { label: 'Configuration', value: '4 & 5 BHK Triplex' }
        ],
        features: ['Private Temperature Pool', 'Lush Forest Avenues', 'Gated 3-Tier Security'],
        buttonText: 'For More Info'
      },
      {
        id: 'meadows',
        title: 'Maytri Green Meadows',
        tagline: 'Eco-Luxury Sustainable Villa Estates',
        location: 'Growth Corridor, East Hyderabad',
        status: 'Exclusive Preview',
        image: 'https://res.cloudinary.com/li8lgd5l/image/upload/v1788847942/maytri_ambhuja/gallery/gallery_004.jpg',
        specs: [
          { label: 'Project Area', value: '40 Acres' },
          { label: 'Villas', value: '320 Eco Villas' },
          { label: 'Open Space', value: '60% Greenery' },
          { label: 'Type', value: 'Contemporary Villas' }
        ],
        features: ['Solar Powered Community', 'Organic Orchards', 'Outdoor Amphitheater'],
        buttonText: 'For More Info'
      },
      {
        id: 'grandeur',
        title: 'Maytri Grandeur Suites',
        tagline: 'Boutique High-End Township Living',
        location: 'ORR Connectivity Hub, Hyderabad',
        status: 'Upcoming Launch',
        image: 'https://res.cloudinary.com/li8lgd5l/image/upload/v1788847947/maytri_ambhuja/gallery/gallery_009.jpg',
        specs: [
          { label: 'Project Area', value: '20 Acres' },
          { label: 'Residences', value: 'Executive Suites' },
          { label: 'Amenities', value: 'Sky Lounge & Spa' },
          { label: 'Access', value: '2 Mins to ORR' }
        ],
        features: ['Infinity Sky Deck', 'Concierge & Valet', 'Smart Home Automation'],
        buttonText: 'For More Info'
      }
    ]
  },
  theme: {
    presetName: 'Oceanic Sapphire (Default)',
    accentColor: '#0284c7',
    accentGlow: '#38bdf8',
    accentSubtle: '#e0f2fe',
    darkPrimary: '#0b132b',
    darkNavy: '#111c36',
    darkNavyLight: '#1c2847',
    pageBg: '#f8f9fb',
    surfaceBg: '#ffffff',
    surfaceSubtle: '#f1f3f7',
    textColor: '#111c36',
    textMuted: '#52637f',
    borderColor: '#e2e6ed'
  }
};

export function applyThemeToDocument(theme) {
  if (typeof document === 'undefined' || !theme) return;
  const root = document.documentElement;

  if (theme.accentColor) {
    root.style.setProperty('--color-cyan', theme.accentColor);
    root.style.setProperty('--color-accent', theme.accentColor);
    root.style.setProperty('--shadow-glow', `0 0 25px ${theme.accentColor}40`);
  }
  if (theme.accentGlow) {
    root.style.setProperty('--color-cyan-glow', theme.accentGlow);
  }
  if (theme.accentSubtle) {
    root.style.setProperty('--color-cyan-subtle', theme.accentSubtle);
  }
  if (theme.darkPrimary) {
    root.style.setProperty('--color-primary', theme.darkPrimary);
    root.style.setProperty('--color-primary-dark', theme.darkPrimary);
  }
  if (theme.darkNavy) {
    root.style.setProperty('--color-navy', theme.darkNavy);
  }
  if (theme.darkNavyLight) {
    root.style.setProperty('--color-navy-light', theme.darkNavyLight);
  }
  if (theme.pageBg) {
    root.style.setProperty('--color-bg', theme.pageBg);
  }
  if (theme.surfaceBg) {
    root.style.setProperty('--color-surface', theme.surfaceBg);
  }
  if (theme.surfaceSubtle) {
    root.style.setProperty('--color-surface-subtle', theme.surfaceSubtle);
  }
  if (theme.borderColor) {
    root.style.setProperty('--color-border', theme.borderColor);
  }
  if (theme.textColor) {
    root.style.setProperty('--color-text-main', theme.textColor);
  }
  if (theme.textMuted) {
    root.style.setProperty('--color-slate', theme.textMuted);
  }

  // Dynamic overrides style element for components with semi-transparent alphas
  let dynamicStyle = document.getElementById('maytri-dynamic-theme-overrides');
  if (!dynamicStyle) {
    dynamicStyle = document.createElement('style');
    dynamicStyle.id = 'maytri-dynamic-theme-overrides';
    document.head.appendChild(dynamicStyle);
  }

  const darkNavy = theme.darkNavy || '#111c36';
  const darkNavyLight = theme.darkNavyLight || '#1c2847';
  const darkPrimary = theme.darkPrimary || '#0b132b';
  const accent = theme.accentColor || '#0284c7';
  const accentGlow = theme.accentGlow || '#38bdf8';
  const accentSubtle = theme.accentSubtle || '#e0f2fe';
  const pageBg = theme.pageBg || '#f8f9fb';

  dynamicStyle.textContent = `
    body {
      background-color: ${pageBg} !important;
    }
    .maytri-app-root {
      background-color: ${pageBg} !important;
    }
    .site-header--scrolled {
      background: color-mix(in srgb, ${darkNavy} 88%, transparent) !important;
      border-bottom: 1px solid color-mix(in srgb, ${darkNavy} 60%, white) !important;
    }
    .btn-primary {
      background: ${darkNavy} !important;
      border-color: ${darkNavyLight} !important;
    }
    .header-cta-btn {
      background: ${accent} !important;
    }
    .header-cta-btn:hover {
      background: ${accentGlow} !important;
    }
    .hero-btn--featured {
      background: linear-gradient(135deg, ${accent} 0%, ${accentGlow} 100%) !important;
      box-shadow: 0 8px 30px ${accent}66 !important;
    }
    .hero-btn--featured:hover {
      background: linear-gradient(135deg, ${accentGlow} 0%, ${accent} 100%) !important;
    }
    .hero-media-overlay {
      background: linear-gradient(
        180deg,
        color-mix(in srgb, ${darkPrimary} 75%, transparent) 0%,
        color-mix(in srgb, ${darkNavy} 65%, transparent) 50%,
        color-mix(in srgb, ${darkPrimary} 90%, transparent) 100%
      ) !important;
    }
    .eyebrow-tag {
      background: ${accentSubtle} !important;
      color: ${accent} !important;
      border-color: ${accent}33 !important;
    }
    .eyebrow-rera {
      background: color-mix(in srgb, ${accent} 25%, transparent) !important;
      border-color: color-mix(in srgb, ${accentGlow} 40%, transparent) !important;
      color: ${accentGlow} !important;
    }
    .nav-active-dot {
      background: ${accentGlow} !important;
    }
    .footer-map-container {
      background: ${darkPrimary} !important;
    }
    .footer-exp-toggle-btn.active {
      background: ${accent} !important;
    }
  `;
}

const CONTENT_CACHE_KEY = 'maytri_website_content_cache_v2';

// Synchronous cache hydration from localStorage for instant, zero-flicker render
let cachedContent = null;
if (typeof window !== 'undefined') {
  try {
    const raw = localStorage.getItem(CONTENT_CACHE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        cachedContent = {
          ...DEFAULT_CONTENT,
          ...parsed,
          projectsSection: {
            ...DEFAULT_CONTENT.projectsSection,
            ...(parsed.projectsSection || {}),
            items: (Array.isArray(parsed.projectsSection?.items) && parsed.projectsSection.items.length > 0)
              ? parsed.projectsSection.items
              : DEFAULT_CONTENT.projectsSection.items
          },
          theme: {
            ...DEFAULT_CONTENT.theme,
            ...(parsed.theme || {})
          }
        };
        applyThemeToDocument(cachedContent.theme);
      }
    }
  } catch (e) {
    console.warn('Error reading content cache from localStorage:', e);
  }
}

const listeners = new Set();

function updateAndPersistContent(newContent) {
  cachedContent = newContent;
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(CONTENT_CACHE_KEY, JSON.stringify(newContent));
    } catch (e) {}
  }
  if (newContent?.theme) {
    applyThemeToDocument(newContent.theme);
  }
  listeners.forEach(fn => fn(cachedContent));
}

let cmsChannel = null;
try {
  if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
    cmsChannel = new BroadcastChannel('maytri_cms_sync_channel');
    cmsChannel.onmessage = (event) => {
      if (event.data && event.data.type === 'CONTENT_UPDATED' && event.data.content) {
        const incoming = event.data.content;
        const merged = {
          ...DEFAULT_CONTENT,
          ...incoming,
          projectsSection: {
            ...DEFAULT_CONTENT.projectsSection,
            ...(incoming.projectsSection || {}),
            items: (Array.isArray(incoming.projectsSection?.items) && incoming.projectsSection.items.length > 0)
              ? incoming.projectsSection.items
              : DEFAULT_CONTENT.projectsSection.items
          },
          theme: {
            ...DEFAULT_CONTENT.theme,
            ...(incoming.theme || {})
          }
        };
        updateAndPersistContent(merged);
      }
    };
  }
} catch (e) {}

export async function fetchWebsiteContent() {
  try {
    const res = await fetch(`${API_BASE_URL}/content`);
    if (!res.ok) throw new Error('API fetch failed');
    const json = await res.json();
    if (json.success && json.data) {
      const dbData = json.data;

      // For sections with dynamic items arrays, prefer DB items if they exist and are non-empty.
      // Only fall back to DEFAULT_CONTENT items when DB has no items yet.
      const dbProjectItems = dbData.projectsSection?.items;
      const dbAmenityItems = dbData.amenitiesSection?.items;

      const merged = {
        ...DEFAULT_CONTENT,
        ...dbData,
        hero: { ...DEFAULT_CONTENT.hero, ...(dbData.hero || {}) },
        about: { ...DEFAULT_CONTENT.about, ...(dbData.about || {}) },
        clubhouse: { ...DEFAULT_CONTENT.clubhouse, ...(dbData.clubhouse || {}) },
        contact: { ...DEFAULT_CONTENT.contact, ...(dbData.contact || {}) },
        brochure: { ...DEFAULT_CONTENT.brochure, ...(dbData.brochure || {}) },
        amenitiesSection: {
          ...DEFAULT_CONTENT.amenitiesSection,
          ...(dbData.amenitiesSection || {}),
          items: (Array.isArray(dbAmenityItems) && dbAmenityItems.length > 0)
            ? dbAmenityItems
            : DEFAULT_CONTENT.amenitiesSection.items
        },
        projectsSection: {
          ...DEFAULT_CONTENT.projectsSection,
          ...(dbData.projectsSection || {}),
          items: (Array.isArray(dbProjectItems) && dbProjectItems.length > 0)
            ? dbProjectItems
            : DEFAULT_CONTENT.projectsSection.items
        },
        theme: {
          ...DEFAULT_CONTENT.theme,
          ...(dbData.theme || {})
        }
      };
      updateAndPersistContent(merged);
      return merged;
    }
  } catch (err) {
    // Graceful fallback
  }
  return cachedContent || DEFAULT_CONTENT;
}

export function useWebsiteContent() {
  const [content, setContent] = useState(cachedContent || DEFAULT_CONTENT);

  useEffect(() => {
    fetchWebsiteContent().then((data) => {
      setContent(data);
      if (data?.theme) applyThemeToDocument(data.theme);
    });

    const handler = (newContent) => setContent(newContent);
    listeners.add(handler);
    return () => listeners.delete(handler);
  }, []);

  return content;
}
