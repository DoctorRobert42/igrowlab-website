// Copied verbatim from igrowlab's src/components/ui.jsx:57-66 (WordMark),
// light-mode color resolved directly since this site has no theme toggle.
export function WordMark({ size = 22, style }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'baseline', ...(style || {}) }}>
      <span style={{ fontFamily: "'Lexend',sans-serif", fontWeight: 700, fontSize: size, color: '#3D4144', letterSpacing: -0.3 }}>iGrow</span>
      <span style={{ fontFamily: "'Lexend',sans-serif", fontWeight: 700, fontSize: size, color: '#437852' }}>.</span>
      <span style={{ fontFamily: "'Lexend',sans-serif", fontWeight: 300, fontSize: size, color: '#3D4144' }}>lab</span>
    </span>
  );
}
