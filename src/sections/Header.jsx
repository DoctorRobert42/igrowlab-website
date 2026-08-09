import { WordMark } from '../components/WordMark';
import { LogoImg } from '../components/LogoImg';
import { C } from '../theme';

export function Header({ waitlistHref = '#waitlist' }) {
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
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <LogoImg size={36} />
          <WordMark size={20} />
        </a>
        {/* Compact variant of the real pale-tint button pattern, copied verbatim from
            the app's "See Pro" button (ui.jsx:747) - same accentPale/accent/accentLight
            triad as PBtn, at a smaller radius/padding for this compact inline context. */}
        <a
          href={waitlistHref}
          style={{
            background: C.accentPale,
            color: C.accentLight,
            border: `1px solid ${C.accent}`,
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
