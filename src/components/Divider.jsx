import { ReadingTrend } from './ReadingTrend';

// The signature motif, echoed once, faintly, as a transition between
// Problem and Features - kept sparing on purpose so it stays a signature
// rather than decoration repeated into meaninglessness.
export function Divider() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 24px', opacity: 0.5 }}>
      <ReadingTrend size={5} gap={5} />
    </div>
  );
}
