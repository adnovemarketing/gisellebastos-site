import { Compass, Share2, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-6 lg:px-20 py-12 border-t border-primary/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <Compass className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-bold tracking-tight">Giselle Bastos</h2>
        </div>
        <div className="text-sm text-slate-500">© 2024 Giselle Bastos Interiores. Todos os direitos reservados.</div>
        <div className="flex gap-6">
          <a className="text-slate-400 hover:text-primary transition-colors" href="#"><Share2 className="w-5 h-5" /></a>
          <a className="text-slate-400 hover:text-primary transition-colors" href="#"><Mail className="w-5 h-5" /></a>
          <a className="text-slate-400 hover:text-primary transition-colors" href="#"><Phone className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
}
