import { WordMark } from '../components/WordMark';
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
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <WordMark size={22} />
        <a
          href="#waitlist"
          style={{
            background: C.leaf,
            color: '#fff',
            fontWeight: 700,
            fontSize: 13,
            padding: '10px 18px',
            borderRadius: 12,
          }}
        >
          Join the waitlist
        </a>
      </div>
    </header>
  );
}
