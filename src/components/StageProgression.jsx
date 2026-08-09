import { C } from '../theme';

// Distinct from ReadingTrend on purpose: this represents the full grow-cycle
// arc (seed -> veg/flower -> harvest), not EC drift across waterings. Used
// once, on the "Full cycle log" feature card.
const STAGES = [
  { color: '#7A5A38', label: 'Seed' },
  { color: C.leaf, label: 'Veg' },
  { color: C.watch, label: 'Flower' },
  { color: '#2D7D46', label: 'Harvest' },
];

export function StageProgression({ size = 10, gap = 6 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap }}>
      {STAGES.map((s, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap }}>
          <div title={s.label} style={{ width: size, height: size, borderRadius: '50%', background: s.color }} />
          {i < STAGES.length - 1 && <div style={{ width: 14, height: 2, background: C.border }} />}
        </div>
      ))}
    </div>
  );
}
