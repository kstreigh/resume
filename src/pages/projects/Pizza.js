import React, { useState } from 'react';
import './projects.css';
import image1 from './images/pizza-4.png';
import image2 from './images/pizza-1.png';
import image3 from './images/pizza2.png';
import image4 from './images/pizza-3.png';
import TopNav from './TopNav';

const slideImages = [
  { url: image1, caption: "Main page with navigation options" },
  { url: image2, caption: "Customer info form for tracking orders can be pulled" },
  { url: image3, caption: "Create an order for a customer" },
  { url: image4, caption: "Adds customer info to the backend" },
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
    <div>
    <TopNav />
    <div className="container2">
      <div className="content-wrapper">
        <div className="text-section">
        <h1>Pizza Parlor</h1>
          <p>
            A pizza ordering website that tracks orders and customer information.
            It retrieves and saves relevant data with multi-page functionality.
            Technologies used: Java, JavaScript.
          </p>
          <h2>Development Process</h2>
          <ul className="list1">
            <li>Designed and implemented backend for customer information deployed using Railway.</li>
            <li>Created a ReactJS frontend with multi-page navigation and data saving, deployed on Vercel.</li>
            <li>Tested backend features thoroughly using Postman, resolving numerous unique bugs.</li>
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

export default Pizza;