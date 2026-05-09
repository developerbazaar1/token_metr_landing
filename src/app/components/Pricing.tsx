import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const CHROME_WEBSTORE_URL = 'https://chromewebstore.google.com/detail/ahcfpkbcinlpjaaokjchcfjnoogmbfhj?utm_source=item-share-cb';

const plans = [
  {
    name: 'Free',
    price: '$0',
    priceSub: 'forever',
    featured: false,
    features: [
      '5 optimizations/day',
      'Token estimation',
      'Basic prompt suggestions',
      'Single user',
    ],
    cta: 'Add to Chrome',
    ctaStyle: 'outline',
  },
  {
    name: 'Pro',
    price: '₹299',
    priceSub: '/mo · ~$3.60 USD',
    badge: 'Most Popular',
    featured: true,
    features: [
      'Unlimited optimizations',
      'Full prompt optimization engine',
      'Per-model cost estimator',
      'Meaning preservation guarantee',
      'Savings history & analytics',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'filled',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    priceSub: 'per seat',
    featured: false,
    features: [
      'Everything in Pro',
      'Admin governance dashboard',
      'Team analytics & alerts',
      'SLA + dedicated support',
      'CSV export & reporting',
      'Onboarding + training',
    ],
    cta: 'Talk to Us',
    ctaStyle: 'dark',
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
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
          <span style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '12px',
            color: '#E87722', textTransform: 'uppercase', letterSpacing: '0.1em',
            fontWeight: 600, display: 'block', marginBottom: '16px',
          }}>
            Pricing
          </span>
          <h2 style={{
            fontFamily: 'Sora, sans-serif', fontWeight: 600,
            fontSize: 'clamp(28px, 4.5vw, 42px)', lineHeight: 1.15,
            color: '#1A1A1A', margin: 0,
          }}>
            Simple pricing. No surprises.
          </h2>
        </motion.div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          alignItems: 'start',
          marginBottom: '32px',
        }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                background: '#FFFFFF',
                border: plan.featured ? 'none' : '1px solid #E5E3DF',
                borderRadius: '16px',
                padding: plan.featured ? '32px' : '28px',
                position: 'relative',
                boxShadow: plan.featured ? '0 16px 48px rgba(232,119,34,0.15), 0 4px 16px rgba(0,0,0,0.06)' : 'none',
                borderTop: plan.featured ? '3px solid #E87722' : '1px solid #E5E3DF',
                transform: plan.featured ? 'scale(1.03)' : 'none',
              }}
            >
              {/* Most Popular badge */}
              {plan.badge && (
                <div style={{
                  position: 'absolute', top: '-14px', left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#E87722', color: 'white',
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '12px',
                  borderRadius: '999px', padding: '5px 16px',
                  whiteSpace: 'nowrap',
                }}>
                  {plan.badge}
                </div>
              )}

              <div style={{ marginBottom: '8px' }}>
                <span style={{
                  fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '16px',
                  color: '#1A1A1A',
                }}>
                  {plan.name}
                </span>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <span style={{
                  fontFamily: 'Sora, sans-serif', fontWeight: 700,
                  fontSize: 'clamp(32px, 5vw, 40px)',
                  color: '#1A1A1A',
                }}>
                  {plan.price}
                </span>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: '14px',
                  color: '#6B7280', marginLeft: '6px',
                }}>
                  {plan.priceSub}
                </span>
              </div>

              <div style={{ marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <Check size={16} style={{ color: '#22C55E', marginTop: '2px', flexShrink: 0 }} />
                    <span style={{
                      fontFamily: 'DM Sans, sans-serif', fontSize: '14px',
                      color: '#2D2D2D', lineHeight: 1.5,
                    }}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  if (plan.cta.toLowerCase().includes('add to chrome')) {
                    window.open(CHROME_WEBSTORE_URL, '_blank', 'noopener,noreferrer');
                  }
                }}
                style={{
                  width: '100%',
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '15px',
                  borderRadius: '10px', padding: '13px',
                  cursor: 'pointer', transition: 'all 0.2s ease',
                  ...(plan.ctaStyle === 'filled' ? {
                    background: 'linear-gradient(135deg, #E87722, #F5A53A)',
                    color: 'white', border: 'none',
                  } : plan.ctaStyle === 'dark' ? {
                    background: '#1A1A1A', color: 'white', border: 'none',
                  } : {
                    background: 'transparent',
                    color: '#E87722', border: '1.5px solid #E87722',
                  }),
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none'; }}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            textAlign: 'center',
            fontFamily: 'DM Sans, sans-serif', fontSize: '14px',
            fontStyle: 'italic', color: '#6B7280',
            margin: 0,
          }}
        >
          This is our learning pricing — we update it based on what we learn from customers.
        </motion.p>
      </div>
    </section>
  );
}
