import { C } from '../theme';

export function Philosophy() {
  return (
    <section style={{ background: C.leafDark }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22, fontSize: 16, lineHeight: 1.75, color: 'rgba(255,255,255,0.92)' }}>
          <p>
            Every serious grower already runs on data. EC meters, pH pens, runoff tests. Nobody grows blind anymore, and nobody should build blind either.
          </p>
          <p>
            We started iGrow.lab with one rule: AI isn't a feature we bolted on at the end. It's in the process from day one, the same way a good EC meter is in your process from day one. Not because it's trendy. Because refusing to use the tools available to you, in 2026, is just a worse way to work.
          </p>
          <p>
            So we use AI to calculate. We use AI to catch what a tired eye at 11pm might miss in a runoff reading. We use AI to write the code that tracks your plant, and we use it again inside the app, watching your data the way a second grower looking over your shoulder would.
          </p>
          <p>
            None of this replaces you. The AI doesn't decide when to water, you do. It doesn't touch your plant, you do. What it does is give you and your plant a healthier environment to work in: fewer blind spots, faster answers, one less thing you have to hold in your head at 2am when the pH won't sit still.
          </p>
          <p style={{ fontWeight: 700, fontSize: 18, color: '#fff', marginTop: 8 }}>
            Grown with data. Built with AI. From growers, for growers.
          </p>
        </div>
      </div>
    </section>
  );
}
