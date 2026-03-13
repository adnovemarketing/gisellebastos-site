import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Methodology from './components/Methodology';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light font-display text-slate-900 antialiased">
      <Header />
      <Hero />
      <PainPoints />
      <Methodology />
      <Process />
      <Portfolio />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
