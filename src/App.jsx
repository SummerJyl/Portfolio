import React, { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 max-w-7xl mx-auto">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white flex justify-end items-center gap-6 px-6 py-4 shadow-sm border-b text-sm font-medium text-gray-700">
        <button
          onClick={() => setIsOpen(true)}
          className="hover:text-emerald-600 transition duration-200"
        >
          Contact Me
        </button>

        <a
          href="https://github.com/SummerJyl"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-600 transition duration-200"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/jyliansummers/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-600 transition duration-200"
        >
          LinkedIn
        </a>
    </nav>
  
    {/* Hero Image */}
    <img
      src={`${import.meta.env.BASE_URL}images/li-pix.jpg`}
      alt="Jylian Summers"
      className="my-8 rounded-lg shadow-lg mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
    />

      {/* Hero Section */}
      <section className="text-center mt-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          I’m a Senior Front-End Developer with 8+ years of experience building fast, scalable, and accessible web applications. My core strengths lie in React and TypeScript, supported by back-end experience in Java and Spring Boot, and deployment in AWS cloud environments.

          I specialize in crafting responsive, user-centered interfaces that bring design systems to life and drive real business impact. From architecting modern frontend solutions to integrating APIs and optimizing performance, I thrive at the intersection of design, development, and data.

          Whether leading projects or collaborating cross-functionally, I bring a detail-oriented, problem-solving mindset to every build. My work includes complex UI systems, mobile-first experiences, and secure, enterprise-grade applications.
        </p>
        </section>

      {/* Skills Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-800">
          <span className="px-3 py-1 bg-white rounded border shadow-sm">React</span>
          <span className="px-3 py-1 bg-white rounded border shadow-sm">JavaScript</span>
          <span className="px-3 py-1 bg-white rounded border shadow-sm">HTML</span>
          <span className="px-3 py-1 bg-white rounded border shadow-sm">CSS</span>
          <span className="px-3 py-1 bg-white rounded border shadow-sm">TailwindCSS</span>
          <span className="px-3 py-1 bg-white rounded border shadow-sm">GitHub</span>
            <span className="px-3 py-1 bg-white rounded border shadow-sm">UI/UX</span>
          </div>
        </section>
      {/* Experience Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4 text-center">Experience</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div>
            <h3 className="text-lg font-semibold">Front-End & Fullstack Web Developer (Consultant)</h3>
            <p className="text-sm text-gray-600">Jan 2019 – Present, San Diego, CA</p>
            <ul className="list-disc ml-5 mt-2 text-sm text-gray-700">
              <li>Implemented and maintained front-end web applications using React.js.</li>
              <li>Reduced page load speeds by 20% and improved conversion rates.</li>
              <li>Collaborated on a user-friendly sign-up form, increasing engagement by 25%.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Digital Marketing Manager (Contract)</h3>
            <p className="text-sm text-gray-600">Mar 2022 – Mar 2023, Aquent</p>
            <ul className="list-disc ml-5 mt-2 text-sm text-gray-700">
              <li>Developed and executed digital marketing strategies for various clients.</li>
              <li>Increased organic traffic by 30% through SEO and content marketing.</li>
              <li>Managed social media campaigns, boosting engagement by 40%.</li>
            </ul>
          </div>

          <div>
              <div>
                <h3 className="text-lg font-semibold">Global Digital Activation Manager (Contract)</h3>
                <p className="text-sm text-gray-600">Mar 2022 – Mar 2023, Aquent</p>
                <ul className="list-disc ml-5 mt-2 text-sm text-gray-700">
                  <li>Curated, developed, and managed content to enhance the brand’s online presence and engagement.</li>
                  <li>Expanded content volume and diversity aligned with global brand strategy and consumer insights to deliver real-time brand storytelling.</li>
                  <li>Managed social media campaigns, boosting engagement by 40%.</li>
                </ul>
              </div>
            </div>
        </div>
                </section>
            </div>
          );
      }
