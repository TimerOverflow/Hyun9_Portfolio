import React, { useState } from 'react';
import Header from './components/Header';
import VisitorCounter from './components/VisitorCounter';
import VisitorLogsModal from './components/VisitorLogsModal';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ThankYou from './components/ThankYou';
import ThemeToggle from './components/ThemeToggle';
import './index.css';

function App() {
  const [showCounter, setShowCounter] = useState(false);
  const [showLogsModal, setShowLogsModal] = useState(false);

  return (
    <div className="app-container">
      <ThemeToggle />
      <VisitorCounter 
        show={showCounter} 
        onSecretClick={() => setShowLogsModal(true)} 
      />
      <VisitorLogsModal 
        isOpen={showLogsModal} 
        onClose={() => setShowLogsModal(false)} 
      />
      <div className="page-container">
        <Header onProfileClick={() => setShowCounter(prev => !prev)} />
        <Skills />
        <Experience />
        <Projects />
      </div>
      <ThankYou />
      <footer style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
        <p>© {new Date().getFullYear()} 정현구. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
