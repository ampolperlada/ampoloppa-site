// FIXED: Icon paths now point to your actual image folder
import frontendIcon from '../image/Skillimage.png';
import backendIcon from '../image/Skillimage.png';
import toolsIcon from '../image/Skillimage.png';
import softSkillsIcon from '../image/Skillimage.png';

export const SKILLS = [
  {
    title: "Frontend",
    icon: frontendIcon, // FIXED: Now uses correct path
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

// CERTIFICATIONS - For courses/certificates (NOT work experience)
export const CERTIFICATIONS = [
  {
    title: "React Native Fundamentals",
    issuer: "Coursera / Meta",
    date: "September 17, 2024",
    description: [
      "Covered foundational concepts of React Native, focusing on creating cross-platform apps for both iOS and Android using JavaScript and React",
      "Key topics included components, state management, navigation, and styling, with practical experience in debugging and optimizing apps for performance and functionality",
      "Successfully built a basic mobile showcasing proficiency in responsive user interfaces and adherence to industry best practices for mobile and web development",
    ],
  },
  {
    title: "Web Page Design",
    issuer: "Online Course Platform",
    date: "April 5, 2023",
    description: [
      "Provided a solid foundation in web design using HTML5 and CSS3, focusing on building structured, accessible, and visually engaging websites that adhere to best practices and modern standards",
      "Learned to create structured, visually appealing web pages with semantic HTML elements, responsive design principles, and advanced CSS techniques like flexbox and grid layouts",
      "Built a fully functional, responsive web page, showcasing proficiency in implementing designs that are user-friendly, cross-browser compatible, and optimized for different devices",
    ],
  },
];

// WORK EXPERIENCE - For job history (use in About page)
export const WORK_EXPERIENCE = [
  {
    title: "Junior Software Engineer",
    company: "New Barbizon Fashion Inc",
    date: "May 2025 - Oct 2025",
    location: "Las Pinas City, Metro Manila",
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
    location: "Las Pinas City, Metro Manila",
    responsibilities: [
      "Assisted in hardware and software installations",
      "Provided technical troubleshooting for IT-related issues",
      "Collaborated with end-users to customize software installations",
    ],
  },
];

// PROJECTS - NO EMOJIS (removed all emojis)
export const PROJECTS = [
  {
    id: 1,
    title: "AI-Enhanced Project Management System",
    category: "professional",
    description: "Internal project management system with AI-powered risk analysis",
    tech: ["Next.js", "React", "Node.js", "Claude MCP", "PostgreSQL"],
    status: "Production",
  },
  {
    id: 2,
    title: "Cash Disbursement Module",
    category: "professional",
    description: "Enterprise financial system handling liquidation and reimbursements for 100+ employees",
    tech: ["Next.js", "PostgreSQL", "REST API", "Supabase"],
    status: "Production",
  },
  {
    id: 3,
    title: "Employee Exit Clearance System",
    category: "professional",
    description: "Paperless employee offboarding system with multi-department tracking",
    tech: ["Next.js", "Node.js", "Google OAuth", "PostgreSQL"],
    status: "Production",
  },
  {
    id: 4,
    title: "Pixel Forge - NFT Marketplace",
    category: "personal",
    description: "Full-stack Web3 platform for AI-generated pixel art NFTs",
    tech: ["React", "Node.js", "Web3.js", "Ethereum", "Polygon"],
    status: "In Progress",
  },
  {
    id: 5,
    title: "RDS SKU Request System",
    category: "professional",
    description: "Automated 16-digit SKU code generator for product catalog management",
    tech: ["Next.js", "PostgreSQL", "REST API"],
    status: "Production",
  },
  {
    id: 6,
    title: "Advanced Authentication System",
    category: "academic",
    description: "Secure authentication with JWT & Google OAuth",
    tech: ["Node.js", "Express", "PostgreSQL", "JWT", "OAuth"],
    status: "Completed",
  },
];