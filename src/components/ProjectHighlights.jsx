import React from 'react';
import { Map, Building2, Trees, ShieldCheck, Home } from 'lucide-react';

export default function ProjectHighlights() {
  const stats = [
    {
      value: '55',
      unit: 'Acres',
      label: 'Project Areas',
      icon: Map,
      description: 'Expansive master-planned villa township near ORR Exit 11'
    },
    {
      value: '516',
      unit: 'Villas',
      label: 'Premium Villas',
      icon: Home,
      description: 'Ultra-luxury 222 & 300 SQ YDS Triplex Villa residences'
    },
    {
      value: '90,000',
      unit: 'Sft',
      label: 'Club House',
      icon: Building2,
      description: 'Hyderabad\'s finest grand clubhouse with world-class leisure'
    },
    {
      value: '100%',
      unit: 'Gated',
      label: 'Gated Community',
      icon: ShieldCheck,
      description: '3-tier security, 4.5-acre green park & tree-lined avenues'
    }
  ];

  return (
    <section className="section-wrapper highlights-section" aria-label="Project Statistics">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="eyebrow-tag">MASTER PLAN OVERVIEW</span>
          <h2 className="section-title">
            Township Benchmark Features
          </h2>
          <p className="section-subtitle">
            Crafted with expansive scales and thoughtful architectural planning near ORR Exit 11, Hyderabad.
          </p>
        </div>

        <div className="stats-box-grid">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="stat-card">
                <div className="stat-card-icon">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <div className="stat-card-number">
                  <span className="stat-num-value">{item.value}</span>
                  <span className="stat-num-unit">{item.unit}</span>
                </div>
                <h3 className="stat-card-label">{item.label}</h3>
                <p className="stat-card-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
