import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import logoBlack from '../../assets/Logo_black_no_bg.png';
import { CALENDLY_URL, CHROME_WEBSTORE_URL } from '../links';

const navLinks = ['Features', 'For Teams', 'Pricing', 'How it Works'];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const goToNavLink = (link: string) => {
    if (link === 'For Teams') {
      window.dispatchEvent(new CustomEvent('tokenmetr:features-tab', { detail: 'teams' }));
      scrollTo('features');
      return;
    }

    scrollTo(link.toLowerCase().replace(/\s+/g, '-'));
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        height: '64px',
        backgroundColor: scrolled ? 'rgba(253, 252, 250, 0.92)' : '#FDFCFA',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: '1px solid #E5E3DF',
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
      }}
    >
      <div style={{
        maxWidth: '1440px', margin: '0 auto',
        padding: '0 40px', height: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <img
            src={logoBlack}
            alt="TokenMetr"
            style={{ height: '38px', width: 'auto', display: 'block' }}
          />
        </div>

        {/* Center Nav - Desktop */}
        <div className="hidden md:flex" style={{ gap: '36px', alignItems: 'center' }}>
          {navLinks.map(link => (
            <button
              key={link}
              onClick={() => goToNavLink(link)}
              style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '15px',
                color: '#6B7280', background: 'none', border: 'none',
                cursor: 'pointer', transition: 'color 0.2s', padding: '4px 0',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#1A1A1A')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Right - Desktop */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: '20px' }}>
          <a href={CALENDLY_URL} target="_blank" rel="noreferrer" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#6B7280', textDecoration: 'none' }}>
            Talk With Us
          </a>
          <button
            onClick={() => window.open(CHROME_WEBSTORE_URL, '_blank', 'noopener,noreferrer')}
            style={{
              background: '#E87722', color: 'white',
              fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '15px',
              borderRadius: '8px', padding: '10px 20px', border: 'none', cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#D06515';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(232,119,34,0.35)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#E87722';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'none';
            }}
          >
            Add to Chrome — Free
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#1A1A1A', padding: '4px' }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: '#FDFCFA',
              borderTop: '1px solid #E5E3DF',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {navLinks.map(link => (
                <button
                  key={link}
                  onClick={() => goToNavLink(link)}
                  style={{
                    fontFamily: 'DM Sans, sans-serif', fontSize: '15px',
                    color: '#6B7280', background: 'none', border: 'none',
                    cursor: 'pointer', textAlign: 'left', padding: '4px 0',
                  }}
                >
                  {link}
                </button>
              ))}
              <button
                type="button"
                onClick={() => window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')}
                style={{
                  background: 'transparent', color: '#6B7280',
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '15px',
                  borderRadius: '8px', padding: '12px', border: '1px solid #E5E3DF', cursor: 'pointer',
                }}
              >
                Talk With Us
              </button>
              <button
                onClick={() => window.open(CHROME_WEBSTORE_URL, '_blank', 'noopener,noreferrer')}
                style={{
                  background: '#E87722', color: 'white',
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '15px',
                  borderRadius: '8px', padding: '14px', border: 'none', cursor: 'pointer',
                }}
              >
                Add to Chrome — Free
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
