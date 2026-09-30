// =============================================
// Hero.tsx — Full-screen hero section
// =============================================
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  HiDownload,
  HiArrowRight,
  HiMail,
} from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: 'easeOut' as const },
  }),
};

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.querySelector('#projects');
    if (el) {
      const navOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      const navOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '7rem',
        paddingBottom: '4rem',
        boxSizing: 'border-box',
      }}
    >
      {/* Gradient blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      <div className="section-wrapper" style={{ position: 'relative', zIndex: 1, width: '100%', margin: 'auto 0' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'center',
          }}
          className="lg:!grid-cols-[minmax(0,1fr)_auto]"
        >
          {/* Left Column: Hero Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              minWidth: 0,
            }}
          >
            {/* Status badge */}
            <motion.div
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate="visible"
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 1rem',
                  background: 'rgba(99,102,241,0.1)',
                  border: '1px solid rgba(99,102,241,0.25)',
                  borderRadius: '100px',
                  fontSize: '0.8rem',
                  color: '#a5b4fc',
                  fontWeight: 500,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: '#22d3ee',
                    boxShadow: '0 0 8px #22d3ee',
                    display: 'inline-block',
                    animation: 'pulse 2s infinite',
                  }}
                />
                Open to AI Engineer &amp; ML Engineer roles
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              custom={0.1}
              initial="hidden"
              animate="visible"
              style={{
                fontSize: 'clamp(2.8rem, 7vw, 5rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                color: 'white',
              }}
            >
              Hi, I'm{' '}
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div
              variants={fadeUp}
              custom={0.2}
              initial="hidden"
              animate="visible"
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                fontWeight: 600,
                color: '#94a3b8',
                minHeight: '2.2rem',
              }}
            >
              <TypeAnimation
                sequence={[
                  'Machine Learning Developer',
                  2000,
                  'AI Engineer',
                  2000,
                  'LLM & RAG Systems Builder',
                  2000,
                  'Python Backend Engineer',
                  2000,
                  'Full-Stack Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{ color: '#6366f1' }}
              />
            </motion.div>

            {/* About blurb */}
            <motion.p
              variants={fadeUp}
              custom={0.3}
              initial="hidden"
              animate="visible"
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: '#94a3b8',
                maxWidth: '620px',
              }}
            >
              B.Tech CSE (AI &amp; ML) graduate from D Y Patil University with a <strong style={{ color: 'white' }}>CGPA of 8.95</strong>. 
              I build production-ready AI systems — from LLM-powered RAG pipelines and intelligent ML models 
              to full-stack web applications. Currently building&nbsp;
              <span style={{ color: '#22d3ee', fontWeight: 600 }}>CredIntel</span>, an AI Credit Risk Decision Engine.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              custom={0.4}
              initial="hidden"
              animate="visible"
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}
            >
              <a
                href={personalInfo.resumeFile}
                download
                className="btn-primary"
                id="hero-download-resume-btn"
              >
                <HiDownload size={18} />
                <span>Download Resume</span>
              </a>

              <button
                onClick={scrollToProjects}
                className="btn-secondary"
                id="hero-view-projects-btn"
              >
                <span>View Projects</span>
                <HiArrowRight size={16} />
              </button>

              <button
                onClick={scrollToContact}
                className="btn-secondary"
                id="hero-contact-btn"
              >
                <HiMail size={16} />
                <span>Contact Me</span>
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeUp}
              custom={0.5}
              initial="hidden"
              animate="visible"
              style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem', flexWrap: 'wrap' }}
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github-link"
                style={{
                  color: '#94a3b8',
                  transition: 'color 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}
              >
                <FaGithub size={18} />
                GitHub
              </a>
              <span style={{ color: '#334155' }}>·</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin-link"
                style={{
                  color: '#94a3b8',
                  transition: 'color 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>
              <span style={{ color: '#334155' }}>·</span>
              <a
                href={`mailto:${personalInfo.email}`}
                id="hero-email-link"
                style={{
                  color: '#94a3b8',
                  transition: 'color 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}
              >
                <HiMail size={18} />
                {personalInfo.email}
              </a>
            </motion.div>
          </div>

          {/* Right Column: Statistics cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
            }}
            className="flex-row flex-wrap lg:flex-col lg:min-w-[190px]"
          >
            {[
              { label: 'CGPA', value: '8.95', sub: 'D Y Patil University' },
              { label: 'Projects', value: '4+', sub: 'AI & Full-Stack' },
              { label: 'Recognition', value: '5+', sub: 'Awards & Programs' },
            ].map(stat => (
              <motion.div
                key={stat.label}
                className="glass-card"
                whileHover={{ scale: 1.04 }}
                style={{
                  padding: '1rem 1.5rem',
                  minWidth: 150,
                  textAlign: 'center',
                  flex: '1 1 140px',
                }}
              >
                <div
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ color: 'white', fontWeight: 600, fontSize: '0.85rem' }}>{stat.label}</div>
                <div style={{ color: '#64748b', fontSize: '0.72rem', marginTop: 2 }}>{stat.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span style={{ color: '#475569', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{
            width: 1,
            height: 32,
            background: 'linear-gradient(to bottom, #6366f1, transparent)',
            borderRadius: 1,
          }}
        />
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
