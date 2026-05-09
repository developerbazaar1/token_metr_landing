import { motion } from 'motion/react';
import { Gauge, EyeOff, MessageSquareX } from 'lucide-react';

const terminalData = [
  { label: 'Team', value: 'Engineering (12 members)', isText: true },
  { label: 'AI prompts sent this month', value: '9,847', isOrange: true },
  { label: 'Avg tokens per prompt', value: '1,240', isOrange: true },
  { label: 'Wasted tokens (est.)', value: '68%', isDanger: true },
  { label: 'Estimated monthly overspend', value: '$1,247', isDanger: true },
  { label: 'Visibility into spend', value: 'None', isDanger: true },
];

const problemCards = [
  {
    icon: Gauge,
    title: '~70% of tokens are wasted',
    body: 'Most prompts are 3× longer than they need to be — same output, triple the cost.',
  },
  {
    icon: EyeOff,
    title: 'Finance has no idea what AI costs',
    body: 'Employees use personal ChatGPT logins. There\'s no dashboard, no controls, no budget line.',
  },
  {
    icon: MessageSquareX,
    title: 'Bad prompts → weak outputs',
    body: 'Bloated, unstructured prompts return weak answers. Teams blame the AI — it\'s the prompt.',
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function Problem() {
  return (
    <section
      id="the-problem"
      style={{
        background: '#FDFCFA',
        padding: '120px 40px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <span style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '12px',
            color: '#E87722', textTransform: 'uppercase', letterSpacing: '0.1em',
            fontWeight: 600, display: 'block', marginBottom: '16px',
          }}>
            The Problem
          </span>
          <h2 style={{
            fontFamily: 'Sora, sans-serif', fontWeight: 600,
            fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.15,
            color: '#1A1A1A', maxWidth: '640px', margin: '0 auto',
          }}>
            Your AI bill is growing.
            <br />Nobody knows why.
          </h2>
        </motion.div>

        {/* Terminal Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background: '#1A1A1A',
            borderRadius: '12px',
            padding: '28px 36px',
            maxWidth: '700px',
            margin: '0 auto 56px',
            boxShadow: '0 24px 60px rgba(0,0,0,0.18)',
          }}
        >
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            marginBottom: '24px',
          }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F5A53A' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22C55E' }} />
            <span style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: '11px',
              color: '#6B7280', marginLeft: '8px',
            }}>
              spend_report.sh — Engineering · May 2026
            </span>
          </div>
          {terminalData.map((row, i) => (
            <div
              key={i}
              style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '8px 0',
                borderBottom: i < terminalData.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              }}
            >
              <span style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: '13px',
                color: '#9CA3AF',
              }}>
                {row.label}
              </span>
              <span style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: '13px',
                fontWeight: 500,
                color: row.isDanger ? '#EF4444' : row.isOrange ? '#E87722' : '#F4F4F2',
              }}>
                {row.value}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Problem Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {problemCards.map(card => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E3DF',
                borderRadius: '12px',
                padding: '28px',
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.transform = 'none';
              }}
            >
              <div style={{
                width: '44px', height: '44px',
                background: '#FEF3E8', borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '16px',
              }}>
                <card.icon size={22} style={{ color: '#E87722' }} />
              </div>
              <h3 style={{
                fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '18px',
                color: '#1A1A1A', margin: '0 0 10px 0', lineHeight: 1.3,
              }}>
                {card.title}
              </h3>
              <p style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '15px',
                color: '#6B7280', lineHeight: 1.65, margin: 0,
              }}>
                {card.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
