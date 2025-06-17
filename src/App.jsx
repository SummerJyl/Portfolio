import React, { useState } from 'react';
import ContactModal from './components/ContactModal';
import ScreenshotGallery from './components/ScreenshotGallery';

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
<nav className="flex flex-col items-center justify-center mb-10 md:flex-row md:justify-between md:items-center px-6 py-4 border-b border-gray-300">
  <h1 className="text-2xl font-bold text-center mb-2 md:mb-0">
    Jylian Summers | Web Developer
  </h1>
  <div className="flex items-center space-x-4">
    <button
  onClick={() => setContactOpen(true)}
  className="bg-emerald-700 text-white px-3 py-1 rounded hover:bg-emerald-800 transition"
  >
      Contact
</button>
<a
  href="https://github.com/SummerJyl"
  target="_blank"
  rel="noopener noreferrer"
  className="text-emerald-700 hover:underline"
>
      GitHub
</a>
<a
  href="https://www.linkedin.com/in/jyliansummers/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-emerald-700 hover:underline"
>
      LinkedIn
      </a>
  </div>
</nav>

      {/* Navbar
      <nav className="flex items-center justify-between mb-10">
        <h1 className="text-2xl font-bold">Jylian Summers</h1>
        <div className="flex space-x-4 items-center">
          <a
            href="https://github.com/yourgithubhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          <button
            onClick={() => setContactOpen(true)}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
          >
            Contact
          </button>
        </div>
      </nav> */}

      {/* Hero */}
      <section className="text-center mb-16">
        <img
          src={`${import.meta.env.BASE_URL}images/li-pix.jpg`}
          alt="Jylian Summers"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
        <h2 className="text-3xl font-semibold">Web Developer & Bio Health Enthusiast</h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          Purpose-driven technologist passionate about building engaging web experiences.
        </p>
      </section>

      {/* Projects */}
<section className="mb-16">
  <h3 className="text-xl font-semibold mb-6 border-b-2 border-emerald-700 inline-block text-emerald-700">
    Projects
  </h3>
  <ScreenshotGallery projects={projects} />
</section>

      {/* Experience */}
      <section className="mb-16">
  <h3 className="text-xl font-semibold mb-6 border-b-2 border-emerald-700 inline-block text-emerald-700">
          Experience
        </h3>
        {experience.map((job, idx) => (
          <div key={idx} className="mb-6">
            <h4 className="font-semibold">{job.title}</h4>
            <p className="text-sm text-gray-600 mb-2">{job.date}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {job.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Skills */}
<section className="mb-16">
  <h3 className="text-xl font-semibold mb-6 border-b-2 border-emerald-700 inline-block text-emerald-700">
    Skills
  </h3>
  <div className="flex flex-wrap gap-3">
    {skills.map((skill, idx) => (
      <span
        key={idx}
        className="bg-green-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium"
      >
        {skill}
      </span>
    ))}
  </div>
</section>


      {/* Contact Modal */}
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </div>
  );
}

// Import other components like Skills, ContactModal as needed

// function App() {
//   return (
//     <div className="max-w-5xl mx-auto p-6 bg-gray-50 min-h-screen">
//       <Hero />
//       <Projects />
//       <Experience />
//       {/* Skills Section */}
//       <section className="mt-16">
//         <h2 className="text-2xl font-semibold mb-4 text-center">Skills</h2>
//         <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-800">
//           <span className="px-3 py-1 bg-white rounded border shadow-sm">React</span>
//           <span className="px-3 py-1 bg-white rounded border shadow-sm">JavaScript</span>
//           <span className="px-3 py-1 bg-white rounded border shadow-sm">HTML</span>
//           <span className="px-3 py-1 bg-white rounded border shadow-sm">CSS</span>
//           <span className="px-3 py-1 bg-white rounded border shadow-sm">TailwindCSS</span>
//           <span className="px-3 py-1 bg-white rounded border shadow-sm">GitHub</span>
//             <span className="px-3 py-1 bg-white rounded border shadow-sm">UI/UX</span>
//           </div>
//         </section>
//       {/* Add Skills and ContactModal here when ready */}
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900 max-w-7xl mx-auto px-6">
//       {/* Navigation */}
//       <nav className="sticky top-0 z-50 bg-white flex justify-end items-center gap-6 py-4 shadow-sm border-b text-sm font-medium text-gray-700">
//         <button
//           onClick={() => setIsOpen(true)}
//           className="hover:text-emerald-600 transition duration-200"
//         >
//           Contact Me
//         </button>
//         <a
//           href="https://github.com/SummerJyl"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-emerald-600 transition duration-200"
//         >
//           GitHub
//         </a>
//         <a
//           href="https://www.linkedin.com/in/jyliansummers/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-emerald-600 transition duration-200"
//         >
//           LinkedIn
//         </a>
//       </nav>

//       {/* Hero Section */}
//       <section className="mt-12 flex flex-col md:flex-row items-start gap-8">
//         {/* Image on the left */}
//         <img
//           src={`${import.meta.env.BASE_URL}images/li-pix.jpg`}
//           alt="Jylian Summers"
//           className="w-32 md:w-40 h-auto rounded shadow-md"
//         />

//         {/* Text on the right */}
//         <div className="text-left max-w-3xl">
//           <h1 className="text-4xl font-bold mb-4">I'm Jylian!</h1>
//           <p className="text-gray-600 mb-4">
//             I’m a Senior Front-End Developer with 8+ years of experience building fast, scalable, and accessible web applications. My core strengths lie in React and TypeScript, supported by back-end experience in Java and Spring Boot, and deployment in AWS cloud environments.
//           </p>
//           <p className="text-gray-600 mb-4">
//             I specialize in crafting responsive, user-centered interfaces that bring design systems to life and drive real business impact.
//           </p>
//           <p className="text-gray-600">
//             Whether leading projects or collaborating cross-functionally, I bring a detail-oriented, problem-solving mindset to every build.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }
//       {/* Skills Section */}
//       <section className="mt-16">
//         <h2 className="text-2xl font-semibold mb-4 text-center">Skills</h2>
//         <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-800">
//           <span className="px-3 py-1 bg-white rounded border shadow-sm">React</span>
//           <span className="px-3 py-1 bg-white rounded border shadow-sm">JavaScript</span>
//           <span className="px-3 py-1 bg-white rounded border shadow-sm">HTML</span>
//           <span className="px-3 py-1 bg-white rounded border shadow-sm">CSS</span>
//           <span className="px-3 py-1 bg-white rounded border shadow-sm">TailwindCSS</span>
//           <span className="px-3 py-1 bg-white rounded border shadow-sm">GitHub</span>
//             <span className="px-3 py-1 bg-white rounded border shadow-sm">UI/UX</span>
//           </div>
//         </section>
//       {/* Experience Section */}
//       <section className="mt-16">
//         <h2 className="text-2xl font-semibold mb-4 text-center">Experience</h2>
//         <div className="space-y-6 max-w-3xl mx-auto">
//           <div>
//             <h3 className="text-lg font-semibold">Front-End & Fullstack Web Developer (Consultant)</h3>
//             <p className="text-sm text-gray-600">Jan 2019 – Present, San Diego, CA</p>
//             <ul className="list-disc ml-5 mt-2 text-sm text-gray-700">
//               <li>Implemented and maintained front-end web applications using React.js.</li>
//               <li>Reduced page load speeds by 20% and improved conversion rates.</li>
//               <li>Collaborated on a user-friendly sign-up form, increasing engagement by 25%.</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold">Digital Marketing Manager (Contract)</h3>
//             <p className="text-sm text-gray-600">Mar 2022 – Mar 2023, Aquent</p>
//             <ul className="list-disc ml-5 mt-2 text-sm text-gray-700">
//               <li>Developed and executed digital marketing strategies for various clients.</li>
//               <li>Increased organic traffic by 30% through SEO and content marketing.</li>
//               <li>Managed social media campaigns, boosting engagement by 40%.</li>
//             </ul>
//           </div>

//           <div>
//               <div>
//                 <h3 className="text-lg font-semibold">Global Digital Activation Manager (Contract)</h3>
//                 <p className="text-sm text-gray-600">Mar 2022 – Mar 2023, Aquent</p>
//                 <ul className="list-disc ml-5 mt-2 text-sm text-gray-700">
//                   <li>Curated, developed, and managed content to enhance the brand’s online presence and engagement.</li>
//                   <li>Expanded content volume and diversity aligned with global brand strategy and consumer insights to deliver real-time brand storytelling.</li>
//                   <li>Managed social media campaigns, boosting engagement by 40%.</li>
//                 </ul>
//               </div>
//             </div>
//         </div>
//         </section>
//             </div>
//           );

// export default App;
