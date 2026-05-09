import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface StatCard {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatCard[] = [
  { value: 63, suffix: '%', label: 'average token reduction' },
  { value: 64, suffix: '%', label: 'lower cost per prompt' },
  { value: 4, suffix: '', label: 'AI platforms supported' },
  { value: 38, suffix: '+', label: 'teams in beta' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} style={{
      fontFamily: 'Sora, sans-serif', fontWeight: 700,
      fontSize: 'clamp(52px, 8vw, 72px)', lineHeight: 1,
      color: '#E87722',
    }}>
      {count}{suffix}
    </div>
  );
}

export function Metrics() {
  return (
    <section
      id="results"
      style={{ background: '#1A1A1A', padding: '120px 40px' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '12px',
            color: '#E87722', textTransform: 'uppercase', letterSpacing: '0.1em',
            fontWeight: 600, display: 'block', marginBottom: '16px',
          }}>
            Results
          </span>
          <h2 style={{
            fontFamily: 'Sora, sans-serif', fontWeight: 700,
            fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.15,
            color: '#FFFFFF', margin: 0,
          }}>
            The numbers don't lie.
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          marginBottom: '56px',
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                background: '#2D2D2D',
                borderRadius: '12px',
                padding: '36px 32px',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'none')}
            >
              <CountUp target={stat.value} suffix={stat.suffix} />
              <div style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '14px',
                color: '#9CA3AF', marginTop: '10px', lineHeight: 1.4,
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            borderLeft: '4px solid #E87722',
            paddingLeft: '24px',
          }}
        >
          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '18px',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.6, margin: 0,
          }}>
            "First enterprise deployment: 80 seats — before public launch."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
