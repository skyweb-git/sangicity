import React, { useState, useEffect } from 'react';
import { X, Download, CheckCircle2, ShieldCheck, FileText, ExternalLink } from 'lucide-react';
import { saveLead } from '../services/leadStorage';
import { useWebsiteContent } from '../services/contentService';

export const BROCHURE_URL = "/assets/maytri-ambhuja-brochure.pdf";

export default function BrochureModal({ isOpen, onClose }) {
  const websiteContent = useWebsiteContent();
  const brochureData = websiteContent?.brochure || {};

  const activeBrochureUrl = brochureData.url || BROCHURE_URL;
  const modalTitle = brochureData.modalTitle || 'Download Maytri Ambhuja Brochure';
  const modalDesc = brochureData.modalDesc || 'Receive the official villa township brochure featuring master plan details, 90,000 sq.ft clubhouse features, and 222 & 300 SQ YD floor plans.';

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setIsSuccess(false);
      setError('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError('Please provide your name and phone number to access the brochure.');
      return;
    }
    const cleanPhone = phone.replace(/[\s\-()+]/g, '');
    if (!/^[0-9]{10,13}$/.test(cleanPhone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    saveLead({
      fullName: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      preferredMethod: 'WhatsApp',
      source: 'Brochure Download',
      message: 'Requested official township brochure and floor plans.',
      status: 'New'
    });

    setError('');
    setIsSuccess(true);

    // Automatically trigger brochure download
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = activeBrochureUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.download = 'Maytri-Ambhuja-Township-Brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 400);
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="brochure-modal-title">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-card">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {!isSuccess ? (
          <div className="modal-body">
            <div className="modal-badge">
              <Download size={16} className="text-cyan" />
              <span>DIGITAL PROJECT KIT</span>
            </div>
            <h3 id="brochure-modal-title" className="modal-heading">
              {modalTitle}
            </h3>
            <p className="modal-desc">
              {modalDesc}
            </p>

            {error && <div className="modal-error">{error}</div>}

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit mobile number"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address (Optional)</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="form-input"
                />
              </div>

              <button type="submit" className="btn-primary w-full mt-2">
                <Download size={16} />
                <span>Get Instant Digital Brochure</span>
              </button>

              <div className="modal-rera-note">
                <ShieldCheck size={14} className="text-cyan" />
                <span>Official Maytri Group Township • RERA: P02400007647</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="modal-success-body text-center">
            <CheckCircle2 size={48} className="text-cyan mx-auto mb-3" />
            <h3 className="modal-heading">Brochure Access Granted</h3>
            <p className="modal-desc">
              Thank you, {name}. Your brochure download has started automatically. You can also view or download it directly below:
            </p>

            <a
              href={activeBrochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full mt-3"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', textDecoration: 'none' }}
            >
              <FileText size={18} />
              <span>Open PDF Brochure</span>
              <ExternalLink size={14} />
            </a>

            <button className="btn-secondary w-full mt-3" onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
