import { motion } from 'motion/react';

const stats = [
  { label: '38 teams in beta' },
  { label: '63% avg token reduction' },
  { label: '4 AI platforms supported' },
];

export function SocialProof() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        background: '#F4F4F2',
        borderTop: '1px solid #E5E3DF',
        borderBottom: '1px solid #E5E3DF',
        padding: '24px 40px',
      }}
    >
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'flex', flexWrap: 'wrap', gap: '16px',
        alignItems: 'center', justifyContent: 'center',
      }}>
        <span style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: '14px',
          color: '#6B7280', whiteSpace: 'nowrap',
        }}>
          Trusted by teams using
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
          {stats.map(stat => (
            <span
              key={stat.label}
              style={{
                background: '#FFFFFF', border: '1px solid #E5E3DF',
                borderRadius: '20px', padding: '8px 16px',
                fontFamily: 'DM Sans, sans-serif', fontSize: '14px',
                color: '#2D2D2D', whiteSpace: 'nowrap',
              }}
            >
              {stat.label}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
