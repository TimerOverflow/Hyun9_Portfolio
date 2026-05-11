import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="container">
      <div className="section-header">
        <h2 className="section-title text-gradient">WORK EXPERIENCE</h2>
        <div className="title-line"></div>
      </div>
      
      <div className="experience-timeline">
        {/* Far Left Vertical Line */}
        <div className="timeline-connector"></div>

        {portfolioData.experience.map((exp) => (
          <div key={exp.id} className="experience-item">
            {/* Left Side: Sticky Company Info */}
            <div className="experience-left">
              <div className="timeline-dot"></div>
              
              <div className="experience-info-sticky">
                <div className="company-logo-box">
                  {exp.logo && (exp.logo.includes('.') || exp.logo.startsWith('http')) ? (
                    <img 
                      src={exp.logo.startsWith('http') ? exp.logo : `${import.meta.env.BASE_URL}${exp.logo}`} 
                      alt={exp.company} 
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                    />
                  ) : (
                    exp.logo || '🏢'
                  )}
                </div>
                
                <h3 className="experience-company-title">{exp.company}</h3>
                <div className="experience-main-period">{exp.period}</div>
                <div className="experience-meta-card">
                  <div className="meta-field" style={{ marginBottom: '0.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                    <span className="meta-value" style={{ color: 'var(--text-secondary)', fontWeight: '400', fontSize: '0.875rem', lineHeight: '1.5' }}>
                      {exp.description}
                    </span>
                  </div>
                  <div className="meta-field">
                    <span className="meta-label">부서</span>
                    <span className="meta-value">{exp.dept}</span>
                  </div>
                  <div className="meta-field">
                    <span className="meta-label">담당업무</span>
                    <span className="meta-value">{exp.task}</span>
                  </div>
                  <div className="meta-field">
                    <span className="meta-label">직급</span>
                    <span className="meta-value">{exp.role}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Achievement Cards (Scrollable) */}
            <div className="experience-right">
              {exp.achievements && exp.achievements.map((ach, idx) => (
                <div 
                  key={idx} 
                  className="glass-card achievement-card"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <span className="achievement-card-date">{ach.date}</span>
                  <h4 className="achievement-card-title">{ach.title}</h4>
                  <p className="achievement-card-desc">{ach.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
