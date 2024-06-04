import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faFacebook, faGithub
  } from "@fortawesome/free-brands-svg-icons";
const  SocialFollow = () => {
  return (
    <div class="social-container">
      <a href="https://www.facebook.com/kelly.streight/">
        <FontAwesomeIcon icon={faFacebook} size="2x" className="icon"/>
          Facebook
      </a>
      <br/>
      <a href="https://github.com/kstreigh">
        <FontAwesomeIcon icon={faGithub} size="2x" className="icon"/>
          GitHub
      </a>
      <br/>
      <a href="https://www.linkedin.com/in/kstreigh">
        <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon"/>
          LinkedIn
      </a>
    </div>
  );

}; export default SocialFollow;
