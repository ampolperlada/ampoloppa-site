// Updated skill percentages to reflect your current abilities
// Based on: 5 production systems built, 6 months professional experience

export const SKILLS = [
  {
    title: "Frontend",
    icon: "./assets/images/frontend-icon.png", // Update path to your actual icon
    skills: [
      { skills: "HTML5", percentage: "90%" },
      { skills: "CSS3 (Sass/SCSS)", percentage: "85%" },
      { skills: "JavaScript", percentage: "85%" },
      { skills: "React.js", percentage: "88%" }, // Updated from basic - you built 5 systems!
      { skills: "Next.js", percentage: "85%" }, // Added - you use this professionally
      { skills: "Tailwind CSS", percentage: "80%" }, // Added if you use it
    ],
  },
  {
    title: "Backend",
    icon: "./assets/images/backend-icon.png",
    skills: [
      { skills: "Node.js", percentage: "85%" }, // Updated - professional experience
      { skills: "Express.js", percentage: "82%" }, // Updated
      { skills: "PostgreSQL", percentage: "80%" }, // Updated - used in production
      { skills: "MySQL", percentage: "75%" },
      { skills: "REST APIs", percentage: "85%" }, // Added - core skill
      { skills: "Supabase", percentage: "75%" }, // Added from your resume
    ],
  },
  {
    title: "Tools",
    icon: "./assets/images/tools-icon.png",
    skills: [
      { skills: "Git & GitHub", percentage: "85%" },
      { skills: "Visual Studio Code", percentage: "90%" },
      { skills: "Postman", percentage: "80%" },
      { skills: "Vite", percentage: "75%" },
      { skills: "NPM/Yarn", percentage: "80%" },
      { skills: "Chrome DevTools", percentage: "85%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: "./assets/images/soft-skills-icon.png",
    skills: [
      { skills: "Problem-solving", percentage: "90%" },
      { skills: "Collaboration", percentage: "85%" },
      { skills: "Time Management", percentage: "80%" },
      { skills: "Adaptability", percentage: "88%" },
      { skills: "Communication", percentage: "82%" },
      { skills: "Attention to Detail", percentage: "85%" },
    ],
  },
];

// Optional: Add work experience data
export const WORK_EXPERIENCE = [
  {
    title: "Junior Software Engineer",
    company: "New Barbizon Fashion Inc",
    date: "May 2025 - Oct 2025",
    responsibilities: [
      "Developed 5 full-stack internal systems serving 100+ employees",
      "Built AI-powered project management dashboard with Claude MCP",
      "Created company-wide cash disbursement module with multi-level approval workflows",
      "Implemented paperless exit clearance system across multiple departments",
      "Automated SKU generation system for merchandising team",
    ],
  },
  {
    title: "Technical Support Intern",
    company: "Southville International School and Colleges",
    date: "Feb 2023 - Jun 2023",
    responsibilities: [
      "Assisted in hardware and software installations",
      "Provided technical troubleshooting for IT-related issues",
      "Collaborated with end-users to customize software installations",
    ],
  },
];

// Projects data for easy management
export const PROJECTS = [
  {
    id: 1,
    title: "AI-Enhanced Project Management System",
    category: "professional",
    description: "Internal project management system with AI-powered risk analysis",
    tech: ["Next.js", "React", "Node.js", "Claude MCP", "PostgreSQL"],
    status: "Production",
    image: "🤖",
  },
  {
    id: 2,
    title: "Cash Disbursement Module",
    category: "professional",
    description: "Enterprise financial system handling liquidation and reimbursements for 100+ employees",
    tech: ["Next.js", "PostgreSQL", "REST API", "Supabase"],
    status: "Production",
    image: "💰",
  },
  {
    id: 3,
    title: "Employee Exit Clearance System",
    category: "professional",
    description: "Paperless employee offboarding system with multi-department tracking",
    tech: ["Next.js", "Node.js", "Google OAuth", "PostgreSQL"],
    status: "Production",
    image: "📋",
  },
  {
    id: 4,
    title: "Pixel Forge - NFT Marketplace",
    category: "personal",
    description: "Full-stack Web3 platform for AI-generated pixel art NFTs",
    tech: ["React", "Node.js", "Web3.js", "Ethereum", "Polygon"],
    status: "In Progress",
    image: "🎨",
  },
  {
    id: 5,
    title: "RDS SKU Request System",
    category: "professional",
    description: "Automated 16-digit SKU code generator for product catalog management",
    tech: ["Next.js", "PostgreSQL", "REST API"],
    status: "Production",
    image: "🏷️",
  },
  {
    id: 6,
    title: "Advanced Authentication System",
    category: "academic",
    description: "Secure authentication with JWT & Google OAuth",
    tech: ["Node.js", "Express", "PostgreSQL", "JWT", "OAuth"],
    status: "Completed",
    image: "🔐",
  },
];