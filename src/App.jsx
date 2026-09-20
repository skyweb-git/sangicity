import React, { useState, useEffect } from 'react';
import StructuredData from './components/StructuredData';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProjectHighlights from './components/ProjectHighlights';
import ClubHouse from './components/ClubHouse';
import Elevations from './components/Elevations';
import FloorPlans from './components/FloorPlans';
import Amenities from './components/Amenities';
import OurProjects from './components/OurProjects';
import Specifications from './components/Specifications';
import Faq from './components/Faq';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import BrochureModal from './components/BrochureModal';
import PrivacyModal from './components/PrivacyModal';
import LeadWhatsAppModal from './components/LeadWhatsAppModal';
import { Phone, MessageSquare } from 'lucide-react';
import { useWebsiteContent } from './services/contentService';

export default function App() {
  // Sync global website content and dynamic theme styling
  useWebsiteContent();
  // Modal states
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    images: [],
    activeIndex: 0
  });

  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  // WhatsApp Lead Modal State
  const [leadModalState, setLeadModalState] = useState({
    isOpen: false,
    title: "Book you Villa Visit - Maytri Ambhuja",
    subtitle: "Enter your name and contact number. You will be directly connected to our official sales desk on WhatsApp.",
    projectContext: "Maytri Ambhuja - Villa Visit"
  });

  // Floating Action Bar Visibility: Hide on Scroll Down, Show on Scroll Up
  const [showFloatingBar, setShowFloatingBar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show if near top of page (< 80px)
      if (currentScrollY < 80) {
        setShowFloatingBar(true);
      } 
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY + 5) {
        setShowFloatingBar(false); // scrolling down
      } else if (currentScrollY < lastScrollY - 5) {
        setShowFloatingBar(true); // scrolling up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenLightbox = (images, index = 0) => {
    setLightboxState({
      isOpen: true,
      images,
      activeIndex: index
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
  };

  const handleChangeLightboxIndex = (newIndex) => {
    setLightboxState(prev => ({ ...prev, activeIndex: newIndex }));
  };

  const handleOpenBookVisit = (projectTitle = 'Maytri Ambhuja - Villa Visit') => {
    setLeadModalState({
      isOpen: true,
      title: 'Book you Villa Visit - Maytri Ambhuja',
      subtitle: 'Enter your name and contact details to connect directly with our sales director on WhatsApp.',
      projectContext: projectTitle
    });
  };

  const scrollToContact = () => {
    handleOpenBookVisit('Maytri Ambhuja - General Inquiry');
  };

  return (
    <div className="maytri-app-root">
      {/* JSON-LD Structured Data for Real-Estate & Organization SEO */}
      <StructuredData />

      {/* Transparent Sticky Header */}
      <Header
        onOpenEnquiry={() => handleOpenBookVisit('Maytri Ambhuja - Header CTA')}
        onOpenBrochure={() => setBrochureModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero Section with H1, RERA, CTAs & Highlights */}
        <Hero
          onOpenBookVisit={() => handleOpenBookVisit('Maytri Ambhuja - Villa Visit')}
        />

        {/* 2. About Maytri Group */}
        <About
          onOpenEnquiry={() => handleOpenBookVisit('Maytri Ambhuja - About Section')}
        />

        {/* 3. The Crown of Maytri Group / Statistics */}
        <ProjectHighlights />

        {/* 4. Club House Showcase (90,000 S.ft & 4.5 Acres Park) */}
        <ClubHouse
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 5. Villa Elevations & Landscape Gallery */}
        <Elevations
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 6. Villa Floor Plans (222 & 300 SQ YDS East/West) */}
        <FloorPlans
          onOpenEnquiry={() => handleOpenBookVisit('Maytri Ambhuja - Floor Plans')}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 7. 16 Modern Amenities */}
        <Amenities />

        {/* 8. Our Projects (Replaced Location Map) */}
        <OurProjects 
          onOpenProjectInquiry={(projectTitle) => handleOpenBookVisit(projectTitle)}
        />

        {/* 9. 15 Categories Technical Specifications */}
        <Specifications
          onOpenEnquiry={() => handleOpenBookVisit('Maytri Ambhuja - Specifications')}
        />

        {/* 10. Comprehensive Verified FAQ Section */}
        <Faq />

        {/* 11. Lead & Contact Enquiry Form */}
        <LeadForm
          onOpenBrochure={() => setBrochureModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
      />

      {/* Floating Action Strip for Fast Enquiries — Single Unified Action Button */}
      <div 
        className={`floating-action-bar ${showFloatingBar ? 'floating-action-bar--visible' : 'floating-action-bar--hidden'}`} 
        role="region" 
        aria-label="Quick Actions"
      >
        <button
          className="floating-btn floating-btn--unified"
          onClick={() => handleOpenBookVisit('Maytri Ambhuja - Floating Bar')}
          aria-label="Book Villa Visit on WhatsApp"
        >
          <div className="unified-btn-icon-cluster">
            <MessageSquare size={16} className="unified-icon-msg" />
          </div>
          <span className="unified-btn-text">Book Villa Visit</span>
        </button>
      </div>

      {/* Modals */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        images={lightboxState.images}
        activeIndex={lightboxState.activeIndex}
        onClose={handleCloseLightbox}
        onChangeIndex={handleChangeLightboxIndex}
      />

      <BrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
      />

      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      <LeadWhatsAppModal
        isOpen={leadModalState.isOpen}
        title={leadModalState.title}
        subtitle={leadModalState.subtitle}
        projectContext={leadModalState.projectContext}
        onClose={() => setLeadModalState(prev => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}
