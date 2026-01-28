import React from 'react';
import './ExpWork.css';  // Change from WorkExperience.css

const ExpWork = () => {
  const experiences = [
    {
      title: "Junior Software Engineer",
      company: "New Barbizon Fashion Inc",
      period: "May 2025 - Oct 2025",
      location: "Philippines",
      achievements: [
        "Developed 5 full-stack internal systems serving cross-functional teams",
        "Built company-wide Cash Disbursement Module handling 100+ employees",
        "Integrated AI-powered risk analysis using Claude MCP",
        "Created paperless Exit Clearance system streamlining employee offboarding",
        "Automated SKU generation reducing daily manual data entry"
      ]
    },
    {
      title: "Technical Support Intern",
      company: "Southville International School and Colleges",
      period: "June 2022 - Dec 2022",
      location: "Philippines",
      achievements: [
        "Assisted in hardware and software installations",
        "Provided technical troubleshooting for IT-related issues",
        "Collaborated with end-users to customize software installations"
      ]
    }
  ];

  return (
    <section className="work-experience-section" id="experience">
      <h2 className="section-heading-exp">
        <span className="bracket">&lt;</span>
        Work Experience
        <span className="bracket">/&gt;</span>
      </h2>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="exp-card">
            <div className="exp-header">
              <div className="exp-left">
                <h3 className="exp-title">{exp.title}</h3>
                <p className="exp-company">{exp.company}</p>
              </div>
              <div className="exp-right">
                <span className="exp-period">{exp.period}</span>
                <span className="exp-location">{exp.location}</span>
              </div>
            </div>

            <ul className="exp-achievements">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx} className="exp-achievement-item">
                  <span className="exp-bullet"></span>
                  {achievement}
                </li>
              ))}
            </ul>

            <div className="exp-glow-line"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpWork;
