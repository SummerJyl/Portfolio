import React from 'react';

const skillCategories = {
  'Frontend': ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
  'Backend': ['Node.js', 'Express', 'REST APIs', 'Microservices'],
  'Cloud & DevOps': ['Azure', 'Docker', 'Git', 'CI/CD'],
  'Data & Caching': ['Redis', 'Azure Queue Storage', 'SQL', 'API Integration'],
  'Tools': ['VS Code', 'Figma', 'Postman', 'Azure Portal']
};

export default function Skills() {
  return (
    <section style={{ marginBottom: '40px' }}>
      <h2>Tech Stack</h2>
      <div className="space-y-6">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold mb-2 text-gray-700">{category}</h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {skills.map(skill => (
                <button 
                  key={skill} 
                  style={{
                    background: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '20px',
                    padding: '8px 15px',
                    cursor: 'default',
                    fontSize: '14px'
                  }}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}