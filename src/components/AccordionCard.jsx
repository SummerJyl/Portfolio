import React, { useState } from 'react';

export default function AccordionCard({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4">
  <AccordionCard title="Projects">...</AccordionCard>
  <AccordionCard title="Experience">...</AccordionCard>
  <AccordionCard title="Tech Stack">...</AccordionCard>
</div>

  );
}
