import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import FeatureGrid from './FeatureGrid';

export default function ArchitectureSection() {
  return (
    <section className="architecture-section">
      <div className="architecture-inner">
        {/* Heading row */}
        <div className="architecture-header">
          <h2 className="architecture-title">
            Architected for high-{'\n'}performance DeFi
          </h2>
          <button className="start-staking-btn">
            <span>Start Staking</span>
            <div className="start-staking-arrow">
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </div>
          </button>
        </div>

        {/* Feature card grid */}
        <FeatureGrid />
      </div>
    </section>
  );
}
