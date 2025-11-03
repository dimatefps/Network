import { Check, Zap, Crown, Sparkles } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-full border border-green-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-300 font-semibold">7 DIAS DE GARANTIA</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Escolha a Melhor Oferta Para Você!
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Teste por 7 dias sem compromisso</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Pack Básico</h3>
                <p className="text-sm text-gray-400">Ideal para começar</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-5xl font-bold text-white mb-2">R$ 5,99</div>
              <p className="text-gray-400">Acesso por 3 meses</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Pack +13.000 Figurinhas criativas</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Acesso por 3 meses</span>
              </li>
            </ul>

            <a
              href="#"
              className="block w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-center hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
            >
              COMPRAR AGORA
            </a>
          </div>

          <div className="relative backdrop-blur-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-2 border-pink-500/50 rounded-3xl p-8 hover:scale-105 transition-all duration-500">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-sm font-bold shadow-xl">
              MAIS VENDIDO
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Plano Premium</h3>
                <p className="text-sm text-pink-300">Acesso completo vitalício</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-gray-400 line-through text-lg mb-1">DE R$ 229,99</div>
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                R$ 15,99
              </div>
              <p className="text-pink-300 font-semibold">Acesso Vitalício</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">Pack +13.000 Figurinhas criativas</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">Bônus: +1.000 Figurinhas minimalista</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">Bônus: +500 Figurinhas Premium</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">Bônus: +200 Sombras Sofisticadas</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">Bônus: +50 Molduras Repost</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">Bônus: Paletas de Sucesso</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">Bônus: Stories Lucrativos (Mini curso)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">Bônus: Facebook e Instagram Ads</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">7 Dias de Garantia Incondicional</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">Acesso Imediato e Vitalício</span>
              </li>
            </ul>

            <a
              href="#"
              className="block w-full py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl font-bold text-center hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 text-lg"
            >
              LIBERAR PACK PREMIUM
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="backdrop-blur-xl bg-green-500/10 border border-green-500/30 rounded-2xl p-6 inline-block">
            <p className="text-green-300 font-semibold text-lg">
              Teste por 7 dias! Se não gostar, devolvemos 100% do seu dinheiro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
