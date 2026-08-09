import { C } from '../theme';

export function Problem() {
  return (
    <section style={{ background: C.surface, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '64px 24px' }}>
        <p
          style={{
            fontSize: 'clamp(20px, 3vw, 28px)',
            fontWeight: 500,
            lineHeight: 1.5,
            color: C.text,
            textAlign: 'center',
          }}
        >
          Most grow trackers are just journals with photos. iGrow.lab is a calculator. It watches your EC drift, flags salt buildup before it shows in the leaves, and tells you exactly how much to feed based on where your plant actually is right now.
        </p>
      </div>
    </section>
  );
}
