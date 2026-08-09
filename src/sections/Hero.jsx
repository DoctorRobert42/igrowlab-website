import { ReadingTrend } from '../components/ReadingTrend';
import { C } from '../theme';

export function Hero() {
  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px 56px' }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 48,
        }}
      >
        <div style={{ flex: '1 1 480px', minWidth: 280 }}>
          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: -0.5,
              color: C.text,
              marginBottom: 18,
            }}
          >
            Grow by data, not by guesswork.
            <br />
            From growers, for growers.
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMid, marginBottom: 30, maxWidth: 480 }}>
            iGrow.lab tracks EC, pH, and runoff the way a serious grower actually thinks.
          </p>
          <a
            href="#waitlist"
            style={{
              display: 'inline-block',
              background: C.leaf,
              color: '#fff',
              fontWeight: 700,
              fontSize: 15,
              padding: '15px 28px',
              borderRadius: 14,
            }}
          >
            Be first when it launches
          </a>
        </div>

        <div
          style={{
            flex: '1 1 360px',
            minWidth: 280,
            background: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: 16,
            padding: '28px 26px',
          }}
        >
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: C.textDim, marginBottom: 6 }}>
            Prof. Terpenov &middot; last 12 waterings
          </div>
          <div style={{ fontSize: 13, color: C.textMid, marginBottom: 22, lineHeight: 1.5 }}>
            Catches the trend, not just today&rsquo;s number.
          </div>
          <ReadingTrend size={16} gap={9} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, fontSize: 10, color: C.textMuted }}>
            <span>Watering 1</span>
            <span>Watering 12</span>
          </div>
        </div>
      </div>
    </section>
  );
}
