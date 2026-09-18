import React, { useState } from 'react';
import { Phone, Mail, Calendar, Download, CheckCircle2, AlertCircle, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { saveLead } from '../services/leadStorage';
import { CLOUDINARY_MEDIA } from '../services/mediaConfig';

// Production configuration endpoint for CRM/Email integration
export const FORM_ENDPOINT = ""; // Set your API endpoint here (e.g. "/api/enquiry" or formspree URL)

export default function LeadForm({ onOpenBrochure }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredMethod: 'Phone',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter a valid full name.';
    }

    // Phone validation (Indian 10-digit number format or international with digits)
    const cleanPhone = formData.phone.replace(/[\s\-()+]/g, '');
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!/^[0-9]{10,13}$/.test(cleanPhone)) {
      errs.phone = 'Please enter a valid 10-digit phone number.';
    }

    // Optional email validation
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      if (FORM_ENDPOINT) {
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (!response.ok) throw new Error('Submission failed');
      }

      // Save to shared lead store for Admin App & CRM
      saveLead({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        preferredMethod: formData.preferredMethod,
        message: formData.message,
        source: 'Landing Page CTA Enquiry',
        status: 'New'
      });

      // Small UI delay for smooth feedback
      await new Promise(resolve => setTimeout(resolve, 500));

      setIsSuccess(true);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        preferredMethod: 'Phone',
        message: ''
      });
    } catch (err) {
      setErrors({ form: 'Unable to submit right now. Please call us directly at +91 95506 14989.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-wrapper lead-section" aria-label="Project Enquiry and Contact">
      {/* Video Background Layer */}
      <div className="lead-media-wrapper">
        <video
          className="lead-media-bg"
          src={CLOUDINARY_MEDIA.ctaVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="lead-media-overlay" />
      </div>

      <div className="section-container lead-container-rel">
        {/* Top Header inside CTA Video Section */}
        <div className="lead-section-top-header">
          <span className="eyebrow-tag lead-top-tag">SANGHI CITY</span>
          <h2 className="lead-top-title">
            Exclusive Villa Township in Hyderabad
          </h2>
          <p className="lead-top-subtitle">
            Premium Gated Community Living with 4.5 Acres Central Park &amp; 90,000 S.ft Clubhouse
          </p>
        </div>

        <div className="lead-grid">
          {/* Left Column: Contact Value Proposition & Direct Channels */}
          <div className="lead-info-card">
            <span className="eyebrow-tag">CONNECT WITH SALES DESK</span>
            <h3 className="lead-heading">
              Make Sanghi City Your Next Address
            </h3>
            <p className="lead-subtext">
              Connect with our advisory team for project details, villa floor plans, brochure information and site visit assistance.
            </p>

            <div className="direct-cta-list">
              <a href="tel:9550614989" className="direct-cta-item">
                <div className="direct-cta-icon">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="direct-cta-lbl">Call Direct</span>
                  <strong className="direct-cta-val">+91 95506 14989</strong>
                </div>
              </a>

              <a href="mailto:info@sanghicity.in" className="direct-cta-item">
                <div className="direct-cta-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="direct-cta-lbl">Official Email</span>
                  <strong className="direct-cta-val">info@sanghicity.in</strong>
                </div>
              </a>

              <div
                className="direct-cta-item cursor-pointer"
                onClick={onOpenBrochure}
                role="button"
                tabIndex={0}
              >
                <div className="direct-cta-icon">
                  <Download size={18} />
                </div>
                <div>
                  <span className="direct-cta-lbl">Brochure &amp; Plans</span>
                  <strong className="direct-cta-val">Download Digital Kit</strong>
                </div>
              </div>
            </div>

            <div className="lead-rera-tag">
              <ShieldCheck size={16} className="text-cyan" />
              <span>Telangana RERA Reg No: <strong>P02400007647</strong></span>
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lead-form-card">
            {isSuccess ? (
              <div className="form-success-box">
                <div className="success-icon-bubble">
                  <CheckCircle2 size={44} className="text-cyan" />
                </div>
                <h3 className="success-title">Enquiry Received</h3>
                <p className="success-desc">
                  Thank you for your interest in Maytri Ambhuja. Our dedicated sales advisor will contact you shortly with the requested villa information.
                </p>
                <button
                  className="btn-secondary mt-4"
                  onClick={() => setIsSuccess(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="enquiry-form">
                <h3 className="form-title">Schedule a Site Visit / Request Callback</h3>

                {errors.form && (
                  <div className="form-error-banner" role="alert">
                    <AlertCircle size={16} />
                    <span>{errors.form}</span>
                  </div>
                )}

                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">
                    Full Name <span className="text-required">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`form-input ${errors.fullName ? 'form-input--error' : ''}`}
                    required
                  />
                  {errors.fullName && <span className="field-error-msg">{errors.fullName}</span>}
                </div>

                {/* Phone Field */}
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number <span className="text-required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className={`form-input ${errors.phone ? 'form-input--error' : ''}`}
                    required
                  />
                  {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                  />
                  {errors.email && <span className="field-error-msg">{errors.email}</span>}
                </div>

                {/* Preferred Method */}
                <div className="form-group">
                  <label className="form-label">Preferred Contact Method</label>
                  <div className="radio-pill-group">
                    {['Phone', 'WhatsApp', 'Email'].map((method) => (
                      <label key={method} className="radio-pill-label">
                        <input
                          type="radio"
                          name="preferredMethod"
                          value={method}
                          checked={formData.preferredMethod === method}
                          onChange={handleChange}
                          className="radio-pill-input"
                        />
                        <span className="radio-pill-text">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message / Query</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="I am interested in Maytri Ambhuja villa floor plans and site visit..."
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full form-submit-btn"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Processing Enquiry...' : 'Submit Enquiry'}</span>
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </button>

                <p className="form-privacy-note">
                  Your information is kept secure and only used to assist your villa enquiry with Maytri Group.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
