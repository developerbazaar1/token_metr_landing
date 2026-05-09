import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "We were spending $8K/month on AI APIs with no visibility. TokenMetr showed us exactly where the waste was — and we cut costs by 58% in week one. It's become part of our engineering workflow.",
    name: 'Aditya Sharma',
    role: 'Engineering Lead',
    company: 'Fintech Startup, Bangalore',
  },
  {
    quote: "I use ChatGPT heavily for research. TokenMetr's optimization suggestions are genuinely good — not just shorter, but clearer. I'm saving about $30/month on my personal plan alone.",
    name: 'Priya Mehta',
    role: 'Research Analyst',
    company: 'Independent Consultant',
  },
  {
    quote: "The enterprise dashboard is exactly what finance wanted. We can now allocate AI costs to business units and actually understand our usage. TokenMetr made AI spending auditable for the first time.",
    name: 'Rahul Desai',
    role: 'CTO',
    company: 'Mid-stage SaaS Company',
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{ background: '#F4F4F2', padding: '120px 40px' }}
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
          <h2 style={{
            fontFamily: 'Sora, sans-serif', fontWeight: 600,
            fontSize: 'clamp(26px, 4.5vw, 40px)', lineHeight: 1.15,
            color: '#1A1A1A', margin: 0,
          }}>
            What our beta users say.
          </h2>
        </motion.div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
        }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E3DF',
                borderRadius: '12px',
                padding: '28px',
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(0,0,0,0.07)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.transform = 'none';
              }}
            >
              {/* Quote mark */}
              <div style={{
                fontFamily: 'Sora, sans-serif', fontWeight: 700,
                fontSize: '52px', lineHeight: 0.8,
                color: '#E87722', opacity: 0.6,
                marginBottom: '16px',
                userSelect: 'none',
              }}>
                "
              </div>

              <p style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '15px',
                color: '#2D2D2D', lineHeight: 1.7,
                margin: '0 0 24px 0',
              }}>
                {t.quote}
              </p>

              <div style={{
                borderTop: '1px solid #E5E3DF',
                paddingTop: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px',
              }}>
                <div>
                  <div style={{
                    fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '14px',
                    color: '#1A1A1A',
                  }}>
                    {t.name}
                  </div>
                  <div style={{
                    fontFamily: 'DM Sans, sans-serif', fontSize: '13px',
                    color: '#6B7280', marginTop: '2px',
                  }}>
                    {t.role} · {t.company}
                  </div>
                </div>
                <span style={{
                  background: '#FEF3E8', border: '1px solid #F5A53A',
                  borderRadius: '999px', padding: '3px 10px',
                  fontFamily: 'DM Sans, sans-serif', fontSize: '11px',
                  color: '#E87722', fontWeight: 600, whiteSpace: 'nowrap',
                }}>
                  Beta User
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
