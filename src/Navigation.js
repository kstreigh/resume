import React from 'react';
import { Link } from 'react-router-dom'
import './navigation.css'
const Navigation = () => {
  return(
      <div>
          <ul class="vertical-navigation">
              <li>
                  <Link to="/">About</Link>
              </li>
              <li>
                  <Link to="/experience">Experience</Link>
              </li>
              <li>
                  <Link to="/contact">Contact</Link>
              </li>
          </ul>
      </div>
  )
  };
  
  export default Navigation;