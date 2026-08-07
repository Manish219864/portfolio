// =============================================
// Education.tsx — Timeline education section
// =============================================
import { motion } from 'framer-motion';
import { education } from '../data';

export default function Education() {
  return (
    <section id="education" style={{ padding: '6rem 0' }}>
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ marginBottom: '3.5rem' }}
        >
          <span className="mono-badge" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
            06. Education
          </span>
          <h2 className="section-title">
            Academic <span className="gradient-text">background</span>
          </h2>
        </motion.div>

        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
            className="glass-card"
            style={{ padding: '2rem', maxWidth: 700 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '1.8rem' }}>🎓</span>
                  <div>
                    <h3 style={{ fontWeight: 800, fontSize: '1.1rem', color: 'white', lineHeight: 1.2 }}>
                      {edu.degree}
                    </h3>
                    <p style={{ color: '#6366f1', fontWeight: 600, fontSize: '0.9rem', marginTop: '0.2rem' }}>
                      {edu.field}
                    </p>
                  </div>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                  📍 {edu.institution}
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'flex-end' }}>
                <span className="mono-badge">{edu.period}</span>
                <span className="cyan-badge" style={{ fontSize: '0.82rem', padding: '0.3rem 0.8rem' }}>
                  CGPA: {edu.cgpa} / 10
                </span>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: '1.5rem' }} />

            {/* Coursework */}
            <div>
              <p style={{ color: '#64748b', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem', fontWeight: 600 }}>
                Relevant Coursework
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {edu.coursework.map(course => (
                  <span key={course} className="tech-tag">{course}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
