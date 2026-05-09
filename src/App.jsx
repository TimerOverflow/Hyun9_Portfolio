import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ThankYou from './components/ThankYou';
import ThemeToggle from './components/ThemeToggle';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <ThemeToggle />
      <div className="page-container">
        <Header />
        <hr className="section-divider" />
        <Skills />
        <hr className="section-divider" />
        <Experience />
        <hr className="section-divider" />
        <Projects />
        <hr className="section-divider" />
        <ThankYou />
      </div>
      <footer style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
        <p>© {new Date().getFullYear()} 정현구. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
