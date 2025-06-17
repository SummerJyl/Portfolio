import React, { useState } from 'react';
import ContactModal from './ContactModal';

export default function Navbar() {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <nav className="flex flex-col items-center justify-center px-6 py-4 border-b border-gray-300 md:flex-row md:justify-between">
        {/* Centered Name */}
        <h1 className="text-2xl font-bold mb-2 md:mb-0 text-center">
          Jylian Summers | Web Developer
        </h1>

        {/* Right side: Contact, GitHub, LinkedIn */}
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

      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </>
  );
}



// import React, { useState } from 'react';
// import ContactModal from './ContactModal';

// export default function NavBar() {
//   const [showContact, setShowContact] = useState(false);

//   return (
//     <>
//       <nav className="flex flex-col items-center px-6 py-4 border-b border-gray-300 text-center">
//   <h1 className="text-2xl font-bold mb-2">Jylian Summers | Web Developer</h1>
//   <div className="flex gap-4">
//     <button
//       onClick={() => setShowContact(true)}
//       className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
//     >
//       Contact
//     </button>
//     <a
//       href="https://github.com/SummerJyl"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="hover:underline"
//     >
//       GitHub
//     </a>
//     <a
//       href="https://www.linkedin.com/in/jyliansummers/"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="hover:underline"
//     >
//       LinkedIn
//     </a>
//   </div>
// </nav>

// {showContact && <ContactModal onClose={() => setShowContact(false)} />}
//     </>
//   );
// }