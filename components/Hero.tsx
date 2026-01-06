
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Você merece <span className="text-[#BFE8D5]">cuidado</span>, apoio e <span className="text-[#CFE9F6]">acolhimento</span>.
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Projeto Abraçamente — acolhimento, parceria e alegria compartilhada para famílias que precisam de apoio.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              <div className="absolute top-0 left-10 w-48 h-48 bg-[#CFE9F6] rounded-full opacity-50 filter blur-xl animate-blob"></div>
              <div className="absolute top-10 right-0 w-56 h-56 bg-[#F4C6D8] rounded-full opacity-50 filter blur-xl animate-blob animation-delay-2000"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#BFE8D5] rounded-full opacity-50 filter blur-xl animate-blob animation-delay-4000"></div>
              <style>{`
                @keyframes blob {
                  0% { transform: translate(0px, 0px) scale(1); }
                  33% { transform: translate(30px, -50px) scale(1.1); }
                  66% { transform: translate(-20px, 20px) scale(0.9); }
                  100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                  animation: blob 7s infinite;
                }
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-4000 { animation-delay: 4s; }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
