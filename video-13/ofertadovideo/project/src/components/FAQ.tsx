import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Como irei receber meu acesso?',
    answer: 'Assim que você realizar a compra, você receberá no seu e-mail o link de acesso. Basta criar a sua senha e entrar na plataforma.',
  },
  {
    question: 'Por quanto tempo terei acesso?',
    answer: 'Atualmente tem 2 planos disponíveis: Pack Básico R$5,99 com acesso por 3 meses e Pack Premium R$15,99 com acesso vitalício.',
  },
  {
    question: 'O pagamento é seguro?',
    answer: 'Sim, é 100% seguro. A Cartpanda é uma das maiores empresas de pagamentos e hospedagens de produtos online do Brasil.',
  },
  {
    question: 'Como funciona a garantia de 7 dias?',
    answer: 'Você pode testar o produto por 7 dias. Se não gostar, basta entrar em contato que devolvemos 100% do seu dinheiro, sem perguntas.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mb-6">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300">Perguntas Frequentes</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              F.A.Q
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Tire suas dúvidas</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-bold text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
