import { FlaskIcon, SunIcon, PlantsIcon, GrowTentIcon } from '../components/icons';
import { StageProgression } from '../components/StageProgression';
import { EyebrowLabel } from '../components/EyebrowLabel';
import { C, R } from '../theme';

const FEATURES = [
  {
    icon: <FlaskIcon size={30} />,
    title: 'Precision EC/pH engine',
    body: "targets that shift with your plant's actual phase, substrate, and pot size, calculated fresh every time, never a fixed chart you have to interpret yourself.",
  },
  {
    icon: <SunIcon size={30} />,
    title: 'Professor Terpenov',
    body: "reads your last twelve waterings before every analysis, EC, pH, runoff, doses. Catches the trend, not just today's number.",
  },
  {
    icon: <PlantsIcon size={30} />,
    title: 'Substrate memory',
    body: 'knows what your soil is still holding onto between waterings.',
  },
  {
    icon: <GrowTentIcon size={30} />,
    title: 'Built your way',
    body: 'every threshold, every nutrient ratio, every cycle stage and seedling ramp. Set it manually, exactly how you grow.',
  },
  {
    icon: <StageProgression size={11} gap={5} />,
    title: 'Full cycle log',
    body: 'every watering, every photo, every note, one continuous record from seed to harvest.',
  },
];

function FeatureCard({ icon, title, body }) {
  return (
    <div
      style={{
        background: C.card,
        border: `1px solid ${C.border}`,
        borderRadius: R.card,
        padding: '26px 24px',
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 16,
        }}
      >
        {icon}
      </div>
      <h3 style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 8 }}>{title}</h3>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMid }}>{body}</p>
    </div>
  );
}

export function Features() {
  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px' }}>
      <EyebrowLabel style={{ textAlign: 'center' }}>What it actually does</EyebrowLabel>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 18,
          marginTop: 8,
        }}
      >
        {FEATURES.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
}
