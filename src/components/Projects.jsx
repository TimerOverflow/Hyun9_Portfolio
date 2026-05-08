import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

// 호버 효과 + 펄스 + 배지 + 바운스가 포함된 토글 버튼 컴포넌트
const ToggleButton = ({ isOpen, title, onClick, everOpened }) => {
  const [hovered, setHovered] = useState(false);

  const arrowAnimation = isOpen
    ? 'none'
    : !everOpened
      ? 'arrowBounce 0.8s ease infinite'
      : 'arrowPulse 2.5s ease-in-out infinite';

  return (
    <button 
      style={{
        ...styles.toggleHeader,
        background: hovered ? 'var(--detail-card-bg)' : 'transparent',
        borderRadius: '6px',
        padding: '0.6rem 0.75rem',
        marginLeft: '-0.75rem',
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{
        ...styles.toggleArrow,
        transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
        color: hovered ? 'var(--detail-text)' : 'var(--detail-text-muted)',
        animation: arrowAnimation,
      }}>
        ▶
      </span>
      <span style={{
        ...styles.toggleTitle,
        color: hovered ? 'var(--accent-primary)' : 'var(--detail-text)',
      }}>
        {title}
      </span>
      {!isOpen && (
        <span style={styles.toggleBadge}>
          ▾ 상세보기
        </span>
      )}
    </button>
  );
};

// 코드 스니펫 컴포넌트 (노션 스타일 - 줄 번호 및 짝/홀수 줄 색상 적용)
const CodeBlock = ({ language, code }) => {
  const [copied, setCopied] = useState(false);
  const lines = code ? code.split('\n') : [];

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={styles.codeBlockContainer}>
      <div style={styles.codeBlockHeader}>
        <span style={styles.codeLanguage}>{language || 'text'}</span>
        <button style={styles.copyButton} onClick={handleCopy}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="custom-scrollbar" style={styles.codePre}>
        <div style={{ minWidth: 'max-content' }}>
          {lines.map((line, i) => (
            <div key={i} style={{
              ...styles.codeLine,
              backgroundColor: i % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.03)'
            }}>
              <span style={styles.lineNumber}>{i + 1}</span>
              <span style={styles.lineText}>{line || ' '}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 아코디언 헤더 컴포넌트 (호버 + 바운스 + 배지)
const AccordionHeader = ({ project, isOpen, onClick, everOpenedAccordion }) => {
  const [hovered, setHovered] = useState(false);

  const arrowAnimation = isOpen
    ? 'none'
    : !everOpenedAccordion
      ? 'arrowBounceDown 0.8s ease infinite'
      : 'arrowPulse 2.5s ease-in-out infinite';

  return (
    <button
      style={{
        ...styles.accordionHeader,
        background: hovered ? 'var(--bg-secondary)' : 'transparent',
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.headerLeft}>
        <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{project.title}</h3>
        <span style={styles.period}>{project.period}</span>
      </div>
      <div style={styles.headerRight}>
        <span style={styles.role}>{project.role}</span>
        {!isOpen && (
          <span style={styles.accordionBadge}>
            펼쳐보기
          </span>
        )}
        <span style={{
          transition: 'transform 0.3s',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          animation: arrowAnimation,
        }}>▼</span>
      </div>
    </button>
  );
};

const Projects = () => {
  const [openId, setOpenId] = useState(null);
  const [openToggles, setOpenToggles] = useState({});
  const [everOpened, setEverOpened] = useState(false);
  const [everOpenedAccordion, setEverOpenedAccordion] = useState(false);

  const toggleAccordion = (id) => {
    if (!everOpenedAccordion) setEverOpenedAccordion(true);
    setOpenId(openId === id ? null : id);
  };

  const toggleSubItem = (key) => {
    if (!everOpened) setEverOpened(true);

    setOpenToggles(prev => ({ ...prev, [key]: !prev[key] }));
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
            <AccordionHeader
              project={project}
              isOpen={openId === project.id}
              onClick={() => toggleAccordion(project.id)}
              everOpenedAccordion={everOpenedAccordion}
            />
            
            {openId === project.id && (
              <div style={styles.accordionBody}>
                {project.details.map((detail, idx) => (
                  <React.Fragment key={idx}>
                    <div style={styles.sectionRow}>
                      <div style={styles.sectionLabel}>
                        <h4 style={styles.subtitle}>{detail.label}</h4>
                      </div>
                      <div style={styles.sectionContent}>
                        <div style={styles.contentGroup}>
                          {detail.content.map((item, i) => {
                            // 하위 섹션 헤더 (둥근 카드)
                            if (typeof item === 'object' && item.type === 'header') {
                              return (
                                <div key={i} style={styles.subHeaderCard}>
                                  <span style={styles.subHeaderIcon}>{item.icon || '📍'}</span>
                                  <span style={styles.subHeaderText}>{item.text}</span>
                                </div>
                              );
                            }
                            
                            // 코드 스니펫 (노션 스타일)
                            if (typeof item === 'object' && item.type === 'code') {
                              return (
                                <CodeBlock 
                                  key={i} 
                                  language={item.language} 
                                  code={item.code} 
                                  editable={item.editable} 
                                />
                              );
                            }
                            
                            // 접고 펼 수 있는 토글 항목
                            if (typeof item === 'object' && item.type === 'toggle') {
                              const toggleKey = `${project.id}-${idx}-${i}`;
                              const isOpen = openToggles[toggleKey] || false;
                              return (
                                <div key={i} style={styles.toggleContainer}>
                                  <ToggleButton
                                    isOpen={isOpen}
                                    title={renderTextWithHighlights(item.title)}
                                    onClick={() => toggleSubItem(toggleKey)}
                                    everOpened={everOpened}
                                  />
                                  {isOpen && (
                                    <div style={styles.toggleBody}>
                                      {item.content.map((subItem, si) => {
                                        // 토글 내부의 하위 섹션 제목 (예: "문제 현상", "원인 분석 및 해결" 등)
                                        if (typeof subItem === 'object' && subItem.type === 'subTitle') {
                                          return (
                                            <h5 key={si} style={styles.toggleSubTitle}>
                                              {subItem.text}
                                            </h5>
                                          );
                                        }
                                        // 코드 스니펫 (토글 내부)
                                        if (typeof subItem === 'object' && subItem.type === 'code') {
                                          return (
                                            <CodeBlock 
                                              key={si} 
                                              language={subItem.language} 
                                              code={subItem.code} 
                                              editable={subItem.editable} 
                                            />
                                          );
                                        }

                                        return (
                                          <div key={si} style={styles.bulletItemRow}>
                                            <span style={styles.bulletDot}>•</span>
                                            <div style={styles.bulletText}>
                                              {renderTextWithHighlights(subItem)}
                                            </div>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  )}
                                </div>
                              );
                            }

                            // 일반 글머리 기호 항목
                            const contentText = typeof item === 'object' ? item.text : item;
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
                    {/* 섹션 사이 구분선 */}
                    {idx < project.details.length - 1 && (
                      <hr style={styles.sectionDivider} />
                    )}
                  </React.Fragment>
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
    transition: 'background 0.2s ease',
    borderRadius: '16px',
  },
  headerLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flexShrink: 0,
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
  accordionBadge: {
    fontSize: '0.7rem',
    color: 'var(--text-secondary)',
    border: '1px solid var(--border-color)',
    padding: '0.2rem 0.6rem',
    borderRadius: '4px',
    fontWeight: '500',
    whiteSpace: 'nowrap',
  },
  accordionBody: {
    padding: '2.5rem 2rem',
    borderTop: '1px solid var(--border-color)',
    background: 'var(--detail-bg)',
    color: 'var(--detail-text)',
  },
  sectionRow: {
    display: 'flex',
    gap: '2.5rem',
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
  sectionDivider: {
    border: 'none',
    borderTop: '1px solid var(--detail-border)',
    margin: '0',
  },
  sectionLabel: {
    flex: '1',
    minWidth: '180px',
  },
  sectionContent: {
    flex: '5',
    minWidth: 0,
  },
  subtitle: {
    fontSize: '0.9rem',
    fontWeight: '700',
    color: 'var(--detail-label-color)',
    borderLeft: '3px solid var(--detail-label-color)',
    paddingLeft: '12px',
    margin: 0,
    display: 'inline-block',
    lineHeight: '1.8',
    textDecoration: 'underline',
    textUnderlineOffset: '6px',
  },
  contentGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    minWidth: 0,
  },
  subHeaderCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    background: 'var(--detail-card-bg)',
    padding: '0.8rem 1.2rem',
    borderRadius: '8px',
    border: '1px solid var(--detail-border)',
    marginBottom: '0.5rem',
    marginTop: '1rem',
  },
  subHeaderIcon: {
    fontSize: '1.1rem',
  },
  subHeaderText: {
    fontWeight: '600',
    fontSize: '0.95rem',
    color: 'var(--detail-text)',
  },
  // Toggle (접기/펼치기) 스타일
  toggleContainer: {
    marginTop: '0.5rem',
    minWidth: 0,
  },
  toggleHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.4rem 0',
    color: 'var(--detail-text)',
    fontFamily: 'inherit',
    fontSize: '0.95rem',
    textAlign: 'left',
  },
  toggleArrow: {
    fontSize: '0.75rem',
    transition: 'transform 0.25s ease, color 0.2s ease',
    color: 'var(--detail-text-muted)',
    flexShrink: 0,
  },
  toggleTitle: {
    fontWeight: '600',
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
    transition: 'color 0.2s ease',
  },
  toggleBadge: {
    fontSize: '0.7rem',
    color: 'var(--accent-primary)',
    background: 'rgba(79, 70, 229, 0.08)',
    padding: '0.15rem 0.5rem',
    borderRadius: '4px',
    marginLeft: '0.5rem',
    fontWeight: '500',
    flexShrink: 0,
    letterSpacing: '0.3px',
  },
  // 코드 블록 (노션 스타일)
  codeBlockContainer: {
    background: '#1e1e1e', // 노션 다크 코드 블록과 유사한 색상
    borderRadius: '6px',
    margin: '0.75rem 0',
    overflow: 'hidden',
    fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    minWidth: 0,
    maxWidth: '100%',
  },
  codeBlockHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.4rem 1rem',
    background: '#2d2d2d',
    borderBottom: '1px solid #404040',
  },
  codeLanguage: {
    color: '#a0a0a0',
    fontSize: '0.75rem',
    textTransform: 'lowercase',
  },
  copyButton: {
    background: 'none',
    border: 'none',
    color: '#a0a0a0',
    fontSize: '0.75rem',
    cursor: 'pointer',
    padding: '0.2rem 0.5rem',
    borderRadius: '4px',
    transition: 'background 0.2s',
  },
  codePre: {
    margin: 0,
    padding: '0.5rem 0',
    color: '#d4d4d4',
    fontSize: '0.875rem',
    overflowX: 'auto',
    overflowY: 'auto',
    maxHeight: '400px',
    background: 'transparent',
    border: 'none',
    width: '100%',
    fontFamily: 'inherit',
    outline: 'none',
  },
  codeLine: {
    display: 'flex',
    padding: '0 1rem',
    lineHeight: '1.6',
    whiteSpace: 'pre',
  },
  lineNumber: {
    minWidth: '2.5rem',
    color: '#6e7681',
    textAlign: 'right',
    paddingRight: '1rem',
    userSelect: 'none',
    fontSize: '0.8rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  lineText: {
    flex: 1,
  },
  toggleBody: {
    paddingLeft: '1.5rem',
    paddingTop: '0.75rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
    borderLeft: '2px solid var(--detail-border)',
    marginLeft: '0.35rem',
    marginBottom: '0.75rem',
    minWidth: 0,
  },
  toggleSubTitle: {
    fontWeight: '700',
    fontSize: '0.9rem',
    color: 'var(--detail-label-color)',
    margin: '0.75rem 0 0.25rem',
  },
  bulletItemRow: {
    display: 'flex',
    gap: '0.75rem',
    lineHeight: '1.7',
    paddingLeft: '0.5rem',
  },
  bulletDot: {
    color: 'var(--detail-text-muted)',
    flexShrink: 0,
  },
  bulletText: {
    fontSize: '0.95rem',
    color: 'var(--detail-text)',
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
    flex: 1,
    minWidth: 0,
  },
  highlightText: {
    background: 'var(--detail-highlight-bg)',
    color: 'var(--detail-highlight-color)',
    padding: '0.1rem 0.4rem',
    borderRadius: '4px',
    fontSize: '0.9em',
    fontFamily: 'monospace',
    margin: '0 0.15rem',
  },
  stackContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.6rem',
    marginTop: '3rem',
    paddingTop: '2rem',
    borderTop: '1px solid var(--detail-border)',
    justifyContent: 'flex-end',
  },
  stackBadge: {
    fontSize: '0.75rem',
    background: 'var(--detail-card-bg)',
    border: '1px solid var(--detail-border)',
    padding: '0.3rem 0.8rem',
    borderRadius: '6px',
    color: 'var(--detail-text-muted)',
    fontWeight: '600',
  }
};

export default Projects;
