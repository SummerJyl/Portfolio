import React, { useState } from 'react';
import AccordionCard from './AccordionCard';

const jobs = [
  {
    title: "Front-End Developer Consultant",
    company: "Self-Employed",
    dates: "Jan 2019 – Present",
    description: "Developed React and Next.js-based web features, growth experiments in collaboration with marketing, product, and design teams",
    responsibilities: [
      "Integrated Contentful CMS to enable scalable and editable content across marketing campaigns",
      "Implemented unit testing via Jest to maintain code stability and minimize regressions in production",
      "Maintained Git versioning and participated in code reviews within agile sprint cycles",
    ],
  },
  {
    title: "Digital Marketing Manager",
    company: "Aquent",
    dates: "Mar 2022 – Mar 2023",
    description: "Led website content strategy and inbound lead generation for B2B SaaS clients using HubSpot CMS and marketing automation",
    responsibilities: [
      "Collaborated with engineering to refine API-driven content delivery and ensure performance across web properties",
      "Designed and deployed SEO-optimized landing pages and content modules, resulting in a 25% increase in organic traffic",
      "Worked cross-functionally to launch nurture campaigns using web behavior and CRM data for dynamic personalization",
    ],
  },
  {
    title: "Global Digital Activation Manager",
    company: "Aquent",
    dates: "Oct 2020 – Jun 2021",
    description: "Coordinated full-stack activation for 45+ React/Node.js eCommerce sites across global markets",
    responsibilities: [
      "Partnered with engineering to deploy secure, modular web apps integrated with PostgreSQL and MongoDB backends",
      "Supported analytics reporting and visualization for KPIs related to customer retention and revenue growth",
    ],
  },
  {
    title: "UX Manager",
    company: "WebShop Manager",
    dates: "Jun 2017 – Dec 2018",
    description: "Led front-end redevelopment efforts for a multi-brand eCommerce platform using a modular React architecture",
    responsibilities: [
      "Conducted UX research and implemented component-based design systems to improve user flow and checkout experience",
      "Integrated Shopify and custom APIs for seamless order fulfillment and customer data sync",
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
