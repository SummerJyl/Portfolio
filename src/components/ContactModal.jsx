import React from 'react';

export default function ContactModal({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold"
          aria-label="Close modal"
        >
          &times;
        </button>
        <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border px-4 py-2 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full border px-4 py-2 rounded"
          />
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded w-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
