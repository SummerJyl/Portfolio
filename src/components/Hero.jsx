// src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <section className="text-center py-10">
      <h1 className="text-5xl font-bold mb-2">Jylian Summers</h1>
      <p className="text-xl text-gray-600">Senior Full-Stack Developer | Bio Health & Cloud Enthusiast</p>
      <p className="text-base text-gray-500 mt-4 max-w-3xl mx-auto px-4">
        Hi, I’m Jylian Summers — a senior full-stack engineer passionate about building scalable, high-performance web applications and data-driven solutions for healthcare and complex domains. 
        I specialize in React, Node.js, Python, and Ruby on Rails, with deep expertise in cloud architecture (AWS certified), RESTful APIs, microservices, and real-time data workflows.

        I thrive on turning complex problems into maintainable, mission-critical solutions, whether it’s designing distributed systems, optimizing databases, or integrating AI-driven pipelines. 
        As a technical leader, I mentor teams, guide architectural decisions, and balance rapid iteration with long-term scalability.
      </p>
    </section>
  );
}