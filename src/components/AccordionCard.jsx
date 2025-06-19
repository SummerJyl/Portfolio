import React, { useState } from 'react';

export default function AccordionCard({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-400 rounded-xl shadow-sm p-4 mb-6 bg-transparent hover:bg-gray-100 transition text-center">
      <div
        className="cursor-pointer font-semibold text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </div>
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
}
