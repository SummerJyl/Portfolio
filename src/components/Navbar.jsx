import React, { useState } from 'react';
import ContactModal from './ContactModal';

export default function NavBar() {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <nav className="flex flex-col items-center justify-center px-6 py-4 border-b border-gray-300 md:flex-row md:justify-between">
        {/* Title */}
        <h1 className="text-2xl font-bold mb-2 md:mb-0 text-center">
          Jylian Summers | Full Stack Developer
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowContact(true)}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
          >
            Contact
          </button>
          <a
            href="https://github.com/SummerJyl"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jyliansummers/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </nav>

      {/* Modal logic */}
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </>
  );
}