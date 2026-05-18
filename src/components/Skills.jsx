import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const SkillIcon = ({ type }) => {
  if (type === 'board') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-primary)' }}>
        <rect x="5" y="5" width="14" height="14" rx="1" />
        <path d="M9 1v4M15 1v4M9 19v4M15 19v4M23 9h-4M23 15h-4M5 9H1M5 15H1" />
      </svg>
    );
  }
  if (type === 'language') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-primary)' }}>
        <polyline points="4 17 10 11 4 5"></polyline>
        <line x1="12" y1="19" x2="20" y2="19"></line>
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-primary)' }}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>
  );
};

const HeaderIcon = ({ type }) => {
  if (type === 'board') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-primary)' }}>
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
        <rect x="9" y="9" width="6" height="6"></rect>
        <line x1="9" y1="1" x2="9" y2="4"></line>
        <line x1="15" y1="1" x2="15" y2="4"></line>
        <line x1="9" y1="20" x2="9" y2="23"></line>
        <line x1="15" y1="20" x2="15" y2="23"></line>
        <line x1="20" y1="9" x2="23" y2="9"></line>
        <line x1="20" y1="14" x2="23" y2="14"></line>
        <line x1="1" y1="9" x2="4" y2="9"></line>
        <line x1="1" y1="14" x2="4" y2="14"></line>
      </svg>
    );
  }
  if (type === 'language') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-primary)' }}>
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-primary)' }}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>
  );
};

const LevelIndicator = ({ level = 3 }) => {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          style={{
            width: '18px',
            height: '5px',
            borderRadius: '2px',
            backgroundColor: i <= level ? 'var(--accent-primary)' : 'var(--border-color)',
            opacity: i <= level ? 1 : 0.3,
            boxShadow: i <= level
              ? '0 0 5px var(--accent-primary), 0 0 10px var(--accent-primary)'
              : 'none',
            transition: 'all 0.3s ease',
          }}
        />
      ))}
    </div>
  );
};

const Skills = () => {
  const [showLevels, setShowLevels] = useState(
    portfolioData.skills.defaultShowLevels || {
      board: false,
      language: false,
      tools: false
    }
  );

  const toggleLevel = (catId) => {
    setShowLevels((prev) => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  const categories = [
    { id: 'language', title: 'LANGUAGE' },
    { id: 'board', title: 'MCU' },
    { id: 'tools', title: 'TOOLS & OTHERS' }
  ];

  return (
    <section id="skills" className="container" style={{ marginTop: '40px' }}>
      <div className="section-header">
        <h2 className="section-title text-gradient">SKILLS</h2>
        <div className="title-line"></div>
      </div>

      <div style={styles.gridContainer}>
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="glass-card"
            style={{ ...styles.card, cursor: 'pointer', userSelect: 'none' }}
            onClick={() => toggleLevel(cat.id)}
            title="클릭하여 레벨 표시를 켜고 끕니다"
          >
            <div style={styles.cardHeader}>
              <HeaderIcon type={cat.id} />
              <h3 style={styles.cardTitle}>{cat.title}</h3>
            </div>

            <div style={styles.divider}></div>

            <div style={styles.skillsList}>
              {portfolioData.skills[cat.id]?.map((skill, index) => (
                <div key={index} style={styles.skillItem}>
                  <div style={styles.skillNameContainer}>
                    <SkillIcon type={cat.id} />
                    <span style={styles.skillName}>{skill.name}</span>
                  </div>
                  {showLevels[cat.id] && <LevelIndicator level={skill.level} />}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '24px',
    width: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    padding: '32px 24px',
    backgroundColor: 'var(--card-bg)',
    borderRadius: '16px',
    boxShadow: 'var(--shadow-md)',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  },
  cardTitle: {
    fontSize: '1.15rem',
    fontWeight: '700',
    margin: 0,
    color: 'var(--text-primary)',
    letterSpacing: '0.5px',
  },
  divider: {
    height: '1px',
    width: '100%',
    backgroundColor: 'var(--border-color)',
    marginBottom: '24px',
  },
  skillsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  skillItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  skillNameContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flex: 1,
  },
  skillName: {
    fontSize: '0.95rem',
    fontWeight: '500',
    color: 'var(--text-primary)',
  }
};

export default Skills;
