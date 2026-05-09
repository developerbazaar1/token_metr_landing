import { motion } from 'motion/react';
import { Check, X, Info } from 'lucide-react';
import { useState } from 'react';

const features = [
  { name: 'Token counting', tm: true, helicone: true, langsmith: true, manual: false },
  { name: 'Pre-send optimization', tm: true, helicone: false, langsmith: false, manual: false, highlight: true, tooltip: 'Only TokenMetr prevents waste before it happens.' },
  { name: 'Cross-platform (browser)', tm: true, helicone: false, langsmith: false, manual: false },
  { name: 'Team governance', tm: true, helicone: true, langsmith: true, manual: false },
  { name: 'Cost dashboard', tm: true, helicone: true, langsmith: true, manual: false },
  { name: 'Browser-native', tm: true, helicone: false, langsmith: false, manual: false },
];

const columns = [
  { key: 'tm', label: 'TokenMetr', highlight: true },
  { key: 'helicone', label: 'Helicone', highlight: false },
  { key: 'langsmith', label: 'LangSmith', highlight: false },
  { key: 'manual', label: 'Manual', highlight: false },
];

export function Comparison() {
  const [tooltip, setTooltip] = useState('');

  return (
    <section
      id="comparison"
      style={{ background: '#FDFCFA', padding: '120px 40px' }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '52px' }}
        >
          <h2 style={{
            fontFamily: 'Sora, sans-serif', fontWeight: 600,
            fontSize: 'clamp(26px, 4vw, 38px)', lineHeight: 1.2,
            color: '#1A1A1A', margin: 0,
          }}>
            Why TokenMetr — and not everything else.
          </h2>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background: '#FFFFFF',
            border: '1px solid #E5E3DF',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          }}
        >
          {/* Table header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr repeat(4, 1fr)',
            borderBottom: '1px solid #E5E3DF',
          }}>
            <div style={{ padding: '20px 24px' }} />
            {columns.map(col => (
              <div
                key={col.key}
                style={{
                  padding: '16px 12px',
                  textAlign: 'center',
                  background: col.highlight ? '#FEF3E8' : 'transparent',
                  borderLeft: '1px solid #E5E3DF',
                }}
              >
                <span style={{
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '13px',
                  color: col.highlight ? '#E87722' : '#6B7280',
                }}>
                  {col.label}
                </span>
              </div>
            ))}
          </div>

          {/* Rows */}
          {features.map((row, i) => (
            <div
              key={row.name}
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr repeat(4, 1fr)',
                borderBottom: i < features.length - 1 ? '1px solid #E5E3DF' : 'none',
                background: row.highlight ? 'rgba(232,119,34,0.04)' : 'transparent',
                borderLeft: row.highlight ? '3px solid #E87722' : '3px solid transparent',
                transition: 'background 0.15s',
              }}
            >
              <div style={{ padding: '18px 24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: '15px',
                  color: '#1A1A1A', fontWeight: row.highlight ? 600 : 400,
                }}>
                  {row.name}
                </span>
                {row.tooltip && (
                  <div style={{ position: 'relative', display: 'inline-flex' }}>
                    <Info
                      size={14}
                      style={{ color: '#E87722', cursor: 'pointer', flexShrink: 0 }}
                      onMouseEnter={() => setTooltip(row.tooltip || '')}
                      onMouseLeave={() => setTooltip('')}
                    />
                    {tooltip === row.tooltip && (
                      <div style={{
                        position: 'absolute', left: '20px', top: '-4px',
                        background: '#1A1A1A', color: 'white',
                        borderRadius: '6px', padding: '6px 10px',
                        fontFamily: 'DM Sans, sans-serif', fontSize: '12px',
                        whiteSpace: 'nowrap', zIndex: 10,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                      }}>
                        {row.tooltip}
                      </div>
                    )}
                  </div>
                )}
              </div>
              {columns.map(col => (
                <div
                  key={col.key}
                  style={{
                    padding: '18px 12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: col.highlight ? 'rgba(254,243,232,0.5)' : 'transparent',
                    borderLeft: '1px solid #E5E3DF',
                  }}
                >
                  {(row as any)[col.key] ? (
                    <Check size={18} style={{ color: '#22C55E' }} />
                  ) : (
                    <X size={18} style={{ color: '#EF4444', opacity: 0.6 }} />
                  )}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
