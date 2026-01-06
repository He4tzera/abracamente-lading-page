
import React from 'react';
import HeartIcon from './icons/HeartIcon';
import MessageCircleIcon from './icons/MessageCircleIcon';
import UsersIcon from './icons/UsersIcon';
import HandshakeIcon from './icons/HandshakeIcon';

const HelpCard: React.FC<{ icon: React.ReactNode; title: string; color: string; }> = ({ icon, title, color }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
        <div className={`mb-4 inline-flex items-center justify-center h-12 w-12 rounded-full bg-${color}-100`}>
            {React.cloneElement(icon as React.ReactElement, { className: `h-6 w-6 text-${color}-600` })}
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
);

// This is a workaround for Tailwind JIT compiler which can't see dynamic class names.
const ColorClasses = () => (
    <div className="hidden">
      <div className="bg-pink-100 text-pink-600"></div>
      <div className="bg-blue-100 text-blue-600"></div>
      <div className="bg-green-100 text-green-600"></div>
      <div className="bg-gray-100 text-gray-600"></div>
    </div>
  );


const HowWeHelp: React.FC = () => {
  // Mapping custom hex to Tailwind color names for JIT safety
  const colorMap = {
    '#F4C6D8': 'pink',
    '#CFE9F6': 'blue',
    '#BFE8D5': 'green'
  };

  const services = [
    {
      icon: <MessageCircleIcon />,
      title: "Escuta ativa e apoio humano",
      color: colorMap['#F4C6D8'],
    },
    {
      icon: <HeartIcon />,
      title: "Ajuda e recursos para famílias de baixa renda",
      color: colorMap['#CFE9F6'],
    },
    {
      icon: <UsersIcon />,
      title: "Ambiente acolhedor, sem julgamentos",
      color: colorMap['#BFE8D5'],
    },
    {
      icon: <HandshakeIcon />,
      title: "Comunidade de suporte, parceria e solidariedade",
      color: 'gray', // A neutral color for the fourth item
    },
  ];

  return (
    <section id="how-we-help" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Como ajudamos
          </h2>
          <div className="mt-4 w-24 h-1 bg-[#F4C6D8] mx-auto rounded-full"></div>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center transform hover:-translate-y-2">
                <div className={`mb-5 inline-flex items-center justify-center h-16 w-16 rounded-full bg-[${Object.keys(colorMap).find(key => colorMap[key] === service.color) || '#E5E7EB'}]/30`}>
                  {React.cloneElement(service.icon as React.ReactElement, { className: 'h-8 w-8 text-gray-700' })}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <ColorClasses/>
    </section>
  );
};

export default HowWeHelp;
