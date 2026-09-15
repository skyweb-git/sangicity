import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "What is Maytri Ambhuja?",
      a: "Maytri Ambhuja is an exclusive villa township in Hyderabad developed by Maytri Group. Spanning 55 acres with 55% open space, it features luxury villas surrounded by picturesque pathways, rich finishes, a 90,000 S.ft clubhouse, and a 4.5+ acres central landscape."
    },
    {
      q: "Who is the developer of Maytri Ambhuja?",
      a: "Maytri Ambhuja is developed by Maytri Group, one of the reputed and veteran real estate firms in Hyderabad with 13+ years of experience, recognized for superior quality and dependability."
    },
    {
      q: "What type of project is Maytri Ambhuja?",
      a: "Maytri Ambhuja is an exclusive gated villa township designed for comfortable eco-friendly community living with tree-lined avenues and extensive lifestyle infrastructure."
    },
    {
      q: "What is the RERA number of Maytri Ambhuja?",
      a: "The project is registered with Telangana RERA under the registration number P02400007647."
    },
    {
      q: "What amenities are available at Maytri Ambhuja?",
      a: "Amenities include a 90,000 S.ft Clubhouse, 4.5 Acres Central Park, Swimming Pool, Gym, Playing Area, Tennis Court, Shuttle Court, Squash Court, Jogging Track, Indoor Games, Grocery Store, Intercom, Lifts, 24/7 Security, Banquet Hall, and ATM."
    },
    {
      q: "Does Maytri Ambhuja have a clubhouse?",
      a: "Yes, Maytri Ambhuja features a grand 90,000 S.ft resort-style Club House designed to offer a luxurious escape and wellness facilities within the community."
    },
    {
      q: "What villa floor plans are available?",
      a: "Available configurations include 222 SQ Yards East Facing, 222 SQ Yards West Facing, 300 SQ Yards East Facing, and 300 SQ Yards West Facing villas. The 222 East Facing villa layout comprises 3356.291 SFT of total built-up area across Ground, First, and Terrace levels."
    },
    {
      q: "Where is Maytri Ambhuja located?",
      a: "Maytri Ambhuja is located in Hyderabad, Telangana. The site experience center is situated at Survey no: 156, ORR Exit-11, Pedda Amberpet, Hyderabad 501511."
    },
    {
      q: "How can I request the brochure?",
      a: "You can request the project brochure by clicking the 'Download Brochure' button on this website or contacting our sales team directly at info@sanghicity.in."
    },
    {
      q: "How can I schedule a site visit?",
      a: "You can schedule a site visit by submitting the enquiry form on this page or by contacting our team at +91 95506 14989."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <section className="section-wrapper faq-section" aria-label="Frequently Asked Questions">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="eyebrow-tag">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="section-title">
            Everything You Need to Know
          </h2>
          <p className="section-subtitle">
            Find answers to common questions about Maytri Ambhuja, its villa layouts, amenities, and developer credentials.
          </p>
        </div>

        <div className="faq-list-container">
          {faqs.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
              >
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="faq-question-text">{item.q}</span>
                  <div className={`faq-chevron ${isOpen ? 'faq-chevron--rotated' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <div
                  id={`faq-answer-${idx}`}
                  className="faq-answer-body"
                  hidden={!isOpen}
                >
                  <p className="faq-answer-text">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
