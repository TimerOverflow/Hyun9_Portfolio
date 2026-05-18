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
    <button 
      onClick={toggle} 
      className="theme-toggle-btn"
      title={isDark ? 'Light Mode' : 'Dark Mode'}
    >
      <span className="theme-toggle-icon">{isDark ? '☀️' : '🌙'}</span>
    </button>
  );
};

export default ThemeToggle;
