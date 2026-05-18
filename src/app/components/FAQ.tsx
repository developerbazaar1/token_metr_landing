import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { landingFaqs } from '../faqContent';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const goToFullFaqs = () => {
    window.history.pushState({}, '', '/faqs');
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="faq"
      style={{ background: '#FDFCFA', padding: '120px 40px' }}
    >
      <div style={{ maxWidth: '780px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <h2 style={{
            fontFamily: 'Sora, sans-serif', fontWeight: 600,
            fontSize: 'clamp(26px, 4.5vw, 40px)', lineHeight: 1.15,
            color: '#1A1A1A', margin: 0,
          }}>
            Questions we actually get asked.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {landingFaqs.map((faq, i) => (
            <div
              key={faq.q}
              style={{ borderBottom: '1px solid #E5E3DF' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', background: 'none', border: 'none',
                  cursor: 'pointer', padding: '22px 0',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  gap: '16px', textAlign: 'left',
                }}
              >
                <span style={{
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '17px',
                  color: '#1A1A1A', lineHeight: 1.4,
                }}>
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ flexShrink: 0 }}
                >
                  <ChevronDown size={20} style={{ color: '#6B7280' }} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{
                      fontFamily: 'DM Sans, sans-serif', fontSize: '15px',
                      color: '#6B7280', lineHeight: 1.75,
                      margin: '0 0 22px 0',
                      paddingRight: '40px',
                    }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <button
            type="button"
            onClick={goToFullFaqs}
            style={{
              background: '#E87722',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '10px',
              padding: '13px 22px',
              cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '15px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            View complete FAQs <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
