import { useState } from 'react';
import { EyebrowLabel } from '../components/EyebrowLabel';
import { C } from '../theme';

const FAQ_ITEMS = [
  {
    q: 'Is this for beginners or experienced growers?',
    a: "Both, honestly. If you're already tracking EC and pH, you'll feel at home immediately, the app speaks your language from day one. If you're newer to this, it won't leave you guessing either. Every screen labels what the numbers actually mean, so you're learning the real fundamentals of feeding and runoff as you go, not just staring at a chart you don't understand.",
  },
  {
    q: 'Do I need to already understand EC/pH?',
    a: "Not to get started. The app shows you what's happening in plain terms right on the screen, things like why your EC is drifting, or what a runoff reading is telling you. It won't turn you into an expert overnight, real growing knowledge takes a season or two either way, but you won't be lost while you're learning it.",
  },
  {
    q: 'What substrates does it support?',
    a: 'Soil and Coco, with feeding logic and salt-buildup tracking tuned specifically for each.',
  },
  {
    q: 'Indoor only, or outdoor too?',
    a: 'Outdoor grows are fully supported. Environmental logging adjusts for natural light instead of a fixed light schedule, and the app accounts for that when it calculates your targets.',
  },
  {
    q: 'Is the Professor just a chatbot, or does he actually see my data?',
    a: 'He reads your last 12 waterings before every analysis, EC, pH, runoff, and doses for each one, not just today\'s numbers. That matters because a single reading rarely tells the real story. A rising EC over three sessions means something different than one odd number on its own, and the Professor is built to catch that kind of trend.',
  },
  {
    q: 'How much should I trust his advice?',
    a: "He's genuinely useful, but he's not infallible, and we'd rather tell you that upfront than oversell him. He's reading the same numbers the app's own calculations are reading, and most of the time they agree. Every so often they won't, and when that happens, trust your own read of the plant over his. Think of him as a sharp second opinion in the room with you, not the one making the final call.",
  },
  {
    q: 'What if I disagree with him?',
    a: "Go with your gut. He doesn't touch anything, doesn't lock any settings, doesn't override what you were already planning to do. You're the one with hands on the plant. His job is to give you another angle to consider, not to be obeyed.",
  },
  {
    q: 'Do I need internet?',
    a: "The tracker itself runs completely offline, and that's not just logging, it's the real work: EC/pH target calculations, drift detection, salt-buildup warnings, all of it happens right on your phone with zero signal. The only feature that needs a connection is the Professor, since that's the one part actually talking to an AI model.",
  },
  {
    q: 'Where does my data live?',
    a: 'On your phone. You log a watering, add photos, hit save. Two things happen at once: the app calculates your analysis right there on your device, and the same log gets sent to the Professor for his own read. His answer comes back and lives on your phone too, alongside the rest of your grow log. Nothing stays on a server once that\'s done.',
  },
  {
    q: 'Can I export my data?',
    a: "Yes, whenever you want, from the Control page. You're not just downloading a backup that sits there. That same file loads right back into iGrow.lab on another device, so your whole grow log, photos and all, moves with you if you switch phones or want a second copy somewhere safe. It's your data, you should be able to take it with you.",
  },
  {
    q: 'How much will it cost?',
    a: "There'll be a solid pool of free Professor analyses for everyone, no strings. Beyond that, unlimited access will be a paid subscription. We haven't locked in the exact number yet, the waitlist will be the first to hear it when we do.",
  },
];

function FAQItem({ q, a, open, onToggle }) {
  return (
    <div style={{ borderBottom: `1px solid ${C.border}` }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          background: 'none',
          border: 'none',
          padding: '18px 4px',
          textAlign: 'left',
          cursor: 'pointer',
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 600, color: C.text }}>{q}</span>
        <span
          style={{
            flexShrink: 0,
            color: C.textDim,
            fontSize: 13,
            transform: open ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.2s',
          }}
        >
          &#9660;
        </span>
      </button>
      {open && (
        <p style={{ fontSize: 14, lineHeight: 1.7, color: C.textMid, padding: '0 4px 20px' }}>{a}</p>
      )}
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section style={{ maxWidth: 720, margin: '0 auto', padding: '72px 24px' }}>
      <EyebrowLabel style={{ textAlign: 'center' }}>Questions</EyebrowLabel>
      <h2 style={{ fontSize: 26, fontWeight: 700, color: C.text, textAlign: 'center', marginBottom: 8 }}>
        Frequently asked
      </h2>
      <div style={{ marginTop: 32 }}>
        {FAQ_ITEMS.map((item, i) => (
          <FAQItem
            key={item.q}
            q={item.q}
            a={item.a}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}
