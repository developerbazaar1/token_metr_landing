import React, { useMemo, useState } from 'react';
import { ArrowLeft, Check, Copy, Loader2, Send, Sparkles } from 'lucide-react';

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

export function PromptPlatform() {
  const goHome = () => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

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
      const response = await fetch(`${API_BASE_URL}/api/compress`, {
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
        padding: '72px 24px',
      }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
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
            marginBottom: '20px',
            padding: 0,
          }}
        >
          <ArrowLeft size={16} /> Back to landing page
        </button>

        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #E5E3DF',
            borderRadius: '16px',
            padding: '28px',
            boxShadow: '0 12px 36px rgba(0,0,0,0.06)',
          }}
        >
          <h2
            style={{
              margin: '0 0 10px 0',
              fontFamily: 'Sora, sans-serif',
              fontSize: 'clamp(26px, 4vw, 36px)',
              color: '#1A1A1A',
            }}
          >
            Prompt Platform
          </h2>
          <p
            style={{
              margin: '0 0 22px 0',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '16px',
              color: '#6B7280',
            }}
          >
            Select platform and model, paste your prompt, and run backend optimization.
          </p>

          <label
            style={{
              display: 'block',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              color: '#374151',
              marginBottom: '8px',
            }}
          >
            Platform
          </label>
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
              marginBottom: '16px',
            }}
          >
            {platformConfig.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <label
            style={{
              display: 'block',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              color: '#374151',
              marginBottom: '8px',
            }}
          >
            Model
          </label>
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
              marginBottom: '16px',
            }}
          >
            {modelsForSelectedPlatform.map(modelOption => (
              <option key={modelOption} value={modelOption}>
                {modelOption}
              </option>
            ))}
          </select>

          <label
            style={{
              display: 'block',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              color: '#374151',
              marginBottom: '8px',
            }}
          >
            Prompt text
          </label>
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
            rows={8}
            placeholder="Paste your prompt here..."
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '14px 16px',
              borderRadius: '10px',
              border: '1px solid #E5E3DF',
              background: '#F9FAFB',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              lineHeight: 1.6,
              marginBottom: '16px',
              resize: 'vertical',
            }}
          />

          <button
            type="button"
            onClick={handleOptimize}
            disabled={status === 'loading' || !prompt.trim()}
            style={{
              background: !prompt.trim() || status === 'loading' ? '#D1D5DB' : '#E87722',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '10px',
              padding: '12px 20px',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              fontWeight: 600,
              cursor: !prompt.trim() || status === 'loading' ? 'not-allowed' : 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> Optimizing...
              </>
            ) : (
              <>
                Optimize Prompt <Send size={16} />
              </>
            )}
          </button>

          {status === 'error' && (
            <p style={{
              margin: '14px 0 0 0',
              fontFamily: 'DM Sans, sans-serif',
              color: '#DC2626',
              fontSize: '14px',
            }}>
              {errorMessage}
            </p>
          )}

          {status === 'done' && result?.compressed && result.tokenUsage && (
            <div style={{
              marginTop: '22px',
              borderTop: '1px solid #E5E3DF',
              paddingTop: '20px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '8px',
                marginBottom: '12px',
                fontFamily: 'DM Sans, sans-serif',
                color: '#166534',
                fontWeight: 700,
              }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <Sparkles size={16} />
                  Optimization complete
                </span>
                <button
                  type="button"
                  onClick={handleCopyCompressed}
                  style={{
                    border: '1px solid #D1D5DB',
                    background: '#FFFFFF',
                    color: '#374151',
                    borderRadius: '8px',
                    padding: '6px 10px',
                    cursor: 'pointer',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  {copied ? (
                    <>
                      <Check size={14} /> Copied
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> Copy
                    </>
                  )}
                </button>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '0',
                border: '1px solid #E5E7EB',
                borderRadius: '10px',
                overflow: 'hidden',
                marginBottom: '12px',
                background: '#F9FAFB',
              }}>
                <div style={{ padding: '10px 12px', textAlign: 'center', borderRight: '1px solid #E5E7EB' }}>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', color: '#111827', fontSize: '15px', fontWeight: 700 }}>
                    {result.tokenUsage.originalTokens} → {result.tokenUsage.compressedTokens}
                  </div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', color: '#6B7280', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Tokens
                  </div>
                </div>
                <div style={{ padding: '10px 12px', textAlign: 'center', borderRight: '1px solid #E5E7EB' }}>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', color: '#D97706', fontSize: '15px', fontWeight: 700 }}>
                    {Math.round(result.tokenUsage.savedPercent)}%
                  </div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', color: '#6B7280', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Reduced
                  </div>
                </div>
                <div style={{ padding: '10px 12px', textAlign: 'center', borderRight: '1px solid #E5E7EB' }}>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', color: '#2563EB', fontSize: '15px', fontWeight: 700 }}>
                    {result.tokenUsage.savedTokens}
                  </div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', color: '#6B7280', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Tokens saved · -${result.tokenUsage.costSavedUsd.toFixed(4)}
                  </div>
                </div>
                <div style={{ padding: '10px 12px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', color: '#B45309', fontSize: '15px', fontWeight: 700 }}>
                    {result.tokenUsage.estimatedOutputSavedTokens}
                  </div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', color: '#6B7280', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Output saved · -{Math.round(result.tokenUsage.outputSavingsPercent)}%
                  </div>
                </div>
              </div>

              <div style={{
                background: '#F0FDF4',
                border: '1px solid #86EFAC',
                borderRadius: '10px',
                padding: '12px 14px',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                color: '#1F2937',
                lineHeight: 1.6,
                whiteSpace: 'pre-wrap',
                height: '220px',
                overflowY: 'auto',
              }}>
                {result.compressed}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
