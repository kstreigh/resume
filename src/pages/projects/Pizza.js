import React, { useState, useEffect } from 'react';
import './projects.css'
import image1 from './images/pizza-4.png'
import image2 from './images/pizza-1.png'
import image3 from './images/pizza2.png'
import image4 from './images/pizza-3.png'
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
  ];


const Pizza = () => {
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
        <h1> Pizza Parlor </h1>
                A pizza ordering website that tracks orders and customer information. Retrieves and saves relevant information with a multi-page functionality. Used: Java, JavaScript<br/>
         <h1> Development Process</h1>
         <ul class = 'list1'>
         <li>Designed and implemented back-end for customer information that was originally deployed using Railway </li>
         <li>Deployed a basic front-end using Vercel for saving information using ReactJS with a navigation bar functionality</li>
         <li>Tested saved backend features including customer names and orders using Postman and resolved a high number of unique bugs</li>
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
}; export default Pizza;