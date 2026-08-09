import logo from '../assets/logo.png';

// The real standalone graphic mark (LOGO_NOTEXT in the app's constants.js),
// rendered via LogoImg in the app's ui.jsx at size 36 (header) and 110
// (splash-scale) - same component shape, light-mode asset only here.
export function LogoImg({ size = 48, style }) {
  return (
    <img
      src={logo}
      width={size}
      height={size}
      style={{ objectFit: 'contain', display: 'block', ...(style || {}) }}
      alt="iGrow.lab"
    />
  );
}
