import { CalendarDays } from 'lucide-react';

export default function CTA() {
  return (
    <section className="px-6 lg:px-20 py-24">
      <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden min-h-[500px] flex flex-col items-center justify-center text-center p-8 lg:p-20 shadow-2xl">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: 'linear-gradient(rgba(28, 25, 22, 0.7), rgba(28, 25, 22, 0.7)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmYa_05qF1cc5l2Rig50X83NTtDwLCz_hUS9ALJdatG_7ima2AXeQc3x_tDkiNDAn5dqQuXFnL6ZfQKsbRSs62J1JT9URAVXQ7x726pWopLjHh6Z2YlQ9oFDAQh5yAu3zLdZl5bNo_T_kXn6m-16yHRW7mZ82aJB6MWmhSTIkNHd62EBaQryWqzXs_Mu4Vq5hmBkK9xmeM6Bn2-2Z9FizFykR35ZWmRvnXrHNpWoarr73WV0wTSPKlqAgz2yQFVcEDXC6fxVTSx6pK")' }}
        />
        <div className="relative z-10 max-w-3xl space-y-8">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Pronto para viver no espaço que você sempre sonhou?
          </h2>
          <p className="text-slate-200 text-lg md:text-xl font-light">
            Agende hoje mesmo sua consultoria estratégica e dê o primeiro passo rumo à exclusividade.
          </p>
          <a 
            href="https://wa.me/5519996329994?text=Olá!%20Quero%20saber%20mais%20sobre%20sua%20consultoria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 h-16 px-12 bg-primary text-white rounded-lg text-xl font-bold hover:brightness-110 hover:shadow-[0_0_30px_rgba(166,138,104,0.4)] transition-all transform hover:-translate-y-1"
          >
            Agendar Consultoria <CalendarDays className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
