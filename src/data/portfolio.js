/**
 * PORTFOLIO DATA SOURCE OF TRUTH
 * Praveenkumar Balakrishnan - Python Developer
 * 
 * Strict adherence to resume truth:
 * No invented metrics, companies, titles, or awards.
 */

export const personalData = {
  name: "Praveenkumar Balakrishnan",
  firstName: "PRAVEEN",
  lastName: "KUMAR",
  fullName: "PRAVEENKUMAR BALAKRISHNAN",
  role: "Python Developer",
  roleUpper: "PYTHON DEVELOPER",
  location: "Coimbatore, India",
  email: "praveenkumarb226@gmail.com",
  yearSpan: "2023 — 2027",
  domains: "AI / BACKEND / PYTHON",
  
  heroTagline: "I build backend systems, REST APIs, and AI-powered applications using Python.",
  
  aboutBio: "I am a B.Tech Artificial Intelligence and Data Science student focused on Python development, backend systems, REST APIs, machine learning, and problem solving.",
  
  resumeUrl: "/resume/Praveenkumar-Balakrishnan-Resume.pdf",
  
  keywords: ["PYTHON", "AI", "BACKEND", "BUILD", "CREATE", "SOLVE"],
  
  socials: {
    email: "mailto:praveenkumarb226@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    leetcode: "https://leetcode.com",
    codechef: "https://codechef.com",
  }
};

export const skillsData = {
  center: "PYTHON",
  categories: [
    {
      id: "backend",
      title: "Backend Engineering",
      tag: "API & ARCHITECTURE",
      items: ["FastAPI", "Flask", "REST APIs"],
      description: "Building scalable web services, RESTful endpoints, and backend architectures."
    },
    {
      id: "ai-data",
      title: "AI & Data Science",
      tag: "INTELLIGENCE",
      items: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Gradio"],
      description: "Data modeling, statistical pipelines, predictive modeling, and interactive ML interfaces."
    },
    {
      id: "database",
      title: "Databases & Storage",
      tag: "PERSISTENCE",
      items: ["SQL", "MySQL concepts", "Relational Databases"],
      description: "Schema design, relational query formulation, data modeling, and query optimization."
    },
    {
      id: "frontend",
      title: "Frontend Engineering",
      tag: "INTERFACE",
      items: ["React", "JavaScript", "HTML", "CSS"],
      description: "Component-based architecture, interactive interfaces, state handling, and API integration."
    },
    {
      id: "tools",
      title: "Developer Tools",
      tag: "WORKFLOW",
      items: ["Git", "GitHub"],
      description: "Version control, pull request management, code review workflows, and collaborative dev."
    },
    {
      id: "languages",
      title: "Languages",
      tag: "CORE",
      items: ["Python", "Java"],
      description: "Object-oriented programming, clean code paradigms, and modular software design."
    },
    {
      id: "dsa",
      title: "Data Structures & Algorithms",
      tag: "LOGIC & OPTIMIZATION",
      items: ["Arrays", "Strings", "Linked Lists", "Stacks", "Queues", "Trees", "Sorting", "Searching"],
      description: "Algorithmic problem-solving, asymptotic complexity analysis, and efficient execution."
    }
  ]
};

export const techSystemData = [
  {
    step: "01",
    label: "PYTHON",
    sub: "Core Execution Layer",
    desc: "Robust object-oriented and functional Python logic driving high-efficiency computation."
  },
  {
    step: "02",
    label: "API",
    sub: "RESTful Gateway",
    desc: "FastAPI and Flask endpoints enforcing schema validation, route handling, and serialization."
  },
  {
    step: "03",
    label: "DATABASE",
    sub: "Relational Persistence",
    desc: "Structured SQL queries, transactional integrity, and normalized relational modeling."
  },
  {
    step: "04",
    label: "ML",
    sub: "Inference & Analysis",
    desc: "Scikit-learn, XGBoost, and NLP algorithms performing feature extraction and prediction."
  },
  {
    step: "05",
    label: "APPLICATION",
    sub: "Interactive Delivery",
    desc: "Responsive frontend interfaces and client apps consuming structured data seamlessly."
  }
];

export const projectsData = [
  {
    id: "next-hire-ai",
    number: "01",
    title: "NEXT HIRE AI",
    subtitle: "AI-POWERED RESUME SCREENING & CAREER INTELLIGENCE PLATFORM",
    category: "AI / NLP / BACKEND",
    technologies: ["Python", "NLP", "XGBoost"],
    overview: "An intelligent platform designed to bridge candidates and job requirements through natural language processing, semantic matching algorithms, and predictive skill gap diagnostics.",
    problem: "Traditional resume evaluation relies on naive keyword matching, often disqualifying qualified applicants who express skillsets with varied nomenclature while failing to identify true candidate-job alignment.",
    solution: "Built a Python-based pipeline leveraging NLP semantic similarity and XGBoost evaluation models to analyze parsed resumes against job descriptions, identifying key competencies and calculating holistic fit.",
    features: [
      "Resume analysis & structure parsing",
      "Job description requirement extraction",
      "Semantic matching using NLP",
      "Skill identification & normalization",
      "Job-fit scoring calculation",
      "Skill-gap detection & categorization",
      "AI-generated skill assessments",
      "Personalized career roadmaps",
      "Interview-readiness insights",
      "Future skill-demand trends analysis"
    ],
    flow: [
      "RESUME",
      "NLP",
      "SKILL EXTRACTION",
      "SEMANTIC MATCHING",
      "JOB FIT",
      "SKILL GAP",
      "CAREER ROADMAP"
    ]
  },
  {
    id: "interactive-quiz",
    number: "02",
    title: "INTERACTIVE QUIZ APPLICATION",
    subtitle: "MODULAR REAL-TIME ASSESSMENT & KNOWLEDGE TESTING ENGINE",
    category: "FRONTEND / JAVASCRIPT",
    technologies: ["HTML", "CSS", "JavaScript"],
    overview: "A lightweight, highly responsive web-based quiz engine engineered for timed assessments, real-time scoring, and dynamic feedback.",
    problem: "Static assessment tests often present friction with slow page reloads, rigid navigation, and poor feedback loops for test takers.",
    solution: "Architected a pure JavaScript dynamic state machine that manages timed questions, verifies answers on the fly, computes percentages, and yields instantaneous actionable performance summaries.",
    features: [
      "Topic & category selection",
      "Timed questions with countdown state",
      "Instant feedback on answer selection",
      "Real-time score calculation",
      "Percentage & performance evaluation",
      "Seamless restart & retry loop",
      "Fully responsive mobile-friendly interface"
    ],
    flow: [
      "QUESTION",
      "ANSWER",
      "RESULT"
    ]
  },
  {
    id: "student-task-manager",
    number: "03",
    title: "STUDENT TASK MANAGER",
    subtitle: "FULL-STACK ACADEMIC & PLACEMENT TASK MANAGEMENT PLATFORM",
    category: "FULL-STACK / FASTAPI / REACT",
    technologies: ["React.js", "FastAPI", "SQLite", "SQLAlchemy", "Python"],
    overview: "A full-stack web application built using React, FastAPI, SQLite, and SQLAlchemy designed to help students organize and manage academic, coding, and placement preparation tasks through a centralized platform.",
    problem: "Students manage multiple parallel tracks—academic assignments, DBMS studies, DSA practice, resume building, and placement prep—using scattered notes, leading to poor progress tracking and missed deadlines.",
    solution: "Architected a full-stack system with a React.js interface communicating via REST APIs with a FastAPI backend, leveraging SQLAlchemy ORM and SQLite to manage CRUD operations, status flags, and real-time dashboard progress statistics.",
    features: [
      "Task creation with subject categories & due dates",
      "Task list viewing with status indicators",
      "Full task detail editing & status updates",
      "Mark tasks as completed or pending",
      "Permanent task deletion",
      "Dashboard statistics (Total, Completed, Pending tasks)",
      "FastAPI Swagger UI API endpoint validation",
      "SQLAlchemy ORM relational data mapping"
    ],
    flow: [
      "REACT FRONTEND",
      "REST API",
      "FASTAPI",
      "SQLALCHEMY",
      "SQLITE"
    ]
  },
  {
    id: "interview-question-manager",
    number: "04",
    title: "INTERVIEW QUESTION MANAGER",
    subtitle: "FULL-STACK INTERVIEW PREPARATION & KNOWLEDGE TRACKER",
    category: "FULL-STACK / FASTAPI / REACT",
    technologies: ["React.js", "FastAPI", "SQLite", "SQLAlchemy", "Python"],
    overview: "A full-stack web application designed to help students organize and track technical interview questions, answers, and study progress across Python, SQL, DBMS, OS, Networks, React, and FastAPI.",
    problem: "Technical interview preparation requires mastering hundreds of questions across multiple core subjects without a centralized system to search by keyword, filter by topic, or track completed questions.",
    solution: "Engineered a modular FastAPI + React application backed by SQLite and SQLAlchemy ORM, incorporating real-time keyword search, topic categorization, completion status tracking, and CORS middleware for study management.",
    features: [
      "Add new interview questions & detailed answers",
      "Edit existing questions & explanation details",
      "Delete outdated or duplicate questions",
      "Keyword search across question titles and answers",
      "Topic filtering (Python, SQL, DBMS, OS, Networks, React, FastAPI)",
      "Track completion status (Completed / Pending)",
      "CORS middleware & modular FastAPI architecture",
      "Swagger UI API testing & validation"
    ],
    flow: [
      "QUESTION",
      "TOPIC FILTER",
      "KEYWORD SEARCH",
      "FASTAPI API",
      "SQLITE DB"
    ]
  }
];

export const experienceData = [
  {
    period: "JUNE 2025 — JULY 2025",
    year: "2025",
    role: "React JS Intern",
    company: "ACCENT TECHNO SOFT",
    location: "Coimbatore, India",
    technologies: ["Git", "REST APIs", "JavaScript", "HTML", "CSS"],
    responsibilities: [
      "Collaborated using Git version control, branch management, and feature merging.",
      "Participated actively in pull requests and peer code review processes.",
      "Engineered modular, component-based features utilizing JavaScript and CSS.",
      "Integrated and consumed REST APIs to power dynamic data flow across views.",
      "Conducted iterative debugging, console profiling, and cross-browser testing."
    ]
  }
];

export const achievementsData = [
  {
    id: "leetcode",
    value: 300,
    suffix: "+",
    label: "LEETCODE PROBLEMS",
    subtext: "Data structures & algorithmic problem solving",
    color: "#E53935"
  },
  {
    id: "codechef",
    value: 1000,
    suffix: "+",
    label: "CODECHEF RATING",
    subtext: "Competitive coding contests & speed challenges",
    color: "#0A0A0A"
  },
  {
    id: "cgpa",
    value: 8.98,
    isDecimal: true,
    suffix: "",
    label: "ACADEMIC CGPA",
    subtext: "KGiSL Institute of Technology (2023–2027)",
    color: "#E53935"
  }
];

export const educationData = [
  {
    degree: "B.Tech Artificial Intelligence and Data Science",
    institution: "KGiSL Institute of Technology",
    period: "2023 — 2027",
    score: "CGPA 8.98",
    coursework: [
      "Python Programming",
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Artificial Intelligence",
      "Machine Learning"
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Sri Sowdeswari Vidyalaya Matric Hr. Sec. School",
    period: "2021 — 2023",
    score: "87.5%",
    coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
  }
];

export const currentFocusData = {
  title: "CURRENTLY BUILDING",
  keywords: ["PYTHON", "BACKEND", "AI", "SYSTEMS"],
  ticker: [
    "PYTHON",
    "FASTAPI",
    "REST APIs",
    "SQL",
    "AI",
    "ML",
    "PYTHON",
    "FASTAPI",
    "REST APIs",
    "SQL",
    "AI",
    "ML"
  ]
};
