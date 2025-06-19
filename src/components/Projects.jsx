import React from 'react';

const projects = [
  {
    title: 'Bio Health Data Explorer',
    imgSrc: '/screenshots/responsive-login.jpeg',
    url: 'https://your-bio-health-project-link.com',
  },
  {
    title: 'Personal Finance Dashboard',
    imgSrc: '/screenshots/responsive-pfd.jpeg',
    url: 'https://your-pfd-project-link.com',
  },
  {
    title: 'Login Page',
    imgSrc: '/screenshots/responsive-bhde.png',
    url: 'https://your-pfd-project-link.com',
  },
  {
    title: 'Portfolio Website',
    imgSrc: '/images/li-pix.jpg',
    url: 'https://your-portfolio-link.com',
  },
];

export default function Projects() {
  return (
    <section style={{ marginBottom: '40px' }}>
      <h2>Projects</h2>
      <div className="flex flex-wrap gap-4 justify-center">
  {projects.map(({ title, imgSrc, url }) => (
    <a
      key={title}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-center no-underline text-inherit w-48"
    >
      <img
        src={imgSrc}
        alt={title}
        className="w-full rounded-lg mb-2"
      />
      <p className="text-sm font-medium">{title}</p>
    </a>
  ))}
</div>
    </section>
  );
}


// // src/components/Projects.jsx
// import React from 'react';

// const projects = [
//   {
//     title: "Personal Finance Dashboard",
//     image: "/images/pfd-screenshot.png",
//     description: "A React-based dashboard to manage personal finances with charts and forms.",
//   },
//   {
//     title: "Bio Health Data Explorer",
//     image: "/images/biohealth-screenshot.png",
//     description: "Data visualization tool built for bio health industry insights.",
//   },
//   {
//     title: "Login Page",
//     image: "/images/loginpage-screenshot.png",
//     description: "Secure React login page with authentication integration.",
//   },
// ];

// export default function Projects() {
//   return (
//     <section className="py-10">
//       <h2 className="text-3xl font-semibold mb-6">Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {projects.map(({ title, image, description }) => (
//           <div key={title} className="bg-white shadow rounded p-4">
//             <img src={image} alt={`${title} screenshot`} className="mb-4 rounded" />
//             <h3 className="text-xl font-semibold">{title}</h3>
//             <p className="mt-2 text-gray-700">{description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
