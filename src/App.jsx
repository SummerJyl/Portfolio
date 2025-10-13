import React, { useState } from 'react';
import AccordionCard from './components/AccordionCard';
import Experience from './components/Experience';
import OpenSource from './components/OpenSource';
import ProjectsDropdown from './components/ProjectsDropdown';
import ContactModal from './components/ContactModal';
import ScreenshotGallery from './components/ScreenshotGallery';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  const projects = [
    {
      title: "Azure Microservices Demo",
      imgSrc: `${import.meta.env.BASE_URL}screenshots/azure-microservices.png`,
      description: "Production-ready microservices architecture with TypeScript, Azure Queue Storage, Redis caching, and Docker containerization. Demonstrates async job processing, REST API design, and cloud-native application patterns with comprehensive documentation.",
      url: "https://github.com/SummerJyl/azure-microservices-demo",
      featured: true,
    },     {
      title: "Personal Finance Dashboard",
      imgSrc: `${import.meta.env.BASE_URL}screenshots/responsive-pfd.jpeg`,
      description: "A full-stack financial data processing application with real-time analytics and dynamic visualization capabilities. Built with React frontend and Node.js backend to handle high-volume transaction data processing and performance optimization.",
      url: "https://yourlivepfdlink.com",
    },
    {
      title: "Bio Health Data Explorer",
      imgSrc: `${import.meta.env.BASE_URL}screenshots/bhde-app.png`,
      description: "A comprehensive real-time data processing platform for scientific health data management. Built with distributed cloud architecture to handle high-volume, sensitive data processing workflows with regulatory compliance and performance optimization.",
      url: "https://yourlivebiohealthlink.com",
    },
    {
      title: "Patient Login Prototype",
      videoSrc: `${import.meta.env.BASE_URL}videos/patLoginDemo.mp4`,
      description:"A secure, scalable authentication system designed for healthcare applications with focus on user experience optimization and responsive design. Built with modern web technologies to handle sensitive medical data access with regulatory compliance protocols.",
      url: "https://yourliveloginpage.com",
    },
  ];

  const openSourceContributions = [
    {
      title: "ProyectoElden - Sports Booking Platform",
      imgSrc: `${import.meta.env.BASE_URL}screenshots/proyectoelden-fix.png`, // Screenshot of your fix
      description: "Fixed responsive navigation component improving mobile user experience. Resolved layout issues affecting booking functionality on smaller screens.",
      url: "https://github.com/CamiloTriana75/ProyectoElden/pull/19", // Link to your PR
      status: "Merged", // or "In Review"
      technologies: ["React", "CSS", "JavaScript"]
    },
    {
      title: "[Repository Name]",
      description: "[What you fixed/contributed]",
      url: "https://github.com/[pr-link]",
      status: "Completed", // or "Resolved"
      technologies: ["List", "Technologies"]
    }
  ];
  const techStack = [
    {
      category: "UI Engineering", 
      items: "React 18 • TypeScript • Modern JavaScript (ES6+) • HTML5 • CSS3 • Responsive Design",
    },

    {
      category: "Architecture & Performance",
      items: "Design Systems • Component Libraries • Web Performance Optimization • Accessibility (WCAG)",
    },
    
    {
      category: "API & Data",
      items: "REST APIs • Java Spring Boot • Node.js • Real-time Data Interfaces • Microservices",
    },
     
    {
      category: "Testing & Tools",
      items: "Jest • Git • Cypress • Playwright • Webpack • Vite • Ci/CD • Agile/Scrum",
    }
  ];

  return (
  <div
    className="min-h-[100vh] flex flex-col text-gray-900 px-4 py-6 font-lato"
    style={{
      backgroundImage: `url('${import.meta.env.BASE_URL}images/bg-hero.png')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center top',
    }}
  >

        {/* Navbar */}
        <nav className="flex flex-col items-center px-6 py-4 border-b border-gray-300 space-y-2">
          <h1 className="text-4xl font-bold text-emerald-700 font-playfair text-center md:text-left">
          Jylian Summers
          </h1>
  <div className="flex items-center space-x-4 text-emerald-700">
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
      aria-label="GitHub"
      className="hover:text-emerald-900 transition"
    >
      <FaGithub size={20} />
    </a>
    <a
      href="https://www.linkedin.com/in/jyliansummers/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="hover:text-emerald-900 transition"
    >
      <FaLinkedin size={20} />
    </a>
  </div>
</nav>


        {/* Main content flex-grow to fill space */}
        <main className="flex-grow max-w-5xl mx-auto px-4 py-6 flex flex-col">

        {/* Hero Section */}
        <section className="text-center mb-8">
          <img
            src={`${import.meta.env.BASE_URL}images/li-pix.jpg`}
            alt="Jylian Summers"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
      <h2 className="text-3xl font-semibold text-emerald-700">Full Stack Developer | Bio Health Enthusiast</h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Hi, I'm Jylian Summers — a full-stack software engineer with expertise in real-time data processing, cloud infrastructure, and scientific computing applications. 
            I specialize in React, Node.js, RESTful APIs, and building scalable systems for complex data workflows. 
            Passionate about solving deep technical challenges and rapid technology adoption, I love turning complex problems into robust, maintainable solutions. 
             Let’s build something impactful together!
          </p>
        </section>

        {/* Content Sections */}
        <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-6 w-full">
          <div className="w-full md:flex-1">
            <AccordionCard title={<span className="text-emerald-700 text-lg font-semibold">Projects</span>}>
              <ProjectsDropdown projects={projects} />
            </AccordionCard>
          </div>

          <div className="w-full md:flex-1">
            <AccordionCard title={<span className="text-emerald-700 text-lg font-semibold">Experience</span>}>
              <Experience />
            </AccordionCard>
          </div>

          <div className="w-full md:flex-1">
          <AccordionCard title={<span className="text-emerald-700 text-lg font-semibold">Open Source</span>}>
            <OpenSource />
          </AccordionCard>
          </div>

          <div className="w-full md:flex-1">
        <AccordionCard title={<span className="text-emerald-700 text-lg font-semibold">Tech Stack</span>}>
          <div className="space-y-2">
            {techStack.map(({ category, items }, idx) => (
              <AccordionCard
                key={idx}
                title={<span className="text-gray-600 text-base font-semibold">{category}</span>}
              >
                <p className="text-sm text-gray-700">{items}</p>
              </AccordionCard>
            ))}
          </div>
        </AccordionCard>
      </div>
      
        {/* Contact Modal */}
        {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
        </div>
        </main>
        </div>
    );
  }
