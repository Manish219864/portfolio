// =============================================
// About.tsx — Professional About section
// =============================================
import { motion } from 'framer-motion';
import { personalInfo } from '../data';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function About() {
  return (
    <section id="about" style={{ padding: '6rem 0' }}>
      <div className="section-wrapper">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {/* Section Header */}
          <motion.div variants={fadeUp} style={{ marginBottom: '3.5rem' }}>
            <span className="mono-badge" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
              01. About Me
            </span>
            <h2 className="section-title">
              Building AI that <span className="gradient-text">matters</span>
            </h2>
          </motion.div>

          {/* Two-column layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'start',
            }}
          >
            {/* Left: Text */}
            <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{ color: '#94a3b8', lineHeight: 1.9, fontSize: '1rem' }}>
                I'm <strong style={{ color: 'white' }}>Manish Jha</strong> — a Computer Science graduate
                specializing in{' '}
                <strong style={{ color: '#6366f1' }}>Generative AI</strong> from
                D Y Patil University, Pune, with a CGPA of{' '}
                <strong style={{ color: 'white' }}>8.95</strong>. I have hands-on experience building
                scalable LLM applications using <strong style={{ color: '#22d3ee' }}>Python and LangChain</strong>,
                specializing in end-to-end RAG architectures and deploying AI-driven agents that solve real enterprise problems.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.9, fontSize: '1rem' }}>
                Adept at data preprocessing, OCR extraction, and benchmarking production machine learning models
                (such as XGBoost on 3M+ records and anomaly detection for claims validation), I build full-stack
                solutions backed by Django REST Framework, FastAPI, and interactive dashboards.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.9, fontSize: '1rem' }}>
                {personalInfo.objective}
              </p>

              {/* Strengths */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                {personalInfo.strengths.map(s => (
                  <span key={s} className="tech-tag">{s}</span>
                ))}
              </div>
            </motion.div>

            {/* Right: Cards */}
            <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Education Card */}
              <div
                className="glass-card"
                style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>🎓</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>B.Tech CSE (AI &amp; ML)</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.82rem' }}>D Y Patil University, Pune</div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                  <span className="mono-badge">2022 – 2026</span>
                  <span className="cyan-badge">CGPA: 8.95</span>
                </div>
              </div>

              {/* AI Focus Card */}
              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>✨</span> Generative AI &amp; ML Focus
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.7 }}>
                  Generative AI · Scalable LLM Applications · LangChain · RAG · Vector Embeddings · FAISS ·
                  Pydantic · Llama3 (Groq) · Scikit-learn · XGBoost · OCR &amp; Data Preprocessing
                </div>
              </div>

              {/* Currently Building */}
              <div className="glass-card" style={{ padding: '1.5rem', borderColor: 'rgba(99,102,241,0.25)' }}>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span
                    style={{
                      width: 8, height: 8, borderRadius: '50%', background: '#22d3ee',
                      boxShadow: '0 0 8px #22d3ee', display: 'inline-block', animation: 'pulseDot 2s infinite',
                    }}
                  />
                  Featured Project
                </div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.7 }}>
                  <span style={{ color: '#22d3ee', fontWeight: 600 }}>CredIntel</span> — AI-Powered Credit Analysis
                  extracting multi-page statements via pdfplumber/OCR and Groq API (Llama3) into a Streamlit &amp; Plotly dashboard.
                </div>
              </div>

              {/* Recognitions */}
              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>☁️</span> Recognition &amp; Programs
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.7 }}>
                  Google Cloud Innovator (Cloud &amp; AI Track) · Top 10 Ideathon Finalist (100+ teams) ·
                  ISRO IIRS Certified in Remote Sensing · Technocrats Hackathon
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulseDot { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
      `}</style>
    </section>
  );
}
