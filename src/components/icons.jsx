// Icons copied verbatim (SVG structure, viewBox, stroke conventions) from
// igrowlab's src/components/icons.jsx. Light-mode only here (no dark/light
// toggle on the marketing site), so iconColor()/tileIconColors() keep the
// same function shape as the source but are always called for light mode.

// Subset of ICON_ROLES actually used by the icons below (accent, lampGold),
// values copied verbatim from src/constants.js.
const ICON_ROLES = {
  accent: { l: '#4A7856', d: '#9B7FF0' },
  lampGold: { l: '#F2B632', d: '#F2B632' },
};

function withAlpha(hex, a) {
  let h = hex.replace('#', '');
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  const n = parseInt(h, 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}

function iconColor(role, isDark = false) {
  const p = ICON_ROLES[role] || ICON_ROLES.neutral;
  const fg = isDark ? p.d : p.l;
  const a = isDark ? (p.aD ?? 0.16) : (p.aL ?? 0.16);
  return { fg, bg: withAlpha(fg, a) };
}

function tileIconColors(isDark = false) {
  return {
    fg: isDark ? '#9B7FF0' : '#4A7856',
    bg: isDark ? withAlpha('#7B5FE0', 0.16) : '#E3EEE3',
  };
}

export function GrowTentIcon({ size = 22 }) {
  const { fg, bg } = iconColor('accent');
  return (
    <svg width={size} height={size} viewBox="0 0 34 34">
      <circle cx="17" cy="17" r="17" fill={bg} />
      <path d="M6 10c.4-.9 1.3-1.4 2.6-1.6h16.8c1.3.2 2.2.7 2.6 1.6v15c-.4.9-1.3 1.4-2.6 1.6H8.6c-1.3-.2-2.2-.7-2.6-1.6z" fill="none" stroke={fg} strokeWidth="2" strokeLinejoin="round" />
      <line x1="17" y1="9" x2="17" y2="25" stroke={fg} strokeWidth="1.8" />
      <line x1="11.5" y1="16.5" x2="14" y2="16.5" stroke={fg} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="20" y1="16.5" x2="22.5" y2="16.5" stroke={fg} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function FlaskIcon({ size = 30 }) {
  const { fg, bg } = tileIconColors();
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" fill="none">
      <circle cx="17" cy="17" r="17" fill={bg} />
      <path d="M14 6h6v6.5l4.5 9.8c.9 2-.5 4.2-2.7 4.2H12.2c-2.2 0-3.6-2.2-2.7-4.2L14 12.5V6z" fill="none" stroke={fg} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M13 6h8" stroke={fg} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function SunIcon({ size = 22 }) {
  const { fg, bg } = iconColor('lampGold');
  return (
    <svg width={size} height={size} viewBox="0 0 34 34">
      <circle cx="17" cy="17" r="17" fill={bg} />
      <circle cx="17" cy="17" r="7" fill={fg} />
      <line x1="17" y1="3" x2="17" y2="7" stroke={fg} strokeWidth="2" strokeLinecap="round" />
      <line x1="17" y1="27" x2="17" y2="31" stroke={fg} strokeWidth="2" strokeLinecap="round" />
      <line x1="3" y1="17" x2="7" y2="17" stroke={fg} strokeWidth="2" strokeLinecap="round" />
      <line x1="27" y1="17" x2="31" y2="17" stroke={fg} strokeWidth="2" strokeLinecap="round" />
      <line x1="6.5" y1="6.5" x2="9.3" y2="9.3" stroke={fg} strokeWidth="2" strokeLinecap="round" />
      <line x1="24.7" y1="24.7" x2="27.5" y2="27.5" stroke={fg} strokeWidth="2" strokeLinecap="round" />
      <line x1="6.5" y1="27.5" x2="9.3" y2="24.7" stroke={fg} strokeWidth="2" strokeLinecap="round" />
      <line x1="24.7" y1="9.3" x2="27.5" y2="6.5" stroke={fg} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PlantsIcon({ size = 22 }) {
  const { fg, bg } = tileIconColors();
  return (
    <svg width={size} height={size} viewBox="0 0 34 34">
      <circle cx="17" cy="17" r="17" fill={bg} />
      <g fill={fg}>
        <path d="M17,26 C14.5,19 14.5,12 17,6 C19.5,12 19.5,19 17,26 Z" />
        <path d="M17,26 C15,20.5 15,14.5 17,10 C19,14.5 19,20.5 17,26 Z" transform="rotate(-28 17 26)" />
        <path d="M17,26 C15,20.5 15,14.5 17,10 C19,14.5 19,20.5 17,26 Z" transform="rotate(28 17 26)" />
        <path d="M17,26 C15.5,22 15.5,17.5 17,14 C18.5,17.5 18.5,22 17,26 Z" transform="rotate(-56 17 26)" />
        <path d="M17,26 C15.5,22 15.5,17.5 17,14 C18.5,17.5 18.5,22 17,26 Z" transform="rotate(56 17 26)" />
        <path d="M17,26 C16,23 16,20 17,17.5 C18,20 18,23 17,26 Z" transform="rotate(-82 17 26)" />
        <path d="M17,26 C16,23 16,20 17,17.5 C18,20 18,23 17,26 Z" transform="rotate(82 17 26)" />
      </g>
      <path d="M17,26 L17,29.5" stroke={fg} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
