import React from 'react';

export default function ContactModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
          aria-label="Close contact form"
        >
          &times;
        </button>
        <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you! Your message has been sent.');
            onClose();
          }}
        >
          <label className="block mb-2">
            Name
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </label>
          <label className="block mb-2">
            Email
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </label>
          <label className="block mb-4">
            Message
            <textarea
              name="message"
              rows="4"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}


// import React from 'react';

// export default function ContactModal({ onClose }) {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold"
//           aria-label="Close modal"
//         >
//           &times;
//         </button>
//         <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
//         <form className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             className="w-full border px-4 py-2 rounded"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             className="w-full border px-4 py-2 rounded"
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows="4"
//             className="w-full border px-4 py-2 rounded"
//           />
//           <button
//             type="submit"
//             className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded w-full"
//           >
//             Send
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
