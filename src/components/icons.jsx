// Icons copied verbatim (SVG structure, viewBox, stroke conventions) from
// igrowlab's src/components/icons.jsx. Light-mode only here (no dark/light
// toggle on the marketing site), so iconColor() keeps the same function
// shape as the source but is always called for light mode.
// Trimmed to only the icons actually used, each picked for a real semantic
// fit to its feature card (see commit message for the per-card reasoning).

// Subset of ICON_ROLES actually used below (accent, soil, neutral), values
// copied verbatim from src/constants.js.
const ICON_ROLES = {
  accent: { l: '#4A7856', d: '#9B7FF0' },
  soil: { l: '#7A5A38', d: '#D4A56A' },
  neutral: { l: '#7E837C', d: '#CBD3E2', aL: 0.26, aD: 0.24 },
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

// Precision EC/pH engine — measurement/lab metaphor.
export function FlaskIcon({ size = 30 }) {
  const fg = '#4A7856';
  const bg = '#E3EEE3'; // tileIconColors() literal from icons.jsx, light mode
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" fill="none">
      <circle cx="17" cy="17" r="17" fill={bg} />
      <path d="M14 6h6v6.5l4.5 9.8c.9 2-.5 4.2-2.7 4.2H12.2c-2.2 0-3.6-2.2-2.7-4.2L14 12.5V6z" fill="none" stroke={fg} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M13 6h8" stroke={fg} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// Substrate memory — literal soil/substrate, not a generic plant icon.
export function SoilIcon({ size = 30 }) {
  const { fg, bg } = iconColor('soil');
  return (
    <svg width={size} height={size} viewBox="0 0 34 34">
      <circle cx="17" cy="17" r="17" fill={bg} />
      <path d="M5 24c2-6 7-10 12-10s10 4 12 10z" fill={fg} />
      <circle cx="11" cy="20" r="1" fill="#5E4328" />
      <circle cx="17" cy="16.5" r="1" fill="#5E4328" />
      <circle cx="23" cy="20" r="1" fill="#5E4328" />
      <line x1="3" y1="24" x2="31" y2="24" stroke={fg} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// Built your way — manual editing/configuration, literal pencil.
export function EditIcon({ size = 30 }) {
  const { fg, bg } = iconColor('neutral');
  return (
    <svg width={size} height={size} viewBox="0 0 34 34">
      <circle cx="17" cy="17" r="17" fill={bg} />
      <path d="M11 21.5l-1.6 5.6 5.6-1.6L26.5 14a2.6 2.6 0 000-3.7l-.8-.8a2.6 2.6 0 00-3.7 0z" fill="none" stroke={fg} strokeWidth="2.1" strokeLinejoin="round" />
      <line x1="21" y1="11.5" x2="25.5" y2="16" stroke={fg} strokeWidth="2.1" />
    </svg>
  );
}

// Full cycle log — literal journal/record.
export function BookIcon({ size = 30 }) {
  const { fg, bg } = iconColor('accent');
  return (
    <svg width={size} height={size} viewBox="0 0 34 34">
      <circle cx="17" cy="17" r="17" fill={bg} />
      <g transform="translate(17,17) scale(0.85) translate(-24,-22)">
        <path d="M24 12c-3-2-8-2.4-12-1v22c4-1.4 9-1 12 1 3-2 8-2.4 12-1V11c-4-1.4-9-1-12 1z" fill="none" stroke={fg} strokeWidth="2.1" strokeLinejoin="round" />
        <line x1="24" y1="12" x2="24" y2="34" stroke={fg} strokeWidth="2.1" />
      </g>
    </svg>
  );
}
