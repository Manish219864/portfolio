// =============================================
// data.ts — All resume content for Manish Jha
// =============================================

export const personalInfo = {
  name: 'Manish Jha',
  title: 'AI Engineer',
  tagline: 'AI Engineer · Machine Learning Developer · Python Backend',
  email: 'mjha31018@gmail.com',
  phone: '+91-9653219864',
  location: 'Pune / Mumbai, India',
  linkedin: 'https://www.linkedin.com/in/manish-jha-91664027b/',
  github: 'https://github.com/Manish219864',
  resumeFile: '/Manish_Jha_Resume.pdf',
  about: `I'm a Computer Science graduate specializing in AI & Machine Learning from D Y Patil University,
Pune, with a strong CGPA of 8.95. I build production-ready AI systems — from LLM-powered RAG pipelines
and intelligent ML models to full-stack web applications backed by Django and FastAPI. Passionate about
solving real-world problems at the intersection of Generative AI, Machine Learning, and Software Engineering,
I thrive in fast-paced environments where I can turn complex ideas into working products.`,
  strengths: [
    'AI/LLM Systems Design',
    'Production ML Pipelines',
    'Full-Stack Development',
    'Problem Solving',
    'Clean Code Architecture',
  ],
  objective: `Seeking an AI Engineer role where I can contribute to real-world AI applications
while expanding my expertise in Machine Learning and Generative AI.`,
};

// ---- SKILLS ----
export const skillCategories = [
  {
    category: 'Languages',
    icon: '💻',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'SQL', level: 82 },
      { name: 'C++', level: 72 },
      { name: 'C', level: 68 },
    ],
  },
  {
    category: 'AI / ML',
    icon: '🤖',
    skills: [
      { name: 'Machine Learning', level: 88 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'LangChain / RAG', level: 83 },
      { name: 'FAISS / Vector DBs', level: 80 },
      { name: 'Embeddings', level: 78 },
      { name: 'Prompt Engineering', level: 82 },
      { name: 'OpenCV', level: 72 },
      { name: 'Pandas / NumPy', level: 88 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚡',
    skills: [
      { name: 'Django', level: 85 },
      { name: 'FastAPI', level: 80 },
      { name: 'REST APIs', level: 88 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'Authentication', level: 75 },
    ],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 75 },
      { name: 'HTML / CSS', level: 80 },
      { name: 'Streamlit', level: 85 },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠',
    skills: [
      { name: 'Git / GitHub', level: 88 },
      { name: 'Docker', level: 72 },
      { name: 'Postman', level: 82 },
      { name: 'LLM Evaluation', level: 78 },
    ],
  },
  {
    category: 'Core Concepts',
    icon: '🧠',
    skills: [
      { name: 'Data Structures & Algorithms', level: 80 },
      { name: 'OOPs', level: 85 },
      { name: 'DBMS', level: 78 },
      { name: 'Feature Engineering', level: 82 },
      { name: 'Model Evaluation', level: 83 },
    ],
  },
];

// ---- PROJECTS ----
export const projects = [
  {
    id: 1,
    title: 'CredIntel — AI Credit Risk Decision Engine',
    status: 'Live',
    category: 'AI/ML',
    description:
      'An end-to-end AI system combining Machine Learning, NLP, and LLMs (RAG architecture) for intelligent credit risk evaluation, designed to simulate real banking workflows.',
    problem:
      'Traditional credit appraisal processes are slow, manual, and prone to human bias — particularly for SME borrowers.',
    solution:
      'Built a unified AI pipeline that extracts financial data from PDFs, scores borrower risk using ML models, enriches decisions with real-time web research, and auto-generates Credit Appraisal Memos (CAM) using LLMs.',
    impact:
      'Automates end-to-end credit analysis, significantly reducing appraisal time while improving consistency and auditability of lending decisions.',
    features: [
      'Automated financial data extraction from PDFs',
      'ML-based borrower risk scoring',
      'Real-time web research + sentiment analysis',
      'LLM-powered Credit Appraisal Memo (CAM) generator',
      'Interactive Streamlit dashboard for real-time analysis',
    ],
    tech: ['Python', 'LangChain', 'RAG', 'FAISS', 'Scikit-learn', 'NLP', 'Streamlit', 'FastAPI'],
    github: 'https://github.com/Manish219864/credintel', // Update repo name if different
    demo: null,               // PLACEHOLDER — add your Streamlit/live demo URL when available
    color: '#6366f1',
  },
  {
    id: 2,
    title: 'HealthGuardAI — Intelligent Insurance Claims Validator',
    status: 'Completed',
    category: 'AI/ML',
    description:
      'An ML-based system for automated insurance claim validation and anomaly detection, featuring secure access control and audit mechanisms for sensitive healthcare data.',
    problem:
      'Insurance claim fraud and processing inefficiencies cost healthcare providers millions annually and slow down legitimate claims.',
    solution:
      'Built an ML pipeline to automatically validate claims, flag anomalies, and enforce role-based access control with comprehensive audit trails for compliance.',
    impact:
      'Enables faster claim processing while detecting suspicious patterns and maintaining full data governance over sensitive healthcare information.',
    features: [
      'Automated insurance claim validation pipeline',
      'ML-based anomaly detection',
      'Secure role-based access control',
      'Audit mechanisms for sensitive healthcare data',
    ],
    tech: ['Python', 'Scikit-learn', 'Machine Learning', 'Django', 'PostgreSQL', 'REST APIs'],
    github: 'https://github.com/Manish219864/healthguard-ai', // Update repo name if different
    demo: null,
    color: '#22d3ee',
  },
  {
    id: 3,
    title: 'GenAI-Based Financial Assistant',
    status: 'Completed',
    category: 'Full-Stack',
    description:
      'A full-stack GenAI-powered financial platform enabling intelligent data processing, visualization, and insights generation for personal and business finance management.',
    problem:
      'Users struggle to extract actionable insights from raw financial data spread across multiple sources.',
    solution:
      'Developed a full-stack platform using React, Django, PostgreSQL, and Celery with AI-powered data processing and automated dashboard generation.',
    impact:
      'Provides users with real-time financial insights and automated reporting, reducing manual data analysis effort.',
    features: [
      'Full-stack architecture: React + Django + PostgreSQL',
      'Python & SQL financial data processing',
      'AI-generated insights dashboards',
      'Async task processing with Celery',
    ],
    tech: ['React', 'Django', 'PostgreSQL', 'Celery', 'Python', 'SQL', 'REST APIs'],
    github: 'https://github.com/Manish219864/genai-financial-assistant', // Update repo name if different
    demo: null,
    color: '#7c3aed',
  },
  {
    id: 4,
    title: 'Chronic Kidney Disease Prediction',
    status: 'Completed',
    category: 'AI/ML',
    description:
      'An ML classification model for early-stage Chronic Kidney Disease (CKD) detection using clinical patient data, with rigorous preprocessing and model optimization.',
    problem:
      'Early detection of CKD is critical for preventing disease progression, yet diagnosis often happens too late in rural and low-resource healthcare settings.',
    solution:
      'Built a Scikit-learn classification pipeline with advanced feature engineering, data preprocessing, and model evaluation to predict CKD from clinical markers.',
    impact:
      'Achieved high classification accuracy, providing a reliable screening tool that can assist clinicians in early CKD identification.',
    features: [
      'ML classification using Scikit-learn',
      'Data preprocessing & feature engineering',
      'Model evaluation & optimization',
      'Clinical marker analysis',
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Feature Engineering', 'Machine Learning'],
    github: 'https://github.com/Manish219864/ckd-prediction', // Update repo name if different
    demo: null,
    color: '#22d3ee',
  },
];

// ---- EDUCATION ----
export const education = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science Engineering (AI & ML)',
    institution: 'D Y Patil University, Ambi, Pune',
    period: '2022 – 2026',
    cgpa: '8.95',
    coursework: [
      'Machine Learning',
      'Deep Learning',
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Object-Oriented Programming',
      'Computer Vision',
      'Natural Language Processing',
      'Software Engineering',
    ],
  },
];

// ---- EXPERIENCE / ACTIVITIES ----
export const experience = [
  {
    role: 'Contributor — Logistics System Design',
    company: 'YaarIdeal (E-commerce Platform)',
    period: '2024',
    type: 'Contribution',
    description:
      'Contributed to the design and development of a logistics and order management system for an emerging e-commerce platform, focusing on backend architecture and workflow optimization.',
    highlights: [
      'Designed logistics system architecture',
      'Backend workflow optimization',
      'System integration planning',
    ],
  },
];

// ---- ACHIEVEMENTS ----
export const achievements = [
  {
    title: 'Google Cloud Innovator Program',
    description: 'Selected for the Google Cloud Innovator Program under the Cloud & AI track — a recognition for developers building innovative solutions on Google Cloud.',
    icon: '☁️',
    tag: 'Google Cloud',
    color: '#6366f1',
  },
  {
    title: 'Google Developer Program Member',
    description: 'Active member of the Google Developer Program and the Google Cloud × NVIDIA Developer Community, participating in events, workshops, and collaborative AI projects.',
    icon: '🚀',
    tag: 'Community',
    color: '#22d3ee',
  },
  {
    title: 'Google I/O 2026 Participant',
    description: 'Participated in Google I/O 2026, engaging with the latest AI developments, developer ecosystem announcements, and hands-on sessions from Google engineers.',
    icon: '🎯',
    tag: 'Google I/O',
    color: '#7c3aed',
  },
  {
    title: 'Top 10 Finalist — University Ideathon',
    description: 'Achieved Top 10 position in a university-level Ideathon competing against 100+ teams, demonstrating strong problem-solving, innovation, and presentation skills.',
    icon: '🏆',
    tag: 'Competition',
    color: '#f59e0b',
  },
  {
    title: 'ISRO IIRS Certified',
    description: 'Certified by the Indian Space Research Organisation (ISRO) Indian Institute of Remote Sensing (IIRS) in Remote Sensing & Image Analysis.',
    icon: '🛰️',
    tag: 'Certification',
    color: '#22d3ee',
  },
];

// ---- CERTIFICATIONS ----
export const certifications = [
  {
    name: 'ISRO IIRS — Remote Sensing & Image Analysis',
    issuer: 'Indian Space Research Organisation (ISRO)',
    year: '2024',
    credentialId: null, // PLACEHOLDER
    icon: '🛰️',
    color: '#22d3ee',
  },
  // PLACEHOLDER — Add more certifications here as you complete them
];

// ---- NAV LINKS ----
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];
