import React from 'react';

const stats = [
  { value: '$2.4B', label: 'Total Value Locked' },
  { value: '8.5%', label: 'Average Realized Yield' },
  { value: '140K+', label: 'Active Participants' },
  { value: '< 2s', label: 'Finality Engine' },
];

function StatItem({ value, label }) {
  return (
    <div className="stat-item">
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <React.Fragment key={stat.label}>
            <StatItem value={stat.value} label={stat.label} />
            {index < stats.length - 1 && <div className="stat-divider" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
