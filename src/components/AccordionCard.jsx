import React, { useState } from 'react';

export default function AccordionCard({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-start gap-4">
  <AccordionCard title="Projects">...</AccordionCard>
  <AccordionCard title="Experience">...</AccordionCard>
  <AccordionCard title="Tech Stack">...</AccordionCard>
</div>

  );
}
