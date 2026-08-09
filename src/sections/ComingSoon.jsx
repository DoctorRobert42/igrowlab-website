import { C } from '../theme';

function StoreBadge({ label, sublabel }) {
  return (
    <a
      href="#waitlist"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 12,
        padding: '10px 18px',
        cursor: 'pointer',
        opacity: 0.6,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: 9, color: C.textDim, letterSpacing: 0.5 }}>{sublabel}</span>
        <span style={{ fontSize: 14, fontWeight: 700, color: C.textMid }}>{label}</span>
      </div>
    </a>
  );
}

export function ComingSoon() {
  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px 72px', textAlign: 'center' }}>
      <div style={{ fontSize: 12, color: C.textDim, marginBottom: 16 }}>Coming soon</div>
      <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
        <StoreBadge sublabel="Download on the" label="App Store" />
        <StoreBadge sublabel="Get it on" label="Google Play" />
      </div>
    </section>
  );
}
