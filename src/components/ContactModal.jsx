import React from 'react';
import { FaEnvelope, FaTimes } from 'react-icons/fa';

export default function ContactModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-[#f4f7f4] rounded-2xl max-w-md w-full relative overflow-hidden shadow-2xl border border-emerald-100">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-emerald-700 transition"
          aria-label="Close"
        >
          <FaTimes size={20} />
        </button>

        {/* Content Section */}
        <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
          <div className="bg-emerald-100 p-4 rounded-full mb-4">
            <FaEnvelope size={32} className="text-emerald-700" />
          </div>
          
          <h2 className="text-3xl font-playfair text-emerald-700 mb-2">Let's Connect</h2>
          <p className="text-gray-600 mb-8 text-sm">
            I'm currently open to Senior Engineering opportunities and technical collaborations.
          </p>
          
          <a 
            href="mailto:jylians.dev@gmail.com" 
            className="w-full bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-emerald-800 transition shadow-md flex items-center justify-center gap-3"
          >
            Email Me Directly
          </a>
          
          <p className="mt-6 text-xs font-mono text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md">
            jylians.dev@gmail.com
          </p>
        </div>

      </div>
    </div>
  );
}