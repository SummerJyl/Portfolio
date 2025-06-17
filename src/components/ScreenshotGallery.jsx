import React from 'react';

export default function ScreenshotGallery({ projects }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {projects.map(({ title, imgSrc, description, url }, idx) => (
        <div
          key={idx}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
        >
          <img
            src={imgSrc}
            alt={`${title} screenshot`}
            className="w-full h-40 object-contain"
          />
          <div className="p-3 bg-white">
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// // components/ScreenshotGallery.jsx

// export default function ScreenshotGallery({ images }) {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
//       {images.map(({ src, alt }, idx) => (
//         <div key={idx} className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
//           <img
//             src={src}
//             alt={alt}
//             className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
//           />
//         </div>
//       ))}
//     </div>
//   );
// }
