import React from 'react';
import { portfolioData } from '../data/portfolioData';

const ThankYou = () => {
  return (
    <section id="thank-you-section" style={styles.section}>
      <div className="container" style={styles.container}>
        <div style={styles.content}>
          <h2 style={styles.title}>{portfolioData.thankYou.title}</h2>
          <div style={styles.neonLine}></div>
          
          <p style={styles.message}>
            {portfolioData.thankYou.message.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index === 0 && <br />}
              </React.Fragment>
            ))}
          </p>

          <div style={styles.contactGrid}>
            <a href={`mailto:${portfolioData.header.email}`} className="contact-item" style={styles.contactItem}>
              <div style={styles.iconWrapper}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <span style={styles.contactText}>{portfolioData.header.email}</span>
            </a>

            <a href={portfolioData.header.github} target="_blank" rel="noopener noreferrer" className="contact-item" style={styles.contactItem}>
              <div style={styles.iconWrapper}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </div>
              <span style={styles.contactText}>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    background: '#000000',
    padding: '8rem 0',
    marginTop: '4rem',
    width: '100vw',
    marginLeft: 'calc(-50vw + 50%)',
    position: 'relative',
    color: '#ffffff',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2.5rem',
  },
  title: {
    fontSize: 'clamp(3rem, 10vw, 5rem)',
    fontWeight: '900',
    letterSpacing: '0.1em',
    color: 'var(--accent-primary)',
    margin: 0,
    textShadow: '0 0 20px var(--accent-primary), 0 0 40px var(--accent-primary)',
  },
  neonLine: {
    width: '120px',
    height: '4px',
    background: 'var(--accent-primary)',
    borderRadius: '2px',
    boxShadow: '0 0 15px var(--accent-primary)',
  },
  message: {
    fontSize: '1.25rem',
    lineHeight: '1.8',
    color: '#a0a0a0',
    fontWeight: '400',
    wordBreak: 'keep-all',
    margin: '0 auto',
    maxWidth: '600px',
  },
  contactGrid: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '1rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1rem 1.5rem',
    background: '#111',
    border: '1px solid #222',
    borderRadius: '12px',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
  },
  contactItemHover: {
    borderColor: 'var(--accent-primary)',
    background: '#1a1a1a',
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 15px rgba(0, 255, 136, 0.1)',
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--accent-primary)',
  },
  contactText: {
    transition: 'color 0.3s ease',
  },
};

// Hover effects and more complex styles would typically go in CSS, 
// but keeping them in JS styles as per the original file's pattern.
// Adding a small animation or transition in index.css for .contactItem is better.

export default ThankYou;
