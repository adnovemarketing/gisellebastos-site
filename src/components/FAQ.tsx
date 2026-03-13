import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "Como funciona a consultoria inicial?", a: "Nossa consultoria inicial é uma reunião de 1 hora onde entendemos suas necessidades, estilo de vida e expectativas para o espaço." },
  { q: "Qual o prazo médio de um projeto completo?", a: "O prazo varia de acordo com a complexidade e tamanho do projeto, mas em média leva de 4 a 8 semanas para a entrega do projeto executivo." },
  { q: "Vocês fazem o acompanhamento da obra?", a: "Sim, oferecemos o serviço de acompanhamento de obra para garantir que a execução seja fiel ao projeto aprovado." },
  { q: "É possível projetar apenas um cômodo?", a: "Sim, realizamos projetos para ambientes únicos, mantendo o mesmo padrão de qualidade e exclusividade." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 lg:px-20 py-24 bg-zinc-50" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Dúvidas Frequentes</h3>
          <p className="text-slate-500">Tudo o que você precisa saber sobre como trabalhamos.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-primary/10 rounded-lg bg-white overflow-hidden">
              <button 
                className="w-full flex items-center justify-between p-6 text-left font-bold hover:bg-zinc-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 text-slate-600">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
