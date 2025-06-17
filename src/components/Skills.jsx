import React from 'react';

const skills = ['React', 'JavaScript', 'CSS', 'Node.js', 'Git', 'HTML'];

export default function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {skills.map(skill => (
          <button key={skill} style={{
            background: '#eee',
            border: 'none',
            borderRadius: '20px',
            padding: '8px 15px',
            cursor: 'default'
          }}>
            {skill}
          </button>
        ))}
      </div>
    </section>
  );
}


// const skills = ['React', 'JavaScript', 'CSS', 'Node.js', 'Git', 'HTML'];

// function Skills() {
//   return (
//     <section className="skills">
//       <h2>Skills</h2>
//       <div className="skills-list">
//         {skills.map(skill => (
//           <button key={skill} className="skill-btn">
//             {skill}
//           </button>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Skills;
