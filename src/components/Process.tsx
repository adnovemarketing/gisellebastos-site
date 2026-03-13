export default function Process() {
  const steps = [
    { num: '01', title: 'Conexão', desc: 'Entendimento de perfil e diagnóstico do espaço.' },
    { num: '02', title: 'Concepção', desc: 'Criação do conceito visual e layouts iniciais.' },
    { num: '03', title: 'Refinamento', desc: 'Ajustes finos, escolha de acabamentos e 3D.' },
    { num: '04', title: 'Entrega Técnica', desc: 'Dossiê completo para execução impecável.' },
  ];

  return (
    <section className="px-6 lg:px-20 py-24 bg-background-light overflow-hidden" id="processo">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-2">Jornada do Cliente</h2>
          <h3 className="text-4xl font-black">Quatro Passos para a Perfeição</h3>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-primary/20 z-0"></div>
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-background-light border-2 border-primary flex items-center justify-center text-primary font-bold text-xl shadow-lg">
                {step.num}
              </div>
              <h5 className="font-bold text-xl">{step.title}</h5>
              <p className="text-sm text-slate-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
