import React, { useState } from 'react';
import './projects.css'
import image1 from './images/restaurant-1.png'
import image2 from './images/restaurant-2.png'
import image3 from './images/restaurant-3.png'
import image4 from './images/restaurant-4.png'
import image5 from './images/restaurant-1.png'
import TopNav from './TopNav';

const slideImages = [
  { url: image1, caption: "Opening the app, it asks for user location" },
  { url: image2, caption: "Entering the mobile order by entering quantity for items and saved with persistent storage" },
  { url: image3, caption: "After pressing checkout, order with total is given" },
  { url: image4, caption: "Order placed, gives a pickup time, as well as a route to the app and a load bar for how long the order will take" }
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
    <div>
      <TopNav />
      <div className="container2">
        <div className="content-wrapper">
          <div className="text-section">
            <h1>Salads @ Midnight</h1>
            <p>
              A mobile restaurant ordering app for iOS that provides real-time notifications for order status and reservation confirmations. Used: Swift
            </p>
            <h2>Development Process</h2>
            <ul className="list1">
              <li>Developed dynamic components for the app including a loading bar and an estimated driving distance and route feature using CoreLocation and MapKit.</li>
              <li>Incorporated persistent data storage to save user information during the ordering process.</li>
            </ul>
          </div>

          <div className="image-section">
            <div className="image-container">
              <img
                src={slideImages[currentIndex].url}
                alt={`Screenshot ${currentIndex + 1}`}
                className="project-image"
              />
              {slideImages[currentIndex].caption && (
                <span className="image-caption">{slideImages[currentIndex].caption}</span>
              )}
            </div>
            <div className="buttons">
              <button onClick={handlePrev}>Previous</button>
              <button onClick={handleNext}>Next</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Salads;