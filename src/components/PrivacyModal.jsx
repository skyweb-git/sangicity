import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

export default function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="privacy-modal-title">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-card modal-card--lg">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-body">
          <div className="modal-badge">
            <ShieldCheck size={16} className="text-cyan" />
            <span>LEGAL &amp; PRIVACY</span>
          </div>
          <h3 id="privacy-modal-title" className="modal-heading">
            Privacy Policy
          </h3>
          <div className="modal-text-content">
            <p>
              Maytri Group ("we", "our", "us") values your privacy. This privacy policy applies to personal information collected through this official website for the Maytri Ambhuja exclusive villa township project (RERA NO: P02400007647).
            </p>
            <h4 className="privacy-subheading">Information We Collect</h4>
            <p>
              When you submit an enquiry, request a brochure, or schedule a site visit, we collect your name, phone number, email address, and any specific preferences you provide.
            </p>
            <h4 className="privacy-subheading">How We Use Your Information</h4>
            <p>
              Your contact details are used strictly by our authorized Maytri Group sales and customer relationship team to:
            </p>
            <ul className="privacy-list">
              <li>Provide villa floor plans, master layout details, and pricing sheets.</li>
              <li>Coordinate scheduled visits to our site experience center at ORR Exit-11, Pedda Amberpet, Hyderabad.</li>
              <li>Deliver official project updates and RERA-compliant disclosures.</li>
            </ul>
            <h4 className="privacy-subheading">Data Protection</h4>
            <p>
              We do not sell, rent, or distribute your personal data to unauthorized third parties. For any inquiries regarding your data, contact us at <strong>info@sanghicity.in</strong> or call <strong>+91 95506 14989</strong>.
            </p>
          </div>

          <button className="btn-primary w-full mt-4" onClick={onClose}>
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
