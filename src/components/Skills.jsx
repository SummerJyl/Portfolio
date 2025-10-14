import React from 'react';

const skillCategories = {
  'Frontend': ['React', 'TypeScript', 'JavaScript', 'Angular', 'HTML5/CSS3', 'Tailwind CSS'],
  'Backend': ['Java (Spring Boot)', 'Python', 'Node.js', 'Express', 'REST APIs', 'Microservices'],
  'Databases': ['PostgreSQL', 'MongoDB', 'DynamoDB', 'MySQL', 'SQL'],
  'Cloud & Infrastructure': ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Serverless'],
  'Data Engineering': ['ETL/ELT Pipelines', 'Data Modeling', 'API Integration', 'Real-time Processing'],
  'DevOps & Tools': ['Git/GitHub', 'CI/CD', 'Postman', 'VS Code', 'Agile/Scrum']
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