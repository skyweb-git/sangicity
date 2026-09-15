import { useState, useEffect } from 'react';
import { API_BASE_URL } from './mediaConfig';

export const DEFAULT_CONTENT = {
  hero: {
    badge: 'LUXURY TOWNSHIP IN HYDERABAD',
    title: 'THE ZENITH OF BESPOKE TOWNSHIP LIVING',
    subtitle: 'Experience 25 acres of gated luxury villas, curated private amenities, and unmatched connectivity at Sanghi City, Hyderabad.',
    ctaPrimaryText: 'Schedule VIP Site Tour',
    ctaSecondaryText: 'Download Brochure'
  },
  about: {
    sectionTitle: 'AN ARCHITECTURAL MASTERPIECE',
    tagline: 'Where grand architecture meets serene nature',
    description1: 'Maytri Ambhuja is crafted for the discerning few who seek expansive spaces, private luxury, and effortless connectivity in Hyderabad\'s most promising growth corridor.',
    description2: 'Spread over 25 lush acres with 300+ ultra-luxury villas and a majestic 90,000 sq.ft clubhouse.',
    totalVillas: '300+',
    totalAcres: '25 Acres',
    clubhouseSize: '90,000 Sq.Ft'
  },
  clubhouse: {
    title: 'THE CLUBHOUSE: 90,000 SQ.FT OF OPULENCE',
    subtitle: 'Designed with world-class wellness, leisure, and entertainment spaces for your family.'
  },
  contact: {
    phone: '+91 91212 99999',
    email: 'sales@maytriambhuja.com',
    address: 'Maytri Ambhuja, Sanghi City, Near Ramoji Film City, Hyderabad - 501511',
    salesOfficeHours: 'Daily 9:30 AM - 7:00 PM'
  }
};

let cachedContent = null;
const listeners = new Set();

export async function fetchWebsiteContent() {
  try {
    const res = await fetch(`${API_BASE_URL}/content`);
    if (!res.ok) throw new Error('API fetch failed');
    const json = await res.json();
    if (json.success && json.data) {
      cachedContent = {
        ...DEFAULT_CONTENT,
        ...json.data,
        hero: { ...DEFAULT_CONTENT.hero, ...(json.data.hero || {}) },
        about: { ...DEFAULT_CONTENT.about, ...(json.data.about || {}) },
        clubhouse: { ...DEFAULT_CONTENT.clubhouse, ...(json.data.clubhouse || {}) },
        contact: { ...DEFAULT_CONTENT.contact, ...(json.data.contact || {}) }
      };
      listeners.forEach(fn => fn(cachedContent));
      return cachedContent;
    }
  } catch (err) {
    // Graceful fallback
  }
  return cachedContent || DEFAULT_CONTENT;
}

export function useWebsiteContent() {
  const [content, setContent] = useState(cachedContent || DEFAULT_CONTENT);

  useEffect(() => {
    fetchWebsiteContent().then(setContent);

    const handler = (newContent) => setContent(newContent);
    listeners.add(handler);
    return () => listeners.delete(handler);
  }, []);

  return content;
}
