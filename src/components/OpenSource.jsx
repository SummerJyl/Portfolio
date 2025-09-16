import React from 'react';

const openSourceContributions = [
    {
      title: "ProyectoElden",
      description: "Fixed responsive navigation component improving mobile user experience. Resolved layout issues affecting booking functionality on smaller screens.",
      url: "https://github.com/CamiloTriana75/ProyectoElden/pull/19", // Link to your PR
      status: "Merged", // or "In Review"
      technologies: ["React", "CSS", "JavaScript"]
    },
    {
    title: "Idrinth GameMasterAI Dataset", 
    description: "Improved README.md documentation for Hugging Face dataset, enhancing clarity and usability for ML practitioners.",
    url: "https://github.com/Idrinth/[repo]/pull/[number]",
    status: "Completed",
    technologies: ["Hugging Face", "Machine Learning", "Documentation", "AI Datasets"]
  }
];

export default function OpenSource() {
  return (
    <section style={{ marginBottom: '40px' }}>
      <div className="flex flex-wrap gap-4 justify-center">
        {openSourceContributions.map(({ title, url, description, status, technologies }) => (
          <a
            key={title}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center no-underline text-inherit w-48"
          >
            {/* <img src={imgSrc} alt={title} className="w-full h-32 object-cover mb-2 rounded" /> */}
            <p className="text-sm font-medium">{title}</p>
            <p className="text-xs text-gray-600">{description}</p>
            <p className="text-xs font-semibold text-green-600">Status: {status}</p>
          </a>
        ))}
      </div>
    </section>
  );
}


