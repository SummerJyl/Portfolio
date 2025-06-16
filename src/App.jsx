import React, { useState } from 'react';
import ContactModal from './components/ContactModal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 max-w-7xl mx-auto">

  <nav className="sticky top-0 z-50 bg-white flex justify-end items-center gap-6 px-6 py-4 shadow-sm border-b text-sm font-medium text-gray-700">
  <button onClick={() => setIsOpen(true)}
    className="hover:text-emerald-600 transition duration-200"
  >
    Contact Me
  </button>
  <a
    href="https://github.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-emerald-600 transition duration-200"
  >
    GitHub
  </a>
  <a
    href="https://linkedin.com/in/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-emerald-600 transition duration-200"
  >
    LinkedIn
  </a>
</nav>
      {/* Hero Section */}
      <section id="hero" className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12 bg-white">
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold font-lato text-emerald-700">Jylian Summers</h1>
          <p className="text-lg md:text-xl text-gray-700">
            Senior Front-End Developer | React + TypeScript | UI/UX-Driven | Full-Stack Capable
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:ml-12">
          <img
            src="/images/LI pix.jpg"
            alt="Jylian Summers"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-xl border-4 border-emerald-400"
          />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-12">
        <h2 className="text-3xl font-semibold mb-8 border-b-2 border-emerald-300 inline-block">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Bio Health Data Explorer</h3>
            <img
              src="/Public/BioHlth-screenshots/responsiveBHDE.png"
              alt="Bio Health Data Explorer Screenshot"
              className="rounded-lg shadow-md border w-full"
            />
            <p>
              Interactive data explorer designed for bio health insights, offering dynamic filtering and visualization for complex datasets.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Bio Health Identity</h3>
            <img
              src="/Public/Bio Health Identity-screenshots/responsiveLogin.jpeg"
              alt="Bio Health Identity Login Screenshot"
              className="rounded-lg shadow-md border w-full"
            />
            <p>
              Secure and modern login system tailored for bio health applications, emphasizing user privacy and seamless access management.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Personal Finance Dashboard</h3>
            <img
              src="/Public/PFD-screenshots/responsivePFD.jpeg"
              alt="Personal Finance Dashboard Screenshot"
              className="rounded-lg shadow-md border w-full"
            />
            <p>
              A responsive dashboard to track personal finance metrics and spending habits, built with React and focused on data clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-emerald-300 inline-block">Skills</h2>
        <ul className="flex flex-wrap gap-3">
          {[
            'React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vite', 'Git/GitHub',
            'Node.js', 'Express', 'MongoDB', 'SEO', 'Google Analytics'
          ].map((skill) => (
            <li
              key={skill}
              className="bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section id="experience" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-emerald-300 inline-block">Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Front-End Developer Consultant</h3>
            <p className="italic">San Diego, CA — Jan 2019 – Present</p>
            <ul className="list-disc list-inside">
              <li>Implemented React.js front-end features increasing engagement by 25%</li>
              <li>Optimized page load speed by 20%</li>
              <li>Collaborated on UI/UX improvements with design teams</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Digital Marketing Manager (Contract)</h3>
            <p className="italic">Aquent — Mar 2022 – Mar 2023</p>
            <ul className="list-disc list-inside">
              <li>Managed inbound marketing campaigns and lead nurturing workflows</li>
              <li>Used Google Analytics and HubSpot to track and optimize KPIs</li>
              <li>Coordinated with creative teams on content strategy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Global Digital Activation Manager (Contract)</h3>
            <p className="italic">Aquent — Oct 2020 - Jun 2021</p>
            <ul className="list-disc list-inside">
              <li>Directed rollout of global marketing sites involving React frontends and CMS integrations</li>
              <li>Coordinated with cross-functional teams to optimize web performance, SEO, and mobile responsiveness</li>
              <li>Managed version control, deployment pipelines, and automated testing frameworks</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">UX Manager</h3>
            <p className="italic">WebShop Manager — Jun 2017 - Dec 2018</p>
            <ul className="list-disc list-inside">
              <li>Led frontend engineering for 45+ React/Node.js storefronts delivering microservices-enabled eCommerce solutions</li>
              <li>Integrated design systems, maintained high accessibility standards, and ensured UI consistency across platforms</li>
              <li>Mentored junior developers and conducted technical design reviews</li>
            </ul>
          </div>
        </div>
      </section>

{/* Contact Modal */}
      {isOpen && <ContactModal onClose={() => setIsOpen(false)} />}

    </div>
  );
}

export default App;
