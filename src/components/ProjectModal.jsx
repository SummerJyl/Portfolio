import React from 'react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg p-6 max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()} // prevent modal close on content click
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 font-bold text-xl"
          aria-label="Close modal"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
        {project.videoSrc ? (
          <video
            controls
            className="w-full h-auto rounded mb-4 shadow-md"
            poster={project.imgSrc} // optional: show screenshot before play
            style={{ pointerEvents: 'auto', position: 'relative', zIndex: 9999 }}

          >
            <source src={project.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
        <img 
          src={project.imgSrc} 
          alt={project.title} 
          className="w-full h-auto rounded mb-4"
        />
        )}

        <p className="mb-4">{project.description}</p>
      </div>
    </div>
  );
}
