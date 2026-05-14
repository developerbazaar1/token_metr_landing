import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowRightCircle } from 'lucide-react';
import { CHROME_WEBSTORE_URL } from '../links';

const bloatedPrompt = `Hi there! I just wanted to reach out and ask you a question about something I was wondering about and wasn't sure of. Could you please help me understand how I might go about explaining the concept of machine learning to someone who has absolutely no background in technology or computers whatsoever?`;

const optimizedPrompt = `Explain machine learning to a complete non-technical beginner. Use a simple analogy.`;

export function Hero() {
  const goToTeamsFeatures = () => {
    window.dispatchEvent(new CustomEvent('tokenmetr:features-tab', { detail: 'teams' }));
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
  };

  return (
    <section
      id="hero"
      style={{
        background: '#FDFCFA',
        minHeight: '100vh',
        paddingTop: '120px',
        paddingBottom: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(232,119,34,0.075) 1px, transparent 1px), linear-gradient(90deg, rgba(232,119,34,0.075) 1px, transparent 1px)',
          backgroundSize: '46px 46px',
          maskImage: 'linear-gradient(to bottom, black 0%, black 62%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 62%, transparent 100%)',
        }}
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 34, 0], y: [0, -22, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '440px',
          height: '440px',
          top: '-120px',
          right: '10%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,165,58,0.34), rgba(245,165,58,0) 66%)',
          filter: 'blur(18px)',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -28, 0], y: [0, 28, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '340px',
          height: '340px',
          bottom: '10%',
          left: '6%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,119,34,0.16), rgba(232,119,34,0) 68%)',
          filter: 'blur(18px)',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '800px',
          width: '100%',
          padding: '0 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Eyebrow badge */}
        <motion.div variants={fadeUp}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: '#FEF3E8', border: '1px solid #F5A53A',
            borderRadius: '999px', padding: '6px 14px',
            fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 500,
            color: '#E87722', letterSpacing: '0.01em',
            marginBottom: '28px',
          }}>
            <span style={{ width: '6px', height: '6px', background: '#E87722', borderRadius: '50%', display: 'inline-block' }} />
            Chrome Extension · Free to install
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={fadeUp}
          style={{
            fontFamily: 'Sora, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(40px, 7vw, 72px)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#1A1A1A',
            margin: '0 0 20px 0',
          }}
        >
          You're paying{' '}
          <span style={{ color: '#E87722' }}>3×</span>
          <br />
          more for AI than you should.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            lineHeight: 1.6,
            color: '#6B7280',
            maxWidth: '560px',
            margin: '0 0 36px 0',
          }}
        >
          TokenMetr shows your token count and an optimized prompt —{' '}
          <strong style={{ color: '#2D2D2D', fontWeight: 500 }}>before you hit send.</strong>
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginBottom: '56px' }}
        >
          <button
            onClick={() => window.open(CHROME_WEBSTORE_URL, '_blank', 'noopener,noreferrer')}
            style={{
              background: 'linear-gradient(135deg, #E87722, #F5A53A)',
              color: 'white',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              borderRadius: '10px',
              padding: '14px 28px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 16px rgba(232, 119, 34, 0.25)',
              width: 'clamp(220px, 50vw, auto)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(232,119,34,0.4)';
              e.currentTarget.style.transform = 'scale(1.02) translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(232,119,34,0.25)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            Add to Chrome — Free
          </button>
          <button
            type="button"
            onClick={goToTeamsFeatures}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '16px',
              color: '#E87722', display: 'flex', alignItems: 'center', gap: '6px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.gap = '10px'; e.currentTarget.style.textDecoration = 'underline'; }}
            onMouseLeave={e => { e.currentTarget.style.gap = '6px'; e.currentTarget.style.textDecoration = 'none'; }}
          >
            See how it works for teams <ArrowRight size={16} />
          </button>
        </motion.div>

        {/* Demo Card */}
        <motion.div
          variants={fadeUp}
          style={{
            width: '100%',
            maxWidth: '860px',
            background: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 24px 64px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.04)',
            overflow: 'hidden',
            border: '1px solid #E5E3DF',
          }}
        >
          {/* Card header */}
          <div style={{
            background: '#F4F4F2',
            padding: '12px 20px',
            borderBottom: '1px solid #E5E3DF',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F5A53A' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22C55E' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#6B7280', marginLeft: '8px' }}>
              ChatGPT — TokenMetr Active
            </span>
            <span style={{
              marginLeft: 'auto', background: '#FEF3E8', border: '1px solid #F5A53A',
              borderRadius: '999px', padding: '2px 10px',
              fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#E87722', fontWeight: 600,
            }}>
              ● LIVE
            </span>
          </div>

          {/* Panels */}
          <div
            className="flex flex-col md:flex-row"
            style={{ minHeight: '240px' }}
          >
            {/* Left Panel */}
            <div style={{
              flex: 1, padding: '24px',
              borderRight: '1px solid #E5E3DF',
              position: 'relative',
            }}>
              <span style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600,
                color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.08em',
                display: 'block', marginBottom: '12px',
              }}>
                Your prompt
              </span>
              <div style={{
                background: '#F4F4F2',
                borderRadius: '8px',
                padding: '14px 16px',
                minHeight: '130px',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                lineHeight: 1.65,
                color: '#2D2D2D',
                position: 'relative',
              }}>
                {bloatedPrompt}
                <div style={{
                  position: 'absolute', bottom: '-1px', right: '-1px',
                  background: '#FEE2E2', border: '1px solid #EF4444',
                  borderRadius: '0 0 8px 0',
                  padding: '4px 10px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  color: '#EF4444',
                  fontWeight: 500,
                }}>
                  847 tokens · $0.017
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '16px',
              minWidth: '60px',
            }}>
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              >
                <ArrowRightCircle
                  size={32}
                  style={{ color: '#E87722', flexShrink: 0 }}
                />
              </motion.div>
            </div>

            {/* Right Panel */}
            <div style={{
              flex: 1, padding: '24px',
              position: 'relative',
            }}>
              <span style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600,
                color: '#22C55E', textTransform: 'uppercase', letterSpacing: '0.08em',
                display: 'block', marginBottom: '12px',
              }}>
                ✓ Optimized by TokenMetr
              </span>
              <div style={{
                background: '#F0FDF4',
                border: '1px solid #86EFAC',
                borderRadius: '8px',
                padding: '14px 16px',
                minHeight: '130px',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                lineHeight: 1.65,
                color: '#2D2D2D',
                position: 'relative',
              }}>
                {optimizedPrompt}
                <div style={{
                  position: 'absolute', bottom: '-1px', right: '-1px',
                  background: '#DCFCE7', border: '1px solid #22C55E',
                  borderRadius: '0 0 8px 0',
                  padding: '4px 10px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  color: '#16A34A',
                  fontWeight: 500,
                }}>
                  312 tokens · $0.006
                </div>
              </div>
              <div style={{
                position: 'absolute', bottom: '28px', right: '24px',
                opacity: 0.25,
                fontFamily: 'Sora, sans-serif',
                fontSize: '10px',
                fontWeight: 700,
                color: '#E87722',
              }}>
                ⊙ TokenMetr
              </div>
            </div>
          </div>
        </motion.div>

        {/* Micro stats */}
        <motion.div
          variants={fadeUp}
          style={{
            display: 'flex', flexWrap: 'wrap', gap: '8px 4px',
            justifyContent: 'center', marginTop: '24px',
          }}
        >
          {[
            '63% fewer tokens',
            '64% lower cost',
            'Works in ChatGPT, Claude, Gemini, Perplexity',
          ].map((stat, i) => (
            <span key={stat} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {i > 0 && <span style={{ color: '#E5E3DF', margin: '0 4px' }}>·</span>}
              <span style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#6B7280',
              }}>
                {stat}
              </span>
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
