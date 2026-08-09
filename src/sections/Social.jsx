import { C } from '../theme';

// No existing app icon for these (Instagram/Telegram aren't part of the
// product's own icon set) - built to match the same duotone disc convention
// (34x34 viewBox, pale fill disc + stroked glyph) rather than pulling in a
// generic icon library.
function InstagramIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34">
      <circle cx="17" cy="17" r="17" fill={C.leafPale} />
      <rect x="9" y="9" width="16" height="16" rx="5" fill="none" stroke={C.leaf} strokeWidth="1.8" />
      <circle cx="17" cy="17" r="4.2" fill="none" stroke={C.leaf} strokeWidth="1.8" />
      <circle cx="22" cy="12" r="1.1" fill={C.leaf} />
    </svg>
  );
}

function TelegramIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34">
      <circle cx="17" cy="17" r="17" fill={C.leafPale} />
      <path
        d="M8 17.6l17-7-3 16-5-4-3 3-.5-5.5z"
        fill="none"
        stroke={C.leaf}
        strokeWidth="1.7"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Social() {
  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px', display: 'flex', justifyContent: 'center', gap: 16 }}>
      <a href="https://www.instagram.com/igrow.lab" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <InstagramIcon />
      </a>
      <a href="https://t.me/iGrow_lab" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
        <TelegramIcon />
      </a>
    </section>
  );
}
