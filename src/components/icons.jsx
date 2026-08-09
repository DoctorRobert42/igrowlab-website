// Icons copied verbatim (SVG structure, viewBox, stroke conventions) from
// igrowlab's src/components/icons.jsx. Light-mode only here (no dark/light
// toggle on the marketing site), so iconColor() keeps the same function
// shape as the source but is always called for light mode.
// Trimmed to only the icons actually used, each picked for a real semantic
// fit to its feature card (see commit message for the per-card reasoning).

// Subset of ICON_ROLES actually used below (accent, soil, neutral, green,
// watch, stageCuring), values copied verbatim from src/constants.js.
const ICON_ROLES = {
  accent: { l: '#4A7856', d: '#9B7FF0' },
  soil: { l: '#7A5A38', d: '#D4A56A' },
  neutral: { l: '#7E837C', d: '#CBD3E2', aL: 0.26, aD: 0.24 },
  green: { l: '#4A7856', d: '#5DBF80' },
  watch: { l: '#F2B632', d: '#F5C84B' },
  stageCuring: { l: '#1A6B8A', d: '#7BA4C2' },
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

// Journal — the leaf-plus-star genetics glyph the app uses for strain
// tracking/rating, fits the "genetics across every strain" copy.
export function GeneticsIcon({ size = 30 }) {
  const { fg, bg } = iconColor('green');
  const star = iconColor('watch').fg;
  return (
    <svg width={size} height={size} viewBox="0 0 34 34">
      <circle cx="17" cy="17" r="17" fill={bg} />
      <path d="M17,2.2 L21.05,11.9 L31.5,12.75 L23.55,19.6 L25.95,29.8 L17,24.35 L8.05,29.8 L10.45,19.6 L2.5,12.75 L12.95,11.9 Z" fill={star} opacity="0.32" />
      <g fill={fg}>
        <path d="M17,25.5 C14.5,18.5 14.5,11.5 17,6.5 C19.5,11.5 19.5,18.5 17,25.5 Z" />
        <path d="M17,25.5 C15,20 15,14.5 17,10.5 C19,14.5 19,20 17,25.5 Z" transform="rotate(-35 17 25.5)" />
        <path d="M17,25.5 C15,20 15,14.5 17,10.5 C19,14.5 19,20 17,25.5 Z" transform="rotate(35 17 25.5)" />
        <path d="M17,25.5 C15.5,21.5 15.5,17.5 17,14.5 C18.5,17.5 18.5,21.5 17,25.5 Z" transform="rotate(-68 17 25.5)" />
        <path d="M17,25.5 C15.5,21.5 15.5,17.5 17,14.5 C18.5,17.5 18.5,21.5 17,25.5 Z" transform="rotate(68 17 25.5)" />
      </g>
      <path d="M17,25.5 L17,28" stroke={fg} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Harvest to cure — the app's curing-jar glyph.
export function CuringIcon({ size = 30 }) {
  const { fg, bg } = iconColor('stageCuring');
  return (
    <svg width={size} height={size} viewBox="0 0 40 44">
      <circle cx="20" cy="22" r="20" fill={bg} />
      <g transform="translate(20,22) scale(0.85) translate(-20,-24)">
        <rect x="11" y="7" width="18" height="5" rx="1" fill={fg} />
        <rect x="9" y="11" width="22" height="4" rx="1.5" fill={fg} />
        <path d="M13 15 h14 l1.5 6 q2 4 2 9 v8 a3 3 0 01-3 3 h-15 a3 3 0 01-3-3 v-8 q0-5 2-9 z" fill="none" stroke={fg} strokeWidth="2.8" strokeLinejoin="round" />
        <line x1="11.5" y1="28" x2="28.5" y2="28" stroke={fg} strokeWidth="1.8" opacity="0.5" />
        <line x1="11" y1="34" x2="29" y2="34" stroke={fg} strokeWidth="1.8" opacity="0.5" />
      </g>
    </svg>
  );
}

// Reference, always on hand — literal reference sheet/table.
export function NotesIcon({ size = 30 }) {
  const { fg, bg } = iconColor('neutral');
  return (
    <svg width={size} height={size} viewBox="0 0 34 34">
      <circle cx="17" cy="17" r="17" fill={bg} />
      <rect x="9" y="8" width="16" height="18" rx="2" fill="none" stroke={fg} strokeWidth="2" strokeLinejoin="round" />
      <line x1="12.5" y1="13" x2="21.5" y2="13" stroke={fg} strokeWidth="1.7" strokeLinecap="round" />
      <line x1="12.5" y1="17" x2="21.5" y2="17" stroke={fg} strokeWidth="1.7" strokeLinecap="round" />
      <line x1="12.5" y1="21" x2="18" y2="21" stroke={fg} strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
