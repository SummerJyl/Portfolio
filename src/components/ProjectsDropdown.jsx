import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

export default function ProjectsDropdown({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <ul className="space-y-3">
        {projects.map((project, index) => (
          <li key={index}>
            <button
              onClick={() => setSelectedProject(project)}
              className="text-emerald-700 hover:underline font-semibold"
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
}
