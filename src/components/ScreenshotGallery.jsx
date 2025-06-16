// components/ScreenshotGallery.jsx

export default function ScreenshotGallery({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {images.map(({ src, alt }, idx) => (
        <div key={idx} className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
}
