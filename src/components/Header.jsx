import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Header = () => {
  const { name, role, description, github } = portfolioData.header;

  return (
    <header style={styles.header}>
      <div className="container" style={styles.container}>
        <div className="glass-card" style={styles.card}>
          <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{name}</h1>
          <h2 style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', fontWeight: 500 }}>{role}</h2>
          <p style={{ marginTop: '1.5rem', fontSize: '1.125rem', maxWidth: '600px', margin: '1.5rem auto' }}>
            {description}
          </p>
          <div style={{ marginTop: '2rem' }}>
            <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ textDecoration: 'none' }}>
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    padding: '120px 0 80px',
    textAlign: 'center',
    background: 'radial-gradient(circle at top, rgba(79, 70, 229, 0.05) 0%, transparent 50%)',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    maxWidth: '800px',
    padding: '3rem 2rem',
  }
};

export default Header;
