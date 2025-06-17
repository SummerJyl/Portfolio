import React from 'react';

const jobs = [
  {
    title: "Front-End Developer Consultant",
    company: "Self-Employed",
    dates: "Jan 2019 - Present",
    description: "Implemented React.js web apps that increased conversions by 20%..."
  },
  {
    title: "Digital Marketing Manager",
    company: "Aquent",
    dates: "Mar 2022 - Mar 2023",
    description: "Led inbound marketing and HubSpot automation projects..."
  },
  {
    title: "Global Digital Activation Manager",
    company: "Aquent",
    dates: "Oct 2020 - Jun 2021",
    description: "Managed modular UI components and QA testing for 45+ React/Node.js sites..."
  },
  {
    title: "UX Manager / WebShop Manager",
    company: "Self-Employed",
    dates: "Jun 2017 - Dec 2018",
    description: "Developed e-commerce UI and backend with PostgreSQL and MongoDB..."
  },
];

export default function Experience() {
  return (
    <section style={{ marginBottom: '40px' }}>
      <h2>Experience</h2>
      {jobs.map(({ title, company, dates, description }) => (
        <div key={title} style={{ marginBottom: '20px' }}>
          <h3>{title} — <em>{company}</em></h3>
          <p><strong>{dates}</strong></p>
          <p>{description}</p>
        </div>
      ))}
    </section>
  );
}

// // src/components/Experience.jsx
// import React from 'react';

// const experiences = [
//   {
//     title: "Front-End Developer (Consultant)",
//     company: "San Diego, CA",
//     dates: "Jan 2019 – Present",
//     description: [
//       "Implemented and maintained front-end web applications using React.js, resulting in a 20% reduction in page load speeds and increased conversion rates.",
//       "Developed strategies to improve website performance.",
//       "Collaborated on a user-friendly sign-up form, leading to a 25% increase in engagement."
//     ],
//   },
//   {
//     title: "Digital Marketing Manager (on-contract)",
//     company: "Aquent",
//     dates: "Mar 2022 – Mar 2023",
//     description: [
//       "Served as a HubSpot SME and managed projects using Accelo and Figma.",
//       "Handled B2B copywriting, inbound marketing campaigns, and lead nurturing.",
//       "Utilized Google Analytics for tracking metrics and built segmented lists and workflows."
//     ],
//   },
//   {
//     title: "Global Digital Activation Manager",
//     company: "Aquent, San Diego, CA",
//     dates: "Oct 2020 – Jun 2021",
//     description: [
//       "Managed modular UI components and RESTful API integrations.",
//       "Supported SQL backend and reporting tool refinement.",
//       "Led test-driven development and QA processes."
//     ],
//   },
//   {
//     title: "UX Manager / WebShop Manager",
//     company: "San Diego, CA",
//     dates: "Jun 2017 – Dec 2018",
//     description: [
//       "Managed 45+ React/Node.js eCommerce sites.",
//       "Handled backend development with PostgreSQL and MongoDB.",
//       "Led front-end testing and peer code reviews."
//     ],
//   },
// ];

// export default function Experience() {
//   return (
//     <section className="py-10">
//       <h2 className="text-3xl font-semibold mb-6">Experience</h2>
//       <div className="space-y-8">
//         {experiences.map(({ title, company, dates, description }) => (
//           <div key={title} className="bg-white shadow rounded p-6">
//             <h3 className="text-xl font-bold">{title}</h3>
//             <p className="italic text-gray-600">{company} | {dates}</p>
//             <ul className="list-disc list-inside mt-2 text-gray-700">
//               {description.map((desc, i) => (
//                 <li key={i}>{desc}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
