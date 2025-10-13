import React, { useState } from 'react';
import AccordionCard from './AccordionCard';

const jobs = [
  {
    title: "Software Engineer | Full-Stack",
    company: "Consultant",
    dates: "Jan 2019 – Present",
    description:  "Built Bio Health Data Management System - full-stack healthcare application with React frontend, Spring Boot backend, and PostgreSQL database supporting nutrition tracking and scientific data workflows",
    responsibilities: [     
      "Developed ETL pipelines integrating USDA Food Database API, transforming unstructured data into structured, searchable format with automated validation", 
      "Architected RESTful APIs achieving sub-200ms response times with MongoDB/DynamoDB for flexible schemas and high-throughput operations",
      "Implemented cloud-native architecture on AWS with containerized microservices, distributed data processing, and performance optimization",
      "Designed complex data models with temporal versioning, audit trails, and user authentication for healthcare compliance requirements",
    ],
  },
  {
    title: "Technology Solutions Developer",
    company: "Aquent",
    dates: "Mar 2022 – Mar 2023",
    description: "Developed consumer health applications with React and backend APIs processing real-time data from multiple sources",
    responsibilities: [
      "Built data transformation pipelines with quality validation, monitoring, and automated error handling",
      "Optimized database performance through indexing strategies, query refactoring, and caching, improving response times by 60%",
    ],
  },
  {
    title: "Systems Integration Developer",
    company: "Aquent",
    dates: "Oct 2020 – Jun 2021",
    description: "•	Designed distributed data infrastructure with multi-region synchronization supporting international operations",
    responsibilities: [
      "•	Created integration frameworks normalizing data across disparate sources with consistent APIs and governance practices",
    ],
  },
  {
    title: "Software Developer | Technical Solutions",
    company: "WebShop Manager",
    dates: "Jun 2017 – Dec 2018",
    description: "•	Developed mission-critical backend services with PostgreSQL supporting complex business workflows and external integrations",
    responsibilities: [
      "•	Built data processing pipelines handling structured and unstructured data with validation and quality assurance",
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
