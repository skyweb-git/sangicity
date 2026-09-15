import React from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

export default function DocumentationCard() {
  return (
    <div className="doc-card-notch">
      {/* Top-left smooth concave transition */}
      <div className="notch-corner-top-left"></div>
      
      {/* Bottom-right smooth concave transition */}
      <div className="notch-corner-bottom-right"></div>

      {/* Main card body */}
      <div className="doc-card-content">
        <div className="doc-icon-badge">
          <ArrowUpRight size={18} strokeWidth={2} className="doc-arrow-icon" />
        </div>
        <div className="doc-text-wrapper">
          <span className="doc-title">Documentation</span>
          <span className="doc-subtitle">
            Library <ChevronRight size={12} className="doc-chevron" />
          </span>
        </div>
      </div>
    </div>
  );
}
