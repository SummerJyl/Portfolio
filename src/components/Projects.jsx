import React from 'react';
import { projects } from '../data/projects';

export default function Projects({ mode = 'general' }) {
  return (
    <section style={{ marginBottom: '40px' }}>
      <h2>Projects</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {projects.map(({ title, imgSrc, url, videoSrc, tags, featured, variants }) => (
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
            <p className="text-sm text-gray-600 mt-2 mb-2">{variants[mode]}</p>
            <div className="flex flex-wrap gap-1 justify-center">
              {tags?.map(tag => (
                <span key={tag} className="text-xs bg-gray-200 px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
