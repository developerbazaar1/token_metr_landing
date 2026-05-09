import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hash, Sparkles, Calculator, TrendingUp, Shield, Bell, CircleDollarSign, Download } from 'lucide-react';

const individualFeatures = [
  {
    icon: Hash,
    title: 'Real-time token counter',
    desc: 'See exactly how many tokens your prompt uses as you type — before you pay for it.',
  },
  {
    icon: Sparkles,
    title: 'Optimized prompt suggestion',
    desc: 'Get a compressed, meaning-preserved version of your prompt instantly. One click to use it.',
  },
  {
    icon: Calculator,
    title: 'Per-model cost estimator',
    desc: 'Know the exact cost for GPT-4o, Claude 3.5, Gemini 1.5 Pro, and more — in real-time.',
  },
  {
    icon: TrendingUp,
    title: 'Prompt savings history',
    desc: 'Track how much you\'ve saved over days, weeks, and months. Your efficiency, visualized.',
  },
];

const teamFeatures = [
  {
    icon: Shield,
    title: 'Admin governance dashboard',
    desc: 'See team-wide usage, flagged prompts, and policy violations from one central view.',
  },
  {
    icon: Bell,
    title: 'Per-team usage limits & alerts',
    desc: 'Set token budgets per person or team. Get Slack or email alerts when limits are hit.',
  },
  {
    icon: CircleDollarSign,
    title: 'Spend visibility for finance',
    desc: 'Give your finance team a live view of AI costs — broken down by team, member, and model.',
  },
  {
    icon: Download,
    title: 'CSV export + reporting',
    desc: 'Export all token usage data monthly for reconciliation, audits, or board reporting.',
  },
];

const platforms = [
  { name: 'ChatGPT', color: '#10A37F' },
  { name: 'Claude', color: '#D97706' },
  { name: 'Gemini', color: '#4285F4' },
  { name: 'Perplexity', color: '#20B2AA' },
  { name: 'Copilot', color: '#0078D4' },
];

export function Features() {
  const [tab, setTab] = useState<'individuals' | 'teams'>('individuals');

  const features = tab === 'individuals' ? individualFeatures : teamFeatures;

  return (
    <section
      id="features"
      style={{ background: '#FDFCFA', padding: '120px 40px' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <span style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '12px',
            color: '#E87722', textTransform: 'uppercase', letterSpacing: '0.1em',
            fontWeight: 600, display: 'block', marginBottom: '16px',
          }}>
            Features
          </span>
          <h2 style={{
            fontFamily: 'Sora, sans-serif', fontWeight: 600,
            fontSize: 'clamp(28px, 4.5vw, 42px)', lineHeight: 1.15,
            color: '#1A1A1A', margin: '0 0 32px 0',
          }}>
            Built for you. And your whole team.
          </h2>

          {/* Toggle */}
          <div style={{
            display: 'inline-flex',
            background: '#F4F4F2',
            border: '1px solid #E5E3DF',
            borderRadius: '999px',
            padding: '4px',
          }}>
            {(['individuals', 'teams'] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '14px',
                  borderRadius: '999px', padding: '9px 24px',
                  border: 'none', cursor: 'pointer',
                  background: tab === t ? '#E87722' : 'transparent',
                  color: tab === t ? 'white' : '#6B7280',
                  transition: 'all 0.25s ease',
                }}
              >
                {t === 'individuals' ? 'For Individuals' : 'For Teams'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Feature Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
              marginBottom: '56px',
            }}
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E3DF',
                  borderRadius: '12px',
                  padding: '24px',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(0,0,0,0.07)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLElement).style.transform = 'none';
                }}
              >
                <div style={{
                  width: '42px', height: '42px',
                  background: '#FEF3E8', borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '14px',
                }}>
                  <f.icon size={20} style={{ color: '#E87722' }} />
                </div>
                <h3 style={{
                  fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '17px',
                  color: '#1A1A1A', margin: '0 0 8px 0', lineHeight: 1.3,
                }}>
                  {f.title}
                </h3>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: '14px',
                  color: '#6B7280', lineHeight: 1.65, margin: 0,
                }}>
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Platform strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            borderTop: '1px solid #E5E3DF',
            paddingTop: '40px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
          }}
        >
          <span style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '13px',
            color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600,
          }}>
            Works inside:
          </span>
          {platforms.map(p => (
            <div
              key={p.name}
              style={{
                padding: '8px 18px',
                borderRadius: '8px',
                border: '1px solid #E5E3DF',
                fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '14px',
                color: '#9CA3AF',
                cursor: 'pointer',
                transition: 'all 0.2s',
                background: '#FFFFFF',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = p.color;
                (e.currentTarget as HTMLElement).style.borderColor = p.color + '40';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = '#9CA3AF';
                (e.currentTarget as HTMLElement).style.borderColor = '#E5E3DF';
              }}
            >
              {p.name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
