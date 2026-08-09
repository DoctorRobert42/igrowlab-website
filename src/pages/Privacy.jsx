import { LegalPage, Section } from '../components/LegalPage';
import { ObfuscatedEmail } from '../components/ObfuscatedEmail';
import { C } from '../theme';

export function Privacy() {
  return (
    <LegalPage title="Privacy Policy" subtitle="This page · waitlist signup · Last updated: August 9, 2026">
      <p>
        This policy covers the iGrow.lab website (igrowlab.app) and its waitlist signup form only. The iGrow.lab mobile app has its own separate privacy policy.
      </p>

      <Section title="What we collect">
        <p>
          If you submit the waitlist form, we collect the email address you enter. We do not collect names, location, device identifiers, or any other personal data through this website.
        </p>
      </Section>

      <Section title="Why we collect it">
        <p>
          Your email address is used for one purpose: to notify you once when iGrow.lab launches on the App Store and Google Play. We do not send newsletters, marketing, or recurring email. Legal basis: your consent (Art. 6(1)(a) GDPR).
        </p>
      </Section>

      <Section title="Where it is stored">
        <p>
          The waitlist form is handled by Formspree (Formspree, Inc., United States), which receives and stores the submitted email address so we can be notified and reach you at launch. Data is transferred to the United States under Formspree's data protection terms. Your address is not sold, shared for advertising, or passed to any other third party. See Formspree's privacy policy at{' '}
          <a href="https://formspree.io/legal/privacy-policy" style={{ color: C.leaf, fontWeight: 600 }}>
            formspree.io/legal/privacy-policy
          </a>
          .
        </p>
      </Section>

      <Section title="No tracking">
        <p>
          This website uses no advertising, no tracking pixels, no third-party analytics, and no cookies. Fonts are served locally from our own domain, so no data is sent to external font providers.
        </p>
      </Section>

      <Section title="How long we keep it">
        <p>
          Waitlist addresses are kept only until the launch notification is sent, after which they are deleted. You can ask us to delete your address at any time before then.
        </p>
      </Section>

      <Section title="Your rights under GDPR">
        <p>
          If you are in the European Economic Area, you have the right to access, rectify, erase, and port your data, and to withdraw consent at any time. To exercise any of these rights, or to be removed from the waitlist, contact us at the address below.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          <ObfuscatedEmail />
        </p>
      </Section>

      <Section title="Responsible party">
        <p>
          Iaroslav Ushakov, Wendenschloßstraße 320, 12557 Berlin, Germany. Full details in the{' '}
          <a href="/impressum" style={{ color: C.leaf, fontWeight: 600 }}>
            Impressum
          </a>
          .
        </p>
      </Section>
    </LegalPage>
  );
}
