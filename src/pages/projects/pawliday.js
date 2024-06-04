import React, { useState, useEffect } from 'react';
import './projects.css'
import image1 from './images/pawlidayinn-1.png'
import image2 from './images/pawlidayinn-3.png'
import image3 from './images/pawlidayinn-4.png'
import image4 from './images/pawlidayinn-5.png'
import image5 from './images/pawlidayinn-6.png'
import TopNav from './TopNav';
const slideImages = [
    {
      url: image1,
    },
    {
      url: image2,
    },
    {
      url: image3,
    },
    {
        url: image4,
    },
    {
        url: image5,
      },
  ];
const Pawliday = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slideImages.length) % slideImages.length);
    };
  
    return (
      <div className='container2'>
        <TopNav/>
        <h1> Pawliday Inn </h1>
                A hotel booking website for pet hotels. Contains an administrator page with user analytics as well as booking and checkout for users. Used: MERN Stack
         <h1> Development Process</h1>
         <ul class='list1'>
         <li>Led the creation of a project development plan using Jira for Scrum project management</li>
        <li>Developed back-end software for a login/ signup page and a full stack profile creation page for users and administrators</li>
        <li>Implemented an external feature of an email subscription to users with a membership  </li>
</ul>
        <div className="image-container" style={{ 'backgroundImage': `url(${slideImages[currentIndex].url})` }}>
          <span>{slideImages[currentIndex].caption}</span>
        </div>
        <div className="buttons">
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    );
  };
export default Pawliday;