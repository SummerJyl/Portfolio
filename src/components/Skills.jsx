import React from 'react';

const skillCategories = {
  'Full Stack': [
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript (ES6+)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg' },
    { name: 'Modern web frameworks' },
    { name: 'Component architecture' }
  ],
  'Backend Development': [
    { name: 'Python (expert)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Ruby on Rails', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'RESTful APIs' },
    { name: 'Microservices' },
    { name: 'API design' },
    { name: 'Webhooks' },
    { name: 'Data transformation' }
  ],
  'Data & Database': [
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/white' },
    { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis/white' },
    { name: 'Relational schema design' },
    { name: 'Efficient data models' },
    { name: 'SQL optimization' }
  ],
  'Integrations & Workflows': [
    { name: 'API integrations' },
    { name: 'Data transformation pipelines' },
    { name: 'Service orchestration' },
    { name: 'Event-driven systems' }
  ],
  'Cloud & Infrastructure': [
    { name: 'AWS (EC2, S3, RDS, Lambda)', icon: 'https://cdn.simpleicons.org/aws/white' },
    { name: 'Azure', icon: 'https://cdn.simpleicons.org/microsoftazure/white' },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'CI/CD pipelines' },
    { name: 'Distributed systems' },
    { name: 'Serverless applications' }
  ],
  'Observability & Performance': [
    { name: 'System monitoring' },
    { name: 'Performance optimization' },
    { name: 'Debugging' },
    { name: 'Production reliability' }
  ],
  'Development Practices': [
    { name: 'Git', icon: 'https://cdn.simpleicons.org/git/white' },
    { name: 'Async communication' },
    { name: 'Code review' },
    { name: 'Pairing' },
    { name: 'Remote collaboration' },
    { name: 'Agile methodologies' }
  ]
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
                  key={skill.name} 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '20px',
                    padding: '8px 15px',
                    cursor: 'default',
                    fontSize: '14px'
                  }}
                >
                  {skill.icon && <img src={skill.icon} alt={skill.name} width="20" />}
                  {skill.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
