
import React from 'react';

const TargetAudience: React.FC = () => {
  return (
    <section id="target-audience" className="py-20 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Para quem é
        </h2>
        <div className="mt-4 w-24 h-1 bg-[#CFE9F6] mx-auto rounded-full"></div>
        <p className="mt-8 text-lg text-gray-600 leading-relaxed">
          Famílias e pessoas de baixa renda, pessoas em vulnerabilidade social — qualquer pessoa que precise de acolhimento, apoio emocional ou orientação.
        </p>
      </div>
    </section>
  );
};

export default TargetAudience;
