import React from 'react';
import { Link } from 'react-router-dom';
const TopNav = () => {
    return (
        <div className="topnav">
          <div className="left">
            <Link to="/salads">Project 1</Link>
            <Link to="/pizza">Project 2</Link>
            <Link to="/pawliday">Project 3</Link>
          </div>
          <div className="right">
            <Link to="/">About</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      );
    }
    
    export default TopNav;