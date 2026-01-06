
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Sobre o Abraçamente
        </h2>
        <div className="mt-4 w-24 h-1 bg-[#BFE8D5] mx-auto rounded-full"></div>
        <p className="mt-8 text-lg text-gray-600 leading-relaxed">
          O Abraçamente é uma iniciativa social dedicada a oferecer cuidado, escuta ativa e suporte a famílias de baixa renda e pessoas em vulnerabilidade. Acreditamos na empatia como força transformadora: nosso objetivo é levar acolhimento, dignidade e esperança para quem precisa ser ouvido.
        </p>
      </div>
    </section>
  );
};

export default About;
