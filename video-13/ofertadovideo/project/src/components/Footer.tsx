import { Shield, Lock, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <a
            href="#"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span className="text-sm">Políticas de Privacidade</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <Shield className="w-4 h-4" />
            <span className="text-sm">Termos de Uso</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <Lock className="w-4 h-4" />
            <span className="text-sm">Pagamento Seguro</span>
          </a>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm">
            Copyright © 2024 Trokajo Treinamentos. Todos os Direitos Reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
