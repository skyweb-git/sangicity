import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ isOpen, images, activeIndex, onClose, onChangeIndex }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && activeIndex > 0) onChangeIndex(activeIndex - 1);
      if (e.key === 'ArrowRight' && activeIndex < images.length - 1) onChangeIndex(activeIndex + 1);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, activeIndex, images, onClose, onChangeIndex]);

  if (!isOpen || !images || images.length === 0) return null;

  const current = images[activeIndex] || images[0];

  return (
    <div className="lightbox-overlay" role="dialog" aria-modal="true" aria-label="Image preview">
      <div className="lightbox-backdrop" onClick={onClose} />

      <button className="lightbox-close-btn" onClick={onClose} aria-label="Close image preview">
        <X size={24} />
      </button>

      {images.length > 1 && (
        <>
          <button
            className="lightbox-nav-btn lightbox-nav-btn--prev"
            onClick={() => onChangeIndex(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            className="lightbox-nav-btn lightbox-nav-btn--next"
            onClick={() => onChangeIndex(Math.min(images.length - 1, activeIndex + 1))}
            disabled={activeIndex === images.length - 1}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}

      <div className="lightbox-content-box">
        <img
          src={current.src}
          alt={current.alt || 'Maytri Ambhuja Gallery Image'}
          className="lightbox-image"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/001.jpeg";
          }}
        />
        <div className="lightbox-caption-bar">
          <div className="lightbox-info">
            <h4 className="lightbox-title">{current.title || current.alt}</h4>
            {current.caption && <p className="lightbox-caption">{current.caption}</p>}
          </div>
          <span className="lightbox-counter">
            {activeIndex + 1} / {images.length}
          </span>
        </div>
      </div>
    </div>
  );
}
