// FIXED: Icon paths now point to your actual image folder
import frontendIcon from '../image/Skillimage.png';
import backendIcon from '../image/Skillimage.png';
import toolsIcon from '../image/Skillimage.png';
import softSkillsIcon from '../image/Skillimage.png';

// SKILLS DATA (unchanged)
export const SKILLS = [
  {
    title: "Frontend",
    icon: frontendIcon,
    skills: [
      { skills: "HTML5", percentage: "90%" },
      { skills: "CSS3 (Sass/SCSS)", percentage: "85%" },
      { skills: "JavaScript", percentage: "85%" },
      { skills: "React.js", percentage: "88%" },
      { skills: "Next.js", percentage: "85%" },
      { skills: "Tailwind CSS", percentage: "80%" },
    ],
  },
  {
    title: "Backend",
    icon: backendIcon,
    skills: [
      { skills: "Node.js", percentage: "85%" },
      { skills: "Express.js", percentage: "82%" },
      { skills: "PostgreSQL", percentage: "80%" },
      { skills: "MySQL", percentage: "75%" },
      { skills: "REST APIs", percentage: "85%" },
      { skills: "Supabase", percentage: "75%" },
    ],
  },
  {
    title: "Tools",
    icon: toolsIcon,
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
    icon: softSkillsIcon,
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

// CERTIFICATIONS (unchanged)
export const CERTIFICATIONS = [
  {
    title: "React Native Fundamentals",
    issuer: "Coursera / Meta",
    date: "September 17, 2024",
    description: [
      "Covered foundational concepts of React Native, focusing on creating cross-platform apps for both iOS and Android using JavaScript and React",
      "Key topics included components, state management, navigation, and styling, with practical experience in debugging and optimizing apps",
      "Built a basic mobile app showcasing proficiency in responsive UI and industry best practices",
    ],
  },
  {
    title: "Web Page Design",
    issuer: "Online Course Platform",
    date: "April 5, 2023",
    description: [
      "Provided foundation in web design using HTML5 and CSS3",
      "Learned semantic HTML, responsive design, flexbox, and grid layouts",
      "Built a fully responsive web page optimized for different devices",
    ],
  },
];

// WORK EXPERIENCE - Updated structure
export const WORK_EXPERIENCE = [
  {
    role: "Junior Software Engineer",
    company: "New Barbizon Fashion Inc",
    period: "May 2025 - Oct 2025",
    location: "Philippines",
    achievements: [
      "Developed 5 full-stack internal systems serving cross-functional teams",
      "Built company-wide Cash Disbursement Module for 100+ employees",
      "Integrated AI-powered risk analysis using Claude MCP",
      "Created paperless Exit Clearance system streamlining offboarding",
      "Automated SKU generation reducing daily manual data entry",
    ],
  },
  {
    role: "Technical Support Intern",
    company: "Southville International School and Colleges",
    period: "June 2022 - Dec 2022",
    location: "Philippines",
    achievements: [
      "Assisted in hardware and software installations (computers, servers, networking)",
      "Provided technical troubleshooting for IT-related issues",
      "Collaborated with end-users to customize software installations",
    ],
  },
];

// PROJECTS - Main showcase list (kept similar structure but cleaned)
export const PROJECTS = [
  {
    id: 1,
    title: "AI-Enhanced Project Management System",
    category: "professional",
    description: "Internal project management system with AI-powered risk analysis using Claude MCP",
    tech: ["Next.js", "React", "Node.js", "Claude MCP", "PostgreSQL"],
    status: "Production",
    company: "New Barbizon Fashion Inc",
    period: "2025",
  },
  {
    id: 2,
    title: "Cash Disbursement Module",
    category: "professional",
    description: "Enterprise financial system for liquidation and reimbursements with multi-level approvals",
    tech: ["Next.js", "PostgreSQL", "REST API", "Supabase"],
    status: "Production",
    company: "New Barbizon Fashion Inc",
    period: "2025",
  },
  {
    id: 3,
    title: "MotoPH - 3D Motorcycle Customizer",
    category: "personal",
    description: "Interactive 3D motorcycle color customizer using Three.js with real-time 360° rotation",
    tech: ["Next.js", "Three.js", "TypeScript", "Tailwind"],
    status: "In Progress",
    period: "2025",
  },
  {
    id: 4,
    title: "Pixel Forge - NFT Marketplace",
    category: "personal",
    description: "Web3 platform for minting and trading AI-generated pixel art NFTs",
    tech: ["React", "Web3.js", "Ethereum", "Polygon"],
    status: "In Progress",
    period: "Feb 2025 - Present",
  },
  {
    id: 5,
    title: "Employee Exit Clearance System",
    category: "professional",
    description: "Paperless offboarding system with multi-department clearance tracking",
    tech: ["Next.js", "Node.js", "Google OAuth", "PostgreSQL"],
    status: "Production",
    company: "New Barbizon Fashion Inc",
    period: "2025",
  },
  {
    id: 6,
    title: "RDS SKU Request System",
    category: "professional",
    description: "Automated 16-digit SKU code generator for merchandising team",
    tech: ["Next.js", "PostgreSQL", "REST API"],
    status: "Production",
    company: "New Barbizon Fashion Inc",
    period: "2025",
  },
  {
    id: 7,
    title: "Music API",
    category: "academic",
    description: "Full REST API for music catalog management with CRUD operations",
    tech: ["Express.js", "PostgreSQL", "REST API", "Postman"],
    status: "Completed",
    period: "2024",
  },
];

// PROFESSIONAL PROJECTS - Cleaned & concise
export const PROFESSIONAL_PROJECTS = [
  {
    title: "AI-Enhanced Project Management",
    year: "2025",
    description: "AI-powered project tracking system with automated risk analysis using Claude MCP",
    tech: ["Next.js", "Claude MCP", "REST APIs"],
  },
  {
    title: "Cash Disbursement Module",
    year: "2025",
    description: "Financial system for liquidation, advances, and reimbursements (100+ employees)",
    tech: ["Next.js", "PostgreSQL", "Node.js"],
  },
  {
    title: "RDS SKU Request System",
    year: "2025",
    description: "Automated 16-digit SKU generator eliminating manual data entry",
    tech: ["Next.js", "PostgreSQL", "Automation"],
  },
  {
    title: "Exit Clearance System",
    year: "2025",
    description: "Paperless employee offboarding with multi-department clearance workflow",
    tech: ["Next.js", "Google OAuth", "PostgreSQL"],
  },
  {
    title: "MIS Asset Inventory System",
    year: "2025",
    description: "IT asset tracking system with full CRUD functionality",
    tech: ["Next.js", "PostgreSQL", "CRUD"],
  },
];

// PERSONAL PROJECTS - Updated (removed Auth System, added MotoPH)
export const PERSONAL_PROJECTS = [
  {
    title: "Pixel Forge - NFT Marketplace",
    year: "2025",
    description: "Full-stack Web3 platform for creating, minting, and trading pixel art NFTs with AI-generated customization and game integration API",
    tech: ["React", "Web3", "Ethereum", "Polygon", "AI"],
    isFeatured: true,
    liveUrl: "https://pixel-forge.vercel.app", // update if different
    image: "/projects/pixel-forge-preview.png", // add this image to your public folder
  },
  {
    title: "MotoPH - 3D Motorcycle Customizer",
    year: "2025",
    description: "Interactive 3D motorcycle color customization app using Three.js. Users can rotate NMAX model 360° and customize body, wheels, seat, mirrors, and frame colors in real-time",
    tech: ["Next.js", "Three.js", "TypeScript", "Tailwind"],
    isFeatured: true,
    liveUrl: "https://your-motoph-url.com",      // add when deployed
    image: "/projects/motoph-preview.png",       // add when ready
  },
  {
    title: "Music API",
    year: "2024",
    description: "Full REST API for music catalog management built with Express.js and PostgreSQL",
    tech: ["Express.js", "PostgreSQL", "REST API", "Postman"],
  },
];

// EDUCATION DATA (unchanged)
export const EDUCATION = [
  {
    year: "2024",
    degree: "Bachelor of Science in Information Technology",
    institution: "Saint Bernadette College of Alabang",
    location: "Philippines",
    description:
      "Focused on software engineering, full-stack development, UI/UX design, and backend technologies.",
  },
  {
    year: "2022",
    degree: "Associate Degree in IT",
    institution: "Southville International School and Colleges",
    location: "Philippines",
    honors: "Dean's Lister",
    description:
      "Gained hands-on experience in software development, web technologies, and system design.",
  },
  {
    year: "2020",
    degree: "Senior High School Diploma",
    institution: "Southville International School and Colleges",
    location: "Philippines",
    description: "Specialized in ICT Track, building strong foundation in technology.",
  },
  {
    year: "2018",
    degree: "High School Diploma",
    institution: "Captain Albert Aguilar National Trade School",
    location: "Philippines",
    description: "Built foundation in math, science, and problem-solving.",
  },
];

// Export everything
const portfolioData = {
  SKILLS,
  CERTIFICATIONS,
  WORK_EXPERIENCE,
  PROJECTS,
  PROFESSIONAL_PROJECTS,
  PERSONAL_PROJECTS,
  EDUCATION,
};

export default portfolioData;