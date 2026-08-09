import { WordMark } from '../components/WordMark';
import { LogoImg } from '../components/LogoImg';
import { C } from '../theme';

export function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: 'rgba(249,248,236,0.9)',
        backdropFilter: 'blur(6px)',
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <LogoImg size={36} />
          <WordMark size={20} />
        </div>
        {/* Compact primary button style copied verbatim from the app's "Unlock Pro"
            button (ui.jsx:731): solid C.accent fill, radius 12, padding "10px 20px". */}
        <a
          href="#waitlist"
          style={{
            background: C.accent,
            color: C.white,
            fontWeight: 700,
            fontSize: 13.5,
            padding: '10px 20px',
            borderRadius: 12,
          }}
        >
          Join the waitlist
        </a>
      </div>
    </header>
  );
}
