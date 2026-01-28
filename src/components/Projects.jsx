import React from 'react';
import './Project.css';  // Change from Projects.css

const Project = () => {
  const professionalProjects = [
    {
      title: "AI-Enhanced Project Management",
      year: "2025",
      description: "Developed AI-powered project tracking system with automated risk analysis, eliminating manual data analysis for management",
      tech: ["Next.js", "Claude MCP", "REST APIs"]
    },
    {
      title: "Cash Disbursement Module",
      year: "2025",
      description: "Built company-wide financial system handling liquidation, cash advances, and reimbursements for 100+ employees",
      tech: ["Next.js", "PostgreSQL", "Node.js"]
    },
    {
      title: "RDS SKU Request System",
      year: "2025",
      description: "Created automated 16-digit SKU code generator eliminating daily manual data entry for merchandising team",
      tech: ["Next.js", "Automation"]
    },
    {
      title: "Exit Clearance System",
      year: "2025",
      description: "Developed paperless employee offboarding system with multi-department clearance tracking",
      tech: ["Next.js", "Google OAuth"]
    },
    {
      title: "MIS Asset Inventory System",
      year: "2025",
      description: "Built IT asset tracking system for Technical Support team's hardware and software inventory",
      tech: ["CRUD", "Database"]
    }
  ];

  const personalProjects = [
    {
      title: "Pixel Forge - NFT Marketplace",
      year: "2025",
      description: "Full-stack Web3 platform for creating, minting, and trading pixel art NFTs with AI-generated customization",
      tech: ["React", "Web3", "Ethereum"]
    },
    {
      title: "Advanced Authentication System",
      year: "2025",
      description: "Secure authentication system using JWT & Google OAuth with role-based access control",
      tech: ["Node.js", "Express", "JWT"]
    },
    {
      title: "Music API",
      year: "2024",
      description: "Full REST API created using Postman and Express.js, successfully deployed",
      tech: ["Express.js", "PostgreSQL", "REST API"]
    }
  ];

  return (
    <div className="projects-wrapper">
      {/* Professional Projects */}
      <section className="projects-section" id="professional-projects">
        <h2 className="projects-heading">
          <span className="bracket">&lt;</span>
          Professional Projects
          <span className="bracket">/&gt;</span>
        </h2>

        <div className="projects-grid">
          {professionalProjects.map((project, index) => (
            <div key={index} className="project-card-item">
              <div className="project-card-header">
                <h3 className="project-card-title">{project.title}</h3>
                <span className="project-year">{project.year}</span>
              </div>
              
              <p className="project-card-desc">{project.description}</p>
              
              <div className="project-tech-tags">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>

              <div className="project-corner-tl"></div>
              <div className="project-corner-br"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Projects */}
      <section className="projects-section personal-section" id="personal-projects">
        <h2 className="projects-heading">
          <span className="bracket">&lt;</span>
          Personal Projects
          <span className="bracket">/&gt;</span>
        </h2>

        <div className="projects-grid">
          {personalProjects.map((project, index) => (
            <div key={index} className="project-card-item personal-card">
              <div className="project-card-header">
                <h3 className="project-card-title">{project.title}</h3>
                <span className="project-year">{project.year}</span>
              </div>
              
              <p className="project-card-desc">{project.description}</p>
              
              <div className="project-tech-tags">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>

              <div className="project-corner-tl"></div>
              <div className="project-corner-br"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Project;
