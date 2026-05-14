import React from 'react';
import { ArrowLeft } from 'lucide-react';

const privacySections = [
  {
    title: '1. Information We Collect',
    blocks: [
      {
        heading: '1.1 Information You Provide',
        paragraphs: ['We may collect the following when you use our services:'],
        bullets: ['Name and email address', 'Account and login details', 'Subscription and billing information', 'Feedback, support requests, and communication details'],
      },
      {
        heading: '1.2 Prompt Data',
        paragraphs: [
          'When you use TokenMetr, prompts may be analyzed before submission to provide optimization suggestions and quality improvements.',
          'This may include processing prompt content to estimate token usage, estimate possible cost impact, suggest optimized prompt versions, and recommend missing context, structure, and clarity improvements.',
          'We do not collect, transmit, store, or retain any prompt content you enter under any circumstances. All prompt analysis happens exclusively on your device and never leaves your browser.',
          'We do not claim any ownership over your prompts or the content you generate.',
        ],
      },
      {
        heading: '1.3 Usage Data',
        paragraphs: ['We collect limited usage data solely to power your in-product analytics dashboard. This includes:'],
        bullets: ['Number of prompts analyzed', 'Estimated token counts and cost savings generated', 'Features used within the extension'],
        note: 'No prompt content is associated with or stored alongside this data. Only anonymized token counts and usage metrics are recorded, never the actual text of your prompts.',
      },
      {
        heading: '1.4 Technical and Device Data',
        bullets: ['Browser type and version', 'Operating system', 'Extension performance logs', 'Error reports and crash diagnostics'],
      },
    ],
  },
  {
    title: '2. How We Use Your Information',
    paragraphs: [
      'We use the information we collect strictly to deliver token estimation, cost calculation, and prompt optimization features; power usage dashboards and savings analytics; process subscription payments and manage billing; respond to support requests; diagnose errors; maintain product reliability; and improve the accuracy and performance of our optimization engine.',
      'We do not use your prompts to train AI models, and we do not use your data for advertising or marketing profiling.',
    ],
  },
  {
    title: '3. Data Processing and Storage',
    paragraphs: [
      'Where technically possible, prompt analysis occurs locally within your browser, so your data stays on your device.',
      'When server-side processing is required for advanced features, data is transmitted securely over encrypted connections and processed only as long as needed to return a result.',
      'We apply a data minimization approach: we collect and retain only what is necessary to provide and improve our services.',
      'We do not retain raw prompt content beyond the immediate processing window unless explicitly required to deliver a specific feature you have opted into.',
    ],
  },
  {
    title: '4. Data Sharing',
    paragraphs: ['We do not sell or share your personal information with third parties. The only exceptions are:'],
    bullets: ['Legal obligations: If compelled by law, court order, or valid legal process.', 'Safety threats: To prevent imminent fraud, abuse, or security threats targeting users or systems.'],
  },
  {
    title: '5. Data Security',
    bullets: ['Encrypted data transmission (TLS/HTTPS)', 'Role-based access controls and restricted permissions', 'System monitoring and anomaly detection', 'Regular security reviews and performance improvements'],
    paragraphs: ['No system is completely secure. If you have concerns about the security of your data, please contact us using the information below.'],
  },
  {
    title: '6. Your Rights',
    bullets: ['Access the personal data we hold about you', 'Correct inaccurate or incomplete information', 'Delete your personal data, subject to legal obligations', 'Restrict or object to certain processing activities', 'Data portability where applicable'],
  },
  {
    title: '7. Cookies and Tracking Technologies',
    paragraphs: ['We may use cookies or similar technologies for account functionality, analytics, performance measurement, and improving user experience.'],
  },
  {
    title: '8. Third-Party Platforms',
    paragraphs: ['TokenMetr may operate across third-party AI platforms such as ChatGPT, Claude, Gemini, and Perplexity. We are not responsible for those platforms privacy practices, and users should review them separately.'],
  },
  {
    title: '9. Data Retention',
    paragraphs: ['We retain personal data only for as long as necessary to provide our services, fulfill contractual obligations, resolve disputes, enforce agreements, and meet legal requirements.'],
  },
  {
    title: "10. Children's Privacy",
    paragraphs: ['Our services are not intended for children under the age of 13, or the minimum legal age in your region.'],
  },
  {
    title: '11. Changes to This Privacy Policy',
    paragraphs: ['We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised Last Updated date.'],
  },
  {
    title: '12. Chrome Extension Permissions',
    paragraphs: [
      'TokenMetr may require access to certain browser permissions in order to function properly, including access to supported AI platform pages for real-time prompt analysis and suggestions.',
      'We only request permissions necessary to deliver the core features of the product and do not track unrelated browsing activity.',
    ],
  },
];

type ContentBlock = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: string;
};

function ContentBlockView({ block }: { block: ContentBlock }) {
  return (
    <div style={{ marginTop: block.heading ? '18px' : 0 }}>
      {block.heading && (
        <h3 style={{ margin: '0 0 8px', fontFamily: 'Sora, sans-serif', fontSize: '16px', lineHeight: 1.35, color: '#1F2937' }}>
          {block.heading}
        </h3>
      )}
      {block.paragraphs?.map(paragraph => (
        <p key={paragraph} style={{ margin: '0 0 10px', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', lineHeight: 1.75, color: '#374151' }}>
          {paragraph}
        </p>
      ))}
      {block.bullets && (
        <ul style={{ margin: '8px 0 10px 20px', padding: 0, fontFamily: 'DM Sans, sans-serif', fontSize: '15px', lineHeight: 1.75, color: '#374151' }}>
          {block.bullets.map(item => <li key={item}>{item}</li>)}
        </ul>
      )}
      {block.note && (
        <p style={{ margin: '10px 0 0', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', lineHeight: 1.75, color: '#374151' }}>
          {block.note}
        </p>
      )}
    </div>
  );
}

export function PrivacyPolicyPage() {
  const goHome = () => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <section style={{ background: 'linear-gradient(180deg, #FDFCFA 0%, #FAF7F3 100%)', minHeight: 'calc(100vh - 64px)', padding: '72px 24px' }}>
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>
        <button
          onClick={goHome}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', color: '#6B7280', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px', padding: 0, fontSize: '14px' }}
        >
          <ArrowLeft size={16} /> Back to Home
        </button>

        <div style={{ background: '#FFFFFF', border: '1px solid #E5E3DF', borderRadius: '16px', padding: '32px', boxShadow: '0 20px 45px rgba(0,0,0,0.06)' }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#E87722', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
            TokenMetr Legal
          </span>
          <h1 style={{ margin: '10px 0 10px', fontFamily: 'Sora, sans-serif', fontSize: 'clamp(30px, 4vw, 42px)', lineHeight: 1.2, color: '#1A1A1A' }}>
            Privacy Policy
          </h1>
          <p style={{ margin: '0 0 28px', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', lineHeight: 1.7, color: '#6B7280' }}>
            Last Updated: May 14, 2026
          </p>

          {privacySections.map(section => (
            <section key={section.title} style={{ borderTop: '1px solid #E5E3DF', paddingTop: '24px', marginTop: '24px' }}>
              <h2 style={{ margin: '0 0 12px', fontFamily: 'Sora, sans-serif', fontSize: '21px', lineHeight: 1.35, color: '#1F2937' }}>
                {section.title}
              </h2>
              {section.blocks?.map(block => <ContentBlockView key={block.heading} block={block} />)}
              {section.paragraphs && <ContentBlockView block={{ paragraphs: section.paragraphs }} />}
              {section.bullets && <ContentBlockView block={{ bullets: section.bullets }} />}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
