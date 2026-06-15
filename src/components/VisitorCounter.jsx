import React from 'react';
import { useVisitorCount } from '../hooks/useVisitorCount';

const VisitorCounter = ({ show }) => {
  const visitorCount = useVisitorCount();

  if (!show) return null;

  return (
    <div style={styles.container} className="visitor-counter-anim">
      <div style={styles.badge}>
        <span style={styles.icon}>👀</span>
        <span style={styles.text}>Total Visitors</span>
        <span style={styles.count}>{visitorCount.toLocaleString()}</span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    top: '8.5rem',
    right: '1.5rem',
    zIndex: 1000,
  },
  badge: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    color: 'var(--text-primary)',
    fontFamily: 'inherit',
    animation: 'slideInRight 0.3s ease-out forwards',
  },
  icon: {
    fontSize: '1.2rem',
  },
  text: {
    fontSize: '0.9rem',
    fontWeight: '500',
    color: 'var(--text-secondary)',
  },
  count: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'var(--accent-primary)',
    marginLeft: '0.2rem',
  }
};

export default VisitorCounter;
