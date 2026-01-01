// src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <section className="text-center py-10">
      <h1 className="text-5xl font-bold mb-2">Jylian Summers</h1>
      <p className="text-xl text-gray-600">Senior Full-Stack Developer | Bio Health & Cloud Enthusiast</p>
      <p className="text-base text-gray-500 mt-4 max-w-3xl mx-auto px-4">
        Hi, I'm Jylian Summers—a Senior Full Stack Engineer who builds software that people actually want to use.
        I thrive in ambiguous, fast-paced environments where engineering shapes product strategy.
      </p>
      <p className="text-gray-600 max-w-xl mx-auto">
      For the past 10 years, I've been crafting scalable web applications that balance exceptional user experience with rock-solid engineering. 
      I work across the full stack with React, TypeScript, Node.js, Python, Ruby on Rails, and PostgreSQL, always asking: "Does this solve the real problem?"
      </p>

      <p className="text-gray-600 max-w-xl mx-auto">
      I specialize in microservices architecture, cloud systems (AWS certified), and mission-critical applications for healthcare and complex domains. 
      Whether it's real-time data pipelines, API design, or AI-integrated workflows, I focus on building systems that perform under pressure and scale with your business.
      </p>

      <p className="text-gray-600 max-w-xl mx-auto">
      As a technical leader, I mentor teams, drive architectural decisions, and ship products that matter. 
      Check out my work below—let's build something great together.
      </p>
    </section>
  );
}