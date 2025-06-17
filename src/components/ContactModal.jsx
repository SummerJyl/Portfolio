import React from 'react';

export default function ContactModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#f4f7f4] p-6 rounded-2xl shadow-lg max-w-md w-full relative">
        <button
          className="absolute top-3 right-4 text-gray-600 hover:text-gray-900 text-xl"
          onClick={onClose}
          aria-label="Close contact form"
        >
          &times;
        </button>
        <h3 className="text-2xl text-emerald-700 font-semibold mb-6 text-center">
          Contact Me
        </h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you! Your message has been sent.');
            onClose();
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-2 px-4 rounded transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
