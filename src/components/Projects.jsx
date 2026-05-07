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
                {project.details.map((detail, idx) => (
                  <div key={idx} style={styles.sectionRow}>
                    <div style={styles.sectionLabel}>
                      <h4 style={styles.subtitle}>{detail.label}</h4>
                    </div>
                    <div style={styles.sectionContent}>
                      <ul style={styles.bulletList}>
                        {detail.content.map((item, i) => (
                          <li key={i} style={styles.bulletItem}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}

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
    padding: '2.5rem 2rem',
    borderTop: '1px solid var(--border-color)',
    background: 'var(--bg-secondary)', // Slightly different bg for contrast
  },
  sectionRow: {
    display: 'flex',
    gap: '2.5rem',
    marginBottom: '2.5rem',
  },
  sectionLabel: {
    flex: '1',
    minWidth: '160px',
  },
  sectionContent: {
    flex: '5',
  },
  subtitle: {
    fontSize: '0.95rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    borderLeft: '3px solid var(--text-primary)',
    paddingLeft: '12px',
    margin: 0,
    display: 'inline-block',
    lineHeight: '1.2',
    textDecoration: 'underline',
    textUnderlineOffset: '6px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  bulletList: {
    listStyleType: 'disc',
    paddingLeft: '1.2rem',
    margin: 0,
  },
  bulletItem: {
    marginBottom: '0.75rem',
    color: 'var(--text-secondary)',
    fontSize: '0.95rem',
    lineHeight: '1.6',
  },
  stackContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.6rem',
    marginTop: '2rem',
    paddingTop: '2rem',
    borderTop: '1px solid var(--border-color)',
    justifyContent: 'flex-end',
  },
  stackBadge: {
    fontSize: '0.75rem',
    background: 'var(--bg-primary)',
    border: '1px solid var(--border-color)',
    padding: '0.3rem 0.8rem',
    borderRadius: '6px',
    color: 'var(--text-secondary)',
    fontWeight: '600',
  }
};

export default Projects;
