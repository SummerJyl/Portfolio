import React, { useState } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import AccordionCard from './components/AccordionCard';
import OpenSource from './components/OpenSource';
import ProjectsDropdown from './components/ProjectsDropdown';
import ContactModal from './components/ContactModal';
import ScreenshotGallery from './components/ScreenshotGallery';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export const techStack = [
  {
    category: "Full Stack",
    items: [
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript (ES6+)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Next.js", icon: "" }, // no official icon, leave blank or add custom
      { name: "Modern Web Frameworks", icon: "" },
      { name: "Component Architecture", icon: "" }
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Python (expert)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Ruby on Rails", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Spring Boot", icon: "" },
      { name: "RESTful APIs", icon: "" },
      { name: "Microservices", icon: "" },
      { name: "API Design", icon: "" },
      { name: "Webhooks", icon: "" },
      { name: "Data Transformation", icon: "" }
    ]
  },
  {
    category: "Data & Databases",
    items: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "Relational Schema Design", icon: "" },
      { name: "Efficient Data Models", icon: "" },
      { name: "SQL Optimization", icon: "" }
    ]
  },
  {
    category: "Integrations & Workflows",
    items: [
      { name: "API Integrations", icon: "" },
      { name: "Data Transformation Pipelines", icon: "" },
      { name: "Service Orchestration", icon: "" },
      { name: "Event-driven Systems", icon: "" }
    ]
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      { name: "AWS (EC2, S3, RDS, Lambda)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "CI/CD Pipelines", icon: "" },
      { name: "Distributed Systems", icon: "" },
      { name: "Serverless Applications", icon: "" }
    ]
  },
  {
    category: "Observability & Performance",
    items: [
      { name: "System Monitoring", icon: "" },
      { name: "Performance Optimization", icon: "" },
      { name: "Debugging", icon: "" },
      { name: "Production Reliability", icon: "" }
    ]
  },
  {
    category: "Development Practices",
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Async Communication", icon: "" },
      { name: "Code Review", icon: "" },
      { name: "Pairing", icon: "" },
      { name: "Remote Collaboration", icon: "" },
      { name: "Agile Methodologies", icon: "" }
    ]
  }
];
export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  const projects = [
    {
      title: "Azure Microservices Demo",
      imgSrc: `${import.meta.env.BASE_URL}/screenshots/azure-microservices.png`,
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
      imgSrc: `${import.meta.env.BASE_URL}BioHlth-screenshots/responsiveBHDE.png`,
      description: "A comprehensive real-time data processing platform for scientific health data management. Built with distributed cloud architecture to handle high-volume, sensitive data processing workflows with regulatory compliance and performance optimization.",
      url: "https://yourlivebiohealthlink.com",
    },
    {
      title: "Patient Login Prototype",
      videoSrc: "`${import.meta.env.BASE_URL}videos/patLoginDemo.mp4",
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
      <h2 cclassName="text-3xl font-semibold text-emerald-700">Senior Full Stack Engineer | Bio Health Enthusiast</h2>

<p className="mt-4 text-gray-600 max-w-xl mx-auto">
  Hi, I'm Jylian Summers — Senior Full Stack Engineer with 10 years strong UX sensibilities - I don't just build features, intuitive user experiences backed by clean, maintainable code. 
  I also build scalable, high-performance web applications using React, Node.js, Python, Ruby on Rails, and PostgreSQL. 
  AWS certified with expertise in cloud architecture, serverless applications, and distributed systems.building scalable, high-performance web applications using React, Node.js, Python, Ruby on Rails, and PostgreSQL.
</p>

<p className="text-gray-600 max-w-xl mx-auto">
  I specialize in architecting APIs, optimizing databases, and delivering mission-critical applications for healthcare and complex domains. AWS certified with expertise in cloud architecture, serverless applications, and distributed systems.
</p>

<p className="text-gray-600 max-w-xl mx-auto">
  My work spans real-time data processing pipelines, microservices architecture, and AI-integrated workflows. As a technical leader, I mentor teams, drive architectural decisions, and balance rapid iteration with long-term scalability.
</p>

<p className="text-gray-600 max-w-xl mx-auto">
  I thrive in ambiguous, fast-paced environments where engineering shapes product strategy.
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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '5px' }}>
          {items.map(skill => (
            <button
              key={skill.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                padding: '8px 15px',
                cursor: 'default',
                fontSize: '14px'
              }}
            >
              {skill.icon && <img src={skill.icon} alt={skill.name} width="20" />}
              {skill.name}
            </button>
          ))}
        </div>
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
