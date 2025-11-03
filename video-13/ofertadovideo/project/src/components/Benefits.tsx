import { Eye, Users, Share2, Lightbulb, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Eye,
    title: 'RECONHECIMENTO',
    description: 'Destaque-se da concorrência',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Users,
    title: 'ATENÇÃO',
    description: 'Capture o olhar dos seguidores',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Share2,
    title: 'COMPARTILHAMENTO',
    description: 'Conteúdo viral e engajador',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Lightbulb,
    title: 'CRIATIVO',
    description: 'Stories únicos e profissionais',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: TrendingUp,
    title: 'VENDAS',
    description: 'Converta mais seguidores',
    color: 'from-green-500 to-emerald-500',
  },
];

export default function Benefits() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Vantagens Exclusivas
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Transforme seus stories em máquinas de engajamento</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500" />

              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 mx-auto group-hover:rotate-12 transition-transform duration-500`}>
                <benefit.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-lg font-bold text-center mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-400 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
