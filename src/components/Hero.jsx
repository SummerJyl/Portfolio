// src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <section className="text-center py-10">
      <h1 className="text-5xl font-bold mb-2">Jylian Summers</h1>
      <p className="text-xl text-gray-600">Software Engineer | BioTech & Healthcare Innovation</p>
      <p className="text-base text-gray-500 mt-4 max-w-3xl mx-auto px-4">
        Full-stack software engineer with 8+ years of experience building scalable web applications 
        for eCommerce and healthcare industries. Specializing in React, TypeScript, Node.js, 
        cloud architecture (Azure), and microservices. From responsive frontends to distributed 
        systems, I'm passionate about building robust, maintainable solutions that solve real problems.
      </p>
    </section>
  );
}