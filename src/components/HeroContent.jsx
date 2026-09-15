import React from 'react';
import { Sparkles } from 'lucide-react';

export default function HeroContent() {
  return (
    <div className="hero-content-wrapper">
      {/* Top Pill Badge */}
      <div className="hero-pill-badge">
        <Sparkles size={13} className="hero-pill-icon" />
        <span>Fluid Staking</span>
      </div>

      {/* Main Heading */}
      <h1 className="hero-main-title">
        Fluid Asset Streams
      </h1>

      {/* Subtitle */}
      <p className="hero-subtitle">
        Access Smart Vaults, stake RIVR and NFTs, and turn rigid holdings into liquid cash, instantly.
      </p>
    </div>
  );
}
