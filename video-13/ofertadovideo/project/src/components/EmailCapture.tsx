import { Mail, MessageCircle } from 'lucide-react';

export default function EmailCapture() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Como Vou Receber as Figurinhas?
              </span>
            </h2>
            <p className="text-gray-400">Acesso instantâneo por e-mail e WhatsApp</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Por E-mail</h3>
              </div>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Por WhatsApp</h3>
              </div>
              <input
                type="tel"
                placeholder="(00) 00000-0000"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
