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
          {/* Real primary-button style, copied verbatim from PBtn (ui.jsx:266-284) -
              the app's actual shared "Primary Button" component, used pervasively
              across EnvForm/PlantForm/LogTab/EditSheets/PlantLifecycleSheets for
              Save/Create/Confirm actions. Pale-tint fill + accent border + accent
              text, NOT a solid opaque fill (that pattern only appears once, in the
              Paywall sheet - confirmed it's the outlier, not the app's standard). */}
          <a
            href="#waitlist"
            style={{
              display: 'inline-block',
              background: C.accentPale,
              color: C.accentLight,
              border: `1px solid ${C.accent}`,
              fontWeight: 700,
              fontSize: 14,
              padding: '14px 28px',
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
