import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // 인라인 강조(Backticks `...`)를 처리하는 헬퍼 함수
  const renderTextWithHighlights = (text) => {
    if (typeof text !== 'string') return text;
    const parts = text.split(/(`[^`]+`)/g);
    return parts.map((part, i) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <span key={i} style={styles.highlightText}>
            {part.slice(1, -1)}
          </span>
        );
      }
      return part;
    });
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
                      <div style={styles.contentGroup}>
                        {detail.content.map((item, i) => {
                          const isHeader = typeof item === 'object' && item.type === 'header';
                          const contentText = typeof item === 'object' ? item.text : item;
                          
                          if (isHeader) {
                            return (
                              <div key={i} style={styles.subHeaderCard}>
                                <span style={styles.subHeaderIcon}>{item.icon || '📍'}</span>
                                <span style={styles.subHeaderText}>{contentText}</span>
                              </div>
                            );
                          }
                          
                          return (
                            <div key={i} style={styles.bulletItemRow}>
                              <span style={styles.bulletDot}>•</span>
                              <div style={styles.bulletText}>
                                {renderTextWithHighlights(contentText)}
                              </div>
                            </div>
                          );
                        })}
                      </div>
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
    background: '#1a1a1a', // 노션 느낌의 다크 배경
    color: '#ffffff',
  },
  sectionRow: {
    display: 'flex',
    gap: '2.5rem',
    marginBottom: '3rem',
  },
  sectionLabel: {
    flex: '1',
    minWidth: '180px',
  },
  sectionContent: {
    flex: '5',
  },
  subtitle: {
    fontSize: '0.9rem',
    fontWeight: '700',
    color: '#ffffff',
    borderLeft: '3px solid #ffffff',
    paddingLeft: '12px',
    margin: 0,
    display: 'inline-block',
    lineHeight: '1.2',
    textDecoration: 'underline',
    textUnderlineOffset: '6px',
    textTransform: 'uppercase',
  },
  contentGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  subHeaderCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    background: '#262626',
    padding: '0.8rem 1.2rem',
    borderRadius: '8px',
    border: '1px solid #333',
    marginBottom: '0.5rem',
    marginTop: '1rem',
  },
  subHeaderIcon: {
    fontSize: '1.1rem',
  },
  subHeaderText: {
    fontWeight: '600',
    fontSize: '0.95rem',
    color: '#e5e5e5',
  },
  bulletItemRow: {
    display: 'flex',
    gap: '0.75rem',
    lineHeight: '1.6',
    paddingLeft: '0.5rem',
  },
  bulletDot: {
    color: '#888',
    flexShrink: 0,
  },
  bulletText: {
    fontSize: '0.95rem',
    color: '#d1d1d1',
  },
  highlightText: {
    background: '#322626', // 어두운 적색 배경
    color: '#eb5757', // 노션 스타일 적색
    padding: '0.1rem 0.3rem',
    borderRadius: '4px',
    fontSize: '0.9em',
    fontFamily: 'monospace',
    margin: '0 0.1rem',
  },
  stackContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.6rem',
    marginTop: '3rem',
    paddingTop: '2rem',
    borderTop: '1px solid #333',
    justifyContent: 'flex-end',
  },
  stackBadge: {
    fontSize: '0.75rem',
    background: '#262626',
    border: '1px solid #444',
    padding: '0.3rem 0.8rem',
    borderRadius: '6px',
    color: '#aaa',
    fontWeight: '600',
  }
};

export default Projects;
