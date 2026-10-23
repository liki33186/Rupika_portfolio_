/**
 * Portfolio Data File for Rajarajeshwari S.
 * Centralized, easily configurable data for personal bio, skills,
 * projects, education, and contact links.
 */

export interface SkillItem {
  id: string;
  name: string;
  level: number; // percentage
  category: 'Frontend' | 'Backend' | 'Database';
  icon: string;
  description: string;
  tagColor: string; // gradient / accent color indicator
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  icon: string;
  category: 'Web App' | 'Full Stack' | 'Frontend' | 'Platform';
  demoUrl: string;
  githubUrl: string;
  status: 'Completed' | 'In Active Development' | 'Live Demo Available';
  imageUrl?: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  campus: string;
  location: string;
  period: string;
  status: string;
  description: string;
  highlights: string[];
}

export interface PersonalInfo {
  name: string;
  initials: string;
  title: string;
  roles: string[];
  shortBio: string;
  fullBio: string;
  location: string;
  college: string;
  academicYear: string;
  statusText: string;
  email: string;
  github: string;
  linkedin: string;
  avatarUrl?: string;
}

export const PERSONAL_INFO: PersonalInfo = {
  name: "Rupika C.",
  initials: "RC",
  title: "Developer | Learner | Creator",
  roles: [
    "Full-Stack Web Enthusiast",
    "BCA Undergrad @ STG First Grade College",
    "Open Source & Logic Explorer",
    "Problem Solver"
  ],
  shortBio: "Driven BCA undergraduate passionate about building responsive, accessible web applications and expanding my software engineering toolkit. Currently exploring the modern JavaScript ecosystem, Python scripting, and relational & NoSQL databases.",
  fullBio: "I am a developer who loves the intersection of clean logic and intuitive user interfaces. Currently pursuing my Bachelor of Computer Applications at STG First Grade College in Chinakurali, Mandya (2024–2027), I focus on solidifying computer science fundamentals while creating practical, real-world web applications.",
  location: "Chinakurali, Mandya, Karnataka, India",
  college: "STG First Grade College, Chinakurali, Mandya",
  academicYear: "2024 – 2027",
  statusText: "Available for internships & collaborations",
  email: "rupikachandra23@gmail.com", // Replace with your personal email
  github: "https://github.com/your-username", // Replace with your GitHub profile
  linkedin: "https://linkedin.com/in/your-username", // Replace with your LinkedIn profile
  avatarUrl: ""
};

export const SKILLS_DATA: SkillItem[] = [
  {
    id: "html",
    name: "HTML",
    level: 90,
    category: "Frontend",
    icon: "code",
    description: "Semantic HTML5, ARIA accessibility, SEO structuring, clean DOM hierarchy, and responsive canvas/media tags.",
    tagColor: "from-orange-500 to-amber-500"
  },
  {
    id: "css",
    name: "CSS",
    level: 85,
    category: "Frontend",
    icon: "palette",
    description: "Modern CSS3, Flexbox, Grid systems, animations, responsive design, dark themes, and Tailwind CSS utility styling.",
    tagColor: "from-blue-500 to-indigo-500"
  },
  {
    id: "javascript",
    name: "JavaScript",
    level: 50,
    category: "Frontend",
    icon: "file-code",
    description: "ES6+ syntax, DOM manipulation, asynchronous JavaScript (Promises, async/await), event listeners, and API integration.",
    tagColor: "from-amber-400 to-yellow-500"
  },
  {
    id: "python",
    name: "Python",
    level: 55,
    category: "Backend",
    icon: "terminal",
    description: "Core algorithms, data structures, object-oriented programming (OOP), file I/O, automation scripts, and problem solving.",
    tagColor: "from-sky-500 to-blue-600"
  },
  {
    id: "sql",
    name: "SQL",
    level: 60,
    category: "Database",
    icon: "database",
    description: "Relational schema design, normalization, complex SELECT queries, JOINs, grouping, indexing, and CRUD transactions.",
    tagColor: "from-purple-500 to-indigo-600"
  },
  {
    id: "mongodb",
    name: "MongoDB",
    level: 60,
    category: "Database",
    icon: "hard-drive",
    description: "Document-oriented databases, JSON/BSON structures, collections, CRUD operations, indexing, and Mongoose schema modeling.",
    tagColor: "from-emerald-500 to-teal-600"
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    subtitle: "Modern Responsive Developer Showcase",
    description: "A dark navy portfolio featuring dynamic skill meters, interactive project highlights, education timeline, and an accessible contact system.",
    longDescription: "Engineered from scratch to showcase technical growth and project accomplishments. Built with a modern dark navy theme, smooth motion transitions, responsive drawer navigation, and accessible forms adhering to WCAG standards.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Motion", "Vite"],
    features: [
      "Dark navy design with subtle purple/blue glowing ambient lighting",
      "Animated proficiency bars with tabular numerals",
      "Interactive project modals with replaceable demo & GitHub links",
      "Client-side validated contact form with email dispatch instructions",
      "Mobile-first responsive drawer menu and smooth anchor navigation"
    ],
    icon: "layout",
    category: "Frontend",
    demoUrl: "#", // Replaceable with your live portfolio URL
    githubUrl: "https://github.com/your-username/personal-portfolio", // Replaceable with your repository URL
    status: "Completed"
  },
  {
    id: "todo-list",
    title: "To-Do List",
    subtitle: "Productivity & Task Management Application",
    description: "An intuitive productivity tool supporting task creation, categorization, priority statuses, completion toggles, and persistent local storage.",
    longDescription: "A streamlined task management application built to help students and developers organize daily goals. Features responsive lists, status filtering (All, Pending, Completed), priority color coding, and persistent browser storage.",
    technologies: ["JavaScript (ES6+)", "HTML5", "CSS3", "LocalStorage API"],
    features: [
      "Instant task creation with edit, delete, and completion toggles",
      "Persistent state via LocalStorage so tasks survive page reloads",
      "Category tags and priority level badges (Low, Medium, High)",
      "Real-time completion progress tracking and remaining task counter",
      "Clean keyboard shortcuts and accessible focus styling"
    ],
    icon: "check-circle",
    category: "Web App",
    demoUrl: "#", // Replaceable
    githubUrl: "https://github.com/your-username/todo-list-app", // Replaceable
    status: "Completed"
  },
  {
    id: "food-delivery",
    title: "Food Delivery",
    subtitle: "Interactive Food Ordering & Menu Platform",
    description: "A vibrant web application featuring cuisine categories, restaurant menu exploration, live cart calculation, and an intuitive checkout flow.",
    longDescription: "A modern food delivery front-end interface built with component-driven architecture. Users can filter dishes by cuisine, adjust item quantities in a real-time cart drawer, calculate taxes and delivery charges, and simulate order dispatch.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Lucide Icons"],
    features: [
      "Dynamic menu filtering by categories (Indian, Continental, Fast Food, Desserts)",
      "Real-time cart calculation with quantity adjustments and coupon logic",
      "Visual delivery time estimator and live address input selector",
      "Responsive layout optimized for smartphones and desktop tablets",
      "Accessible modal checkout simulation with order summary"
    ],
    icon: "shopping-bag",
    category: "Full Stack",
    demoUrl: "#", // Replaceable
    githubUrl: "https://github.com/your-username/food-delivery-platform", // Replaceable
    status: "In Active Development"
  },
  {
    id: "reuse-market",
    title: "Reuse Market",
    subtitle: "Sustainable Community Secondhand Marketplace",
    description: "A circular economy marketplace allowing students and community members to list, browse, and trade gently used books, gadgets, and supplies.",
    longDescription: "An eco-friendly web platform encouraging reuse and waste reduction. Features structured item listings, condition ratings (Like New, Good, Fair), category browsing, price filters, and buyer-seller connection tools.",
    technologies: ["Python", "SQL / MongoDB", "JavaScript", "CSS3", "HTML5"],
    features: [
      "Item catalog with condition indicators and eco-savings impact badge",
      "Search, price sorting, and category filters (Textbooks, Electronics, Stationeries)",
      "Simulated product listing form with photo upload and price inputs",
      "Direct seller contact card and campus meetup location suggestions",
      "Relational data model for products, categories, and student accounts"
    ],
    icon: "refresh-cw",
    category: "Platform",
    demoUrl: "#", // Replaceable
    githubUrl: "https://github.com/your-username/reuse-market", // Replaceable
    status: "In Active Development"
  }
];

export const EDUCATION_DATA: EducationItem = {
  degree: "Bachelor of Computer Applications (BCA)",
  field: "Computer Applications & Software Systems",
  institution: "STG First Grade College",
  campus: "Chinakurali Campus",
  location: "Chinakurali, Mandya, Karnataka, India",
  period: "2024 – 2027",
  status: "Undergraduate Program (Active Student)",
  description: "Comprehensive three-year undergraduate program focusing on core computer science foundations, algorithm design, software engineering methodologies, web development, and database administration.",
  highlights: [
    "Programming Fundamentals: C, C++, Core Java, and Python scripting",
    "Database Management Systems (DBMS) with SQL query optimization and schema design",
    "Web Application Technologies: Semantic HTML5, CSS3, JavaScript, and responsive design",
    "Computer Networks, Operating Systems, and Object-Oriented Software Engineering (OOPS)",
    "Active participant in collegiate coding workshops, technical seminars, and IT clubs"
  ]
};

export const DEPLOYMENT_GUIDE = {
  localRun: [
    "git clone https://github.com/your-username/portfolio.git",
    "cd portfolio",
    "npm install",
    "npm run dev"
  ],
  renderDeploy: [
    "Create a free account on https://render.com",
    "Click 'New +' and select 'Static Site'",
    "Connect your GitHub repository containing this portfolio",
    "Set Build Command: npm run build",
    "Set Publish Directory: dist",
    "Click 'Create Static Site' — Render deploys automatically with a free HTTPS URL!"
  ],
  vercelDeploy: [
    "Create or sign in to https://vercel.com",
    "Click 'Add New...' > 'Project'",
    "Import your GitHub repository",
    "Vercel auto-detects Vite: Build command is 'npm run build' and output is 'dist'",
    "Click 'Deploy' — your site goes live in seconds with custom domain support!"
  ]
};
