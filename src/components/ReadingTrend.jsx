import { C } from '../theme';

// Signature visual: a row of dots standing in for "your last twelve
// waterings" (the exact detail from the approved Professor Terpenov copy).
// Mostly calm green, the last couple ticking toward the app's real watch/warn
// tones — a literal, on-brand picture of trend detection, not a generic
// AI-sparkle icon or chat bubble.
const LEVELS = ['leaf', 'leaf', 'leaf', 'leaf', 'leaf', 'leaf', 'leaf', 'leaf', 'leaf', 'watch', 'watch', 'warn'];

export function ReadingTrend({ size = 14, gap = 8 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap }}>
      {LEVELS.map((level, i) => {
        const color = level === 'warn' ? C.warn : level === 'watch' ? C.watch : C.leaf;
        const h = size + i * 1.4;
        return (
          <div
            key={i}
            title={`Watering ${i + 1}`}
            style={{
              width: size,
              height: h,
              borderRadius: size / 2,
              background: color,
              opacity: level === 'leaf' ? 0.75 : 1,
            }}
          />
        );
      })}
    </div>
  );
}
