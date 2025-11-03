import { Sparkles, ShieldCheck, Lock, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300">Mais de 20 mil clientes satisfeitos</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                +13.000 Figurinhas
              </span>
              <br />
              <span className="text-white">Para Stories</span>
              <br />
              <span className="text-white">Extraordinários</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              O pack perfeito para chamar a atenção dos seus seguidores e aumentar suas vendas!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <div className="text-center">
                <div className="text-gray-400 line-through text-lg">R$ 229,99</div>
                <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">
                  R$ 5,99
                </div>
              </div>
            </div>

            <a
              href="#pricing"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full font-bold text-lg shadow-2xl shadow-pink-500/50 hover:shadow-pink-500/80 transform hover:scale-105 transition-all duration-300"
            >
              <Zap className="w-5 h-5 group-hover:animate-pulse" />
              QUERO MELHORAR MEUS STORIES!
            </a>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                <span>7 dias de garantia</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-green-400" />
                <span>Pagamento seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-green-400" />
                <span>Acesso imediato</span>
              </div>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-3xl blur-3xl opacity-20" />
            <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-4 shadow-2xl">
              <img
                src="http://trokajotreinamentos.online/wp-content/uploads/2024/06/planopremium-8.png"
                alt="Pack Premium"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
