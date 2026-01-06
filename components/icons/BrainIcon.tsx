
import React from 'react';

const BrainIcon: React.FC<{ className?: string }> = ({ className }) => (
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
    <path d="M12 2a4 4 0 0 0-4 4v2.2c0 .4-.2.9-.5 1.2-1.5 1.5-2.5 3.5-2.5 5.6 0 4.4 3.6 8 8 8s8-3.6 8-8c0-2-1-4-2.5-5.6-.3-.3-.5-.8-.5-1.2V6a4 4 0 0 0-4-4z" />
    <path d="M12 14a2.5 2.5 0 0 0-2.5 2.5V18a2.5 2.5 0 0 0 5 0v-1.5A2.5 2.5 0 0 0 12 14z" />
    <path d="M12 2v4" />
    <path d="M17.5 6.5l-1.5 1.5" />
    <path d="M6.5 6.5l1.5 1.5" />
  </svg>
);

export default BrainIcon;
