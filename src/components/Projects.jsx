import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="projects" className="container">
      <h2 className="section-title text-gradient">Key Projects</h2>
      <div style={styles.accordionContainer}>
        {portfolioData.projects.map((project) => (
          <div key={project.id} className="glass-card" style={styles.accordionItem}>
            <button 
              style={styles.accordionHeader} 
              onClick={() => toggleAccordion(project.id)}
            >
              <div style={styles.headerLeft}>
                <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{project.title}</h3>
                <span style={styles.period}>{project.period}</span>
              </div>
              <div style={styles.headerRight}>
                <span style={styles.role}>{project.role}</span>
                <span style={{ 
                  transform: openId === project.id ? 'rotate(180deg)' : 'rotate(0deg)', 
                  transition: 'transform 0.3s' 
                }}>▼</span>
              </div>
            </button>
            
            {openId === project.id && (
              <div style={styles.accordionBody}>
                <div style={styles.sectionRow}>
                  <div style={styles.sectionLabel}>
                    <h4 style={styles.subtitle}>Overview</h4>
                  </div>
                  <div style={styles.sectionContent}>
                    <p>{project.overview}</p>
                  </div>
                </div>

                <div style={styles.sectionRow}>
                  <div style={styles.sectionLabel}>
                    <h4 style={styles.subtitle}>Troubleshooting / Highlight</h4>
                  </div>
                  <div style={styles.sectionContent}>
                    <div style={styles.highlightBox}>
                      <p style={{ margin: 0 }}>{project.troubleshooting}</p>
                    </div>
                  </div>
                </div>

                <div style={styles.stackContainer}>
                  {project.stack.map((tech, idx) => (
                    <span key={idx} style={styles.stackBadge}>{tech}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  accordionContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  accordionItem: {
    padding: 0,
    overflow: 'hidden',
  },
  accordionHeader: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    color: 'inherit',
    fontFamily: 'inherit',
  },
  headerLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  period: {
    fontSize: '0.875rem',
    color: 'var(--text-secondary)',
  },
  role: {
    fontSize: '0.875rem',
    fontWeight: 600,
    color: 'var(--accent-primary)',
    background: 'rgba(79, 70, 229, 0.1)',
    padding: '0.25rem 0.75rem',
    borderRadius: '999px',
  },
  accordionBody: {
    padding: '2rem 1.5rem',
    borderTop: '1px solid var(--border-color)',
    marginTop: '0.5rem',
  },
  sectionRow: {
    display: 'flex',
    gap: '2rem',
    marginBottom: '2.5rem',
  },
  sectionLabel: {
    flex: '1',
    minWidth: '140px',
  },
  sectionContent: {
    flex: '5',
  },
  subtitle: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    borderLeft: '2px solid var(--text-primary)',
    paddingLeft: '12px',
    margin: 0,
    display: 'inline-block',
    lineHeight: '1.2',
  },
  highlightBox: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    padding: '1.25rem',
    borderRadius: '12px',
  },
  stackContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '1.5rem',
    paddingLeft: 'calc(1/6 * 100% + 2rem)', // To align with content
  },
  stackBadge: {
    fontSize: '0.75rem',
    background: 'var(--bg-primary)',
    border: '1px solid var(--border-color)',
    padding: '0.25rem 0.75rem',
    borderRadius: '6px',
    color: 'var(--text-secondary)',
    fontWeight: '500',
  }
};

export default Projects;
