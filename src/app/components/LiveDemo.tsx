import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function LiveDemo() {
  const goToPromptPlatform = () => {
    window.history.pushState({}, '', '/prompt-platform');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <section
      id="live-demo"
      style={{
        background: 'linear-gradient(135deg, #E87722, #F5A53A)',
        padding: '100px 40px',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{
            fontFamily: 'Sora, sans-serif', fontWeight: 700,
            fontSize: 'clamp(28px, 5vw, 42px)', lineHeight: 1.15,
            color: '#FFFFFF', margin: '0 0 16px 0',
          }}>
            Try it right here — no install needed.
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '18px',
            color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: '0 0 40px 0',
          }}>
            Paste any AI prompt. Watch TokenMetr compress it live.
          </p>
        </motion.div>

        {/* Demo Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            background: 'linear-gradient(180deg, #FFFDF9 0%, #FFF7EE 100%)',
            borderRadius: '18px',
            padding: '36px 32px',
            boxShadow: '0 28px 70px rgba(0,0,0,0.16), inset 0 1px 0 rgba(255,255,255,0.75)',
            border: '1px solid rgba(232, 119, 34, 0.22)',
            textAlign: 'center',
          }}
        >
          <div style={{ marginBottom: '28px' }}>
            <p style={{
              margin: 0,
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '17px',
              color: '#5A6472',
              lineHeight: 1.75,
              maxWidth: '640px',
              marginInline: 'auto',
            }}>
              Use the dedicated prompt workspace for a cleaner flow. You will be redirected to a separate page where users can choose platform and paste their prompt text.
            </p>
          </div>

          <button
            onClick={goToPromptPlatform}
            style={{
              background: 'linear-gradient(135deg, #E87722, #F5A53A)',
              color: 'white',
              fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '15px',
              borderRadius: '10px', padding: '13px 28px',
              border: 'none', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              transition: 'all 0.2s ease',
              boxShadow: '0 8px 22px rgba(232,119,34,0.28)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(232,119,34,0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 8px 22px rgba(232,119,34,0.28)';
            }}
          >
            Open Prompt Platform <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}