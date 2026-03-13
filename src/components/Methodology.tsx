import { Check } from 'lucide-react';

export default function Methodology() {
  return (
    <section className="px-6 lg:px-20 py-24 bg-zinc-100" id="metodologia">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              className="w-full h-full object-cover" 
              alt="Retrato de Giselle Bastos" 
              src="https://i.postimg.cc/PrN5yFF6/Perfil.jpg" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 p-6 bg-sage rounded-xl shadow-xl hidden md:block">
            <p className="text-white font-bold text-lg italic">"A técnica serve ao bem-estar."</p>
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-8">
          <div>
            <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-2">Nossa Solução</h2>
            <h3 className="text-4xl font-black mb-6">A Metodologia Giselle Bastos</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Um equilíbrio perfeito entre o rigor técnico da engenharia e a sensibilidade da curadoria artística. Nosso processo garante que a estética nunca comprometa a funcionalidade.
            </p>
          </div>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h5 className="font-bold text-lg">Briefing Sensorial</h5>
                <p className="text-slate-500">Imersão profunda nos seus desejos e necessidades de bem-estar psicológico e físico.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h5 className="font-bold text-lg">Detalhamento Executivo</h5>
                <p className="text-slate-500">Projetos técnicos milimetricamente precisos que garantem fidelidade absoluta na execução.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h5 className="font-bold text-lg">Curadoria de Arte e Materiais</h5>
                <p className="text-slate-500">Seleção exclusiva de fornecedores e peças que contam a sua história através de texturas e formas.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
