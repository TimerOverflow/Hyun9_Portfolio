import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const Header = () => {
  const { name, englishName, role, description, github, phone, email, defaultShowEmoji } = portfolioData.header;
  const [showEmoji, setShowEmoji] = useState(defaultShowEmoji || false);

  return (
    <header className="container" style={styles.header}>
      <div className="section-header" style={{ width: '100%' }}>
        <h2 className="section-title text-gradient">PROFILE</h2>
        <div className="title-line"></div>
      </div>
      <div style={styles.container}>
        {/* Profile Image Section */}
        <div 
          style={styles.imageWrapper} 
          onClick={() => setShowEmoji(!showEmoji)}
          title="클릭하여 프로필 사진을 바꿔보세요!"
        >
          {showEmoji ? (
            <div key="emoji" className="profile-tada-anim" style={styles.innerWrapper}>
              <span style={styles.emoji}>🦸‍♂️</span>
            </div>
          ) : (
            <div key="photo" className="profile-tada-anim" style={styles.innerWrapper}>
              <img 
                src={`${import.meta.env.BASE_URL}Hyun9.jpg`}
                alt="Profile" 
                style={styles.profileImage} 
                onError={(e) => {
                  // Fallback if image not found
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}
        </div>

        {/* Info Section */}
        <div style={styles.infoWrapper}>
          <div style={styles.role}>{role}</div>
          <h1 style={styles.name}>{`{ ${name} }`}</h1>
          <h2 style={styles.englishName}>{englishName}</h2>

          <div style={styles.contactList}>
            <a href={github} target="_blank" rel="noopener noreferrer" style={styles.contactItem}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent-primary)">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              <span>{github}</span>
            </a>
            
            {phone && (
              <div style={styles.contactItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent-primary)">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>{phone}</span>
              </div>
            )}
            
            {email && (
              <a href={`mailto:${email}`} style={styles.contactItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent-primary)">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>{email}</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div style={styles.descriptionWrapper}>
        <div style={styles.quoteIconLeft}>❝</div>
        <p style={styles.descriptionText}>
          {description}
        </p>
        <div style={styles.quoteIconRight}>❞</div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    paddingTop: '8rem',
    paddingBottom: '8rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '5rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imageWrapper: {
    flexShrink: 0,
    width: '312px',
    height: '312px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundColor: '#cbd5e1',
    overflow: 'hidden',
    transition: 'transform 0.2s',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: 'center 15%', // 크롭 영역 조정 (얼굴이 더 잘 보이도록 상단 포커스)
    backgroundColor: '#cbd5e1', // Fallback color while loading or if missing
  },
  innerWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
  },
  emoji: {
    fontSize: '180px',
    userSelect: 'none',
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    textAlign: 'left',
  },
  role: {
    color: 'var(--accent-primary)',
    fontWeight: '700',
    letterSpacing: '2px',
    fontSize: '1.2rem',
    textTransform: 'uppercase',
  },
  name: {
    fontSize: '3.5rem',
    fontWeight: '800',
    margin: 0,
    color: 'var(--text-primary)',
    lineHeight: '1.1',
  },
  englishName: {
    color: 'var(--accent-primary)',
    fontSize: '2rem',
    fontWeight: '400',
    margin: 0,
    marginBottom: '1rem',
  },
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '0.5rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: 'var(--text-secondary)',
    fontSize: '1.1rem',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  descriptionWrapper: {
    marginTop: '4rem',
    padding: '2rem 3rem',
    maxWidth: '850px',
    background: 'var(--badge-bg)',
    borderRadius: '24px',
    position: 'relative',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
  },
  descriptionText: {
    fontSize: '1.25rem',
    lineHeight: '1.8',
    color: 'var(--text-primary)',
    fontWeight: '600',
    margin: 0,
    position: 'relative',
    zIndex: 1,
    letterSpacing: '0.5px',
    wordBreak: 'keep-all',
  },
  quoteIconLeft: {
    fontSize: '4rem',
    color: 'var(--accent-primary)',
    opacity: '0.2',
    position: 'absolute',
    top: '-15px',
    left: '15px',
    fontFamily: 'serif',
    lineHeight: '1',
    zIndex: 0,
  },
  quoteIconRight: {
    fontSize: '4rem',
    color: 'var(--accent-primary)',
    opacity: '0.2',
    position: 'absolute',
    bottom: '-35px',
    right: '15px',
    fontFamily: 'serif',
    lineHeight: '1',
    zIndex: 0,
  }
};

export default Header;
