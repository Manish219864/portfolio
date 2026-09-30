// =============================================
// App.tsx — Root application shell
// =============================================
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import LoadingScreen from './components/LoadingScreen';
import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

// ---- GitHub Contribution section ----
function GithubContribution() {
  return (
    <section id="github" style={{ padding: '4rem 0' }}>
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="glass-card"
          style={{ padding: '2rem', textAlign: 'center' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '1.5rem' }}>📊</span>
            <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: 'white' }}>
              GitHub Contribution Graph
            </h3>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
            Open-source activity &amp; contributions for{' '}
            <a
              href="https://github.com/Manish219864"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#22d3ee', textDecoration: 'none', fontWeight: 600 }}
              onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
            >
              @Manish219864
            </a>
          </p>

          <div style={{ overflowX: 'auto', padding: '0.5rem 0', display: 'flex', justifyContent: 'center' }}>
            <img
              src="https://ghchart.rshah.org/6366f1/Manish219864"
              alt="Manish Jha's GitHub Contribution Heatmap"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '6px' }}
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---- Noise overlay ----
function NoiseOverlay() {
  return <div className="noise-overlay" aria-hidden="true" />;
}

// ---- Main App ----
export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.style.backgroundColor = theme === 'dark' ? '#050816' : '#f8fafc';
    document.documentElement.style.color = theme === 'dark' ? '#ffffff' : '#0f172a';

    if (theme === 'light') {
      document.documentElement.style.setProperty('--bg-primary', '#f8fafc');
      document.documentElement.style.setProperty('--card-bg', 'rgba(0,0,0,0.03)');
      document.documentElement.style.setProperty('--card-border', 'rgba(0,0,0,0.08)');
      document.documentElement.style.setProperty('--text-primary', '#0f172a');
      document.documentElement.style.setProperty('--text-secondary', '#475569');
    } else {
      document.documentElement.style.setProperty('--bg-primary', '#050816');
      document.documentElement.style.setProperty('--card-bg', 'rgba(255,255,255,0.04)');
      document.documentElement.style.setProperty('--card-border', 'rgba(255,255,255,0.08)');
      document.documentElement.style.setProperty('--text-primary', '#ffffff');
      document.documentElement.style.setProperty('--text-secondary', '#94a3b8');
    }
  }, [theme]);

  return (
    <>
      <NoiseOverlay />
      <LoadingScreen isLoading={loading} />

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Cursor />
          <ScrollProgress />
          <Navbar theme={theme} toggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />

          <main>
            <Hero />
            <Stats />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Achievements />
            <GithubContribution />
            <ResumeSection />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  );
}
