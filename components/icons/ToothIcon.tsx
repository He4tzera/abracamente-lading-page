
import React from 'react';

const ToothIcon: React.FC<{ className?: string }> = ({ className }) => (
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
    <path d="M20 2a2.83 2.83 0 0 0-2 2.82V5h-2V4.82A2.83 2.83 0 0 0 14 2h-4a2.83 2.83 0 0 0-2 2.82V5H6V4.82A2.83 2.83 0 0 0 4 2" />
    <path d="M20 9.2v.8a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6v-.8" />
    <path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
  </svg>
);

export default ToothIcon;
