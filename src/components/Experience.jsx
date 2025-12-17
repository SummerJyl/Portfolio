import React, { useState } from 'react';
import AccordionCard from './AccordionCard';

const jobs = [
  {
    title: "Software Engineer | Full-Stack",
    company: "Consultant",
    dates: "Jan 2019 – Present",
    description:  "Built Bio Health Data Management System - full-stack healthcare application with React frontend, Spring Boot backend, and PostgreSQL database supporting nutrition tracking and scientific data workflows",
    responsibilities: [     
      "Built backend systems and APIs using Java/Spring Boot, Python, Ruby on Rails, and Node.js, creating reliable, performant services handling high-throughput workflows",
      "Designed efficient data models with PostgreSQL supporting complex entity relationships and optimized query patterns",
      "Developed workflow automation primitives processing data transformations across multiple integrated services",
      "Created reusable API components enabling consistent integration patterns across different systems and use cases",
      "Collaborated remotely with cross-functional teams using async communication and pairing to deliver customer-focused solutions",
      "Worked across full stack building React and Vue.js frontends with Python, Rails, and Node.js backends, comfortable navigating different codebases",
      "Solved ambiguous problems by asking questions, digging into unfamiliar domains, and figuring out practical solutions",
      "Leveraged AI/LLM tools (GitHub Copilot, ChatGPT, Claude) to accelerate development, generate test cases, and explore solutions for complex technical problems",
    ],
  },
  {
    title: "Technology Solutions Developer",
    company: "Aquent",
    dates: "Jan 2022 – Mar 2023",
    description: "Developed consumer health applications with React and backend APIs processing real-time data from multiple sources",
    responsibilities: [
      "Developed Python backend services and RESTful APIs for consumer applications with focus on reliability and performance",
      "Built data transformation pipelines integrating multiple services and handling complex workflow logic",
      "Collaborated in remote environment using async communication tools and practices for effective team coordination",
      "Contributed to both backend and frontend systems working across the stack to deliver complete features",
      "Focused on customer experience ensuring solutions solved real problems and created intuitive interactions",
    ],
  },
  {
    title: "Systems Integration Developer",
    company: "Aquent",
    dates: "Oct 2020 – Jun 2021",
    description: "•	Designed distributed data infrastructure with multi-region synchronization supporting international operations",
    responsibilities: [
      "Architected scalable PostgreSQL-backed infrastructure supporting distributed backend systems",
      "Delivered high-performance APIs and prototypes for international operations",
      "Maintained compliance standards and audit trails while enabling rapid iteration",
      "Collaborated remotely using Agile practices and async communication tools",
    ],
  },
  {
    title: "Software Developer | Technical Solutions",
    company: "WebShop Manager",
    dates: "Jun 2017 – Dec 2018",
    description: "•Built RESTful backend services with emphasis on PostgreSQL integration, API performance, and data modeling",
    responsibilities: [
      "Developed and customized web applications using CMS platforms and content management systems for client projects",
      "Implemented robust data pipeline solutions supporting complex workflows with monitoring and audit capabilities",
      "Established development standards for maintainable, well-documented systems",
      "Focused on customer experience ensuring solutions solved real problems with intuitive interfaces",
    ],
  },
  {
    title: "Web Content Specialist ",
    company: "UC Irvine Health",
    dates: "Aug 2015 – May 2017",
    description: "Built custom Drupal pages and functionality for physician lookup, departmental content (ENT, etc.), and patient resources",
    responsibilities: [
      "Developed and maintained patient portal, appointment booking system, and public-facing healthcare website using Drupal CMS",
      "Contributed to migration from Cascade CMS to Drupal, updating and rebuilding site pages and templates", 
      "Collaborated with healthcare stakeholders to ensure HIPAA-compliant content management and patient-facing experiences",
      "Created and maintained responsive web pages ensuring accessibility and usability across devices",
      "Worked with cross-functional teams to deliver timely content updates and new functionality",
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
