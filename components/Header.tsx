
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#F9FAFB]/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-800">Abraça<span className="text-[#F4C6D8]">Mente</span></h1>
          </div>
          {/* Navigation can be added here if needed */}
        </div>
      </div>
    </header>
  );
};

export default Header;
