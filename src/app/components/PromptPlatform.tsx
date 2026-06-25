import React, { useMemo, useState } from 'react';
import { BarChart3, Check, Coins, Copy, Gauge, Loader2, Percent, Send, Sparkles } from 'lucide-react';

type PlatformKey = 'chatgpt' | 'claude' | 'gemini' | 'perplexity';

type CompressionResponse = {
  ok: boolean;
  compressed?: string;
  error?: string;
  tokenUsage?: {
    originalTokens: number;
    compressedTokens: number;
    savedTokens: number;
    savedPercent: number;
    estimatedOutputSavedTokens: number;
    outputSavingsPercent: number;
    costSavedUsd: number;
    platformUsed: string;
    strategyUsed: string;
  };
  engine?: string;
};

const API_BASE_URL = (import.meta as ImportMeta & { env?: { VITE_API_BASE_URL?: string } }).env?.VITE_API_BASE_URL || 'http://127.0.0.1:8787';
const DEVICE_SIGNATURE_KEY = 'tokenmetr_device_signature';

const platformConfig: Array<{ label: string; value: PlatformKey; models: string[] }> = [
  {
    label: 'ChatGPT',
    value: 'chatgpt',
    models: [
      'gpt-5.2-pro',
      'gpt-5.2',
      'gpt-5.1',
      'gpt-5',
      'gpt-5-mini',
      'gpt-5-nano',
      'gpt-4.1',
      'gpt-4.1-mini',
      'gpt-4.1-nano',
      'gpt-4o',
      'gpt-4o-mini',
      'o4-mini',
      'o3',
      'o3-mini',
      'o1',
      'o1-mini',
      'gpt-4-turbo',
      'gpt-4',
      'gpt-3.5-turbo',
    ],
  },
  {
    label: 'Claude',
    value: 'claude',
    models: [
      'claude-4.7-opus',
      'claude-4.6-opus',
      'claude-4.5-opus',
      'claude-4.1-opus',
      'claude-4-opus',
      'claude-4.6-sonnet',
      'claude-4.5-sonnet',
      'claude-4-sonnet',
      'claude-3.7-sonnet',
      'claude-3.5-sonnet',
      'claude-4.5-haiku',
      'claude-3.5-haiku',
      'claude-3-haiku',
      'claude-3-opus',
    ],
  },
  {
    label: 'Gemini',
    value: 'gemini',
    models: [
      'gemini-2.5-pro',
      'gemini-2.5-flash',
      'gemini-2.0-flash',
      'gemini-2.0-flash-lite',
      'gemini-1.5-pro',
      'gemini-1.5-flash',
      'gemini-1.5-flash-8b',
      'gemini-pro',
    ],
  },
  {
    label: 'Perplexity',
    value: 'perplexity',
    models: [
      'sonar-pro',
      'sonar',
      'sonar-reasoning-pro',
      'sonar-reasoning',
    ],
  },
];

function getOrCreateDeviceSignature() {
  const existing = window.localStorage.getItem(DEVICE_SIGNATURE_KEY);
  if (existing) return existing;

  const generated = `web-${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`;
  window.localStorage.setItem(DEVICE_SIGNATURE_KEY, generated);
  return generated;
}

const estimateTokens = (text: string) => Math.max(0, Math.ceil(text.trim().length / 4));

export function PromptPlatform() {
  const [platform, setPlatform] = useState<PlatformKey>('chatgpt');
  const modelsForSelectedPlatform = useMemo(
    () => platformConfig.find(item => item.value === platform)?.models ?? [],
    [platform],
  );
  const [model, setModel] = useState(modelsForSelectedPlatform[0] || '');
  const [prompt, setPrompt] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [result, setResult] = useState<CompressionResponse | null>(null);
  const [copied, setCopied] = useState(false);

  const currentPlatformLabel = platformConfig.find(item => item.value === platform)?.label ?? 'Platform';
  const originalTokenEstimate = estimateTokens(prompt);
  const optimizedText = result?.compressed || '';
  const tokenUsage = result?.tokenUsage;
  const compressedTokenCount = tokenUsage?.compressedTokens ?? 0;
  const reductionPercent = tokenUsage ? Math.round(tokenUsage.savedPercent) : 0;
  const costSaved = tokenUsage ? `$${tokenUsage.costSavedUsd.toFixed(4)}` : '$0.0000';
  const outputTokensSaved = tokenUsage?.estimatedOutputSavedTokens ?? 0;
  const outputReductionPercent = tokenUsage ? Math.round(tokenUsage.outputSavingsPercent) : 0;
  const metricCards = [
    {
      icon: Gauge,
      label: 'Input tokens',
      value: tokenUsage?.originalTokens ?? originalTokenEstimate,
      note: 'Measured from entered prompt',
    },
    {
      icon: Sparkles,
      label: 'Compressed tokens',
      value: tokenUsage ? compressedTokenCount : '-',
      note: `For ${model}`,
    },
    {
      icon: Percent,
      label: 'Reduction',
      value: tokenUsage ? `${reductionPercent}%` : '-',
      note: 'Prompt token reduction',
    },
    {
      icon: Coins,
      label: 'Cost saved',
      value: tokenUsage ? costSaved : '-',
      note: `Based on ${currentPlatformLabel} model`,
    },
    {
      icon: BarChart3,
      label: 'Output saved',
      value: tokenUsage ? outputTokensSaved : '-',
      note: tokenUsage ? `${outputReductionPercent}% estimated output reduction` : 'Estimated after optimization',
    },
  ];

  const handlePlatformChange = (nextPlatform: PlatformKey) => {
    const nextModels = platformConfig.find(item => item.value === nextPlatform)?.models ?? [];
    setPlatform(nextPlatform);
    setModel(nextModels[0] || '');
    setStatus('idle');
    setErrorMessage('');
    setResult(null);
  };

  const handleOptimize = async () => {
    const trimmedPrompt = prompt.trim();
    if (!trimmedPrompt) return;

    setStatus('loading');
    setErrorMessage('');
    setResult(null);
    setCopied(false);

    try {
      const signature = getOrCreateDeviceSignature();
      const response = await fetch(`${API_BASE_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-device-signature': signature,
        },
        body: JSON.stringify({
          text: trimmedPrompt,
          platform,
          model,
          level: 'moderate',
        }),
      });

      const data = (await response.json()) as CompressionResponse;
      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'Optimization failed');
      }

      setResult(data);
      setStatus('done');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong while optimizing prompt.');
    }
  };

  const handleCopyCompressed = async () => {
    if (!result?.compressed) return;
    try {
      await navigator.clipboard.writeText(result.compressed);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="prompt-platform"
      style={{
        background: '#FDFCFA',
        minHeight: 'calc(100vh - 64px)',
        padding: '0 32px 72px',
      }}
    >
      <div style={{ maxWidth: '1520px', margin: '0 auto' }}>
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            margin: '0 -32px 28px',
            padding: '42px 32px 44px',
            background: 'linear-gradient(135deg, #FFF7EE 0%, #FDFCFA 52%, #FEF3E8 100%)',
            borderBottom: '1px solid rgba(232,119,34,0.16)',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(232,119,34,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(232,119,34,0.07) 1px, transparent 1px)',
              backgroundSize: '44px 44px',
              pointerEvents: 'none',
            }}
          />
          <div
            className="prompt-platform-hero"
            style={{
              position: 'relative',
              zIndex: 1,
              maxWidth: '1520px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(300px, 420px)',
              gap: '42px',
              alignItems: 'center',
            }}
          >
            <div>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#FFFFFF',
                  border: '1px solid #F5A53A',
                  borderRadius: '999px',
                  padding: '7px 12px',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#E87722',
                  marginBottom: '18px',
                  boxShadow: '0 8px 20px rgba(232,119,34,0.10)',
                }}
              >
                <Sparkles size={14} /> Prompt optimization tester
              </span>
              <h1
                style={{
                  margin: '0 0 14px 0',
                  fontFamily: 'Sora, sans-serif',
                  fontSize: 'clamp(34px, 4.8vw, 58px)',
                  lineHeight: 1.04,
                  color: '#1A1A1A',
                  maxWidth: '880px',
                }}
              >
                Compare your original prompt with a cleaner, lower-cost version.
              </h1>
              <p
                style={{
                  margin: '0 0 24px 0',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '18px',
                  lineHeight: 1.7,
                  color: '#5A6472',
                  maxWidth: '820px',
                }}
              >
                This workspace is built for testing one prompt at a time: choose the model, paste your text, and see token usage, cost savings, and output savings beside the optimized prompt.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {['Side-by-side comparison', 'Model-based savings', 'Copy-ready output'].map(item => (
                  <span
                    key={item}
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #E5E3DF',
                      borderRadius: '999px',
                      padding: '9px 12px',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#4B5563',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(232,119,34,0.18)',
                borderRadius: '18px',
                padding: '18px',
                boxShadow: '0 22px 52px rgba(232,119,34,0.12)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F5A53A' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22C55E' }} />
                <span style={{ marginLeft: '8px', fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#6B7280' }}>
                  TokenMetr preview
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                <div style={{ background: '#FFF7EE', border: '1px solid #FED7AA', borderRadius: '12px', padding: '12px' }}>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 800, color: '#E87722', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Original
                  </div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', lineHeight: 1.45, color: '#374151' }}>
                    Write a detailed plan for improving our onboarding emails...
                  </div>
                </div>
                <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '12px', padding: '12px' }}>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 800, color: '#16A34A', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Optimized
                  </div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', lineHeight: 1.45, color: '#1F2937' }}>
                    Improve B2B SaaS onboarding emails for activation and retention.
                  </div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {[
                  ['Input', tokenUsage?.originalTokens ?? originalTokenEstimate],
                  ['Saved', tokenUsage ? `${reductionPercent}%` : 'Ready'],
                  ['Cost', tokenUsage ? costSaved : 'Run test'],
                ].map(([label, value]) => (
                  <div key={label} style={{ background: '#F9FAFB', borderRadius: '10px', padding: '10px', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', fontWeight: 800, color: '#E87722', marginBottom: '3px' }}>{value}</div>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 800, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            padding: '0',
          }}
        >
          <div
            className="prompt-metrics-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
              gap: '12px',
              marginBottom: '18px',
            }}
          >
            {metricCards.map(metric => (
              <div
                key={metric.label}
                style={{
                  background: metric.label === 'Compressed tokens' || metric.label === 'Reduction' ? '#F0FDF4' : '#FFF7EE',
                  border: metric.label === 'Compressed tokens' || metric.label === 'Reduction' ? '1px solid #BBF7D0' : '1px solid #FED7AA',
                  borderRadius: '12px',
                  padding: '14px',
                  minHeight: '98px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '10px' }}>
                  <metric.icon size={15} style={{ color: metric.label === 'Compressed tokens' || metric.label === 'Reduction' ? '#16A34A' : '#E87722' }} />
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 800, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {metric.label}
                  </span>
                </div>
                <div style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(20px, 2.4vw, 28px)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1 }}>
                  {metric.value}
                </div>
                <div style={{ marginTop: '8px', fontFamily: 'DM Sans, sans-serif', fontSize: '12px', lineHeight: 1.35, color: '#6B7280' }}>
                  {metric.note}
                </div>
              </div>
            ))}
          </div>

          <div className="prompt-workspace" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
            <div style={{ border: '1px solid #E5E3DF', borderRadius: '14px', overflow: 'hidden', background: '#F9FAFB' }}>
              <div style={{ padding: '14px 16px', borderBottom: '1px solid #E5E3DF', display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 800, color: '#374151' }}>
                  Entered prompt
                </span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#E87722', fontWeight: 700 }}>
                  {originalTokenEstimate} tokens
                </span>
              </div>
              <textarea
                value={prompt}
                onChange={event => {
                  setPrompt(event.target.value);
                  if (status !== 'idle') {
                    setStatus('idle');
                    setErrorMessage('');
                    setResult(null);
                  }
                }}
                placeholder="Paste your prompt here..."
                style={{
                  width: '100%',
                  minHeight: '340px',
                  boxSizing: 'border-box',
                  padding: '16px',
                  border: 'none',
                  outline: 'none',
                  background: '#F9FAFB',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  lineHeight: 1.65,
                  color: '#1F2937',
                  resize: 'vertical',
                }}
              />
            </div>

            <div style={{ border: '1px solid #86EFAC', borderRadius: '14px', overflow: 'hidden', background: '#F0FDF4' }}>
              <div style={{ padding: '10px 16px', borderBottom: '1px solid #BBF7D0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', minHeight: '48px' }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 800, color: '#166534', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <Sparkles size={15} /> Optimized prompt
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {result?.tokenUsage && (
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#16A34A', fontWeight: 700 }}>
                      {compressedTokenCount} tokens
                    </span>
                  )}
                  {optimizedText && (
                    <button
                      type="button"
                      onClick={handleCopyCompressed}
                      style={{
                        border: '1px solid #86EFAC',
                        background: '#FFFFFF',
                        color: '#166534',
                        borderRadius: '6px',
                        padding: '4px 10px',
                        cursor: 'pointer',
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '12px',
                        fontWeight: 700,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#E8F5E9';
                        e.currentTarget.style.borderColor = '#66BB6A';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = '#FFFFFF';
                        e.currentTarget.style.borderColor = '#86EFAC';
                      }}
                    >
                      {copied ? (
                        <>
                          <Check size={13} /> Copied
                        </>
                      ) : (
                        <>
                          <Copy size={13} /> Copy
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>

              <div
                style={{
                  minHeight: '340px',
                  boxSizing: 'border-box',
                  padding: '16px',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  lineHeight: 1.65,
                  color: optimizedText ? '#1F2937' : '#6B7280',
                  whiteSpace: 'pre-wrap',
                  overflowY: 'auto',
                }}
              >
                {optimizedText || 'Your optimized prompt will appear here after TokenMetr compresses the original.'}
              </div>
            </div>
          </div>

          <div className="prompt-controls" style={{ display: 'grid', gridTemplateColumns: 'minmax(190px, 0.6fr) minmax(220px, 1fr) auto', gap: '14px', margin: '18px 0', alignItems: 'end', background: '#FFFFFF', border: '1px solid #E5E3DF', borderRadius: '16px', padding: '16px', boxShadow: '0 12px 34px rgba(0,0,0,0.05)' }}>
            <label style={{ display: 'block' }}>
              <span style={{ display: 'block', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#374151', marginBottom: '8px', fontWeight: 700 }}>
                Platform
              </span>
              <select
                value={platform}
                onChange={event => handlePlatformChange(event.target.value as PlatformKey)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  border: '1px solid #E5E3DF',
                  background: '#FFFFFF',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                }}
              >
                {platformConfig.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label style={{ display: 'block' }}>
              <span style={{ display: 'block', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#374151', marginBottom: '8px', fontWeight: 700 }}>
                Model
              </span>
              <select
                value={model}
                onChange={event => setModel(event.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  border: '1px solid #E5E3DF',
                  background: '#FFFFFF',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                }}
              >
                {modelsForSelectedPlatform.map(modelOption => (
                  <option key={modelOption} value={modelOption}>
                    {modelOption}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="button"
              onClick={handleOptimize}
              disabled={status === 'loading' || !prompt.trim()}
              style={{
                background: !prompt.trim() || status === 'loading' ? '#D1D5DB' : 'linear-gradient(135deg, #E87722, #F5A53A)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '10px',
                padding: '13px 18px',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '15px',
                fontWeight: 700,
                cursor: !prompt.trim() || status === 'loading' ? 'not-allowed' : 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                minWidth: '168px',
              }}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> Optimizing
                </>
              ) : (
                <>
                  Optimize <Send size={16} />
                </>
              )}
            </button>
          </div>

          {status === 'error' && (
            <p style={{ margin: '14px 0 0 0', fontFamily: 'DM Sans, sans-serif', color: '#DC2626', fontSize: '14px' }}>
              {errorMessage}
            </p>
          )}


        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 900px) {
          .prompt-platform-hero,
          .prompt-controls,
          .prompt-workspace,
          .prompt-metrics-grid,
          .prompt-result-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
