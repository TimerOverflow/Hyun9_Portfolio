import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Header = () => {
  const { name, role, description, github, email } = portfolioData.header;

  return (
    <header style={styles.header}>
      <div style={styles.inner}>
        <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{name}</h1>
        <h2 style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', fontWeight: 500 }}>{role}</h2>
        <p style={{ marginTop: '1.5rem', fontSize: '1.125rem', maxWidth: '600px', margin: '1.5rem auto', color: 'var(--text-secondary)' }}>
          {description}
        </p>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ textDecoration: 'none' }}>
            GitHub Profile
          </a>
          {email && (
            <a href={`mailto:${email}`} style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', textDecoration: 'none', borderBottom: '1px solid var(--border-color)', paddingBottom: '2px' }}>
              ✉️ {email}
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    padding: '3rem 2rem',
    textAlign: 'center',
  },
  inner: {
    maxWidth: '700px',
    margin: '0 auto',
  }
};

export default Header;
