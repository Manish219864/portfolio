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
                specialising in{' '}
                <strong style={{ color: '#6366f1' }}>Artificial Intelligence &amp; Machine Learning</strong> from
                D Y Patil University, Pune. With a CGPA of{' '}
                <strong style={{ color: 'white' }}>8.95</strong>, I've spent my academic years not just
                studying AI but actually building it — shipping production-ready systems that solve
                real-world problems.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.9, fontSize: '1rem' }}>
                My work spans the full AI stack: designing{' '}
                <strong style={{ color: '#22d3ee' }}>LLM-powered RAG pipelines</strong>, training machine
                learning models, building backend APIs with Django &amp; FastAPI, and creating data-driven
                full-stack applications. I'm particularly passionate about{' '}
                <strong style={{ color: 'white' }}>Generative AI</strong> and the challenge of making AI
                systems that are reliable, explainable, and actually useful in production.
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
                  <span>🤖</span> AI &amp; ML Focus
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.7 }}>
                  LLMs · RAG Pipelines · Vector Databases · Prompt Engineering · ML Model Training ·
                  Feature Engineering · Scikit-learn · LangChain · Computer Vision (OpenCV)
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
                  Currently Building
                </div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.7 }}>
                  <span style={{ color: '#22d3ee', fontWeight: 600 }}>CredIntel</span> — AI Credit Risk Decision
                  Engine using ML + NLP + LLMs (RAG) to automate financial analysis and credit appraisal workflows.
                </div>
              </div>

              {/* Recognitions */}
              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>☁️</span> Recognition
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.7 }}>
                  Google Cloud Innovator · Google Developer Program · Google I/O 2026 Participant ·
                  ISRO IIRS Certified · Top 10 Ideathon Finalist
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
