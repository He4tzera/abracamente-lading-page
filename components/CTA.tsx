
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-[#CFE9F6]/50 py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Se você precisa de apoio ou quer ajudar alguém, entre em contato.
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Vamos juntos construir uma rede de acolhimento e cuidado.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-gray-800 bg-[#BFE8D5] hover:bg-[#ace0c6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#BFE8D5] transition-colors"
          >
            Quero apoio
          </button>
          <button
            type="button"
            className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 border border-gray-300 text-base font-medium rounded-full shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F4C6D8] transition-colors"
          >
            Quero ajudar
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
