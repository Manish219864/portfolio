// =============================================
// Achievements.tsx — Achievement & Certifications cards
// =============================================
import { motion } from 'framer-motion';
import { achievements, certifications } from '../data';

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: '6rem 0', background: 'rgba(255,255,255,0.015)' }}>
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
            08. Achievements &amp; Certs
          </span>
          <h2 className="section-title">
            Recognition &amp; <span className="gradient-text">certifications</span>
          </h2>
        </motion.div>

        {/* Achievements Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.25rem',
          marginBottom: '3rem',
        }}>
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: 'easeOut' }}
              className="glass-card"
              whileHover={{ y: -5 }}
              style={{ padding: '1.5rem', cursor: 'default' }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: `${ach.color}18`, border: `1px solid ${ach.color}33`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.3rem', marginBottom: '1rem',
              }}>
                {ach.icon}
              </div>

              <span style={{
                display: 'inline-block', padding: '0.2rem 0.6rem',
                background: `${ach.color}15`, border: `1px solid ${ach.color}30`,
                borderRadius: 6, fontSize: '0.68rem', color: ach.color,
                fontWeight: 600, marginBottom: '0.75rem',
                fontFamily: 'JetBrains Mono, monospace',
                textTransform: 'uppercase', letterSpacing: '0.05em',
              }}>
                {ach.tag}
              </span>

              <h3 style={{ fontWeight: 700, fontSize: '0.92rem', color: 'white', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                {ach.title}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.7 }}>
                {ach.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
        >
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.25rem', color: 'white' }}>
            Certifications &amp; Credentials
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: 650 }}>
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: 'easeOut' }}
                className="glass-card"
                style={{
                  padding: '1rem 1.5rem', display: 'flex', alignItems: 'center',
                  gap: '1rem', borderLeft: `3px solid ${cert.color}`,
                }}
              >
                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{cert.icon}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'white', wordBreak: 'break-word', lineHeight: 1.4 }}>
                    {cert.name}
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                    <span>{cert.issuer}</span>
                    {'type' in cert && cert.type && (
                      <>
                        <span style={{ color: '#475569' }}>·</span>
                        <span style={{ color: '#a5b4fc', fontSize: '0.75rem' }}>{cert.type as string}</span>
                      </>
                    )}
                  </div>
                </div>
                {cert.year ? (
                  <span className="cyan-badge" style={{ flexShrink: 0, whiteSpace: 'nowrap' }}>
                    {cert.year}
                  </span>
                ) : null}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
