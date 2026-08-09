import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { C } from '../theme';

export function LegalPage({ title, subtitle, children }) {
  return (
    <div>
      <Header waitlistHref="/#waitlist" />
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '64px 24px 96px' }}>
        <a href="/" style={{ display: 'inline-block', fontSize: 14, fontWeight: 600, color: C.leaf, marginBottom: 24 }}>
          ← Back to iGrow.lab
        </a>
        <h1 style={{ fontSize: 32, fontWeight: 700, color: C.text, marginBottom: subtitle ? 8 : 32 }}>{title}</h1>
        {subtitle && <p style={{ fontSize: 14, color: C.textDim, marginBottom: 32 }}>{subtitle}</p>}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontSize: 15, lineHeight: 1.7, color: C.textMid }}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function Section({ title, children }) {
  return (
    <section>
      <h2 style={{ fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 10 }}>{title}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>{children}</div>
    </section>
  );
}
