import React from 'react';

const projects = [
  {
    title: 'Azure Microservices Demo',
    imgSrc: '/screenshots/azure-microservices.png',
    url: 'https://github.com/SummerJyl/azure-microservices-demo',
    tags: ['TypeScript', 'Azure', 'Redis', 'Docker', 'Node.js'],
    featured: true,
  variants: {
    general: 'Production-ready microservices architecture with TypeScript, Azure Queue Storage, Redis caching, and Docker containerization. Demonstrates async job processing and REST API design.'
  }
},
  {
    title: 'Bio Health Data Explorer',
    imgSrc: '/screenshots/bhde-app.png',
    url: 'https://github.com/SummerJyl/Data-Explore',
    tags: ['React', 'Spring Boot', 'PostgreSQL', 'TypeScript', 'REST API'],
    variants: {
    general: 'Full-stack nutrition tracking platform with USDA food database integration, nutrition goal management, and macro filtering'
    }
  },
  {
    title: 'Personal Finance Dashboard',
    imgSrc: '/screenshots/responsive-pfd.jpeg',
    url: 'https://your-pfd-project-link.com',
    tags: ['React', 'UI/UX'],
    variants: {
    general: 'Responsive financial tracking application'
    }
  },
  {
    title: 'Patient Login Prototype',
    videoSrc: '/videos/patLoginDemo.mp4',
    url: 'https://your-pfd-project-link.com',
    tags: ['React', 'Healthcare'],
    variants: {
    general: 'Healthcare portal authentication flow'
  }
  }
];

export default function Projects() {
  return (
    <section style={{ marginBottom: '40px' }}>
      <h2>Projects</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {projects.map(({ title, description, imgSrc, url, videoSrc, tags, featured }) => (
          <div
            key={title}
            className={`text-center w-80 ${featured ? 'ring-2 ring-blue-500 rounded-lg p-4' : ''}`}
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-inherit no-underline"
            >
              {videoSrc ? (
                <video
                  controls
                  className="w-full rounded-lg mb-2"
                  poster={imgSrc}
                  style={{ pointerEvents: 'auto', position: 'relative', zIndex: 9999 }}
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={imgSrc}
                  alt={title}
                  className="w-full rounded-lg mb-2 h-48 object-cover"
                />
              )}
              <p className="text-base font-semibold mb-1">{title}</p>
              {featured && <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Featured</span>}
            </a>
            <p className="text-sm text-gray-600 mt-2 mb-2">{description}</p>
            <div className="flex flex-wrap gap-1 justify-center">
              {tags?.map(tag => (
                <span 
                  key={tag}
                  className="text-xs bg-gray-200 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}