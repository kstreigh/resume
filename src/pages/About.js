// include skills, schooling, and programming languages
import React from 'react';
import Home from './Home';
import './pages.css'

const About = () => {
  return (
    <div className='container'>
      <div className='left-half'>
        <Home />
      </div>
      <div className='right-half'>
        <h1>About Me</h1>
        Hi, I’m Kelly. I work as a Systems Analyst and spend my free time building full-stack projects. I’m comfortable working across both front-end and back-end technologies, which allows me to understand and contribute to the entire development lifecycle. I’m always looking to learn new tools and approaches to improve the quality and efficiency of my work.
        My strengths include problem-solving and adapting quickly to new challenges or technologies. I’m detail-oriented and focused on delivering solutions that meet real user needs. I also value clear communication and collaboration, as I believe they are essential to any successful project.
        Outside of technology, I enjoy painting, crafting, and cooking — activities that help me balance my technical work with creative outlets.
        <h2>My Education</h2>
        <p>Indiana University, Bloomington, IN <br /> 
        Bachelor of Science in Software Engineering (BSSE) <br/>
        Minor in Data Science & Illustration <br/>
        GPA: 3.85/4.0 | Dean’s List (2020-2024)<br/>
</p>
        <h2>My Soft Skills</h2>
            <li>Team Collaboration & Communication</li>
            <li>Time Management</li>
            <li>Problem-Solving</li>
        <h2>My Technical Skills</h2>
            <li>Java, JavaScript, Python, C#, Swift, SQL</li>
            <li>API, XML, JSON</li>
            <li>ASP.NET, NodeJS, ReactJS, Express, CSS, SwiftUI</li>
            <li>Azure, Jira</li>
            <li>Agile (Scrum)</li>      
        </div>
    </div>
  );
};

export default About;