
import React from 'react';

const FlowerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 7.5a4.5 4.5 0 1 1-4.5 4.5M12 7.5a4.5 4.5 0 1 0 4.5 4.5M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5a4.5 4.5 0 1 0-4.5 4.5" />
    <path d="M12 12a4.5 4.5 0 1 1-4.5-4.5" />
    <path d="M12 12a4.5 4.5 0 1 0 4.5-4.5" />
    <circle cx="12" cy="12" r="1.5" />
  </svg>
);

export default FlowerIcon;
