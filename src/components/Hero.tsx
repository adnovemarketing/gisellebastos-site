export default function Hero() {
  return (
    <section className="relative pt-20">
      <div className="px-6 lg:px-20 py-10">
        <div className="relative min-h-[600px] flex flex-col items-start justify-end p-8 lg:p-20 rounded-xl overflow-hidden shadow-2xl">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" 
            style={{ backgroundImage: 'linear-gradient(to right, rgba(28, 25, 22, 0.8) 0%, rgba(28, 25, 22, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZfOfrxu5ihY0-sk0JKh8BilvfqxE-eB-uROkMwE5fPcLNuN38l4mEfkVaxW_P5K2FhgCLm25NJ0HUfr9uz0Byi0oRbR4SVOlc441zlfwo0V-RJ2TitZAiVJSAaa8YlM55Ih8JDN3Vk5SJXarHVwXppP17s8QUK0PYYSZsNyiyoULdtIdE_c9uanUC0MgviCXs0q2914MbBmntVa1UBircsiAl-myE1ES--z6OA-1Jh53nLkXFGQGgXv9TqScQ6R3Hja7Yo9ZuXa4U")' }}
          />
          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-sage/20 border border-sage/30 text-sage text-xs font-bold uppercase tracking-widest">
              Design Biofílico & Luxo
            </div>
            <h1 className="text-white text-5xl lg:text-7xl font-black leading-tight tracking-tight">
              Onde a sofisticação encontra o seu bem-estar
            </h1>
            <p className="text-slate-200 text-lg lg:text-xl font-light leading-relaxed">
              Aliando autoridade técnica e curadoria de luxo para transformar espaços em refúgios de exclusividade e alma.
            </p>
            <div className="pt-4">
              <a 
                href="https://wa.me/5519996329994?text=Olá!%20Quero%20saber%20mais%20sobre%20sua%20consultoria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-14 px-10 bg-primary text-white rounded-lg text-lg font-bold hover:scale-105 transition-transform shadow-lg"
              >
                Agendar Consultoria
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
