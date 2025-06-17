import React, { useState } from 'react';
import ContactModal from './components/ContactModal';
import ScreenshotGallery from './components/ScreenshotGallery';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import AccordionCard from './components/AccordionCard';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  const projects = [
    {
      title: "Personal Finance Dashboard",
      imgSrc: `${import.meta.env.BASE_URL}screenshots/responsive-pfd.jpeg`,
      description: "A React-based dashboard for managing personal finances.",
      url: "https://yourlivepfdlink.com",
    },
    {
      title: "Bio Health Data Explorer",
      imgSrc: `${import.meta.env.BASE_URL}screenshots/responsive-bhde.png`,
      description: "Interactive data explorer for Bio Health projects.",
      url: "https://yourlivebiohealthlink.com",
    },
    {
      title: "Login Page",
      imgSrc: `${import.meta.env.BASE_URL}screenshots/responsive-login.jpeg`,
      description: "Clean, modern login page built with React.",
      url: "https://yourliveloginpage.com",
    },
  ];

  const experience = [
    {
      title: "Front End & Full Stack Web Developer",
      company: "Self-Employed",
      date: "2019 - Present",
      bullets: [
        "Developed React and Next.js-based web features, growth experiments in collaboration with marketing, product, and design teams",
        "Integrated Contentful CMS to enable scalable and editable content across marketing campaigns",
        "Implemented unit testing via Jest to maintain code stability and minimize regressions in production",
        "Maintained Git versioning and participated in code reviews within agile sprint cycles"
      ],
    },
    {
      title: "Digital Marketing Manager (Contract) | Aquent",
      date: "Mar 2022 - Mar 2023",
      bullets: [
        "Led website content strategy and inbound lead generation for B2B SaaS clients using HubSpot CMS and marketing automationn",
        "Collaborated with engineering to refine API-driven content delivery and ensure performance across web properties",
        "Designed and deployed SEO-optimized landing pages and content modules, resulting in a 25% increase in organic traffic",
        "Worked cross-functionally to launch nurture campaigns using web behavior and CRM data for dynamic personalization"
      ],
    },
    {
      title: "Global Digital Activation Manager | Aquent",
      date: "Oct 2020 - Jun 2021",
      bullets: [
        "Coordinated full-stack activation for 45+ React/Node.js eCommerce sites across global markets",
        "Partnered with engineering to deploy secure, modular web apps integrated with PostgreSQL and MongoDB backends",
        "Supported analytics reporting and visualization for KPIs related to customer retention and revenue growth",
      ],
    },
    {
      title: "UX Manager / WebShop Manager",
      date: "Jun 2017 - Dec 2018",
      bullets: [
        "Led front-end redevelopment efforts for a multi-brand eCommerce platform using a modular React architecture",
        "Conducted UX research and implemented component-based design systems to improve user flow and checkout experience",
        "Integrated Shopify and custom APIs for seamless order fulfillment and customer data sync",
      ],
    },
  ];

  const skills = [
    "ReactJS", "JavaScript", "Tailwind CSS", "Node.js", "HTML5", "CSS3",
  "TypeScript", "Next.js", "Git", "Jest", "Contentful CMS",
    "Bootstrap", "MongoDB", "REST APIs", "Agile",
  ];

  return (
    <div className="min-h-screen text-gray-900 max-w-5xl mx-auto px-6 py-10 font-lato bg-sage">

{/* Navbar */}
<nav className="flex flex-col md:flex-row md:justify-between items-center px-6 py-4 border-b border-gray-300">
  <h1 className="text-2xl font-bold text-emerald-600 font-lato text-center md:text-left">
    Jylian Summers
  </h1>

  <div className="flex items-center space-x-4 text-emerald-700 mt-2 md:mt-0">
    <button
      onClick={() => setContactOpen(true)}
      className="hover:text-emerald-900 transition"
      aria-label="Contact"
    >
      <FaEnvelope size={20} />
    </button>
    <a
      href="https://github.com/SummerJyl"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-emerald-900 transition"
      aria-label="GitHub"
    >
      <FaGithub size={20} />
    </a>
    <a
      href="https://www.linkedin.com/in/jyliansummers/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-emerald-900 transition"
      aria-label="LinkedIn"
    >
      <FaLinkedin size={20} />
    </a>
  </div>
</nav>

{/* Hero */}
<section className="text-center mb-16">
  <img
    src={`${import.meta.env.BASE_URL}images/li-pix.jpg`}
    alt="Jylian Summers"
    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
  />
  <h2 className="text-3xl font-semibold">Bio Health Enthusiast</h2>
  <p className="mt-2 text-gray-600 max-w-xl mx-auto">
    Purpose-driven technologist passionate about building engaging web experiences.
  </p>
</section>

<div className="flex flex-col md:flex-row md:justify-between md:gap-6 mb-10">
  <div className="md:w-1/3">
    <AccordionCard title="Projects">
      <ScreenshotGallery projects={projects} />
    </AccordionCard>
  </div>

  <div className="md:w-1/3">
    <AccordionCard title="Experience">
      <div className="space-y-6 text-left">
        {experience.map((job, index) => (
          <div key={index}>
            <h3 className="font-semibold text-lg text-emerald-800">{job.title}</h3>
            {job.company && <p className="text-sm italic">{job.company}</p>}
            <p className="text-sm text-gray-600">{job.date}</p>
            <ul className="list-disc list-inside mt-2 text-sm space-y-1">
              {job.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </AccordionCard>
  </div>

  <div className="md:w-1/3">
    <AccordionCard title="Tech Stack">
      <div className="flex flex-wrap gap-2 justify-center">
        {skills.map(skill => (
          <span key={skill} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
            {skill}
          </span>
        ))}
      </div>
    </AccordionCard>
  </div>
</div>


<AccordionCard title="Tech Stack">
  <div className="flex flex-wrap gap-2 justify-center">
    {[
      'React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'HubSpot',
      'WordPress', 'Figma', 'Git', 'SEO', 'Google Analytics'
    ].map(skill => (
      <span key={skill} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
        {skill}
      </span>
    ))}
  </div>
</AccordionCard>

      {/* Contact Modal */}
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </div>
  );
}

