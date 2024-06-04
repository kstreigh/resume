import React, {useState} from 'react'
import Navigation from '../Navigation';


// include my name, a download to my resume, and small information
const Home = () => {
  return (
    <div>
        <div>
          <h1>Kelly Streight</h1>
          <h2>Full Stack Developer</h2>
          <p>Welcome to my portfolio. Explore my projects and let's build something amazing together!</p>
          <Navigation />
        </div>
    </div>
    );
};
export default Home;