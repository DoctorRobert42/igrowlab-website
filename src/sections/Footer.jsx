import { WordMark } from '../components/WordMark';
import { C } from '../theme';

const LINKS = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Impressum', href: '/impressum' },
];

export function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${C.border}` }}>
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '32px 24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <WordMark size={17} />
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} style={{ fontSize: 12, color: C.textDim }}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
