import { Gift, Send, Palette, Sparkles, GraduationCap, Target } from 'lucide-react';

const bonuses = [
  {
    icon: Send,
    title: 'Canal no Telegram',
    description: 'Acesso a todas as figurinhas de maneira rápida e prática para utilizar no seu dia a dia.',
    value: 'R$ 49,99',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Sparkles,
    title: '+200 Sombras Sofisticadas',
    description: 'Adicione sofisticação aos seus stories com sombras que realçam as imagens, criando um efeito premium.',
    value: 'R$ 39,99',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Gift,
    title: '+50 Molduras Repost',
    description: 'Tenha mais relacionamento com o seu cliente adicionando molduras de repost criativas.',
    value: 'R$ 19,99',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Palette,
    title: 'Paletas de Sucesso',
    description: 'Guia completo com as paletas de cores mais indicadas para Estética e Beleza.',
    value: 'R$ 49,99',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: GraduationCap,
    title: 'Stories Lucrativos',
    description: 'Domine todas as funcionalidades dos Stories e desenvolva habilidades em design e edição.',
    value: 'R$ 79,99',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Target,
    title: 'Facebook e Instagram Ads',
    description: 'Aprenda a fazer anúncios e LUCRAR 3X MAIS no Instagram e Facebook.',
    value: 'R$ 79,99',
    color: 'from-red-500 to-pink-500',
  },
];

export default function Bonuses() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-xl rounded-full border border-yellow-500/30 mb-6">
            <Gift className="w-5 h-5 text-yellow-400" />
            <span className="text-sm text-yellow-300 font-semibold">SUPER BÔNUS EXCLUSIVOS</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Bônus Para Quem Adquirir o Pack Premium
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Valor total dos bônus: R$ 317,95</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-4 right-4 backdrop-blur-xl bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1">
                <span className="text-xs font-bold text-green-300">{bonus.value}</span>
              </div>

              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${bonus.color} flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500`}>
                <bonus.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3">{bonus.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{bonus.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
