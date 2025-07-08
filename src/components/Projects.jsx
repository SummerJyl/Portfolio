import React from 'react';

const projects = [
  {
    title: 'Bio Health Data Explorer',
    imgSrc: '/BioHlth-screenshots/bhde-app.png',
    url: 'https://your-bio-health-project-link.com',
  },
  {
    title: 'Personal Finance Dashboard',
    imgSrc: '/screenshots/responsive-pfd.jpeg',
    url: 'https://your-pfd-project-link.com',
  },
  {
    title: 'Patient Login Prototype',
    videoSrc: '/videos/patLoginDemo.mp4',
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
        {projects.map(({ title, imgSrc, url, videoSrc }) => (
          <a
            key={title}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center no-underline text-inherit w-48"
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
                className="w-full rounded-lg mb-2"
              />
            )}
            <p className="text-sm font-medium">{title}</p>
          </a>
        ))}
      </div>
    </section>
  );
}


