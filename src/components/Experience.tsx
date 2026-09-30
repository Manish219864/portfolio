// =============================================
// Experience.tsx — Timeline layout
// =============================================
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { experience } from '../data';

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '6rem 0', background: 'rgba(255,255,255,0.015)' }}>
      <div className="section-wrapper">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ marginBottom: '3.5rem' }}
        >
          <span className="mono-badge" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
            05. Experience &amp; Contributions
          </span>
          <h2 className="section-title">
            What I've <span className="gradient-text">done</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: 700 }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 20, top: 0, bottom: 0, width: 1,
            background: 'linear-gradient(to bottom, rgba(99,102,241,0.5), transparent)',
          }} />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
              style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', paddingLeft: '3rem', position: 'relative' }}
            >
              {/* Dot */}
              <div className="timeline-dot" style={{ position: 'absolute', left: 14, top: 4 }} />

              <div className="glass-card" style={{ padding: '1.5rem', flex: 1 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1rem', color: 'white' }}>{exp.role}</div>
                    <div style={{ color: '#6366f1', fontSize: '0.85rem', fontWeight: 600, marginTop: '0.2rem' }}>{exp.company}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.3rem' }}>
                    <span className="mono-badge">{exp.period}</span>
                    <span className="cyan-badge">{exp.type}</span>
                  </div>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                  {exp.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {exp.highlights.map(h => (
                    <li key={h} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.82rem' }}>
                      <span style={{ color: '#6366f1', fontWeight: 700, fontSize: '0.7rem' }}>▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* PR Link / Badge */}
                {'prText' in exp && exp.prText && (
                  <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {'prUrl' in exp && exp.prUrl ? (
                      <a
                        href={exp.prUrl as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          color: '#22d3ee',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          textDecoration: 'none',
                          padding: '0.3rem 0.75rem',
                          background: 'rgba(34, 211, 238, 0.1)',
                          border: '1px solid rgba(34, 211, 238, 0.25)',
                          borderRadius: 8,
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = '#22d3ee';
                          e.currentTarget.style.background = 'rgba(34, 211, 238, 0.2)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.25)';
                          e.currentTarget.style.background = 'rgba(34, 211, 238, 0.1)';
                        }}
                      >
                        <span>{exp.prText as string}</span>
                        <FaExternalLinkAlt size={10} />
                      </a>
                    ) : (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          color: '#22d3ee',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          padding: '0.3rem 0.75rem',
                          background: 'rgba(34, 211, 238, 0.1)',
                          border: '1px solid rgba(34, 211, 238, 0.25)',
                          borderRadius: 8,
                        }}
                      >
                        {exp.prText as string}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
