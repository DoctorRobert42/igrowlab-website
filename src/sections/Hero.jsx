import { LogoImg } from '../components/LogoImg';
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
          {/* Full-width primary button style copied verbatim from the app's "Start Pro"
              button (ui.jsx:634-636): solid C.accent fill, radius 14, padding "15px 0". */}
          <a
            href="#waitlist"
            style={{
              display: 'inline-block',
              background: C.accent,
              color: C.white,
              fontWeight: 700,
              fontSize: 15,
              padding: '15px 28px',
              borderRadius: 14,
            }}
          >
            Be first when it launches
          </a>
        </div>

        {/* Large-scale logo mark, echoing the app's own Splash screen (which renders
            LogoImg at size 110) - the real graphic mark filling this slot, not an
            invented visual. No chart/trend exists anywhere in the real app to echo
            instead (confirmed via recon). */}
        <div style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}>
          <LogoImg size={180} />
        </div>
      </div>
    </section>
  );
}
