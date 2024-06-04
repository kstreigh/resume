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
        Hi, I'm Kelly. I'm a software engineering graduate with a strong foundation in analytical thinking and collaborative problem-solving. I'm looking to utilize my diverse creative skills and educational background along with a keen eye for detail to excel as an entry-level software engineer. I enjoy painting, singing, and learning useless information.
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
            <li>Java, JavaScript, Python, C, Swift, SQL</li>
            <li>Visual Studio, IntelliJ IDE, Xcode, Postman, GitHub</li>
            <li>NodeJS, ReactJS, Express, CSS, JSON, UIKit, SwiftUI</li>
            <li>MongoDB, PostgreSQL</li>
            <li>Agile (Scrum)</li>      
        </div>
    </div>
  );
};

export default About;