import React, { useState, useEffect } from 'react';
import { X, MessageSquare, CheckCircle2, ShieldCheck, ArrowUpRight, Sparkles } from 'lucide-react';
import { saveLead } from '../services/leadStorage';

export const WHATSAPP_NUMBER = "919121299999";

export default function LeadWhatsAppModal({ 
  isOpen, 
  onClose, 
  title = "Book you Villa Visit - Maytri Ambhuja",
  subtitle = "Enter your name and contact details to schedule your private VIP site tour with our sales director on WhatsApp.",
  projectContext = "Maytri Ambhuja - Villa Visit"
}) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setName('');
      setContact('');
      setError('');
      setIsSubmitting(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) {
      setError('Please provide both your Name and Contact number.');
      return;
    }

    const cleanContact = contact.replace(/[\s\-()+]/g, '');
    if (!/^[0-9]{10,13}$/.test(cleanContact)) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // 1. Save lead to MongoDB Atlas CRM backend & LocalStorage
      saveLead({
        fullName: name.trim(),
        phone: contact.trim(),
        preferredMethod: 'WhatsApp',
        source: projectContext || 'Book Your Villa Visit',
        message: `Inquiry from ${name.trim()} regarding ${projectContext}. Interested in booking a villa visit / project info.`,
        status: 'New'
      });

      // 2. Prepare pre-filled WhatsApp message
      const textMessage = `Hello Maytri Ambhuja Sales Team, My name is ${name.trim()} (${contact.trim()}). I would like more details and to book a villa visit for: ${projectContext}.`;
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textMessage)}`;

      // 3. Direct redirect to WhatsApp
      setTimeout(() => {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
        setIsSubmitting(false);
        onClose();
      }, 350);

    } catch (err) {
      console.error('Lead submission error:', err);
      // Still allow WhatsApp redirection
      const textMessage = `Hello Maytri Ambhuja Sales Team, My name is ${name.trim()} (${contact.trim()}). I would like more details and to book a villa visit for: ${projectContext}.`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textMessage)}`, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
      onClose();
    }
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="lead-modal-title">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-card lead-modal-card">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-body">
          <div className="modal-badge whatsapp-badge">
            <MessageSquare size={16} className="text-emerald-500" />
            <span>DIRECT WHATSAPP VIP ACCESS</span>
          </div>

          <h3 id="lead-modal-title" className="modal-heading">
            {title}
          </h3>
          <p className="modal-desc">
            {subtitle}
          </p>

          {error && <div className="modal-error">{error}</div>}

          <form onSubmit={handleSubmit} className="modal-form">
            <div className="form-group">
              <label className="form-label">1) Full Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ramesh Kumar"
                className="form-input"
                required
                autoFocus
              />
            </div>

            <div className="form-group">
              <label className="form-label">2) Contact / Mobile Number *</label>
              <input
                type="tel"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="e.g. 9876543210"
                className="form-input"
                required
              />
            </div>

            <div className="modal-guarantee">
              <ShieldCheck size={14} className="text-emerald-500" />
              <span>100% Privacy Guaranteed. Immediate WhatsApp Connection.</span>
            </div>

            <button
              type="submit"
              className="btn-primary modal-submit-btn book-now-btn"
              disabled={isSubmitting}
            >
              <MessageSquare size={18} />
              <span>{isSubmitting ? 'Connecting to WhatsApp...' : 'Book Now'}</span>
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
