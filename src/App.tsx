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

// ---- Placeholder sections ----
function GithubPlaceholder() {
  return (
    <section style={{ padding: '4rem 0' }}>
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="glass-card"
          style={{ padding: '2rem', textAlign: 'center', borderStyle: 'dashed', borderColor: 'rgba(99,102,241,0.2)', opacity: 0.65 }}
        >
          <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📊</div>
          <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'white', marginBottom: '0.5rem' }}>
            GitHub Contribution Graph — Placeholder
          </h3>
          <p style={{ color: '#64748b', fontSize: '0.82rem' }}>
            Add your GitHub username to embed a contribution heatmap via{' '}
            <code style={{ color: '#6366f1', fontFamily: 'JetBrains Mono' }}>github-readme-stats</code> or a similar API.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function BlogPlaceholder() {
  return (
    <section style={{ padding: '4rem 0' }}>
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="glass-card"
          style={{ padding: '2rem', textAlign: 'center', borderStyle: 'dashed', borderColor: 'rgba(99,102,241,0.2)', opacity: 0.65 }}
        >
          <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>✍️</div>
          <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'white', marginBottom: '0.5rem' }}>
            Blog / Articles — Placeholder
          </h3>
          <p style={{ color: '#64748b', fontSize: '0.82rem' }}>
            Start writing on Hashnode, Dev.to, or Medium and embed your posts here.
          </p>
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
            <GithubPlaceholder />
            <ResumeSection />
            <BlogPlaceholder />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  );
}
