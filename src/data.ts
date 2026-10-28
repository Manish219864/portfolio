// =============================================
// data.ts — All resume content for Manish Jha
// =============================================

export const personalInfo = {
  name: 'Manish Jha',
  title: 'Generative AI Specialist & AI Engineer',
  tagline: 'Generative AI Specialist · Scalable LLM Applications · Python & LangChain',
  email: 'mjha31018@gmail.com',
  phone: '+91-9653219864',
  location: 'Pune / Mumbai, India',
  linkedin: 'https://www.linkedin.com/in/manish-jha-91664027b/',
  github: 'https://github.com/Manish219864',
  resumeFile: '/Manish_Jha_Resume.pdf',
  about: `B.Tech CS graduate specializing in Generative AI, with hands-on experience building scalable LLM applications using Python and LangChain. Adept at data preprocessing and deploying AI-driven agents to solve complex business requirements. Graduated from D Y Patil University, Ambi, Pune, with an 8.95 CGPA, with a proven track record delivering production AI systems, RAG pipelines, and high-performance ML models.`,
  strengths: [
    'Generative AI & LLM Systems',
    'Scalable RAG Architecture',
    'AI-Driven Agents',
    'Production ML Pipelines',
    'Data Preprocessing & OCR',
  ],
  objective: `Seeking an AI Engineer role where I can build scalable Generative AI and LLM applications while contributing to production-grade machine learning systems.`,
};

// ---- SKILLS ----
export const skillCategories = [
  {
    category: 'Generative AI & Data',
    icon: '✨',
    skills: [
      { name: 'RAG Architecture', level: 94 },
      { name: 'LangChain & AI Agents', level: 92 },
      { name: 'Vector Embeddings & FAISS', level: 90 },
      { name: 'Llama3 (via Groq)', level: 90 },
      { name: 'Pydantic & Schemas', level: 88 },
      { name: 'OCR (pdfplumber) & NLP', level: 88 },
      { name: 'Data Preprocessing', level: 92 },
    ],
  },
  {
    category: 'Machine Learning',
    icon: '🤖',
    skills: [
      { name: 'Scikit-learn', level: 90 },
      { name: 'XGBoost', level: 88 },
      { name: 'Classification & Regression', level: 90 },
      { name: 'Anomaly Detection', level: 86 },
      { name: 'Feature Engineering', level: 88 },
      { name: 'Model Evaluation', level: 88 },
      { name: 'Pandas & NumPy', level: 92 },
    ],
  },
  {
    category: 'Languages',
    icon: '💻',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'SQL', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'C++', level: 75 },
      { name: 'C', level: 70 },
    ],
  },
  {
    category: 'Frameworks & Web',
    icon: '⚡',
    skills: [
      { name: 'Django REST Framework', level: 88 },
      { name: 'FastAPI', level: 85 },
      { name: 'Streamlit', level: 92 },
      { name: 'Flask', level: 82 },
      { name: 'React', level: 80 },
    ],
  },
  {
    category: 'Tools & Databases',
    icon: '🛠',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'Docker', level: 80 },
      { name: 'Render', level: 82 },
      { name: 'Plotly', level: 88 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    category: 'Core Concepts',
    icon: '🧠',
    skills: [
      { name: 'LLM Evaluation & Validation', level: 88 },
      { name: 'Data Structures & Algorithms', level: 82 },
      { name: 'OOPs & Clean Architecture', level: 86 },
      { name: 'DBMS & Query Optimization', level: 84 },
      { name: 'Production Pipelines', level: 88 },
    ],
  },
];

// ---- PROJECTS ----
export const projects = [
  {
    id: 1,
    title: 'CredIntel — AI-Powered Credit Analysis',
    status: 'Live',
    category: 'AI/ML',
    description:
      'An end-to-end financial intelligence pipeline combining OCR, pdfplumber, and Groq API (Llama3) for multi-source statement extraction, anomaly detection, and automated credit risk appraisal.',
    problem:
      'Manual credit appraisal of corporate and SME borrowers is slow, error-prone, and struggles to identify inconsistencies hidden across dense multi-page financial statements.',
    solution:
      'Engineered an automated extraction pipeline using pdfplumber, OCR, and Groq API (Llama3). Processed extracted financial records to compute key solvency/liquidity indicators and deployed an interactive Streamlit dashboard featuring dynamic Plotly visualizations.',
    impact:
      'Streamlines credit analysis workflows, accelerates financial indicator calculations, and provides clear visual auditing of potential balance sheet inconsistencies.',
    features: [
      'Data Processing: Built extraction pipeline from PDF statements using pdfplumber, OCR, and LLM-assisted processing',
      'Financial Analysis: Computed financial indicators and flagged potential balance sheet inconsistencies for credit analysis',
      'Dashboard: Deployed an interactive Streamlit dashboard with Plotly visualizations for financial exploration',
      'High-throughput inference utilizing the Groq API (Llama3) for rapid document understanding',
      'Real-time credit decision insights and financial summary generation',
    ],
    tech: ['Python', 'Pandas', 'pdfplumber', 'OCR', 'Groq API', 'Llama3', 'Streamlit', 'Plotly', 'LangChain'],
    github: 'https://github.com/Manish219864/credintel',
    demo: 'https://credintel.streamlit.app',
    color: '#6366f1',
  },
  {
    id: 2,
    title: 'DemandIQ — Retail Demand Forecasting',
    status: 'Live',
    category: 'AI/ML',
    description:
      'A large-scale sales forecasting system trained on 3M+ records across 54 stores and 33 product families, deploying an optimized XGBoost model for store replenishment planning.',
    problem:
      'Retail chains face severe margin erosion from overstocking and stockout penalties due to complex seasonality, promotional events, and multi-store demand fluctuations.',
    solution:
      'Engineered a scalable forecasting pipeline incorporating calendar dynamics, store features, and promotional spikes. Benchmarked multiple regression algorithms and deployed XGBoost with custom preprocessing served via Flask and Gunicorn.',
    impact:
      'Achieved a 94.99% R² score evaluated across 26,730 holdout test points, enabling high-accuracy inventory forecasting and replenishment planning.',
    features: [
      'Forecasting: Sales forecasting pipeline on 3M+ records across 54 stores and 33 product families',
      'Feature Engineering: Incorporated calendar, promotional, holiday, and external macroeconomic indicators',
      'Evaluation & Deployment: Benchmarked regression architectures and deployed XGBoost with robust preprocessing',
      'High Precision: Achieved 94.99% R² score on 26,730 test points',
      'Production Serving: Integrated REST API with Flask and Gunicorn for scalable inference',
    ],
    tech: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'Flask', 'Gunicorn', 'Regression'],
    github: 'https://github.com/Manish219864/DemandIQ',
    demo: null,
    color: '#22d3ee',
  },
  {
    id: 3,
    title: 'HealthGuardAI — Healthcare Claims Validation',
    status: 'Completed',
    category: 'AI/ML',
    description:
      'An ML-powered anomaly detection and claims validation system developed during the Technocrats Hackathon to detect fraudulent healthcare billing patterns and duplicate claims.',
    problem:
      'Healthcare providers and insurers lose billions to fraudulent billing patterns, unusual claim amounts, and duplicate billing, while manual audits cause long review backlogs.',
    solution:
      'Contributed to the AI/ML component implementing machine learning anomaly detection to flag abnormal claim amounts and duplicate billing, accompanied by automated validation workflows.',
    impact:
      'Achieved 91.4% precision in identifying fraudulent claims and abnormal billing patterns during the Technocrats Hackathon.',
    features: [
      'Anomaly Detection: AI/ML component identifying unusual claim amounts and duplicate billing patterns',
      'Precision: Achieved 91.4% precision in healthcare claims validation',
      'Claims Validation: Engineered ML-based workflows to automatically flag abnormal billing for auditor review',
      'Technocrats Hackathon duo project delivering fast, auditable claim processing',
    ],
    tech: ['Python', 'Scikit-learn', 'Anomaly Detection', 'Machine Learning', 'Django REST Framework', 'PostgreSQL'],
    github: 'https://github.com/Manish219864/HealthGuardAI',
    demo: null,
    color: '#10b981',
  },
  {
    id: 4,
    title: 'GenAI Financial Assistant',
    status: 'Completed',
    category: 'Full-Stack',
    description:
      'An intelligent financial assistant implementing Retrieval-Augmented Generation (RAG) with LangChain and FAISS, powered by a Django REST Framework backend and interactive React frontend.',
    problem:
      'Navigating dense transaction histories and expense records is tedious, preventing individuals and business owners from obtaining quick answers about spending patterns.',
    solution:
      'Built a full-stack RAG-powered assistant that ingests expense data, computes vector embeddings into FAISS, and leverages LangChain to answer natural-language queries about transaction history.',
    impact:
      'Enables natural-language conversational queries over historical financial data with instant retrieval, clear expense summaries, and contextual insights.',
    features: [
      'Financial AI: Implemented RAG to answer natural-language queries over user transaction history',
      'Vector Search: Integrated FAISS and dense vector embeddings for sub-second expense retrieval',
      'Backend Architecture: Built robust API endpoints with Django REST Framework and PostgreSQL',
      'Modern UI: Responsive React interface with interactive transaction breakdowns and chat experience',
    ],
    tech: ['Python', 'Django REST Framework', 'React', 'LangChain', 'FAISS', 'RAG', 'Vector Embeddings', 'PostgreSQL'],
    github: 'https://github.com/Manish219864/genai-financial-assistant',
    demo: null,
    color: '#7c3aed',
  },
  {
    id: 5,
    title: 'Customer Retail Analysis',
    status: 'Completed',
    category: 'AI/ML',
    description:
      'An exploratory and machine learning study analyzing 541K+ e-commerce transactions, diagnosing class imbalance, and benchmarking multiclass classification algorithms.',
    problem:
      'Extreme geographical and transactional class imbalances in retail datasets lead to misleading accuracy metrics and poor generalization on minority segments.',
    solution:
      'Analyzed 541K+ retail transaction records, benchmarked Logistic Regression, Decision Trees, and KNN on a 20,000-record holdout set, and diagnosed the accuracy paradox using multi-class confusion matrices.',
    impact:
      'Achieved 91.3% baseline accuracy; established critical evaluation frameworks demonstrating why Macro-F1 and training-only resampling are vital for imbalanced retail data.',
    features: [
      'Classification: Analyzed 541K+ e-commerce records and benchmarked Logistic Regression, Decision Tree, and KNN',
      'Accuracy: Achieved 91.3% accuracy on a 20,000-record holdout evaluation set',
      'Model Evaluation: Used 38-class confusion matrices to investigate geographic class imbalance',
      'Identified Macro-F1 and training-only resampling strategies as necessary evaluation improvements',
    ],
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Classification', 'Model Evaluation', 'Matplotlib'],
    github: 'https://github.com/Manish219864/Customer_retail_analysis',
    demo: null,
    color: '#f59e0b',
  },
  {
    id: 6,
    title: 'Chronic Kidney Disease Prediction',
    status: 'Completed',
    category: 'AI/ML',
    description:
      'An early-stage disease prediction application developed during SmartBridge Experiential Learning, benchmarking multiple ML classifiers and serving predictions via Flask.',
    problem:
      'Late diagnosis of Chronic Kidney Disease (CKD) severely impacts patient prognosis, particularly in low-resource clinics lacking specialized diagnostic tools.',
    solution:
      'Preprocessed clinical marker data and trained Logistic Regression, Random Forest, SVM, and ANN. Deployed the top-performing model via Flask with a patient input interface.',
    impact:
      'Logistic Regression achieved a reported recall of 1.0 (zero false negatives for critical disease detection), integrated into a clean web interface for rapid patient screening.',
    features: [
      'Model Development: Preprocessed clinical data and compared Logistic Regression, Random Forest, SVM, and ANN',
      'Recall: Logistic Regression achieved a reported recall of 1.0 on clinical evaluation data',
      'Deployment: Integrated the selected model into a Flask application using Pickle serialization',
      'User Interface: Built an accessible HTML/CSS interface for clinicians to input patient parameters',
    ],
    tech: ['Python', 'Scikit-learn', 'Flask', 'Pandas', 'NumPy', 'Pickle'],
    github: 'https://github.com/Manish219864/ckd-prediction',
    demo: null,
    color: '#06b6d4',
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
    role: 'Open-Source Contributor — Mesa-Geo',
    company: 'Mesa-Geo',
    period: '2026',
    type: 'Open Source',
    description:
      'Contributed to the Mesa-Geo open-source geospatial project by working on a PropertyLayer-based refactor of RasterLayer, focusing on modular architecture, delegation, backward compatibility, and testing.',
    highlights: [
      'Refactored RasterLayer around a PropertyLayer abstraction to improve separation of concerns and modularity.',
      'Implemented delegation logic while preserving backward-compatible behavior.',
      'Added and updated tests to validate the refactored functionality.',
      'Worked with the existing Mesa-Geo architecture and submitted the changes for maintainer review.',
    ],
    prText: 'PR #321',
    prUrl: '', // Add your GitHub PR URL here when ready
  },
];

// ---- ACHIEVEMENTS ----
export const achievements = [
  {
    title: 'Google Cloud Innovator Program (Cloud & AI Track)',
    description: 'Selected for the Google Cloud Innovator Program under the Cloud & AI track — recognizing developers designing and building scalable AI solutions on Google Cloud.',
    icon: '☁️',
    tag: 'Google Cloud',
    color: '#6366f1',
  },
  {
    title: 'Top 10 Finalist — Ideathon',
    description: 'Finished as a Top 10 finalist among 100+ competing teams in a competitive Ideathon, demonstrating innovative problem-solving and rapid prototyping.',
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
];

// ---- CERTIFICATIONS ----
export const certifications = [
  {
    name: 'Google Cloud Innovator Program — Cloud & AI Track',
    issuer: 'Google Cloud',
    year: '2025',
    type: 'Program Selection',
    credentialId: null,
    icon: '☁️',
    color: '#6366f1',
  },
  {
    name: 'ISRO IIRS — Remote Sensing & Image Analysis',
    issuer: 'Indian Space Research Organisation (ISRO)',
    year: '2024',
    type: 'Certification',
    credentialId: null,
    icon: '🛰️',
    color: '#22d3ee',
  },
  {
    name: 'SmartBridge — Experiential Learning in Artificial Intelligence & Machine Learning',
    issuer: 'SmartBridge',
    year: 'Jun–Aug 2025',
    type: 'Experiential Learning',
    credentialId: null,
    icon: '🤖',
    color: '#6366f1',
  },
  {
    name: 'Google I/O 2026',
    issuer: 'Google',
    year: '2026',
    type: 'Event / Program',
    credentialId: null,
    icon: '🎯',
    color: '#7c3aed',
  },
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
