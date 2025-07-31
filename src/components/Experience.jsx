import React, { useState } from 'react';
import AccordionCard from './AccordionCard';

const jobs = [
  {
    title: "Front-End Developer / Full Stack Consultant",
    company: "Consultant",
    dates: "Jan 2019 – Present",
    description: "Led enterprise platform modernization migrating Angular to React 18 for 10,000+ users, delivering 25% performance improvement through strategic component architecture, code splitting, and optimization techniques",
    responsibilities: [
      "Architected scalable design system components creating reusable UI libraries that improved consistency across multiple product workflows while collaborating closely with UX designers and product managers",
      "Made critical architectural decisions on frontend system design, performance trade-offs, and technology selection for complex data-driven interfaces serving enterprise clients",
      "Mentored junior engineers establishing UI engineering best practices, testing strategies, and technical standards across development teams",
    ],
  },
  {
    title: "Digital Marketing Manager",
    company: "Aquent",
    dates: "Mar 2022 – Mar 2023",
    description: "Built high-performance data visualization dashboards using React and TypeScript, implementing real-time interfaces for analytics platforms with focus on web performance and user experience",
    responsibilities: [
      "Led cross-functional platform initiatives collaborating with product designers and backend engineers to deliver scalable tooling solutions maintaining 99.5% uptime",
      "Established comprehensive testing frameworks including automated UI testing pipelines ensuring quality and reliability for production systems",
    ],
  },
  {
    title: "Global Digital Activation Manager",
    company: "Aquent",
    dates: "Oct 2020 – Jun 2021",
    description: "Delivered enterprise UI solutions for global content platforms, implementing consistent design patterns and workflows across multiple international markets and device platformss",
    responsibilities: [
      "Collaborated with distributed product teams building scalable component architecture supporting complex publishing and content management workflows",
      "Implemented performance monitoring and observability tools ensuring optimal user experience across different regions and platforms",
    ],
  },
  {
    title: "UX Manager",
    company: "WebShop Manager",
    dates: "Jun 2017 – Dec 2018",
    description: "Built 45+ React applications focusing on user experience optimization and conversion-driven interface design for enterprise B2B workflows",
    responsibilities: [
      "Established UI engineering standards leading team of 3 developers while defining design system guidelines and accessibility requirements across multiple product initiatives",
      "Integrated Shopify and custom APIs for seamless Architected complex workflow interfaces for content publishing, payment processing, and third-party integrations with emphasis on performance and scalabilityorder fulfillment and customer data sync",
    ],
  },
];

export default function Experience() {
  return (
    <div className="space-y-4 text-center">
      {jobs.map((job, idx) => (
        <AccordionCard 
          key={idx} 
            title={
            <span className="text-base font-semibold text-gray-700">
            {job.title}
            </span>
          } 
            >
              <div className="text-left">
              <p className="text-base font-medium text-gray-600">{job.company} &middot; {job.dates}</p>
              <p className="text-sm font-small text-gray-700">{job.description}</p>
              {job.responsibilities && (
              <ul className="text-sm text-gray-700 mt-2 list-disc list-inside">
                {job.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
          </AccordionCard>
        ))}
      </div>
    );
  }
