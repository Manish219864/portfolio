// =============================================
// Skills.tsx — Animated skill cards with bars
// =============================================
import { motion } from 'framer-motion';
import { skillCategories } from '../data';

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: 'easeOut' as const },
  }),
};

function SkillBar({ level, delay = 0 }: { level: number; delay?: number }) {
  return (
    <div className="skill-bar">
      <motion.div
        className="skill-bar-fill"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, ease: 'easeOut', delay }}
      />
    </div>
  );
}

function CategoryCard({
  cat,
  index,
}: {
  cat: (typeof skillCategories)[number];
  index: number;
}) {
  return (
    <motion.div
      variants={cardVariant}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className="glass-card"
      style={{ padding: '1.75rem', height: '100%' }}
      whileHover={{ y: -6 }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <span style={{ fontSize: '1.4rem' }}>{cat.icon}</span>
        <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'white' }}>{cat.category}</h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {cat.skills.map((skill, si) => (
          <div key={skill.name}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.82rem' }}>
              <span style={{ color: '#cbd5e1', fontWeight: 500 }}>{skill.name}</span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#6366f1', fontWeight: 600 }}>
                {skill.level}%
              </span>
            </div>
            <SkillBar level={skill.level} delay={si * 0.08} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem 0', background: 'rgba(255,255,255,0.015)' }}>
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
            02. Skills
          </span>
          <h2 className="section-title">
            Tech I <span className="gradient-text">work with</span>
          </h2>
          <p className="section-subtitle" style={{ marginTop: '0.75rem' }}>
            From production ML systems to scalable backend APIs — here's what I bring to the table.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.category} cat={cat} index={i} />
          ))}
        </div>

        {/* Quick tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
          style={{ marginTop: '3rem', textAlign: 'center' }}
        >
          <p style={{ color: '#64748b', fontSize: '0.82rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Also comfortable with
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
            {[
              'LLM Evaluation', 'Prompt Testing', 'Reasoning Validation',
              'Response Evaluation', 'Data Preprocessing', 'Model Optimization',
              'API Integration', 'Streamlit', 'Authentication',
            ].map(tag => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
