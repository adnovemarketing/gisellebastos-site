import { Brain, HardHat, Flower2 } from 'lucide-react';

export default function PainPoints() {
  return (
    <section className="px-6 lg:px-20 py-20 bg-background-light">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-2">Desafios Comuns</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Transformando Incertezas em Elegância</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group p-8 bg-white border border-primary/10 rounded-xl hover:border-primary/40 transition-all duration-300 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
              <Brain className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">A Paralisia da Indecisão</h4>
            <p className="text-slate-600 leading-relaxed">Supere o medo de errar nas escolhas de acabamentos e mobiliário. Oferecemos segurança técnica em cada detalhe.</p>
          </div>
          <div className="group p-8 bg-white border border-primary/10 rounded-xl hover:border-primary/40 transition-all duration-300 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
              <HardHat className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">O Caos da Execução</h4>
            <p className="text-slate-600 leading-relaxed">Elimine o estresse de obras mal planejadas e imprevistos técnicos com um acompanhamento rigoroso e especializado.</p>
          </div>
          <div className="group p-8 bg-white border border-primary/10 rounded-xl hover:border-primary/40 transition-all duration-300 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
              <Flower2 className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Ambientes sem Identidade</h4>
            <p className="text-slate-600 leading-relaxed">Traga alma e personalidade para espaços que hoje parecem vazios, através de uma curadoria autoral e única.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
