import React, { useState, useEffect } from 'react';
import './projects.css'
import image1 from './images/restaurant-1.png'
import image2 from './images/restaurant-2.png'
import image3 from './images/restaurant-3.png'
import image4 from './images/restaurant-4.png'
import image5 from './images/restaurant-1.png'
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
  
  const Salads = () => {
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
        <h1> Salads @ Midnight </h1>
         A mobile restaurant ordering app for iOS that provides real-time notifications for order status and reservation confirmations. Used: Swift <br/>
         <h1> Development Process</h1>
         <ul class = 'list1'>
            <li>Developed dynamic components for the app including a loading bar and an estimated driving distance and route feature using CoreLocation and MapKit </li>
            <li>Incorporated persistent data storage to save user information during the ordering process </li>
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
  
  export default Salads;