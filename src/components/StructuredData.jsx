import React from 'react';

export default function StructuredData() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "RealEstateAgent"],
        "@id": "https://www.sanghicity.in/#organization",
        "name": "Sanghi City & Maytri Group",
        "legalName": "Maytri Infratech Private Limited",
        "alternateName": ["Sanghi City Hyderabad", "Maytri Ambhuja", "Maytri Group"],
        "url": "https://www.sanghicity.in",
        "logo": "https://www.sanghicity.in/sanghicity-logo.png",
        "image": "https://res.cloudinary.com/s8b4ps7b/image/upload/v1741544000/maytri/elevations/001.jpg",
        "telephone": "+91-40-24200456",
        "email": "sales@sanghicity.in",
        "description": "Maytri Group and Sanghi City develop premier luxury villa townships in Hyderabad, known for architectural excellence, 13+ years of dependability, and landmark communities.",
        "foundingDate": "2011",
        "founders": [
          {
            "@type": "Person",
            "name": "JP - Managing Director"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Old Bata Showroom Building, Vanasthalipuram, Next to Dmart",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "postalCode": "500070",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://www.facebook.com/maytrigroup",
          "https://www.instagram.com/maytrigroup",
          "https://www.youtube.com/@maytrigroup",
          "https://www.linkedin.com/company/maytri-group"
        ],
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Hyderabad"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Sanghi Nagar"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Telangana"
          }
        ]
      },
      {
        "@type": ["HousingComplex", "SingleFamilyResidence", "Place"],
        "@id": "https://www.sanghicity.in/#project",
        "name": "Sanghi City — Maytri Ambhuja Luxury Villa Township",
        "description": "Exclusive 55-Acre Gated Villa Township in Sanghi Nagar, Hyderabad featuring 516 triplex villas, 90,000 sq.ft luxury clubhouse, 4.5-acre central park, and 55% lush open green spaces.",
        "url": "https://www.sanghicity.in",
        "telephone": "+91-40-24200456",
        "identifier": "P02400007647",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 17.2608,
          "longitude": 78.6811
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Survey no: 156, ORR Exit-11, Pedda Amberpet, Sanghi Nagar",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "postalCode": "501511",
          "addressCountry": "IN"
        },
        "containedInPlace": {
          "@type": "Place",
          "name": "Sanghi Nagar, Hyderabad, Telangana"
        },
        "numberOfRooms": 4,
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "90,000 Sq.Ft Grand Clubhouse", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "4.5 Acres Central Park & Landscape", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Swimming Pool with Deck", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Tennis, Squash & Shuttle Courts", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "55% Open Green Space", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "3-Tier 24/7 Security & CCTV", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Banquet Hall & Guest Rooms", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "100% Power Backup & Solar Infrastructure", "value": true }
        ],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "32000000",
          "highPrice": "55000000",
          "offerCount": "516",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@id": "https://www.sanghicity.in/#organization"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "128",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.sanghicity.in/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.sanghicity.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Hyderabad Luxury Villas",
            "item": "https://www.sanghicity.in/#about"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Sanghi City Luxury Township",
            "item": "https://www.sanghicity.in/#project"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.sanghicity.in/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Sanghi City (Maytri Ambhuja)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sanghi City (Maytri Ambhuja) is a premier 55-acre ultra-luxury villa township in Hyderabad developed by Maytri Group. It features 516 triplex luxury villas, a 90,000 sq.ft clubhouse, 4.5 acres of central landscape, and 55% open spaces."
            }
          },
          {
            "@type": "Question",
            "name": "Where is Sanghi City located in Hyderabad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sanghi City is located at Survey no: 156, near ORR Exit-11, Pedda Amberpet, Sanghi Nagar corridor in Hyderabad (Pincode: 501511), offering seamless signal-free connectivity to Hyderabad International Airport, Gachibowli, Financial District, and Ramoji Film City."
            }
          },
          {
            "@type": "Question",
            "name": "Is Sanghi City registered with Telangana RERA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, the project is officially registered and approved by Telangana Real Estate Regulatory Authority (TSRERA) under registration number P02400007647."
            }
          },
          {
            "@type": "Question",
            "name": "What villa configurations and floor plans are available at Sanghi City?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sanghi City offers 222 SQ YDS and 300 SQ YDS luxury triplex villas in both East-Facing and West-Facing configurations, ranging from 3,356 sq.ft up to 4,500+ sq.ft built-up area across Ground, First, and Terrace levels."
            }
          },
          {
            "@type": "Question",
            "name": "What is the price of villas in Sanghi City?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Spacious villas at Sanghi City start from ₹3.2 Crore onwards depending on unit size (222 sq yds vs 300 sq yds), facing (East/West), and corner plot locations."
            }
          },
          {
            "@type": "Question",
            "name": "What clubhouse and sports amenities are provided?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The project features a massive 90,000 sq.ft resort-style clubhouse, a 4.5-acre central park, swimming pool with deck, gymnasium, squash courts, tennis & badminton courts, banquet halls, supermarket, and 3-tier round-the-clock security."
            }
          },
          {
            "@type": "Question",
            "name": "How can I book a villa or schedule a site visit at Sanghi City?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can schedule a private site visit by calling +91-40-24200456, clicking the 'Book Villa Visit' WhatsApp button on the website, or submitting your enquiry form."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
