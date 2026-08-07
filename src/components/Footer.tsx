// =============================================
// Footer.tsx — Minimal footer
// =============================================
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail, HiArrowUp } from 'react-icons/hi';
import { personalInfo, navLinks } from '../data';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)', padding: '3rem 0 2rem' }}>
      <div className="section-wrapper">
        {/* Top row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', marginBottom: '2.5rem' }}
        >
          {/* Brand */}
          <div>
            <div style={{
              fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.03em',
              background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text', marginBottom: '0.5rem',
            }}>
              Manish Jha
            </div>
            <p style={{ color: '#64748b', fontSize: '0.82rem', maxWidth: 260, lineHeight: 1.7 }}>
              AI Engineer · ML Developer · Python Backend<br />
              Building intelligent systems that matter.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div style={{ color: '#94a3b8', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '0.75rem' }}>
              Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {navLinks.slice(0, 5).map(link => (
                <a key={link.href} href={link.href}
                  style={{ color: '#64748b', fontSize: '0.82rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ color: '#94a3b8', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '0.75rem' }}>
              Connect
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { href: `mailto:${personalInfo.email}`, icon: <HiMail size={14} />, label: personalInfo.email, id: 'footer-email-link' },
                { href: personalInfo.github, icon: <FaGithub size={14} />, label: 'GitHub', id: 'footer-github-link' },
                { href: personalInfo.linkedin, icon: <FaLinkedin size={14} />, label: 'LinkedIn', id: 'footer-linkedin-link' },
              ].map(item => (
                <a key={item.id} href={item.href} id={item.id}
                  target={item.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.82rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}>
                  {item.icon}{item.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: '1.5rem' }} />

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: '#475569', fontSize: '0.78rem' }}>
            © {new Date().getFullYear()} Manish Jha. Built with React + TypeScript + Tailwind CSS.
          </p>

          {/* Back to top */}
          <motion.button id="back-to-top-btn" onClick={scrollTop}
            whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.5rem 1rem',
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 10, color: '#94a3b8', cursor: 'pointer', fontSize: '0.78rem',
              fontFamily: 'Inter, sans-serif', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#6366f1'; e.currentTarget.style.color = 'white'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#94a3b8'; }}>
            <HiArrowUp size={14} />Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
