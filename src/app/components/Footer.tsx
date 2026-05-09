import React from 'react';
import { Zap, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Pricing', 'How it Works', 'Chrome Store'],
  Company: ['About', 'Contact', 'Privacy Policy', 'Terms'],
  Platforms: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity', 'Copilot'],
};

export function Footer() {
  const resolveFooterLinkHref = (link: string) => {
    if (link === 'Privacy Policy') return '/privacy-policy';
    if (link === 'Terms') return '/terms-and-conditions';
    return '/';
  };

  const handleFooterNavigation = (event: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    const href = resolveFooterLinkHref(link);
    if (href === '/') return;
    event.preventDefault();
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <footer style={{ background: '#1A1A1A', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '64px 40px 32px',
      }}>
        {/* Main grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '40px',
          marginBottom: '56px',
        }}>
          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '32px', height: '32px',
                background: 'linear-gradient(135deg, #E87722, #F5A53A)',
                borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Zap size={16} color="white" fill="white" />
              </div>
              <span style={{
                fontFamily: 'Sora, sans-serif', fontWeight: 700,
                fontSize: '17px', color: '#FFFFFF',
              }}>
                TokenMetr
              </span>
            </div>
            <p style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: '13px',
              color: 'rgba(255,255,255,0.45)', lineHeight: 1.7,
              margin: '0 0 8px 0', maxWidth: '220px',
            }}>
              Token optimization & governance for AI teams.
            </p>
            <p style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: '12px',
              color: 'rgba(255,255,255,0.3)', lineHeight: 1.6, margin: 0,
              maxWidth: '220px',
            }}>
              Built by Developer Bazaar Technologies, Indore, India.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{
                fontFamily: 'DM Sans, sans-serif', fontWeight: 600,
                fontSize: '13px', color: 'rgba(255,255,255,0.55)',
                textTransform: 'uppercase', letterSpacing: '0.08em',
                margin: '0 0 18px 0',
              }}>
                {title}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {links.map(link => (
                  <a
                    key={link}
                    href={resolveFooterLinkHref(link)}
                    onClick={event => handleFooterNavigation(event, link)}
                    style={{
                      fontFamily: 'DM Sans, sans-serif', fontSize: '14px',
                      color: 'rgba(255,255,255,0.45)', textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}>
          <span style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '13px',
            color: 'rgba(255,255,255,0.35)',
          }}>
            © 2026 TokenMetr · Developer Bazaar Technologies
          </span>
          <div style={{ display: 'flex', gap: '16px' }}>
            {[
              { icon: Twitter, label: 'X / Twitter' },
              { icon: Linkedin, label: 'LinkedIn' },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                title={label}
                style={{
                  width: '34px', height: '34px',
                  background: 'rgba(255,255,255,0.07)',
                  borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.2s',
                  color: 'rgba(255,255,255,0.45)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.14)';
                  (e.currentTarget as HTMLElement).style.color = '#FFFFFF';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)';
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
