// =============================================
// ResumeSection.tsx — Resume preview + download
// =============================================
import { motion } from 'framer-motion';
import { HiDownload, HiEye } from 'react-icons/hi';
import { personalInfo } from '../data';

export default function ResumeSection() {
  return (
    <section id="resume" style={{ padding: '6rem 0' }}>
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ marginBottom: '3rem' }}
        >
          <span className="mono-badge" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
            09. Resume
          </span>
          <h2 className="section-title">
            My <span className="gradient-text">Resume</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          className="glass-card"
          style={{ padding: '3rem', textAlign: 'center', maxWidth: 600 }}
        >
          {/* Resume icon */}
          <div style={{
            width: 80, height: 80, borderRadius: 20,
            background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.5rem', fontSize: '2rem',
          }}>
            📄
          </div>

          <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem' }}>Manish Jha — Resume</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            B.Tech CSE (AI &amp; ML) · AI Engineer · ML Developer
          </p>
          <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '2rem' }}>
            Updated 2026 · PDF Format
          </p>

          {/* Highlights */}
          <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: '1.25rem', marginBottom: '2rem', textAlign: 'left' }}>
            {[
              'CGPA: 8.95 at D Y Patil University',
              'LangChain · RAG · FAISS · LLM Systems',
              'Django · FastAPI · PostgreSQL · REST APIs',
              'Google Cloud Innovator · ISRO IIRS Certified',
              'Top 10 University Ideathon Finalist',
            ].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.82rem', padding: '0.3rem 0' }}>
                <span style={{ color: '#22d3ee', fontSize: '0.6rem' }}>◆</span>
                {item}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={personalInfo.resumeFile} download className="btn-primary" id="resume-download-btn">
              <HiDownload size={18} />
              <span>Download Resume</span>
            </a>
            <a href={personalInfo.resumeFile} target="_blank" rel="noopener noreferrer" className="btn-secondary" id="resume-view-btn">
              <HiEye size={18} />
              <span>View Resume</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
