import React from 'react';
import './TechStack.css';

const TechStack = () => {
  const techCategories = [
    {
      category: "Frontend",
      color: "#ff0050",
      technologies: [
        { name: "React.js", color: "#61DAFB" },
        { name: "Next.js", color: "#000000" },
        { name: "JavaScript", color: "#F7DF1E" },
        { name: "HTML5", color: "#E34F26" },
        { name: "CSS3", color: "#1572B6" },
        { name: "Tailwind CSS", color: "#06B6D4" }
      ]
    },
    {
      category: "Backend",
      color: "#ff3366",
      technologies: [
        { name: "Node.js", color: "#339933" },
        { name: "Express.js", color: "#000000" },
        { name: "PostgreSQL", color: "#4169E1" },
        { name: "MySQL", color: "#4479A1" },
        { name: "Supabase", color: "#3ECF8E" },
        { name: "REST API", color: "#ff0050" }
      ]
    },
    {
      category: "Tools & DevOps",
      color: "#ff0050",
      technologies: [
        { name: "Git", color: "#F05032" },
        { name: "GitHub", color: "#181717" },
        { name: "VS Code", color: "#007ACC" },
        { name: "Postman", color: "#FF6C37" },
        { name: "Vite", color: "#646CFF" },
        { name: "NPM", color: "#CB3837" }
      ]
    },
    {
      category: "Other Skills",
      color: "#ff3366",
      technologies: [
        { name: "Web3", color: "#F16822" },
        { name: "OAuth", color: "#EB5424" },
        { name: "JWT", color: "#000000" },
        { name: "Claude MCP", color: "#ff0050" },
        { name: "Responsive Design", color: "#ff3366" },
        { name: "RESTful APIs", color: "#009688" }
      ]
    }
  ];

  return (
    <section className="tech-stack-section">
      <h2 className="tech-stack-heading">
        <span className="bracket">&lt;</span>
        Tech Stack
        <span className="bracket">/&gt;</span>
      </h2>

      <div className="tech-stack-container">
        {techCategories.map((category, index) => (
          <div 
            key={category.category} 
            className="tech-category"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="category-title" style={{ color: category.color }}>
              {category.category}
            </h3>
            
            <div className="tech-badges-grid">
              {category.technologies.map((tech, idx) => (
                <div 
                  key={tech.name} 
                  className="tech-badge"
                  style={{ 
                    animationDelay: `${(index * 0.1) + (idx * 0.05)}s`,
                    '--tech-color': tech.color
                  }}
                >
                  <span className="badge-dot" style={{ background: tech.color }}></span>
                  <span className="badge-name">{tech.name}</span>
                  <div className="badge-glow" style={{ background: tech.color }}></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Background */}
      <div className="tech-stack-bg">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>
    </section>
  );
};

export default TechStack;