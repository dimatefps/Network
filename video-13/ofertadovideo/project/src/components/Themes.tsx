import { Grid3x3 } from 'lucide-react';

const themes = [
  'Academia & Treino', 'Acessórios', 'Advogado', 'Agenda Aberta', 'Agronomia',
  'Artesanato', 'Autocuidado', 'Black Friday', 'Blogueira', 'Bom Dia',
  'Café', 'Caixinhas de Perguntas', 'Carnaval', 'Clientes', 'Comida',
  'Confeitaria', 'Cristão', 'Culinária', 'Designer de Sobrancelhas', 'Dia das Mães',
  'Dieta', 'Estética', 'Estudo', 'Família', 'Férias & Viagem',
  'Feedback', 'Final de Semana', 'Fitness', 'Frases Bíblicas', 'Frases Motivacionais',
  'Glow Up', 'Gratidão', 'Hábitos Saudáveis', 'Home Office', 'Instagram',
  'Lazer', 'Lei da Atração', 'Leitura', 'Lingerie', 'Loja',
  'Maquiagem', 'Marketing Digital', 'Maternidade', 'Nails Designer', 'Nutrição',
  'Páscoa', 'Psicóloga', 'Reações', 'Salão', 'Semi Joias',
  'Skin Care', 'Treino', 'Unhas', 'Vendas', 'Viagens',
];

export default function Themes() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mb-6">
            <Grid3x3 className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300">Mais de 55 temas diferentes</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Temas das Figurinhas
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Para todos os nichos e ocasiões</p>
        </div>

        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {themes.map((theme, index) => (
              <div
                key={index}
                className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:scale-105 cursor-default"
              >
                <p className="text-sm font-medium text-center text-gray-300 group-hover:text-white transition-colors">
                  {theme}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
