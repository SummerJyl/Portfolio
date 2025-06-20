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
      title: "Patient Login Prototype",
      videoSrc: `${import.meta.env.BASE_URL}videos/patLoginDemo.mp4`,
      description: `Responsive login page with animated transitions and scalable architecture`,
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
          <h2 className="text-3xl font-semibold text-emerald-700">Web Developer | Bio Health Enthusiast</h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Hi, I’m Jylian Summers — a front-end web developer with 8+ years of experience building high-performance, conversion-focused eCommerce and health industry applications. 
            I specialize in React, modular UI components, API integrations, and creating engaging user experiences. 
            Passionate about clean code and collaboration, I love turning complex challenges into elegant solutions. Let’s build something impactful together!
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
