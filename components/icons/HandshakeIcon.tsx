
import React from 'react';

const HandshakeIcon: React.FC<{ className?: string }> = ({ className }) => (
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
    <path d="M14.5 10c-.83.02-1.63.28-2.3.74l-2.07 1.33a3.05 3.05 0 0 0-1.25 2.15v2.33a2.93 2.93 0 0 0 2.93 2.93h.32a2.4 2.4 0 0 0 2.07-1.07l2.25-3.41" />
    <path d="M12 5.5c-2.4 0-4.5 2-4.5 4.5v.5c0 1.38 1.12 2.5 2.5 2.5h0c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5" />
    <path d="M12 5.5C14.76 5.5 17 7.74 17 10.5v1.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-2c0-1.38-1.12-2.5-2.5-2.5" />
    <path d="M15 13.5c.83 0 1.5.67 1.5 1.5v1.5" />
    <path d="M15 13.5h.5a1.5 1.5 0 0 1 1.5 1.5" />
    <path d="m18 17 2 2" />
    <path d="m6 8 2-2" />
  </svg>
);

export default HandshakeIcon;
