import React, { useState } from 'react';

export default function AccordionCard({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-md shadow-sm p-3 mb-4 bg-white">
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
