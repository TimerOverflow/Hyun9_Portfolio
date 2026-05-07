import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ThemeToggle from './components/ThemeToggle';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <ThemeToggle />
      <Header />
      <main>
        <Experience />
        <Skills />
        <Projects />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
        <p>© {new Date().getFullYear()} 정현구. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
