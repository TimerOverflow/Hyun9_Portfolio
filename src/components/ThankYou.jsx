import React, { useEffect, useState } from 'react';

const ThankYou = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('thank-you-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="thank-you-section" style={{ padding: '6rem 2rem', display: 'flex', justifyContent: 'center' }}>
      <div
        className="glass-card"
        style={{
          ...styles.card,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
        }}
      >
        <div style={styles.glowEffect}></div>
        <div style={styles.content}>
          <h2 className="text-gradient" style={styles.title}>THANK YOU!</h2>
          <p style={styles.message}>
            끝까지 읽어주셔서 진심으로 감사드립니다.<br />
            끊임없이 발전하고, 주어진 문제에 대해 깊이 고민하며 해결책을 찾아내는 엔지니어가 되겠습니다.<br />
            좋은 인연으로 뵙기를 기대하겠습니다.
          </p>
          <div style={styles.heartWrapper}>
            <span style={styles.heart}>💙</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  card: {
    position: 'relative',
    maxWidth: '850px',
    width: '100%',
    padding: '5rem 3rem',
    textAlign: 'center',
    borderRadius: '24px',
    overflow: 'hidden',
    transition: 'opacity 1s ease-out, transform 1s cubic-bezier(0.22, 1, 0.36, 1)',
    border: '1px solid var(--border-color)',
    background: 'var(--card-bg)',
    boxShadow: '0 20px 50px -20px rgba(79, 70, 229, 0.25)',
  },
  glowEffect: {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(79, 70, 229, 0.08) 0%, transparent 50%)',
    animation: 'spin 20s linear infinite',
    zIndex: 0,
    pointerEvents: 'none',
  },
  content: {
    position: 'relative',
    zIndex: 1,
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: '800',
    marginBottom: '2rem',
    letterSpacing: '3px',
  },
  message: {
    fontSize: '1.35rem',
    lineHeight: '2',
    color: 'var(--text-primary)',
    fontWeight: '500',
    wordBreak: 'keep-all',
  },
  heartWrapper: {
    marginTop: '3rem',
    animation: 'pulseHeart 2s infinite',
  },
  heart: {
    fontSize: '3rem',
    display: 'inline-block',
  }
};

export default ThankYou;
