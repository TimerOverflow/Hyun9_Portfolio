import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="container">
      <div className="section-header">
        <h2 className="section-title text-gradient">WORK EXPERIENCE</h2>
        <div className="title-line"></div>
      </div>
      
      <div className="experience-list">
        {portfolioData.experience.map((exp) => (
          <div key={exp.id} className="experience-item">
            
            {/* Left Column: Logo & Vertical Line */}
            <div className="experience-logo-col">
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
              <div className="timeline-connector-below"></div>
            </div>

            {/* Right Column: Company Info & Achievements */}
            <div className="experience-content-col">
              
              {/* Company Header Row */}
              <div className="experience-header-row">
                <h3 className="experience-company-title">{exp.company}</h3>
                <span className="experience-main-period">{exp.period}</span>
              </div>
              
              <p className="experience-main-desc">{exp.description}</p>
              
              {/* Badges (Pills) Row */}
              <div className="experience-badges-row">
                {exp.dept && <span className="experience-badge">{exp.dept}</span>}
                {exp.role && <span className="experience-badge">{exp.role}</span>}
                {exp.task && <span className="experience-badge">{exp.task}</span>}
              </div>

              {/* Achievements List */}
              <div className="experience-achievements-list">
                {exp.achievements && exp.achievements.map((ach, idx) => (
                  <div 
                    key={idx} 
                    className="achievement-item"
                    style={{ animationDelay: `${idx * 0.15}s` }}
                  >
                    <div className="achievement-header-group">
                      <h4 className="achievement-title">{ach.title}</h4>
                      <div className="achievement-date">{ach.date}</div>
                    </div>
                    <p className="achievement-desc">{ach.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
