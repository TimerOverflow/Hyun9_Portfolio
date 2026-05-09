import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="container">
      <h2 className="section-title text-gradient">WORK EXPERIENCE</h2>
      <div style={styles.timeline}>
        {portfolioData.experience.map((exp, index) => (
          <div key={exp.id} className="glass-card" style={styles.item}>
            <div style={styles.period}>{exp.period}</div>
            <div style={styles.content}>
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.25rem' }}>{exp.company} <span style={{ fontWeight: 400, color: 'var(--text-secondary)' }}>- {exp.role}</span></h3>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem',
  },
  period: {
    fontWeight: 600,
    color: 'var(--accent-primary)',
    marginBottom: '0.5rem',
    fontSize: '0.875rem',
  },
  content: {
    flex: 1,
  }
};

export default Experience;
