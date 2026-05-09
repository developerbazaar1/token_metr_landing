import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Start typing your prompt',
    desc: 'TokenMetr activates instantly inside ChatGPT, Claude, Gemini, or Perplexity — no extra clicks.',
    visual: (
      <div style={{ marginTop: '20px', position: 'relative' }}>
        <div style={{
          background: '#F4F4F2', borderRadius: '8px',
          padding: '12px 14px', border: '1px solid #E5E3DF',
          fontFamily: 'DM Sans, sans-serif', fontSize: '13px',
          color: '#2D2D2D', lineHeight: 1.5, minHeight: '72px',
        }}>
          Hi there! I just wanted to ask you something about...
          <div style={{
            position: 'absolute', bottom: '-1px', right: '-1px',
            background: '#FEF3E8', border: '1px solid #E87722',
            borderRadius: '0 0 8px 0',
            padding: '3px 8px',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px', color: '#E87722', fontWeight: 500,
          }}>
            847 tokens · $0.017
          </div>
        </div>
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{
            position: 'absolute', top: '-8px', right: '-8px',
            width: '12px', height: '12px',
            background: '#E87722', borderRadius: '50%',
            boxShadow: '0 0 0 3px rgba(232,119,34,0.25)',
          }}
        />
      </div>
    ),
  },
  {
    num: '02',
    title: 'See the optimized version instantly',
    desc: 'TokenMetr rewrites your prompt — preserving meaning, cutting waste. Side-by-side, before you send.',
    visual: (
      <div style={{ marginTop: '20px', display: 'flex', gap: '8px', alignItems: 'stretch' }}>
        <div style={{
          flex: 1, background: '#FEF2F2', border: '1px solid #FECACA',
          borderRadius: '8px', padding: '10px', fontSize: '11px',
          fontFamily: 'DM Sans, sans-serif', color: '#2D2D2D', lineHeight: 1.5,
        }}>
          Hi there! I just wanted to ask you something...
          <div style={{ marginTop: '6px', fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#EF4444' }}>847 tokens</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ArrowRight size={16} style={{ color: '#E87722' }} />
        </div>
        <div style={{
          flex: 1, background: '#F0FDF4', border: '1px solid #86EFAC',
          borderRadius: '8px', padding: '10px', fontSize: '11px',
          fontFamily: 'DM Sans, sans-serif', color: '#2D2D2D', lineHeight: 1.5,
          position: 'relative',
        }}>
          Explain X to a non-technical beginner.
          <div style={{ marginTop: '6px', fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#16A34A' }}>312 tokens</div>
          <span style={{
            position: 'absolute', top: '-10px', right: '8px',
            background: '#DCFCE7', border: '1px solid #22C55E',
            borderRadius: '999px', padding: '2px 8px',
            fontFamily: 'DM Sans, sans-serif', fontSize: '10px',
            color: '#16A34A', fontWeight: 600,
          }}>
            -63% tokens
          </span>
        </div>
      </div>
    ),
  },
  {
    num: '03',
    title: 'Send smarter. Save real money.',
    desc: 'Every optimized prompt saves real dollars. Watch your team savings compound over time.',
    visual: (
      <div style={{ marginTop: '20px' }}>
        <div style={{
          background: '#1A1A1A', borderRadius: '10px',
          padding: '16px 20px',
        }}>
          <div style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '11px',
            color: '#6B7280', marginBottom: '6px', textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}>
            This month
          </div>
          <div style={{
            fontFamily: 'Sora, sans-serif', fontWeight: 700,
            fontSize: '28px', color: '#22C55E', lineHeight: 1,
          }}>
            $247
          </div>
          <div style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '12px',
            color: '#9CA3AF', marginTop: '4px',
          }}>
            saved across 3 team members
          </div>
        </div>
      </div>
    ),
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{ background: '#F4F4F2', padding: '120px 40px' }}
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
            How It Works
          </span>
          <h2 style={{
            fontFamily: 'Sora, sans-serif', fontWeight: 600,
            fontSize: 'clamp(28px, 4.5vw, 42px)', lineHeight: 1.15,
            color: '#1A1A1A', margin: 0,
          }}>
            From bloated to brilliant — before you send.
          </h2>
        </motion.div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          position: 'relative',
        }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E3DF',
                borderRadius: '12px',
                padding: '32px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Step number decorative */}
              <div style={{
                fontFamily: 'Sora, sans-serif', fontWeight: 700,
                fontSize: '56px', lineHeight: 1,
                color: '#F5A53A', opacity: 0.25,
                position: 'absolute', top: '16px', right: '20px',
                userSelect: 'none',
              }}>
                {step.num}
              </div>

              {/* Orange connector dot */}
              <div style={{
                width: '32px', height: '32px',
                background: 'linear-gradient(135deg, #E87722, #F5A53A)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '16px',
                boxShadow: '0 4px 12px rgba(232,119,34,0.3)',
              }}>
                <span style={{ color: 'white', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '13px' }}>
                  {i + 1}
                </span>
              </div>

              <h3 style={{
                fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '19px',
                color: '#1A1A1A', margin: '0 0 10px 0', lineHeight: 1.3,
              }}>
                {step.title}
              </h3>
              <p style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '15px',
                color: '#6B7280', lineHeight: 1.65, margin: 0,
              }}>
                {step.desc}
              </p>

              {step.visual}
            </motion.div>
          ))}
        </div>

        {/* Dotted connector line - desktop only */}
        <div className="hidden lg:block" style={{
          position: 'absolute', top: '50%',
          left: '33.33%', right: '33.33%',
          height: '2px',
          background: 'repeating-linear-gradient(to right, #E87722 0, #E87722 8px, transparent 8px, transparent 16px)',
          pointerEvents: 'none',
          opacity: 0.4,
        }} />
      </div>
    </section>
  );
}
