// include projects and work experience
import React from 'react';
import Home from './Home';
import { Link } from 'react-router-dom'
import './pages.css'
const Experience = () => {
  return (
    <div className='container'>
      <div className='left-half'>
      <Home />
      </div>
      <div className='right-half'>
        <h1>Experience</h1>
        <h2>Work Experience</h2>
        <h3>Mobile Applications Instructional Assistant</h3>
            <li>Collaborated in a 7-member team to troubleshoot issues within student work and develop solutions for homework assignments</li>
            <li>Analyzed student code and guided them through debugging and issue resolution during class time and office hours</li>
            <li>Tested and deployed iOS applications on various iPhone models to identify bugs and performance issues</li>

        <h2>Projects</h2>
        <div class='vertical-navigation2-container'>
          <ul class="vertical-navigation2">
              <li> 
                  <Link to="/salads">Restaurant Ordering iOS App</Link>
              </li>
              <li>
                  <Link to="/pizza">Customer Order Tracking Website</Link>
              </li>
              <li>
                  <Link to="/pawliday">Hotel Reservation Website</Link>
              </li>
          </ul>
      </div>
      </div>
    </div>
  );
};

export default Experience;
