import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Does TokenMetr read or store my prompts?',
    a: 'No. TokenMetr processes your prompt entirely in your browser — nothing is sent to our servers. The optimization runs locally, and your prompt text never leaves your device. We have no access to your prompts, and we store nothing. You can verify this in our open-source browser extension code.',
    defaultOpen: true,
  },
  {
    q: 'Does it slow down my browser?',
    a: 'TokenMetr is designed to be invisible when you don\'t need it. It uses fewer than 3MB of memory and has no measurable impact on browser performance. Our extension has a Lighthouse performance score of 98.',
  },
  {
    q: 'What if the optimized prompt changes my meaning?',
    a: 'TokenMetr uses semantic compression — it identifies and removes filler language while preserving the core intent of your prompt. You always see the optimized version before using it, and you can edit it or revert instantly. You\'re in full control.',
  },
  {
    q: 'Does it work on enterprise ChatGPT/Claude deployments?',
    a: 'Yes. TokenMetr works on ChatGPT Enterprise, Claude for Enterprise, and other enterprise deployments as long as they use the standard web interface. For API-based or custom deployments, please contact us for an enterprise integration.',
  },
  {
    q: 'How is this different from just writing shorter prompts?',
    a: 'Most people don\'t know what "shorter" means for token efficiency. TokenMetr removes specific types of filler — pleasantries, redundant context, passive constructions, and vague qualifiers — that consistently inflate token count without improving output quality. It also shows you the exact cost difference in real-time, which changes behavior permanently.',
  },
  {
    q: 'What platforms does it work on?',
    a: 'TokenMetr currently works inside ChatGPT (including Plus and Enterprise), Claude (claude.ai), Google Gemini, Perplexity, and Microsoft Copilot. We\'re adding Mistral, Grok, and direct API integration in Q3 2026.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{ background: '#FDFCFA', padding: '120px 40px' }}
    >
      <div style={{ maxWidth: '780px', margin: '0 auto' }}>
        {/* Header */}
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

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                borderBottom: '1px solid #E5E3DF',
              }}
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
      </div>
    </section>
  );
}
