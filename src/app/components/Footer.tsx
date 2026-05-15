import React from 'react';
import logoWhite from '../../assets/Logo_white_no_bg.png';
import { CALENDLY_URL, CHROME_WEBSTORE_URL } from '../links';

const footerLinks = {
  Product: ['Features', 'Prompt Optimizer', 'Chrome Store'],
  Company: ['Talk With Us', 'FAQs', 'Privacy Policy', 'Terms'],
};

export function Footer() {
  const resolveFooterLinkHref = (link: string) => {
    if (link === 'Privacy Policy') return '/privacy-policy';
    if (link === 'Terms') return '/terms-and-conditions';
    if (link === 'FAQs') return '/faqs';
    if (link === 'Chrome Store') return CHROME_WEBSTORE_URL;
    if (link === 'Talk With Us') return CALENDLY_URL;
    if (link === 'Prompt Optimizer') return '/#live-demo';
    if (link === 'Features') return '/#features';
    return '/';
  };

  const handleFooterNavigation = (event: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    const href = resolveFooterLinkHref(link);
    if (href.startsWith('http')) return;
    if (href === '/') return;
    event.preventDefault();
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));

    const hash = href.split('#')[1];
    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ background: '#1A1A1A', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '48px 40px 28px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '40px',
          marginBottom: '36px',
        }}>
          <div>
            <img
              src={logoWhite}
              alt="TokenMetr"
              style={{ height: '40px', width: 'auto', display: 'block', marginBottom: '16px' }}
            />
            <p style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: '13px',
              color: 'rgba(255,255,255,0.45)', lineHeight: 1.7,
              margin: '0 0 8px 0', maxWidth: '240px',
            }}>
              AI prompt optimization and token savings for individuals and teams.
            </p>
            <p style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: '12px',
              color: 'rgba(255,255,255,0.3)', lineHeight: 1.6, margin: 0,
              maxWidth: '240px',
            }}>
              Built by Developer Bazaar Technologies, Indore, India.
            </p>
          </div>

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
                {links.map(link => {
                  const href = resolveFooterLinkHref(link);

                  return (
                    <a
                      key={link}
                      href={href}
                      onClick={event => handleFooterNavigation(event, link)}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noreferrer' : undefined}
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
                  );
                })}
              </div>
            </div>
          ))}
        </div>

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
            © 2026 TokenMetr - Developer Bazaar Technologies
          </span>
        </div>
      </div>
    </footer>
  );
}
