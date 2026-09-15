import React from 'react';
import { Layers, Activity, ShieldCheck, ArrowUpRight } from 'lucide-react';

/* ─── Left tall card ─── */
function LiquidityCard() {
  return (
    <div className="feature-card feature-card--tall">
      <div className="feature-card__icon">
        <Layers size={20} strokeWidth={1.8} />
      </div>

      {/* Decorative abstract lines (bottom-right) */}
      <div className="feature-card__deco" aria-hidden="true">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
          <path d="M20 160 Q90 80 160 20" stroke="rgba(200,205,212,0.25)" strokeWidth="1.5" fill="none" />
          <path d="M40 160 Q110 80 160 40" stroke="rgba(200,205,212,0.18)" strokeWidth="1.5" fill="none" />
          <path d="M60 160 Q130 80 160 60" stroke="rgba(200,205,212,0.12)" strokeWidth="1.5" fill="none" />
          <circle cx="160" cy="20" r="3" fill="rgba(200,205,212,0.2)" />
          <circle cx="20" cy="160" r="3" fill="rgba(200,205,212,0.2)" />
        </svg>
      </div>

      <div className="feature-card__body">
        <h3 className="feature-card__title">
          Unlock the liquidity of your assets
        </h3>
        <p className="feature-card__desc">
          Convert staked positions into liquid derivatives that can be deployed across DeFi — without unstaking.
        </p>
      </div>
    </div>
  );
}

/* ─── Right top wide card ─── */
function YieldsCard() {
  return (
    <div className="feature-card feature-card--wide">
      <div className="feature-card__icon">
        <Activity size={20} strokeWidth={1.8} />
      </div>

      {/* Decorative large pulse wave (right side) */}
      <div className="feature-card__wave" aria-hidden="true">
        <svg width="260" height="200" viewBox="0 0 260 200" fill="none">
          <path d="M0 100 Q30 40 60 100 T120 100 T180 100 T240 100" stroke="rgba(195,200,210,0.18)" strokeWidth="2" fill="none" />
          <path d="M0 120 Q30 60 60 120 T120 120 T180 120 T240 120" stroke="rgba(195,200,210,0.12)" strokeWidth="2" fill="none" />
          <text x="60" y="100" fill="rgba(195,200,210,0.10)" fontSize="120" fontWeight="800" fontFamily="Plus Jakarta Sans, sans-serif">λ</text>
        </svg>
      </div>

      <div className="feature-card__body">
        <h3 className="feature-card__title feature-card__title--sm">
          Real-time Yields
        </h3>
        <p className="feature-card__desc">
          Rewards accrue every block and stay claimable. Watch positions compound live, with no lockups or waiting periods.
        </p>
      </div>
    </div>
  );
}

/* ─── Right bottom-left card ─── */
function SecurityCard() {
  return (
    <div className="feature-card feature-card--half">
      <div className="feature-card__icon">
        <ShieldCheck size={20} strokeWidth={1.8} />
      </div>
      <div className="feature-card__body">
        <h3 className="feature-card__title feature-card__title--sm">
          Bank-grade{'\n'}security
        </h3>
        <p className="feature-card__desc">
          Multi-sig custody, formal verification, and continuous audits protect every vault.
        </p>
      </div>
    </div>
  );
}

/* ─── Right bottom-right action card ─── */
function ActionCard() {
  return (
    <div className="feature-card feature-card--half feature-card--action">
      <div className="action-card__arrow-btn">
        <ArrowUpRight size={24} strokeWidth={2} />
      </div>
      <div className="feature-card__body">
        <h3 className="feature-card__title feature-card__title--sm">
          Explore{'\n'}protocols
        </h3>
        <p className="feature-card__desc">
          Browse integrated protocols and start earning across the ecosystem.
        </p>
      </div>
    </div>
  );
}

/* ─── Grid container ─── */
export default function FeatureGrid() {
  return (
    <div className="feature-grid">
      <div className="feature-grid__left">
        <LiquidityCard />
      </div>
      <div className="feature-grid__right">
        <YieldsCard />
        <div className="feature-grid__right-bottom">
          <SecurityCard />
          <ActionCard />
        </div>
      </div>
    </div>
  );
}
