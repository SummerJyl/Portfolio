import React from 'react';
import AccordionCard from './AccordionCard';

const experiences = [
  {
    title: 'Front End & Full Stack Web Developer',
    company: 'Self-Employed',
    date:  '2019 - Present',
    bullets: [
      'Developed React and Next.js-based web features, growth experiments in collaboration with marketing, product, and design teams',
      'Integrated Contentful CMS to enable scalable and editable content across marketing campaigns',
      'Implemented unit testing via Jest to maintain code stability and minimize regressions in production',
      'Maintained Git versioning and participated in code reviews within agile sprint cycles',
    ],
  },
  {
    title: 'Digital Marketing Manager (Contract)',
    company: 'Aquent',
    date: 'Mar 2022 - Mar 2023',
    bullets: [
      'Led website content strategy and inbound lead generation for B2B SaaS clients using HubSpot CMS and marketing automation',
      'Collaborated with engineering to refine API-driven content delivery and ensure performance across web properties',
      'Designed and deployed SEO-optimized landing pages and content modules, resulting in a 25% increase in organic traffic',
      'Worked cross-functionally to launch nurture campaigns using web behavior and CRM data for dynamic personalization',
    ],
  },
  {
    title: 'Global Digital Activation Manager',
    company: 'Aquent',
    date: 'Oct 2020 - Jun 2021',
    bullets: [
      'Coordinated full-stack activation for 45+ React/Node.js eCommerce sites across global markets',
      'Partnered with engineering to deploy secure, modular web apps integrated with PostgreSQL and MongoDB backends',
      'Supported analytics reporting and visualization for KPIs related to customer retention and revenue growth',
    ],
  },
  {
    title: 'UX Manager',
    company: 'WebShop Manager', 
    date: 'Jun 2017 - Dec 2018',
    bullets: [
      'Led front-end redevelopment efforts for a multi-brand eCommerce platform using a modular React architecture',
      'Conducted UX research and implemented component-based design systems to improve user flow and checkout experience',
      'Integrated Shopify and custom APIs for seamless order fulfillment and customer data sync',
    ],
  },
];

export default function Experience() {
  return (
    <div className="space-y-4">
      {experiences.map(({ title, company, date, bullets }, index) => (
        <AccordionCard
          key={index}
          title={<span className="text-emerald-800 text-base font-semibold">{title}</span>}
        >
          <div>
            {company && <p className="italic text-sm">{company}</p>}
            <p className="text-sm text-gray-600">{date}</p>
            <ul className="list-disc list-inside mt-2 text-sm space-y-1 text-gray-700">
              {bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </AccordionCard>
      ))}
    </div>
  );
}