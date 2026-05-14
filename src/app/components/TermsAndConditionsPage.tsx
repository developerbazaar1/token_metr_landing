import React from 'react';
import { ArrowLeft } from 'lucide-react';

const termsSections = [
  {
    title: '1. Introduction',
    paragraphs: [
      'Welcome to Tokenmetr ("Platform", "Service", "we", "our", or "us").',
      'These Terms and Conditions ("Terms") govern your access to and use of the Tokenmetr website, applications, APIs, tools, and services related to AI prompt optimization, token compression, workflow automation, analytics, and associated functionalities.',
      'By accessing or using Tokenmetr, you agree to comply with and be legally bound by these Terms. If you do not agree with these Terms, you must not access or use the Service.',
    ],
  },
  {
    title: '2. Eligibility',
    paragraphs: [
      'You must be at least 18 years old, or the legal age of majority in your jurisdiction, to use the Service.',
      'By using Tokenmetr, you represent and warrant that:',
    ],
    bullets: [
      'You have the legal capacity to enter into these Terms.',
      'The information you provide is accurate and complete.',
      'You will comply with all applicable laws and regulations.',
    ],
  },
  {
    title: '3. Description of Services',
    paragraphs: ['Tokenmetr provides AI-powered tools and infrastructure designed to:'],
    bullets: [
      'Optimize and compress prompts',
      'Reduce token usage and AI operational costs',
      'Improve AI workflow efficiency',
      'Manage context and prompt structures',
      'Enhance AI model interactions',
      'Support developers, freelancers, startups, agencies, and enterprises with AI productivity tooling',
    ],
    note: 'Certain features may be experimental, beta, or subject to modification without prior notice.',
  },
  {
    title: '4. User Accounts',
    paragraphs: ['To access certain features, you may be required to create an account.', 'You agree to:'],
    bullets: [
      'Maintain the confidentiality of your login credentials',
      'Be responsible for all activities under your account',
      'Notify us immediately of unauthorized access or security breaches',
    ],
    note: 'We reserve the right to suspend or terminate accounts that violate these Terms or pose security or operational risks.',
  },
  {
    title: '5. Acceptable Use Policy',
    paragraphs: ['You agree not to use Tokenmetr for:'],
    bullets: [
      'Illegal or unauthorized activities',
      'Violating intellectual property rights',
      'Generating malicious code, malware, phishing content, or spam',
      'Harassment, abuse, or harmful conduct',
      'Attempting unauthorized access to systems or infrastructure',
      'Reverse engineering or exploiting vulnerabilities',
      'Uploading unlawful, defamatory, or harmful content',
      'Circumventing usage limitations or security mechanisms',
    ],
    note: 'We reserve the right to investigate and take appropriate action regarding violations.',
  },
  {
    title: '6. AI-Generated Output Disclaimer',
    paragraphs: ['Tokenmetr may generate, optimize, transform, or process AI-generated content.', 'You acknowledge and agree that:'],
    bullets: [
      'AI-generated outputs may contain inaccuracies, biases, errors, or incomplete information.',
      'Outputs should not be considered professional, legal, financial, medical, or regulatory advice.',
      'Users are solely responsible for reviewing, validating, and verifying generated outputs before relying on them.',
      'Tokenmetr shall not be liable for decisions, damages, or consequences arising from reliance on AI-generated outputs.',
    ],
  },
  {
    title: '7. User Content',
    paragraphs: [
      'You retain ownership of the prompts, inputs, files, and content you submit to the Platform ("User Content").',
      'By submitting User Content, you grant Tokenmetr a limited, non-exclusive license to:',
    ],
    bullets: [
      'Process content for providing the Service',
      'Improve operational performance',
      'Maintain security, debugging, monitoring, and system integrity',
      'You have all necessary rights to the submitted content',
      'Your content does not violate laws or third-party rights',
    ],
  },
  {
    title: '8. Third-Party Services and AI Providers',
    paragraphs: [
      'Tokenmetr may integrate with or rely upon third-party providers, including but not limited to:',
    ],
    bullets: [
      'AI model providers',
      'Cloud infrastructure providers',
      'Authentication providers',
      'Analytics services',
      'Payment processors',
    ],
    note: 'Your use of integrated third-party services may also be subject to their respective terms and privacy policies. Tokenmetr is not responsible for third-party outages, external API failures, service interruptions caused by external providers, or changes in pricing or functionality from third-party providers.',
  },
  {
    title: '9. Subscription, Billing, and Payments',
    paragraphs: ['Certain features may require paid subscriptions or usage-based billing.', 'By purchasing a subscription, you agree that:'],
    bullets: [
      'Fees are billed according to the selected pricing plan',
      'Payments may recur automatically unless canceled',
      'You authorize payment processing through approved payment providers',
      'Failure to pay applicable fees may result in feature limitations, suspension, or termination of access',
    ],
    note: 'Pricing may change at any time with reasonable prior notice.',
  },
  {
    title: '10. Intellectual Property',
    paragraphs: [
      'All Platform content, branding, software, interfaces, systems, designs, algorithms, logos, and related materials are owned by Tokenmetr or its licensors.',
      'Except as expressly permitted, you may not copy, modify, resell, redistribute, license, or commercially exploit any part of the Service without written permission.',
      'The name "Tokenmetr" and associated branding elements may not be used without authorization.',
    ],
  },
  {
    title: '11. API and Automation Usage',
    paragraphs: ['If APIs, automation systems, integrations, or developer access are provided, you agree not to:'],
    bullets: [
      'Abuse rate limits',
      'Perform excessive automated requests',
      'Interfere with infrastructure stability',
      'Use the APIs for unlawful or prohibited purposes',
    ],
    note: 'We reserve the right to limit, throttle, revoke, or suspend API access at our discretion.',
  },
  {
    title: '12. Data Storage and Security',
    paragraphs: [
      'We implement commercially reasonable security measures to protect user information and platform integrity. However, no system can guarantee absolute security.',
      'You acknowledge that internet transmissions are inherently insecure, you use the Service at your own risk, and Tokenmetr cannot guarantee uninterrupted or error-free operation.',
    ],
  },
  {
    title: '13. Service Availability',
    paragraphs: [
      'We may modify features, update infrastructure, remove functionalities, conduct maintenance, or suspend or discontinue portions of the Service without liability or prior notice where reasonably necessary.',
      'We do not guarantee continuous uptime, error-free operation, or compatibility with all systems or browsers.',
    ],
  },
  {
    title: '14. Limitation of Liability',
    paragraphs: ['To the maximum extent permitted by law, Tokenmetr and its affiliates shall not be liable for:'],
    bullets: [
      'Indirect damages',
      'Consequential damages',
      'Lost profits',
      'Data loss',
      'Business interruption',
      'AI output inaccuracies',
      'Security incidents beyond reasonable control',
    ],
    note: 'Our total liability shall not exceed the amount paid by you to Tokenmetr during the preceding 12 months.',
  },
  {
    title: '15. Indemnification',
    paragraphs: ['You agree to indemnify and hold harmless Tokenmetr, its founders, employees, affiliates, contractors, and partners from claims, damages, liabilities, losses, and expenses arising from:'],
    bullets: [
      'Your use of the Service',
      'Violation of these Terms',
      'Violation of laws or third-party rights',
      'Misuse of AI-generated content',
    ],
  },
  {
    title: '16. Termination',
    paragraphs: ['We reserve the right to suspend or terminate access to the Service at any time if:'],
    bullets: [
      'These Terms are violated',
      'Fraudulent or abusive activity is detected',
      'Required by law',
      'Necessary for security or operational integrity',
      'Your right to use the Service ends immediately',
      'Certain provisions of these Terms survive termination',
    ],
  },
  {
    title: '17. Governing Law',
    paragraphs: [
      'These Terms shall be governed by and interpreted in accordance with the laws of India.',
      'Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Indore.',
    ],
  },
  {
    title: '18. Changes to These Terms',
    paragraphs: [
      'We may update these Terms periodically.',
      'Updated versions will be posted on the Platform with a revised "Last Updated" date.',
      'Continued use of the Service after changes become effective constitutes acceptance of the updated Terms.',
    ],
  },
  {
    title: '19. Contact Information',
    paragraphs: [
      'For legal inquiries, support, or questions regarding these Terms, contact:',
      'Tokenmetr',
      'Email: connect@tokenmetr.com',
      'Website: tokenmetr.com',
    ],
  },
  {
    title: '20. Beta Features and Experimental Functionality',
    paragraphs: ['Certain features may be labeled as Beta, Experimental, Preview, or Early Access.', 'These features may:'],
    bullets: [
      'Contain bugs or inaccuracies',
      'Change substantially',
      'Be discontinued without notice',
    ],
    note: 'Beta features are provided "as is" without warranties of any kind.',
  },
  {
    title: '21. Prohibited AI Use Cases',
    paragraphs: ['You may not use Tokenmetr to create, optimize, distribute, or facilitate:'],
    bullets: [
      'Malware or exploit code',
      'Fraudulent systems',
      'Deepfake impersonation',
      'Illegal surveillance',
      'Spam campaigns',
      'Disinformation operations',
      'Harmful automation',
      'Violent or unlawful content',
    ],
    note: 'Violation may result in immediate suspension and reporting where legally required.',
  },
  {
    title: '22. Disclaimer of Warranties',
    paragraphs: ['The Service is provided on an "AS IS" and "AS AVAILABLE" basis.', 'Tokenmetr disclaims all warranties, express or implied, including:'],
    bullets: [
      'Merchantability',
      'Fitness for a particular purpose',
      'Non-infringement',
      'Reliability',
      'Accuracy',
      'Availability',
      'The Service will meet all requirements',
      'Results will be accurate or reliable',
      'Errors will always be corrected',
    ],
  },
  {
    title: '23. Entire Agreement',
    paragraphs: [
      'These Terms, together with the Privacy Policy and any supplemental agreements, constitute the entire agreement between you and Tokenmetr regarding the Service.',
      'They supersede prior agreements, understandings, or communications relating to the subject matter herein.',
    ],
  },
  {
    title: '24. Severability',
    paragraphs: ['If any provision of these Terms is found unenforceable or invalid, the remaining provisions shall remain in full force and effect.'],
  },
  {
    title: '25. Force Majeure',
    paragraphs: ['Tokenmetr shall not be liable for delays or failures caused by events beyond reasonable control, including:'],
    bullets: [
      'Natural disasters',
      'Internet outages',
      'Government actions',
      'Cyberattacks',
      'Labor disputes',
      'Infrastructure failures',
      'Third-party provider outages',
    ],
  },
  {
    title: '26. Assignment',
    paragraphs: [
      'You may not assign or transfer your rights under these Terms without prior written consent.',
      'Tokenmetr may assign its rights and obligations in connection with mergers, acquisitions, corporate restructuring, or asset transfers without restriction.',
    ],
  },
  {
    title: '27. Electronic Communications',
    paragraphs: ['By using the Service, you consent to receiving electronic communications from Tokenmetr, including:'],
    bullets: [
      'Service notices',
      'Security alerts',
      'Billing notifications',
      'Product updates',
      'Legal communications',
    ],
    note: 'These communications satisfy legal requirements for written communication.',
  },
];

type TermsSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: string;
};

function SectionBody({ section }: { section: TermsSection }) {
  return (
    <>
      {section.paragraphs?.map(paragraph => (
        <p key={paragraph} style={{
          margin: '0 0 10px',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '15px',
          lineHeight: 1.75,
          color: '#374151',
        }}>
          {paragraph}
        </p>
      ))}
      {section.bullets && (
        <ul style={{
          margin: '8px 0 10px 20px',
          padding: 0,
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '15px',
          lineHeight: 1.75,
          color: '#374151',
        }}>
          {section.bullets.map(item => <li key={item}>{item}</li>)}
        </ul>
      )}
      {section.note && (
        <p style={{
          margin: '10px 0 0',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '15px',
          lineHeight: 1.75,
          color: '#374151',
        }}>
          {section.note}
        </p>
      )}
    </>
  );
}

export function TermsAndConditionsPage() {
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
            Tokenmetr Legal
          </span>
          <h1 style={{ margin: '10px 0 10px', fontFamily: 'Sora, sans-serif', fontSize: 'clamp(30px, 4vw, 42px)', lineHeight: 1.2, color: '#1A1A1A' }}>
            Terms and Conditions
          </h1>
          <p style={{ margin: '0 0 4px', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', lineHeight: 1.7, color: '#6B7280' }}>
            Last Updated: May 14, 2026
          </p>
          <p style={{ margin: '0 0 28px', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', lineHeight: 1.7, color: '#6B7280' }}>
            Effective Date: May 14, 2026
          </p>

          {termsSections.map(section => (
            <section key={section.title} style={{ borderTop: '1px solid #E5E3DF', paddingTop: '24px', marginTop: '24px' }}>
              <h2 style={{ margin: '0 0 12px', fontFamily: 'Sora, sans-serif', fontSize: '21px', lineHeight: 1.35, color: '#1F2937' }}>
                {section.title}
              </h2>
              <SectionBody section={section} />
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
