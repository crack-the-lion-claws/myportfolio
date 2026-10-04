export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  role: string;
  status: string;
  liveDemoUrl: string;
  isFeatured: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  iconName: string;
}

export const DEVELOPER_INFO = {
  name: "ABDULKARIM KASIM MNYUKU",
  title: "Full-Stack Developer",
  location: "Dar es Salaam, Tanzania",
  phone: "+255 785 197 876",
  email: "crackus2@gmail.com",
  github: "https://github.com/dulyaby",
  bioShort: "I build modern web applications, business systems, AI-powered products, and real-time digital solutions — from concept to deployment.",
  bioFull: "I'm a self-taught Full-Stack Developer with a background in Electronics from VETA. I continued developing my skills independently and transitioned into software development. Today, I build complete digital products across frontend development, backend engineering, databases, APIs, AI integration, cloud infrastructure, testing, and deployment. I focus on building practical technology solutions that solve real-world problems.",
  availability: [
    "Full-Stack Development",
    "Freelance Projects",
    "Business Applications",
    "AI Integration"
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS"],
    iconName: "Code"
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS"],
    iconName: "Layout"
  },
  {
    title: "Build Tools",
    skills: ["Vite"],
    iconName: "Cpu"
  },
  {
    title: "Backend & Server",
    skills: ["Node.js", "Express.js", "Next.js Server", "REST APIs", "WebSockets"],
    iconName: "Server"
  },
  {
    title: "Database & Authentication",
    skills: ["Firebase", "Firestore", "Firebase Authentication", "JWT"],
    iconName: "Database"
  },
  {
    title: "AI & API Integration",
    skills: ["Google Gemini API", "AI Tool Calling", "Multimodal AI", "Voice Interfaces", "Web Speech API"],
    iconName: "Sparkles"
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["Cloudflare", "Firebase", "Google Cloud Run", "CLI-based Deployment"],
    iconName: "Cloud"
  },
  {
    title: "AI-Assisted Development",
    skills: ["ChatGPT", "Google Gemini", "Claude"],
    iconName: "Wrench"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "rently-real-estate",
    title: "Rently Real Estate",
    category: "Real Estate Platform",
    description: "A property platform designed for the Tanzanian and East African rental and property market.",
    features: [
      "Interactive property maps",
      "Tenant and landlord dashboards",
      "Property verification",
      "Appointments and favorites",
      "Real-time database"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Firestore", "Google Maps"],
    role: "Built independently from scratch through deployment.",
    status: "Production / Live",
    liveDemoUrl: "https://wwwrentlyrealestate.com",
    isFeatured: true
  },
  {
    id: "partner-pos",
    title: "Partner POS V1",
    category: "Point of Sale System",
    description: "A multi-purpose POS system designed for Tanzanian SMEs to manage sales, inventory, staff, and business reporting.",
    features: [
      "Fast POS and digital receipts",
      "Inventory and stock alerts",
      "Sales and profit reports",
      "Staff roles and permissions",
      "Multi-branch support",
      "Speak-to-Sale (Voice recognition with rule-based & fuzzy product matching)"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Firestore", "Web Speech API"],
    role: "Built from scratch, including POS, inventory, reporting, authentication, permissions, and voice sales.",
    status: "MVP / Tested with real retail businesses",
    liveDemoUrl: "https://patnerpos.pages.dev",
    isFeatured: true
  },
  {
    id: "coty-luxury-butchery-ai",
    title: "Coty Luxury Butchery AI",
    category: "AI-Powered E-commerce",
    description: "An AI-powered shopping experience for premium meat products using natural conversation.",
    features: [
      "AI voice assistant",
      "Natural-language ordering",
      "AI tool calling",
      "Product catalog and customer profiles",
      "WhatsApp/SMS ordering",
      "Admin dashboard"
    ],
    technologies: ["Gemini", "AI Integration", "Voice Interaction", "E-commerce"],
    role: "Built the application and integrated AI with shopping, cart, and ordering workflows.",
    status: "Production / Live",
    liveDemoUrl: "https://cold-bush-48e6.multimodelaiuserexperience.workers.dev",
    isFeatured: true
  },
  {
    id: "video-intelligence",
    title: "Video Intelligence V1",
    category: "Experimental AI Project",
    description: "An experimental multimodal AI application for analyzing videos and interacting with their content.",
    features: [
      "AI video and audio analysis",
      "Event and timestamp extraction",
      "Swahili translation and subtitles",
      "Video summarization",
      "Subject recognition",
      "Voice interaction"
    ],
    technologies: ["Multimodal AI", "Video Analysis", "React", "TypeScript", "AI Integration"],
    role: "Built the application and integrated AI for video analysis, translation, and interactive conversations.",
    status: "Experimental",
    liveDemoUrl: "https://throbbing-smoke-a3be.multimodelaiuserexperience.workers.dev",
    isFeatured: true
  },
  {
    id: "deriv-scan-pro",
    title: "Deriv Scan Pro",
    category: "Real-Time Trading Analytics",
    description: "Experimental real-time trading analytics application.",
    features: [
      "Real-time market data",
      "Digit analysis",
      "Signal engine",
      "Multi-market screening",
      "Live charts",
      "Webhook automation"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "WebSockets", "JWT"],
    role: "Full-Stack Developer",
    status: "Experimental / Deployed",
    liveDemoUrl: "https://deriv-scan-pro.pages.dev",
    isFeatured: false
  },
  {
    id: "coty-butchery-web-shop",
    title: "Coty Butchery Web Shop MVP",
    category: "E-commerce & AI",
    description: "E-commerce and AI-powered business application.",
    features: [
      "Product catalog and search",
      "Cart and checkout",
      "WhatsApp ordering",
      "Gemini AI Concierge",
      "Customer accounts and subscriptions",
      "Admin management"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "Firebase Firestore", "Gemini API"],
    role: "Full-Stack Developer",
    status: "MVP / Deployed",
    liveDemoUrl: "https://lively-dawn-ae1d.multimodelaiuserexperience.workers.dev",
    isFeatured: false
  },
  {
    id: "tesea-academy",
    title: "Tesea Academy",
    category: "Team Project",
    description: "An earlier version of the educational platform (backend architecture and integrations).",
    features: [
      "REST API development",
      "Backend integrations",
      "Backend-to-application integration",
      "Team collaboration"
    ],
    technologies: ["Node.js", "Express", "REST APIs", "Database"],
    role: "Backend Developer (Team Project — Earlier version)",
    status: "Earlier Version",
    liveDemoUrl: "https://flat-boat-8346.multimodelaiuserexperience.workers.dev",
    isFeatured: false
  }
];

export const WHAT_I_BUILD = [
  {
    title: "Business Applications",
    description: "Robust POS systems, real estate portals, and custom management platforms tailored for operational efficiency."
  },
  {
    title: "AI-Powered Products",
    description: "Voice-assisted e-commerce, automated ordering, natural language concierges, and multimodal media analyzers."
  },
  {
    title: "Real-Time Systems",
    description: "Live data streaming, WebSocket architectures, interactive dashboards, and instant updates."
  },
  {
    title: "Backend Systems",
    description: "Secure REST APIs, robust authentication (JWT/Firebase), scalable databases, and server logic."
  },
  {
    title: "Cloud Applications",
    description: "High-performance deployments on Cloudflare, Google Cloud Run, and Firebase with CI/CD workflows."
  }
];

export const DEVELOPMENT_APPROACH = [
  {
    step: "01",
    title: "Understand",
    description: "Understand the problem and requirements thoroughly before writing a single line of code."
  },
  {
    step: "02",
    title: "Design",
    description: "Plan the architecture, database schema, user experience, and technical stack."
  },
  {
    step: "03",
    title: "Build",
    description: "Develop the frontend, backend, database, and core functionality with clean, maintainable code."
  },
  {
    step: "04",
    title: "Integrate",
    description: "Connect APIs, AI services, authentication systems, and external third-party services."
  },
  {
    step: "05",
    title: "Test",
    description: "Test functionality rigorously, fix issues, and ensure high reliability across devices."
  },
  {
    step: "06",
    title: "Deploy",
    description: "Deploy and configure the application on reliable cloud infrastructure for real-world production use."
  }
];

export const GITHUB_REPOS = [
  {
    name: "AI Builder",
    url: "https://github.com/dulyaby/BUILDER",
    description: "Core AI application builder and workflow tool."
  },
  {
    name: "TESTAai",
    url: "https://github.com/dulyaby/TESTAai",
    description: "Testing and experimental AI integration workspace."
  }
];
