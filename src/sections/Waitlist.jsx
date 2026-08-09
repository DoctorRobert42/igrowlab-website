import { useState } from 'react';
import { C } from '../theme';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mykqljll';

export function Waitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="waitlist" style={{ background: C.surface, borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 560, margin: '0 auto', padding: '72px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: C.text, marginBottom: 24 }}>
          Be first when it launches.
        </h2>

        {status === 'success' ? (
          <div
            style={{
              background: C.card,
              border: `1px solid ${C.border}`,
              borderRadius: 14,
              padding: '18px 20px',
              color: C.leaf,
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            You're on the list &mdash; we'll email you when iGrow.lab launches.
          </div>
        ) : (
          <form onSubmit={onSubmit} style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* Input styling copied verbatim from the app's real form-input helper
                (getIS in ui.jsx): border 1.5px C.border, radius 12, fontSize 14. */}
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              style={{
                flex: '1 1 260px',
                minWidth: 220,
                background: C.white,
                border: `1.5px solid ${C.border}`,
                borderRadius: 12,
                padding: '9px 14px',
                fontSize: 14,
                color: C.text,
                outline: 'none',
              }}
            />
            {/* Compact variant of the real pale-tint button pattern, copied verbatim
                from the app's "See Pro" button (ui.jsx:747) - see Hero.jsx/Header.jsx
                for the fuller PBtn recon note. */}
            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                background: C.accentPale,
                color: C.accentLight,
                border: `1px solid ${C.accent}`,
                fontWeight: 700,
                fontSize: 13.5,
                borderRadius: 12,
                padding: '10px 20px',
                cursor: status === 'loading' ? 'default' : 'pointer',
                opacity: status === 'loading' ? 0.7 : 1,
              }}
            >
              {status === 'loading' ? 'Sending...' : 'Notify me'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <div style={{ marginTop: 12, fontSize: 13, color: C.danger }}>
            Something went wrong &mdash; please try again.
          </div>
        )}
      </div>
    </section>
  );
}
