import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Problem } from './sections/Problem';
import { Features } from './sections/Features';
import { Philosophy } from './sections/Philosophy';
import { ComingSoon } from './sections/ComingSoon';
import { Waitlist } from './sections/Waitlist';
import { Social } from './sections/Social';
import { FAQ } from './sections/FAQ';
import { Footer } from './sections/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Problem />
      <Features />
      <Philosophy />
      <ComingSoon />
      <Waitlist />
      <Social />
      <FAQ />
      <Footer />
    </div>
  );
}
