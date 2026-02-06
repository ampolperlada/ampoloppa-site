import React from 'react';
import './Projects.css';
import { PROFESSIONAL_PROJECTS, PERSONAL_PROJECTS } from '../utils/data';

const Projects = () => {
  return (
    <div className="projects-wrapper">
      {/* Personal Projects Section */}
      <section className="projects-section personal-section">
        <h2 className="projects-heading">
          <span className="bracket">&lt;</span>
          Personal Projects
          <span className="bracket">/&gt;</span>
        </h2>

        {/* Featured Project - Pixel Forge with Preview */}
        {PERSONAL_PROJECTS.filter(project => project.isFeatured).map((project, index) => (
          <div key={index} className="featured-project-showcase">
            <div className="featured-content">
              <div className="featured-left">
                <h3 className="featured-title">{project.title}</h3>
                <span className="featured-year">{project.year}</span>
                <p className="featured-description">{project.description}</p>
                <div className="featured-tech-tags">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="view-live-btn"
                  >
                    View Live Site →
                  </a>
                )}
              </div>
              
              <div className="featured-right">
                <div className="project-preview-wrapper">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={`${project.title} preview`} 
                      className="project-preview-image"
                    />
                  ) : (
                    <div className="project-preview-placeholder">
                      <span className="placeholder-icon">🎨</span>
                      <span className="placeholder-text">Preview Coming Soon</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Regular Personal Projects Grid - WITH IMAGES */}
        <div className="projects-grid">
          {PERSONAL_PROJECTS.filter(project => !project.isFeatured).map((project, index) => (
            <div key={index} className="project-card-item personal-card">
              <div className="project-corner-tl"></div>
              <div className="project-corner-br"></div>

              {/* Project Image if available */}
              {project.image && (
                <div className="project-card-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={`${project.title} preview`} 
                    className="project-card-image"
                  />
                </div>
              )}

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
            </div>
          ))}
        </div>
      </section>

      {/* Professional Projects Section */}
      <section className="projects-section">
        <h2 className="projects-heading">
          <span className="bracket">&lt;</span>
          Professional Projects
          <span className="bracket">/&gt;</span>
        </h2>

        <div className="projects-grid">
          {PROFESSIONAL_PROJECTS.map((project, index) => (
            <div key={index} className="project-card-item">
              <div className="project-corner-tl"></div>
              <div className="project-corner-br"></div>

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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;