import React, { useState, useEffect } from 'react';
import { X, Download, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { saveLead } from '../services/leadStorage';

// Configuration point for brochure download file
export const BROCHURE_URL = "/assets/maytri-ambhuja-brochure.pdf";

export default function BrochureModal({ isOpen, onClose }) {
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
              Download Maytri Ambhuja Brochure
            </h3>
            <p className="modal-desc">
              Receive the official villa township brochure featuring master plan details, 90,000 sq.ft clubhouse features, and 222 &amp; 300 SQ YD floor plans.
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
              Thank you, {name}. Your brochure request has been received. Our sales advisory desk has sent the project digital kit to your phone/email.
            </p>
            <button className="btn-secondary w-full mt-4" onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
