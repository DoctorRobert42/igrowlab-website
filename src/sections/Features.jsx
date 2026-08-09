import { FlaskIcon, SoilIcon, EditIcon, BookIcon, GeneticsIcon, CuringIcon, NotesIcon } from '../components/icons';
import { EyebrowLabel } from '../components/EyebrowLabel';
import professor from '../assets/professor.jpg';
import { C, R } from '../theme';

const ICON_FEATURES = [
  {
    icon: <FlaskIcon size={30} />,
    title: 'Precision EC/pH engine',
    body: "targets that shift with your plant's actual phase, substrate, and pot size, calculated fresh every time, never a fixed chart you have to interpret yourself.",
  },
  {
    icon: <SoilIcon size={30} />,
    title: 'Substrate memory',
    body: 'knows what your soil is still holding onto between waterings.',
  },
  {
    icon: <EditIcon size={30} />,
    title: 'Built your way',
    body: 'every threshold, every nutrient ratio, every cycle stage and seedling ramp. Set it manually, exactly how you grow.',
  },
  {
    icon: <BookIcon size={30} />,
    title: 'Full cycle log',
    body: 'every watering, every photo, every note, one continuous record from seed to harvest.',
  },
  {
    icon: <GeneticsIcon size={30} />,
    title: 'Journal',
    body: "Every finished grow gets summarized automatically: yield efficiency, EC and pH drift, a professor-written verdict. Plus genetics tracking across every strain you've grown, cycle after cycle.",
  },
  {
    icon: <CuringIcon size={30} />,
    title: 'Harvest to cure',
    body: 'Guided stages from harvest through drying and curing, with real environment logging and concrete humidity and timing targets at every step.',
  },
  {
    icon: <NotesIcon size={30} />,
    title: 'Reference, always on hand',
    body: 'Every EC and pH target, every nutrient table, built right into the app. No digging through old forum posts mid-watering.',
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
      <div style={{ width: 52, height: 52, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
        {icon}
      </div>
      <h3 style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 8 }}>{title}</h3>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMid }}>{body}</p>
    </div>
  );
}

// The real ProfCard treatment, copied verbatim from ui.jsx:388-408: solid
// C.leaf background, R.card radius, 55x55 circular avatar (borderRadius:28)
// next to an uppercase "PROF. TERPENOV" pill badge (bg rgba(255,255,255,0.18)
// on the green card). This is the actual card the app uses everywhere it
// shows the Professor - not an approximation.
function ProfessorCard() {
  return (
    <div
      style={{
        background: C.leaf,
        borderRadius: R.card,
        padding: '22px 24px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <img src={professor} style={{ width: 55, height: 55, borderRadius: 28, objectFit: 'cover', flexShrink: 0 }} alt="Prof. Terpenov" />
        <span
          style={{
            background: 'rgba(255,255,255,0.18)',
            borderRadius: 8,
            padding: '3px 10px',
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: 2,
            color: 'rgba(255,255,255,0.95)',
            textTransform: 'uppercase',
          }}
        >
          Prof. Terpenov
        </span>
      </div>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.88)' }}>
        reads your last twelve waterings before every analysis, EC, pH, runoff, doses, catching the trend, not just today's number. Looks at your photos, checking for visible stress signs and anything worth a closer look. And when the curing is done, he writes the final verdict on the whole cycle.
      </p>
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
        <ProfessorCard />
        {ICON_FEATURES.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
}
