import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'Designer de Sobrancelhas',
    text: 'Meus stories ficaram incríveis! O engajamento aumentou 300% em apenas 2 semanas.',
    rating: 5,
  },
  {
    name: 'Ana Costa',
    role: 'Influenciadora Digital',
    text: 'Figurinhas de alta qualidade e super fáceis de usar. Valeu muito a pena!',
    rating: 5,
  },
  {
    name: 'Juliana Santos',
    role: 'Confeiteira',
    text: 'O pack é completo demais! Tenho figurinha para todas as ocasiões.',
    rating: 5,
  },
  {
    name: 'Carla Oliveira',
    role: 'Blogueira',
    text: 'Investimento que se paga sozinho. Minhas vendas triplicaram!',
    rating: 5,
  },
  {
    name: 'Patricia Lima',
    role: 'Esteticista',
    text: 'Profissionalismo garantido! Meus clientes sempre elogiam meus stories.',
    rating: 5,
  },
  {
    name: 'Fernanda Rocha',
    role: 'Nutricionista',
    text: 'Melhor compra que fiz para meu Instagram. Recomendo muito!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Relatos das Nossas Alunas
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Mais de 20 mil pessoas mudaram seu Instagram!</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-pink-500/20" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
