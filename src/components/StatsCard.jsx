import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function StatsCard() {
  return (
    <div className="stats-card-container">
      <div className="stats-number">5.2K</div>
      <div className="stats-label">ACTIVE YIELDERS</div>
      <button className="stats-discord-btn">
        <div className="discord-arrow-icon">
          <ArrowUpRight size={13} strokeWidth={2.5} />
        </div>
        <span>Join Discord</span>
      </button>
    </div>
  );
}
