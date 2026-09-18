import React from 'react';
import { Map, Building2, Trees, ShieldCheck, Home } from 'lucide-react';
import { useWebsiteContent } from '../services/contentService';

export default function ProjectHighlights() {
  const content = useWebsiteContent();
  const about = content?.about || {};

  const acresRaw = about.totalAcres || '55 Acres';
  const acresMatch = acresRaw.match(/^([0-9.,+]+)\s*(.*)$/);
  const acresVal = acresMatch ? acresMatch[1] : '55';
  const acresUnit = acresMatch && acresMatch[2] ? acresMatch[2] : 'Acres';

  const villasRaw = about.totalVillas || '516 Villas';
  const villasMatch = villasRaw.match(/^([0-9.,+]+)\s*(.*)$/);
  const villasVal = villasMatch ? villasMatch[1] : '516';
  const villasUnit = villasMatch && villasMatch[2] ? villasMatch[2] : 'Villas';

  const clubhouseRaw = about.clubhouseSize || '90,000 Sft';
  const clubhouseMatch = clubhouseRaw.match(/^([0-9.,+]+)\s*(.*)$/);
  const clubhouseVal = clubhouseMatch ? clubhouseMatch[1] : '90,000';
  const clubhouseUnit = clubhouseMatch && clubhouseMatch[2] ? clubhouseMatch[2] : 'Sft';

  const stats = [
    {
      value: acresVal,
      unit: acresUnit,
      label: 'Project Areas',
      icon: Map,
      description: 'Expansive master-planned villa township near ORR Exit 11'
    },
    {
      value: villasVal,
      unit: villasUnit,
      label: 'Premium Villas',
      icon: Home,
      description: 'Ultra-luxury 222 & 300 SQ YDS Triplex Villa residences'
    },
    {
      value: clubhouseVal,
      unit: clubhouseUnit,
      label: 'Club House',
      icon: Building2,
      description: "Hyderabad's finest grand clubhouse with world-class leisure"
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
