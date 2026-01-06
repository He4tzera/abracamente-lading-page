
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-500">
          <p className="font-semibold text-gray-700">Projeto Social sem fins lucrativos — Abraçamente</p>
          <p className="mt-4">Contato · Redes Sociais · Compromisso com acolhimento, empatia e dignidade</p>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-sm">
              Psicóloga Responsável: Fernanda Rodrigues – CRP 06/111420
            </p>
            <p className="mt-2 text-sm">
              © {new Date().getFullYear()} AbraçaMente. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
