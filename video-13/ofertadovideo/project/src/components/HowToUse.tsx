import { Video, Cloud, Smartphone } from 'lucide-react';

const steps = [
  {
    icon: Video,
    number: '01',
    title: 'Tutorial em Vídeo',
    description: 'Você vai receber um vídeo com o passo a passo completo para utilizar as figurinhas.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Cloud,
    number: '02',
    title: 'Acesso ao Drive',
    description: 'Você vai receber o acesso ao Google Drive onde terá todas as pastas organizadas.',
    color: 'from-pink-500 to-purple-500',
  },
  {
    icon: Smartphone,
    number: '03',
    title: 'Use nos Stories',
    description: 'Aplique as figurinhas diretamente nos seus stories e veja o engajamento aumentar!',
    color: 'from-purple-500 to-indigo-500',
  },
];

export default function HowToUse() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Como Utilizar?
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Simples, rápido e prático</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500" />

              <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-500`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-6xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-20`}>
                    {step.number}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
