import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Gauge, ScanText, Sparkles, Wand2 } from 'lucide-react';

export function LiveDemo() {
  const goToPromptPlatform = () => {
    window.history.pushState({}, '', '/prompt-platform');
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <section
      id="live-demo"
      style={{
        background: 'linear-gradient(135deg, #E87722 0%, #F5A53A 100%)',
        padding: '110px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '42px 42px',
          maskImage: 'linear-gradient(to bottom, black, transparent 86%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 86%)',
          pointerEvents: 'none',
        }}
      />
      <div
        className="live-demo-layout"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1160px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 0.9fr) minmax(420px, 1.1fr)',
          gap: '44px',
          alignItems: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#FEF3E8',
            border: '1px solid rgba(255,255,255,0.42)',
            borderRadius: '999px',
            padding: '7px 12px',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '12px',
            fontWeight: 700,
            color: '#E87722',
            marginBottom: '18px',
          }}>
            <Wand2 size={14} /> Free live prompt tester
          </span>

          <h2 style={{
            fontFamily: 'Sora, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(30px, 4.4vw, 48px)',
            lineHeight: 1.12,
            color: '#FFFFFF',
            margin: '0 0 16px 0',
          }}>
            Test TokenMetr here - free, no install needed.
          </h2>

          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '18px',
            color: 'rgba(255,255,255,0.88)',
            lineHeight: 1.7,
            margin: '0 0 26px 0',
          }}>
            Paste a prompt, preview the likely savings, then open the full workspace for the side-by-side optimization.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
            {[
              { icon: Gauge, label: 'Token and cost estimate' },
              { icon: Sparkles, label: 'Optimized prompt output' },
            ].map(item => (
              <span
                key={item.label}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255,255,255,0.14)',
                  border: '1px solid rgba(255,255,255,0.28)',
                  borderRadius: '999px',
                  padding: '9px 12px',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  color: '#FFFFFF',
                }}
              >
                <item.icon size={15} style={{ color: '#FFFFFF' }} />
                {item.label}
              </span>
            ))}
          </div>

          <button
            onClick={goToPromptPlatform}
            style={{
              background: '#FFFFFF',
              color: '#E87722',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '15px',
              borderRadius: '10px',
              padding: '13px 22px',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
              boxShadow: '0 12px 28px rgba(0,0,0,0.16)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.22)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.16)';
            }}
          >
            Test Free Now <ArrowRight size={16} />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            background: '#FFFFFF',
            borderRadius: '18px',
            padding: '18px',
            boxShadow: '0 28px 72px rgba(0,0,0,0.20)',
            border: '1px solid rgba(255,255,255,0.42)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F5A53A' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22C55E' }} />
            <span style={{ marginLeft: '8px', fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#6B7280' }}>
              Free tester preview
            </span>
          </div>

          <div style={{ border: '1px solid #E5E3DF', borderRadius: '14px', overflow: 'hidden', background: '#F9FAFB' }}>
            <div style={{ padding: '14px 16px', borderBottom: '1px solid #E5E3DF', display: 'flex', justifyContent: 'space-between', gap: '12px', alignItems: 'center' }}>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 800, color: '#374151', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <ScanText size={15} style={{ color: '#E87722' }} /> Paste a prompt
              </span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#E87722', fontWeight: 800 }}>
                gpt-4o
              </span>
            </div>
            <div style={{ padding: '16px' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', lineHeight: 1.7, color: '#374151', margin: '0 0 18px 0' }}>
                Write a detailed onboarding email improvement plan for a B2B SaaS product, including activation, retention, customer objections, follow-up timing, and examples...
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['ChatGPT', 'Claude', 'Gemini', 'Perplexity'].map(item => (
                  <span key={item} style={{ background: item === 'ChatGPT' ? '#FEF3E8' : '#FFFFFF', border: '1px solid #E5E3DF', borderRadius: '999px', padding: '6px 10px', fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, color: item === 'ChatGPT' ? '#E87722' : '#6B7280' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: '14px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {['812 input tokens', '-42% estimated', '$0.012 saved'].map(item => (
              <div
                key={item}
                style={{
                  background: '#FFF7EE',
                  borderRadius: '10px',
                  padding: '10px',
                  textAlign: 'center',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#E87722',
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <div style={{ marginTop: '14px', background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '12px', padding: '13px 14px', display: 'flex', justifyContent: 'space-between', gap: '14px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, color: '#166534' }}>
              Full comparison opens on the dedicated workspace
            </span>
            <ArrowRight size={16} style={{ color: '#16A34A', flexShrink: 0 }} />
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 920px) {
          .live-demo-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
