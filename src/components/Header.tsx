import { Compass } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-background-light/90 backdrop-blur-md border-b border-primary/10 px-6 lg:px-20 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between whitespace-nowrap">
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <Compass className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold tracking-tight">Giselle Bastos</h2>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#metodologia">Metodologia</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#processo">Processo</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#faq">FAQ</a>
        </nav>
        <a 
          href="https://wa.me/5519996329994?text=Olá!%20Quero%20saber%20mais%20sobre%20sua%20consultoria"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold hover:brightness-110 transition-all"
        >
          Agendar Consultoria
        </a>
      </div>
    </header>
  );
}
