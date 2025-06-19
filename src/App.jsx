import React, { useState } from 'react';
import AccordionCard from './components/AccordionCard';
import Experience from './components/Experience';
import ProjectsDropdown from './components/ProjectsDropdown';
import ContactModal from './components/ContactModal';
import ScreenshotGallery from './components/ScreenshotGallery';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

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
      description: `I built a modern, responsive Login page using HTML5, CSS3, and JavaScript, featuring animated transitions between "Login" and "Create Account" states. 
      The design leverages CSS Flexbox for layout, CSS keyframes for smooth UI animation, and modular architecture for scalability. 
      Technologies like Webpack, TypeScript, and Redux enhance maintainability and performance.
      Skills: HTML5 · CSS3 · JavaScript · CSS Flexbox · CSS Keyframes · TypeScript · Redux · Webpack · UI/UX Design.`,
      url: "https://yourliveloginpage.com",
    },
  ];


  const techStack = [
    {
      category: "Languages & Frameworks", 
      items: "ReactJS • JavaScript • HTML • CSS • Node.js • Spring Boot • MongoDB • SQL • Express",
    },

    {
      category: "CMS & SaaS Tools",
      items: "WordPress • HubSpot • Umbraco • Shopify • Cascade CMS",
    },

    {
      category: "Digital Marketing Tools",
      items: "Google Analytics 4 • Google Tag Manager • SEMrush • BrightEdge • Optimizely • Tealium",
    },
    
    {
      category: "Design & UI/UX",
      items: "Figma • Adobe XD • Photoshop • Illustrator • After Effects",
    },
     
    {
      category: "Dev Tools",
      items: "Git • GitHub • VS Code • JIRA • Lighthouse • Postman",
    }
  ];

  return (
  <div
    className="min-h-screen flex flex-col text-gray-900 px-4 py-6 font-lato"
    style={{
      backgroundImage: `url('${import.meta.env.BASE_URL}images/bg-hero.png')`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center top',
    }}
  >

        {/* Navbar */}
        <nav className="flex flex-col md:flex-row md:justify-between items-center px-6 py-4 border-b border-gray-300">
          <h1 className="text-2xl font-bold text-emerald-700 font-lato text-center md:text-left">
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
            <a href="https://github.com/SummerJyl" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={20} className="hover:text-emerald-900 transition" />
            </a>
            <a href="https://www.linkedin.com/in/jyliansummers/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={20} className="hover:text-emerald-900 transition" />
            </a>
          </div>
        </nav>

        {/* Main content flex-grow to fill space */}
        <main className="flex-grow max-w-5xl mx-auto px-4 py-6 flex flex-col">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <img
            src={`${import.meta.env.BASE_URL}images/li-pix.jpg`}
            alt="Jylian Summers"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h2 className="text-3xl font-semibold">Web Developer | Bio Health Enthusiast</h2>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            Purpose-driven technologist passionate about building engaging web experiences.
          </p>
        </section>

        {/* Content Sections */}
        <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-6 w-full">
          <div className="w-full md:flex-1">
            <AccordionCard title="Projects">
              <ProjectsDropdown projects={projects} />
            </AccordionCard>
          </div>

          <div className="w-full md:flex-1">
            <AccordionCard title="Experience">
              <Experience />
            </AccordionCard>
          </div>

          <div className="w-full md:flex-1">
        <AccordionCard title="Tech Stack">
          <div className="space-y-2">
            {techStack.map(({ category, items }, idx) => (
              <AccordionCard
                key={idx}
                title={<span className="text-emerald-800 text-base font-semibold">{category}</span>}
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
