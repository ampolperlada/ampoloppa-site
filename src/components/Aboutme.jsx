import React from 'react';
import './aboutme.css';
import animeImage from '../image/animes.png';

const Aboutme = () => {
  const workExperience = [
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

  const professionalProjects = [
    {
      name: "AI-Enhanced Project Management System",
      period: "2025",
      tech: ["Next.js", "Claude MCP", "REST APIs"],
      description: "Developed AI-powered project tracking system with automated risk analysis, eliminating manual data analysis for management"
    },
    {
      name: "Cash Disbursement Module",
      period: "2025",
      tech: ["Next.js", "PostgreSQL", "Node.js"],
      description: "Built company-wide financial system handling liquidation, cash advances, and reimbursements for 100+ employees"
    },
    {
      name: "RDS SKU Request System",
      period: "2025",
      tech: ["Next.js", "Automation"],
      description: "Created automated 16-digit SKU code generator eliminating daily manual data entry for merchandising team"
    },
    {
      name: "Exit Clearance System",
      period: "2025",
      tech: ["Next.js", "Google OAuth"],
      description: "Developed paperless employee offboarding system with multi-department clearance tracking"
    },
    {
      name: "MIS Asset Inventory System",
      period: "2025",
      tech: ["CRUD", "Database"],
      description: "Built IT asset tracking system for Technical Support team's hardware and software inventory management"
    }
  ];

  const personalProjects = [
    {
      name: "Pixel Forge - NFT Marketplace",
      period: "Feb 2025 - Present",
      tech: ["React", "Web3", "Ethereum"],
      description: "Full-stack Web3 platform for creating, minting, and trading pixel art NFTs with AI-generated customization"
    },
    {
      name: "Advanced Authentication System",
      period: "Mar 2025",
      tech: ["Node.js", "Express", "PostgreSQL", "JWT"],
      description: "Secure authentication system using JWT & Google OAuth with role-based access control"
    },
    {
      name: "Music API",
      period: "2024",
      tech: ["Express.js", "PostgreSQL", "REST API"],
      description: "Full REST API created using Postman and Express.js, successfully deployed"
    }
  ];

  const realStats = [
    { number: "5+", label: "Production Systems", color: "#ff0050" },
    { number: "100+", label: "Users Served", color: "#ff3366" },
    { number: "6", label: "Months Experience", color: "#ff0050" },
    { number: "8+", label: "Total Projects", color: "#ff3366" }
  ];

  return (
    <div className="about-container" id="about">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-content">
          <div className="about-image-wrapper">
            <div className="about-image-glow"></div>
            <img src={animeImage} alt="Christian Paul Perlada" className="about-image" />
          </div>
          <div className="about-intro">
            <h1 className="about-title">
              Christian <span className="highlight">Paul</span> Perlada
            </h1>
            <p className="about-role">Junior Software Engineer</p>
            <p className="about-description">
              As a modern web developer, I'm passionate about leveraging my skills in JavaScript, CSS, and databases to create meaningful and impactful applications. I thrive in building full-stack systems that solve real business problems and improve operational efficiency.
            </p>
            <button className="about-cta">Download Resume</button>
          </div>
        </div>
      </div>

      {/* Real Stats */}
      <div className="about-stats">
        {realStats.map((stat, index) => (
          <div key={index} className="stat-card" style={{ '--accent-color': stat.color }}>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-pulse"></div>
          </div>
        ))}
      </div>

      {/* Work Experience Section */}
      <section className="about-section">
        <h2 className="section-title">
          <span className="bracket">&lt;</span>
          Work Experience
          <span className="bracket">/&gt;</span>
        </h2>
        <div className="experience-timeline">
          {workExperience.map((job, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div className="experience-title-wrapper">
                  <h3 className="experience-title">{job.title}</h3>
                  <p className="experience-company">{job.company}</p>
                </div>
                <div className="experience-meta">
                  <span className="experience-period">{job.period}</span>
                  <span className="experience-location">{job.location}</span>
                </div>
              </div>
              <ul className="experience-achievements">
                {job.achievements.map((achievement, idx) => (
                  <li key={idx} className="achievement-item">
                    <span className="achievement-bullet"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
              <div className="experience-line"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Projects Section */}
      <section className="about-section">
        <h2 className="section-title">
          <span className="bracket">&lt;</span>
          Professional Projects
          <span className="bracket">/&gt;</span>
        </h2>
        <div className="projects-grid">
          {professionalProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                <span className="project-period">{project.period}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-corner-tl"></div>
              <div className="project-corner-br"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Projects Section */}
      <section className="about-section">
        <h2 className="section-title">
          <span className="bracket">&lt;</span>
          Personal Projects
          <span className="bracket">/&gt;</span>
        </h2>
        <div className="projects-grid">
          {personalProjects.map((project, index) => (
            <div key={index} className="project-card personal">
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                <span className="project-period">{project.period}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-corner-tl"></div>
              <div className="project-corner-br"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Background Effects */}
      <div className="about-bg-grid"></div>
      <div className="about-bg-gradient"></div>
    </div>
  );
};

export default Aboutme;