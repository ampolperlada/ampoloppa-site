// FIXED: Icon paths now point to your actual image folder
import frontendIcon from '../image/Skillimage.png';
import backendIcon from '../image/Skillimage.png';
import toolsIcon from '../image/Skillimage.png';
import softSkillsIcon from '../image/Skillimage.png';

// SKILLS DATA
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

// WORK EXPERIENCE - For About page work history
export const WORK_EXPERIENCE = [
  {
    title: "Junior Software Engineer",
    company: "New Barbizon Fashion Inc",
    date: "May 2025 - Oct 2025",
    period: "May 2025 - Oct 2025",
    location: "Philippines",
    responsibilities: [
      "Developed 5 full-stack internal systems serving cross-functional teams",
      "Built company-wide Cash Disbursement Module handling 100+ employees",
      "Integrated AI-powered risk analysis using Claude MCP",
      "Created paperless Exit Clearance system streamlining employee offboarding",
      "Automated SKU generation reducing daily manual data entry"
    ],
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
    date: "June 2022 - Dec 2022",
    period: "June 2022 - Dec 2022",
    location: "Philippines",
    responsibilities: [
      "Assisted in hardware and software installations (computers, servers, networking)",
      "Provided technical troubleshooting for IT-related issues",
      "Collaborated with end-users to customize software installations"
    ],
    achievements: [
      "Assisted in hardware and software installations (computers, servers, networking)",
      "Provided technical troubleshooting for IT-related issues",
      "Collaborated with end-users to customize software installations"
    ]
  },
];

// PROJECTS - NO EMOJIS (for projects showcase section)
export const PROJECTS = [
  {
    id: 1,
    title: "AI-Enhanced Project Management System",
    category: "professional",
    description: "Internal project management system with AI-powered risk analysis using Claude MCP, eliminating manual data analysis for management",
    tech: ["Next.js", "React", "Node.js", "Claude MCP", "PostgreSQL"],
    status: "Production",
    company: "New Barbizon Fashion Inc",
    period: "2025"
  },
  {
    id: 2,
    title: "Cash Disbursement Module",
    category: "professional",
    description: "Enterprise financial system handling liquidation and reimbursements for 100+ employees with multi-level approval workflows",
    tech: ["Next.js", "PostgreSQL", "REST API", "Supabase"],
    status: "Production",
    company: "New Barbizon Fashion Inc",
    period: "2025"
  },
  {
    id: 3,
    title: "Employee Exit Clearance System",
    category: "professional",
    description: "Paperless employee offboarding system with multi-department clearance tracking and Google OAuth integration",
    tech: ["Next.js", "Node.js", "Google OAuth", "PostgreSQL"],
    status: "Production",
    company: "New Barbizon Fashion Inc",
    period: "2025"
  },
  {
    id: 4,
    title: "Pixel Forge - NFT Marketplace",
    category: "personal",
    description: "Full-stack Web3 platform for creating, minting, and trading AI-generated pixel art NFTs with game integration API",
    tech: ["React", "Node.js", "Web3.js", "Ethereum", "Polygon"],
    status: "In Progress",
    period: "Feb 2025 - Present"
  },
  {
    id: 5,
    title: "RDS SKU Request System",
    category: "professional",
    description: "Automated 16-digit SKU code generator eliminating daily manual data entry for merchandising team",
    tech: ["Next.js", "PostgreSQL", "REST API"],
    status: "Production",
    company: "New Barbizon Fashion Inc",
    period: "2025"
  },
  {
    id: 6,
    title: "Advanced Authentication System",
    category: "personal",
    description: "Secure authentication system using JWT & Google OAuth with role-based access control",
    tech: ["Node.js", "Express", "PostgreSQL", "JWT", "OAuth"],
    status: "Completed",
    period: "Mar 2025"
  },
  {
    id: 7,
    title: "Music API",
    category: "academic",
    description: "Full REST API created using Postman and Express.js, successfully deployed",
    tech: ["Express.js", "PostgreSQL", "REST API", "Postman"],
    status: "Completed",
    period: "2024"
  },
  {
    id: 8,
    title: "MIS Asset Inventory System",
    category: "professional",
    description: "IT asset tracking system with full CRUD functionality for Technical Support team's hardware and software inventory",
    tech: ["CRUD", "Database", "Full-Stack"],
    status: "Production",
    company: "New Barbizon Fashion Inc",
    period: "2025"
  }
];

// PROFESSIONAL PROJECTS - Detailed version for About page
export const PROFESSIONAL_PROJECTS = [
  {
    name: "AI-Enhanced Project Management System",
    company: "New Barbizon Fashion Inc",
    period: "2025",
    tech: ["Next.js", "Claude MCP", "REST APIs", "Data Visualization"],
    description: "Developed AI-powered project tracking system with automated risk analysis, eliminating manual data analysis for management"
  },
  {
    name: "Cash Disbursement Module",
    company: "New Barbizon Fashion Inc",
    period: "2025",
    tech: ["Next.js", "PostgreSQL", "Node.js", "REST APIs"],
    description: "Built company-wide financial system handling liquidation, cash advances, and reimbursements for 100+ employees"
  },
  {
    name: "RDS SKU Request System",
    company: "New Barbizon Fashion Inc",
    period: "2025",
    tech: ["Next.js", "Automation", "Database"],
    description: "Created automated 16-digit SKU code generator eliminating daily manual data entry for merchandising team"
  },
  {
    name: "Exit Clearance System",
    company: "New Barbizon Fashion Inc",
    period: "2025",
    tech: ["Next.js", "Google OAuth", "PostgreSQL"],
    description: "Developed paperless employee offboarding system with multi-department clearance tracking"
  },
  {
    name: "MIS Asset Inventory System",
    company: "New Barbizon Fashion Inc",
    period: "2025",
    tech: ["CRUD Operations", "Database", "Full-Stack"],
    description: "Built IT asset tracking system with full CRUD functionality for Technical Support team's hardware and software inventory"
  }
];

// PERSONAL PROJECTS - Detailed version for About page
export const PERSONAL_PROJECTS = [
  {
    name: "Pixel Forge - NFT Marketplace",
    period: "Feb 2025 - Present",
    tech: ["React", "Web3", "Ethereum", "Polygon", "NFT", "AI"],
    description: "Full-stack Web3 platform for creating, minting, and trading pixel art NFTs with AI-generated customization and game integration API"
  },
  {
    name: "Advanced Authentication System",
    period: "Mar 2025",
    tech: ["Node.js", "Express", "PostgreSQL", "JWT", "OAuth"],
    description: "Secure authentication system using JWT & Google OAuth with role-based access control"
  },
  {
    name: "Music API",
    period: "2024",
    tech: ["Express.js", "PostgreSQL", "REST API", "Postman"],
    description: "Full REST API created using Postman and Express.js for music catalog management with CRUD operations"
  }
];

// EDUCATION DATA
export const EDUCATION = [
  {
    year: "2024",
    degree: "Bachelor of Science in Information Technology",
    institution: "Saint Bernadette College of Alabang",
    location: "Philippines",
    description: "After earning my Associate Degree from Southville International School, I enrolled at Saint Bernadette College of Alabang to pursue my Bachelor's in Information Technology (BSIT), with Software Engineering. This allowed me to deepen my expertise in software development, UI/UX design, and back-end technologies, ultimately advancing my skills to build full-stack applications and preparing for real-world projects."
  },
  {
    year: "2022",
    degree: "Associate Degree in IT",
    institution: "Southville (ASAT) under SISC management",
    location: "Philippines",
    honors: "Dean's Lister",
    description: "Completed my Associate Degree in Information Technology (ASAT) program at Southville International School and Colleges, recognized as a Dean's Lister for academic excellence. During this two-year program, I gained valuable hands-on experience in software development, web technologies, and system design."
  },
  {
    year: "2020",
    degree: "Senior High School Diploma",
    institution: "Southville International School and Colleges",
    location: "Philippines",
    description: "Completed Senior High School at Southville International School in Las Piñas, specializing in ICT Track. This experience built a strong foundation for my career in technology and software engineering."
  },
  {
    year: "2018",
    degree: "High School Diploma",
    institution: "Captain Albert Aguilar National Trade School",
    location: "Philippines",
    description: "Completed my foundational secondary education at Captain Albert Aguilar National Trade School, where I built a strong foundation in math and science that inspired my interest in technology and problem-solving."
  }
];

// Export everything as default too for easier imports
const portfolioData = {
  SKILLS,
  CERTIFICATIONS,
  WORK_EXPERIENCE,
  PROJECTS,
  PROFESSIONAL_PROJECTS,
  PERSONAL_PROJECTS,
  EDUCATION
};

export default portfolioData;