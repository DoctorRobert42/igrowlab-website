import { LegalPage, Section } from '../components/LegalPage';
import { ObfuscatedEmail } from '../components/ObfuscatedEmail';

export function Impressum() {
  return (
    <LegalPage title="Impressum" subtitle="Pflichtangaben gemäß § 5 DDG">
      <Section title="Verantwortlich / Developer">
        <p>
          Iaroslav Ushakov
          <br />
          Wendenschloßstraße 320
          <br />
          12557 Berlin
          <br />
          Deutschland
        </p>
      </Section>

      <Section title="Kontakt">
        <p>
          <ObfuscatedEmail />
        </p>
      </Section>

      <Section title="Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV">
        <p>Iaroslav Ushakov, Wendenschloßstraße 320, 12557 Berlin</p>
      </Section>

      <Section title="Hinweis">
        <p>
          iGrow.lab is an independent project. "Professor Terpenov" is a fictional character and does not represent a real person or institution.
        </p>
      </Section>
    </LegalPage>
  );
}
