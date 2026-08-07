// =============================================
// Projects.tsx — Premium project cards
// =============================================
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiSearch } from 'react-icons/hi';
import { projects } from '../data';

const categories = ['All', 'AI/ML', 'Full-Stack'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = projects.filter(p => {
    const matchCat = filter === 'All' || p.category === filter;
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.tech.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <section id="projects" style={{ padding: '6rem 0' }}>
      <div className="section-wrapper">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ marginBottom: '3rem' }}
        >
          <span className="mono-badge" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
            04. Projects
          </span>
          <h2 className="section-title">
            Things I've <span className="gradient-text">built</span>
          </h2>
          <p className="section-subtitle" style={{ marginTop: '0.75rem' }}>
            A selection of projects where I applied AI, ML, and full-stack development to solve real problems.
          </p>
        </motion.div>

        {/* Filters + Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
          style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap', alignItems: 'center' }}
        >
          {/* Category Pills */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                id={`project-filter-${cat.toLowerCase()}-btn`}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '0.4rem 1rem', borderRadius: '100px', border: '1px solid',
                  borderColor: filter === cat ? '#6366f1' : 'rgba(255,255,255,0.1)',
                  background: filter === cat ? 'rgba(99,102,241,0.15)' : 'transparent',
                  color: filter === cat ? '#a5b4fc' : '#64748b',
                  cursor: 'pointer', fontSize: '0.82rem', fontWeight: 500,
                  fontFamily: 'Inter, sans-serif', transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div style={{ position: 'relative', flex: 1, minWidth: 200, maxWidth: 320 }}>
            <HiSearch style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b', pointerEvents: 'none' }} />
            <input
              id="project-search-input"
              className="form-input"
              type="text"
              placeholder="Search projects or tech..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ paddingLeft: '2.5rem' }}
            />
          </div>
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: 'easeOut' }}
                className="project-card"
              >
                {/* Top accent */}
                <div style={{ height: 4, background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

                <div style={{ padding: '1.75rem' }}>
                  {/* Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div>
                      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <span className="mono-badge">{project.category}</span>
                        {project.status === 'Live' && (
                          <span style={{
                            padding: '0.2rem 0.6rem', background: 'rgba(34,197,94,0.1)',
                            border: '1px solid rgba(34,197,94,0.25)', borderRadius: '100px',
                            fontSize: '0.68rem', color: '#4ade80', fontWeight: 600,
                            display: 'flex', alignItems: 'center', gap: '0.3rem',
                          }}>
                            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                            Live
                          </span>
                        )}
                      </div>
                      <h3 style={{ fontWeight: 700, fontSize: '1rem', lineHeight: 1.3, color: 'white' }}>
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    {project.description}
                  </p>

                  {/* Problem / Solution / Impact */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.25rem' }}>
                    {[
                      { label: 'Problem', text: project.problem, color: '#f59e0b' },
                      { label: 'Solution', text: project.solution, color: '#6366f1' },
                      { label: 'Impact', text: project.impact, color: '#22d3ee' },
                    ].map(item => (
                      <div key={item.label} style={{
                        padding: '0.6rem 0.875rem', background: 'rgba(255,255,255,0.02)',
                        border: `1px solid ${item.color}22`, borderLeft: `3px solid ${item.color}`, borderRadius: '6px',
                      }}>
                        <span style={{ color: item.color, fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          {item.label}
                        </span>
                        <p style={{ color: '#94a3b8', fontSize: '0.78rem', lineHeight: 1.6, marginTop: '0.2rem' }}>
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {project.tech.map(t => (
                      <span key={t} className="tech-tag" style={{ fontSize: '0.72rem' }}>{t}</span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        id={`project-${project.id}-github-btn`} className="btn-secondary"
                        style={{ flex: 1, justifyContent: 'center', padding: '0.6rem', fontSize: '0.82rem' }}>
                        <FaGithub size={15} /><span>GitHub</span>
                      </a>
                    ) : (
                      <div className="btn-secondary" style={{ flex: 1, justifyContent: 'center', padding: '0.6rem', fontSize: '0.82rem', opacity: 0.4, cursor: 'not-allowed' }}>
                        <FaGithub size={15} /><span>GitHub</span>
                      </div>
                    )}

                    {project.demo ? (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                        id={`project-${project.id}-demo-btn`} className="btn-primary"
                        style={{ flex: 1, justifyContent: 'center', padding: '0.6rem', fontSize: '0.82rem' }}>
                        <FaExternalLinkAlt size={13} /><span>Live Demo</span>
                      </a>
                    ) : (
                      <div className="btn-primary" style={{ flex: 1, justifyContent: 'center', padding: '0.6rem', fontSize: '0.82rem', opacity: 0.35, cursor: 'not-allowed' }}>
                        <FaExternalLinkAlt size={13} /><span>Demo</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', color: '#475569', padding: '3rem', fontSize: '0.9rem' }}>
            No projects match your search. Try a different keyword.
          </div>
        )}
      </div>
    </section>
  );
}
