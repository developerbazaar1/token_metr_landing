import React, { useEffect, useState } from 'react';
import '../styles/fonts.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Problem } from './components/Problem';
import { HowItWorks } from './components/HowItWorks';
import { LiveDemo } from './components/LiveDemo';
import { Features } from './components/Features';
import { Metrics } from './components/Metrics';
import { Pricing } from './components/Pricing';
import { Comparison } from './components/Comparison';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { PromptPlatform } from './components/PromptPlatform';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsAndConditionsPage } from './components/TermsAndConditionsPage';

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  const isPromptPlatformPage = path === '/prompt-platform';
  const isPrivacyPolicyPage = path === '/privacy-policy';
  const isTermsAndConditionsPage = path === '/terms-and-conditions';
  const isLegalPage = isPrivacyPolicyPage || isTermsAndConditionsPage;

  return (
    <div style={{ background: '#FDFCFA', overflowX: 'hidden' }}>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>
        {isPromptPlatformPage ? (
          <PromptPlatform />
        ) : isPrivacyPolicyPage ? (
          <PrivacyPolicyPage />
        ) : isTermsAndConditionsPage ? (
          <TermsAndConditionsPage />
        ) : (
          <>
            <Hero />
            <SocialProof />
            <Problem />
            <HowItWorks />
            <LiveDemo />
            <Features />
            <Metrics />
            <Pricing />
            <Comparison />
            <Testimonials />
            <FAQ />
            <FinalCTA />
          </>
        )}
      </main>
      {!isPromptPlatformPage && !isLegalPage && <Footer />}
    </div>
  );
}
