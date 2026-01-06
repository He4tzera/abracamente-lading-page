
import React from 'react';
import BrainIcon from './icons/BrainIcon';
import FlowerIcon from './icons/FlowerIcon';
import UsersIcon from './icons/UsersIcon';
import BookOpenIcon from './icons/BookOpenIcon';
import AppleIcon from './icons/AppleIcon';
import ToothIcon from './icons/ToothIcon';
import ClipboardIcon from './icons/ClipboardIcon';

const servicesData = [
  {
    category: 'Saúde Emocional e Mental',
    color: '#F4C6D8',
    items: [
      { name: 'Atendimento Psicológico', icon: <BrainIcon /> },
      { name: 'Terapia Uterina', icon: <FlowerIcon /> },
      { name: 'Terapia de Relacionamentos', sub: '(Família, Casais e Mulheres)', icon: <UsersIcon /> },
    ],
  },
  {
    category: 'Educação',
    color: '#CFE9F6',
    items: [
      { name: 'Atendimento Psicopedagógico', icon: <BookOpenIcon /> },
      { name: 'Reforço Escolar', icon: <BookOpenIcon /> },
    ],
  },
  {
    category: 'Bem-estar Físico',
    color: '#BFE8D5',
    items: [
      { name: 'Consultoria Nutricional', icon: <AppleIcon /> },
    ],
  },
  {
    category: 'Cuidados Especializados',
    color: '#E5E7EB',
    items: [
      { name: 'Atendimento Odontológico', icon: <ToothIcon /> },
      { name: 'Avaliação Neuropsicológica', icon: <ClipboardIcon /> },
    ],
  },
];

const ServiceCard: React.FC<{ name: string; sub?: string; icon: React.ReactNode; color: string }> = ({ name, sub, icon, color }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
    <div className="flex items-start gap-4">
      <div className={`mt-1 flex-shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full bg-[${color}]/30`}>
        {React.cloneElement(icon as React.ReactElement, { className: 'h-5 w-5 text-gray-600' })}
      </div>
      <div>
        <h4 className="text-md font-semibold text-gray-800">{name}</h4>
        {sub && <p className="text-sm text-gray-500">{sub}</p>}
        <p className="mt-2 text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Nossos Serviços de Cuidado
          </h2>
          <div className="mt-4 w-24 h-1 bg-[#BFE8D5] mx-auto rounded-full"></div>
        </div>
        <div className="mt-16 space-y-12">
          {servicesData.map((group) => (
            <div key={group.category}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center sm:text-left">{group.category}</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <ServiceCard key={item.name} {...item} color={group.color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
