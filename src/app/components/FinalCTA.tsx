import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CALENDLY_URL, CHROME_WEBSTORE_URL } from '../links';

export function FinalCTA() {
  return (
    <section
      style={{
        background: '#1A1A1A',
        padding: '120px 40px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span style={{
            fontFamily: 'DM Sans, sans-serif', fontWeight: 600,
            fontSize: '14px', color: '#E87722',
            textTransform: 'uppercase', letterSpacing: '0.1em',
            display: 'block', marginBottom: '20px',
          }}>
            Start free today
          </span>

          <h2 style={{
            fontFamily: 'Sora, sans-serif', fontWeight: 700,
            fontSize: 'clamp(32px, 6vw, 56px)', lineHeight: 1.1,
            color: '#FFFFFF', margin: '0 0 40px 0',
            letterSpacing: '-0.02em',
          }}>
            Your team is spending more on AI than you know.
          </h2>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginBottom: '24px' }}>
            <button
              onClick={() => window.open(CHROME_WEBSTORE_URL, '_blank', 'noopener,noreferrer')}
              style={{
                background: 'linear-gradient(135deg, #E87722, #F5A53A)',
                color: 'white',
                fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '17px',
                borderRadius: '12px', padding: '16px 36px',
                border: 'none', cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(232,119,34,0.3)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(232,119,34,0.45)';
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.01)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(232,119,34,0.3)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              Add to Chrome — Free
            </button>

            <button
              type="button"
              onClick={() => window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '15px',
                color: 'rgba(255,255,255,0.75)',
                display: 'flex', alignItems: 'center', gap: '6px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
            >
              For enterprise deployments, talk to us <ArrowRight size={16} />
            </button>
          </div>

          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '14px',
            color: 'rgba(255,255,255,0.4)', margin: 0,
          }}>
            No credit card. No account needed. Works in 60 seconds.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
