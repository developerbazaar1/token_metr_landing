import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CALENDLY_URL, CHROME_WEBSTORE_URL } from '../links';


export function Hero() {
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
        {/* Eyebrow badges */}
        <motion.div variants={fadeUp}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '28px',
            }}
          >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: '#FEF3E8', border: '1px solid #F5A53A',
            borderRadius: '999px', padding: '6px 14px',
            fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 500,
            color: '#E87722', letterSpacing: '0.01em',
          }}>
            <span style={{ width: '6px', height: '6px', background: '#E87722', borderRadius: '50%', display: 'inline-block' }} />
            Chrome Extension - Free to install
          </span>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: '#F0FDF4', border: '1px solid #86EFAC',
            borderRadius: '999px', padding: '6px 14px',
            fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600,
            color: '#15803D', letterSpacing: '0.01em',
          }}>
            <span style={{ width: '6px', height: '6px', background: '#22C55E', borderRadius: '50%', display: 'inline-block' }} />
            98% optimization accuracy
          </span>
          </div>
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
          TokenMetr measures your prompt cost before you send, then suggests a cleaner version with
          <strong style={{ color: '#2D2D2D', fontWeight: 600 }}> up to 98% token-optimization accuracy.</strong>
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
              minWidth: '220px',
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
            Add to Chrome - Free
          </button>
          <button
            type="button"
            onClick={() => window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')}
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

        {/* Demo Video */}
        <motion.div
          variants={fadeUp}
          style={{
            width: '100%',
            maxWidth: '940px',
            background: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 24px 64px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.04)',
            overflow: 'hidden',
            border: '1px solid #E5E3DF',
          }}
        >
          <video
            src="/Hero-Section.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{
              display: 'block',
              width: '100%',
              aspectRatio: '940 / 451',
              objectFit: 'cover',
              background: '#FFFFFF',
            }}
          />
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
            '65% lower cost',
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
