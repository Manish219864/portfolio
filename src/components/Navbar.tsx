// =============================================
// Navbar.tsx — Sticky glass navigation
// =============================================
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { navLinks, personalInfo } from '../data';

interface Props {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setMobileOpen(false);
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      const navOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="section-wrapper flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={() => handleNav('#hero')}
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.03 }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '0.9rem',
                color: 'white',
                letterSpacing: '-0.05em',
              }}
            >
              MJ
            </div>
            <span style={{ fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.02em' }}>
              Manish Jha
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6 list-none" style={{ margin: 0, padding: 0 }}>
            {navLinks.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: active === link.href ? '#6366f1' : '#94a3b8',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    fontFamily: 'Inter, sans-serif',
                    transition: 'color 0.2s',
                    padding: '0.25rem 0',
                    borderBottom: active === link.href ? '1px solid #6366f1' : '1px solid transparent',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = active === link.href ? '#6366f1' : '#94a3b8')}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <span style={{ fontSize: '1rem' }}>{theme === 'dark' ? '☀️' : '🌙'}</span>
            </button>

            {/* Resume CTA */}
            <a
              href={personalInfo.resumeFile}
              download
              className="btn-primary hidden md:inline-flex"
              id="navbar-resume-btn"
              style={{ padding: '0.5rem 1.1rem', fontSize: '0.8rem' }}
            >
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-btn"
              className="md:hidden theme-toggle"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <HiMenuAlt3 size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              id="mobile-menu-close-btn"
              className="theme-toggle"
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <HiX size={20} />
            </button>

            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => handleNav(link.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '-0.02em',
                }}
              >
                {link.label}
              </motion.button>
            ))}

            <a
              href={personalInfo.resumeFile}
              download
              className="btn-primary"
              onClick={() => setMobileOpen(false)}
            >
              <span>Download Resume</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
