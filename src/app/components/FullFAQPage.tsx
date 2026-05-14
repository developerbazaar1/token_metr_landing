import React, { useState } from 'react';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { detailedFaqSections } from '../faqContent';

export function FullFAQPage() {
  const [open, setOpen] = useState<string>('0-0');

  const goHome = () => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #FDFCFA 0%, #FAF7F3 100%)',
        minHeight: 'calc(100vh - 64px)',
        padding: '72px 24px',
      }}
    >
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>
        <button
          onClick={goHome}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'DM Sans, sans-serif',
            color: '#6B7280',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '20px',
            padding: 0,
            fontSize: '14px',
          }}
        >
          <ArrowLeft size={16} /> Back to Home
        </button>

        <div style={{ marginBottom: '36px' }}>
          <span style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '12px',
            color: '#E87722',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontWeight: 700,
          }}>
            Support FAQs
          </span>
          <h1 style={{
            fontFamily: 'Sora, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(34px, 5vw, 56px)',
            lineHeight: 1.1,
            color: '#1A1A1A',
            margin: '12px 0 14px',
          }}>
            TokenMetr FAQs
          </h1>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '17px',
            lineHeight: 1.7,
            color: '#6B7280',
            maxWidth: '700px',
            margin: 0,
          }}>
            Detailed answers about privacy, prompt optimization, model support, enterprise workflows, and getting started.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {detailedFaqSections.map((section, sectionIndex) => (
            <div
              key={section.title}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E3DF',
                borderRadius: '16px',
                padding: '28px',
                boxShadow: '0 16px 36px rgba(0,0,0,0.05)',
              }}
            >
              <div style={{ marginBottom: '14px' }}>
                <h2 style={{
                  fontFamily: 'Sora, sans-serif',
                  fontSize: '22px',
                  lineHeight: 1.25,
                  color: '#1A1A1A',
                  margin: '0 0 6px',
                }}>
                  {section.title}
                </h2>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: '#6B7280',
                  margin: 0,
                }}>
                  {section.subtitle}
                </p>
              </div>

              {section.faqs.map((faq, faqIndex) => {
                const key = `${sectionIndex}-${faqIndex}`;
                const isOpen = open === key;

                return (
                  <div key={key} style={{ borderTop: '1px solid #E5E3DF' }}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? '' : key)}
                      style={{
                        width: '100%',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '18px 0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '16px',
                        textAlign: 'left',
                      }}
                    >
                      <span style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '16px',
                        fontWeight: 700,
                        lineHeight: 1.45,
                        color: '#1F2937',
                      }}>
                        {faq.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ color: '#6B7280', flexShrink: 0 }}
                      >
                        <ChevronDown size={19} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '15px',
                            lineHeight: 1.75,
                            color: '#6B7280',
                            margin: '0 0 18px',
                            paddingRight: '36px',
                          }}>
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
