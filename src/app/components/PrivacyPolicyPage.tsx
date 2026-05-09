import React from 'react';
import { ArrowLeft } from 'lucide-react';

const privacyPolicyLines = [
  'PromptPilot Legal',
  '',
  '1. Overview',
  '',
  'PromptPilot ("we", "our", or "us") is committed to protecting user privacy. This Privacy Policy explains how we collect, use, and safeguard information when you use our platform, browser extension, or related services.',
  '',
  '2. Information We Collect',
  '',
  'a. User-Provided Data',
  '',
  'b. Automatically Collected Data',
  '',
  'c. API Interaction Data',
  '',
  '- Prompts entered by users',
  '- Feedback or inputs provided within the platform',
  '- Usage data, including feature interactions, clicks, and session activity',
  '- Device and browser information',
  '- Performance and error logs',
  '- Prompts may be processed through third-party AI providers, such as OpenAI, Anthropic, and Google, to generate optimized outputs.',
  '',
  '3. How We Use Information',
  '',
  'We use collected data to:',
  '',
  '- Optimize and improve prompts',
  '- Enhance user experience',
  '- Analyze usage patterns',
  '- Improve system performance and reliability',
  '- Provide feature functionality, such as prompt optimization and suggestions',
  '',
  '4. Data Storage and Security',
  '',
  '- We implement reasonable security measures to protect user data.',
  '- Prompts may be temporarily processed but are not stored permanently unless explicitly saved by the user.',
  '- We do not sell personal data to third parties.',
  '',
  '5. Data Sharing',
  '',
  'We may share data only in the following cases:',
  '',
  '- With AI service providers for processing prompts',
  '- To comply with legal obligations',
  '- To protect system security and integrity',
  '',
  '6. User Control',
  '',
  'Users can:',
  '',
  '- Avoid entering sensitive or personal information in prompts',
  '- Delete saved prompts, if storage is enabled',
  '- Stop using the service at any time',
  '',
  '7. Third-Party Services',
  '',
  'PromptPilot relies on third-party APIs for AI processing. These services may have their own privacy policies governing data usage.',
  '',
  "8. Children's Privacy",
  '',
  'PromptPilot is not intended for users under the age of 13. We do not knowingly collect data from children.',
  '',
  '9. Changes to This Policy',
  '',
  'We may update this Privacy Policy from time to time. Continued use of the service constitutes acceptance of the updated policy.',
  '',
  '10. Contact',
  '',
  'For questions regarding this policy, contact:',
  '',
  '- arpit@developerbazaar.com',
];

export function PrivacyPolicyPage() {
  const goHome = () => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const renderLine = (line: string, index: number) => {
    if (line === '') {
      return <div key={`spacer-${index}`} style={{ height: '10px' }} />;
    }

    if (line === 'PromptPilot Legal') {
      return (
        <h1
          key={`title-${index}`}
          style={{
            margin: '0 0 8px 0',
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(28px, 4vw, 38px)',
            lineHeight: 1.2,
            color: '#1A1A1A',
          }}
        >
          {line}
        </h1>
      );
    }

    if (/^\d+\./.test(line)) {
      return (
        <h2
          key={`section-${index}`}
          style={{
            margin: '12px 0 0 0',
            fontFamily: 'Sora, sans-serif',
            fontSize: '20px',
            lineHeight: 1.35,
            color: '#1F2937',
          }}
        >
          {line}
        </h2>
      );
    }

    return (
      <p
        key={`line-${index}`}
        style={{
          margin: 0,
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '15px',
          lineHeight: 1.75,
          color: '#374151',
        }}
      >
        {line}
      </p>
    );
  };

  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #FDFCFA 0%, #FAF7F3 100%)',
        minHeight: 'calc(100vh - 64px)',
        padding: '72px 24px',
      }}
    >
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>
        <button
          onClick={goHome}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'DM Sans, sans-serif',
            color: '#6B7280',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px',
            padding: 0,
            fontSize: '14px',
          }}
        >
          <ArrowLeft size={16} /> Back to Home
        </button>
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #E5E3DF',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 20px 45px rgba(0,0,0,0.06)',
          }}
        >
          {privacyPolicyLines.map((line, index) => renderLine(line, index))}
        </div>
      </div>
    </section>
  );
}
