import { C } from '../theme';

// The app's own eyebrow-label convention (confirmed via recon: fontSize
// 9-10, weight 700, letterSpacing 2, uppercase), reused here for section
// labels instead of inventing a new typographic pattern for this site.
export function EyebrowLabel({ children, color = C.leaf, style }) {
  return (
    <div
      style={{
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: 2,
        textTransform: 'uppercase',
        color,
        marginBottom: 10,
        ...(style || {}),
      }}
    >
      {children}
    </div>
  );
}
