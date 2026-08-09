import { useEffect, useState } from 'react';
import { C } from '../theme';

// Address assembled client-side at runtime (not present as a single literal
// string in the source or bundle) so it isn't trivially scraped from a static
// crawl of the page. Real address confirmed against igrowlab's in-app legal
// docs (src/features/settings/legalDocs.js): laboratory@igrowlab.app.
const USER_PARTS = ['l', 'a', 'b', 'o', 'r', 'a', 't', 'o', 'r', 'y'];
const DOMAIN_PARTS = ['igrowlab', 'app'];

export function ObfuscatedEmail() {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    setEmail(`${USER_PARTS.join('')}@${DOMAIN_PARTS.join('.')}`);
  }, []);

  if (!email) {
    return <span style={{ color: C.textMid }}>Loading…</span>;
  }

  return (
    <a href={`mailto:${email}`} style={{ color: C.leaf, fontWeight: 600 }}>
      {email}
    </a>
  );
}
