import React, { useState } from 'react';
import './projects.css';
import image1 from './images/pawlidayinn-1.png';
import image2 from './images/pawlidayinn-3.png';
import image3 from './images/pawlidayinn-4.png';
import image4 from './images/pawlidayinn-5.png';
import image5 from './images/pawlidayinn-6.png';
import TopNav from './TopNav';

const slideImages = [
  { url: image1, caption: "Sign in page" },
  { url: image2, caption: "Location search with filtering" },
  { url: image3, caption: "Create an order for a customer" },
  { url: image4, caption: "Profile page that users can fill out with their information" },
  { url: image5, caption: "Analytics page for number of hotels booked for admin" },
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
    <div>
      <TopNav/>
    <div className="container2">
      <div className="content-wrapper">
        <div className="text-section">
          <h1>Pawliday Inn</h1>
          <p>
            A hotel booking platform built for pet hotels. Users can search, book, and manage their stays, while administrators monitor usage and booking analytics.
            Built with the MERN stack (MongoDB, Express, React, Node.js).
          </p>

          <h2>Development Process</h2>
          <ul className="list1">
            <li>Led sprint planning using Jira under Scrum methodology.</li>
            <li>Built a secure login/signup system and profile management for both users and admins.</li>
            <li>Integrated automated email subscriptions for registered members.</li>
          </ul>
        </div>

        {/* Image Section */}
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
}; export default Pawliday;