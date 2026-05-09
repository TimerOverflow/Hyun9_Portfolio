import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('board');
  const tabs = [
    { id: 'board', label: 'Board / Hardware' },
    { id: 'language', label: 'Languages / Frameworks' },
    { id: 'tools', label: 'Tools / Others' }
  ];

  return (
    <section id="skills" className="container" style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '24px', padding: '80px 40px', marginTop: '40px' }}>
      <h2 className="section-title text-gradient">SKILLS</h2>

      <div style={styles.tabsContainer}>
        <div style={styles.tabList}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              style={{
                ...styles.tabButton,
                ...(activeTab === tab.id ? styles.activeTab : {})
              }}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="glass-card" style={styles.tabContent}>
          <div style={styles.skillsGrid}>
            {portfolioData.skills[activeTab].map((skill, index) => (
              <div key={index} style={styles.skillItem}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  tabsContainer: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  tabList: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '2rem',
    flexWrap: 'wrap',
  },
  tabButton: {
    padding: '0.75rem 1.5rem',
    borderRadius: '999px',
    border: '1px solid var(--border-color)',
    background: 'transparent',
    color: 'var(--text-primary)',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'var(--transition)',
    fontSize: '0.9rem',
  },
  activeTab: {
    background: 'var(--accent-gradient)',
    color: 'white',
    borderColor: 'transparent',
  },
  tabContent: {
    minHeight: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skillsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'center',
  },
  skillItem: {
    background: 'var(--bg-primary)',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
    fontWeight: 500,
    boxShadow: 'var(--shadow-sm)',
  }
};

export default Skills;
