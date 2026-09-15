import React from 'react';
import { ArrowUpRight, Vault, Puzzle, Server } from 'lucide-react';

const cards = [
  {
    icon: Vault,
    title: 'Smart Vaults',
    desc: 'Put your assets to work while keeping liquidity accessible.',
  },
  {
    icon: Puzzle,
    title: 'Composable Yield',
    desc: 'Build strategies that adapt to changing market conditions.',
  },
  {
    icon: Server,
    title: 'Open Infrastructure',
    desc: 'Transparent infrastructure designed for developers and institutions.',
  },
];

function NextGenCard({ icon: Icon, title, desc }) {
  return (
    <div className="nextgen-card">
      <div className="nextgen-card__icon">
        <Icon size={20} strokeWidth={1.8} />
      </div>
      <div className="nextgen-card__body">
        <h3 className="nextgen-card__title">{title}</h3>
        <p className="nextgen-card__desc">{desc}</p>
      </div>
    </div>
  );
}

export default function NextGenSection() {
  return (
    <section className="nextgen-section">
      <div className="nextgen-inner">
        {/* Header row */}
        <div className="nextgen-header">
          <div className="nextgen-header__text">
            <h2 className="nextgen-heading">
              Built for the next{'\n'}generation of finance
            </h2>
            <p className="nextgen-subtitle">
              Everything you need to put idle assets to work with transparent, programmable liquidity.
            </p>
          </div>

          <button className="nextgen-cta-btn">
            <span>Explore the Ecosystem</span>
            <div className="nextgen-cta-arrow">
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </div>
          </button>
        </div>

        {/* 3-column card grid */}
        <div className="nextgen-grid">
          {cards.map((card) => (
            <NextGenCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
