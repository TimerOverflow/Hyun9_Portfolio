import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <button onClick={toggle} style={styles.btn} title={isDark ? 'Light Mode' : 'Dark Mode'}>
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

const styles = {
  btn: {
    position: 'fixed',
    top: '1.5rem',
    right: '1.5rem',
    zIndex: 1000,
    background: 'var(--card-bg)',
    border: '1px solid var(--border-color)',
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.3rem',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    backdropFilter: 'blur(8px)',
    transition: 'all 0.3s ease',
  }
};

export default ThemeToggle;
