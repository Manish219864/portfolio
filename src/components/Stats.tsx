// =============================================
// Stats.tsx — Animated counters section
// =============================================
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: 8.95, suffix: '', label: 'CGPA', decimals: 2, icon: '🎓' },
  { value: 4, suffix: '+', label: 'Projects Built', decimals: 0, icon: '🚀' },
  { value: 5, suffix: '+', label: 'Recognitions', decimals: 0, icon: '🏆' },
  { value: 2, suffix: '+', label: 'Years Building AI', decimals: 0, icon: '🤖' },
];

/** Simple numeric count-up animation using requestAnimationFrame */
function AnimatedNumber({
  end,
  decimals,
  suffix,
  duration = 1800,
  active,
}: {
  end: number;
  decimals: number;
  suffix: string;
  duration?: number;
  active: boolean;
}) {
  const [display, setDisplay] = useState('0' + suffix);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;
      setDisplay(current.toFixed(decimals) + suffix);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, end, decimals, suffix, duration]);

  return <span>{display}</span>;
}

export default function Stats() {
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <section ref={ref} style={{ padding: '4rem 0' }}>
      <div className="section-wrapper">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
              className="stat-card"
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                <AnimatedNumber
                  end={stat.value}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                  active={inView}
                />
              </div>
              <div style={{ color: '#94a3b8', fontSize: '0.82rem', marginTop: '0.25rem', fontWeight: 500 }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
