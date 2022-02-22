import React, { Component } from 'react';
import { FaEnvelope, FaGithubAlt, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Footer.css';

class Footer extends Component {
  render() { 
    return (
      <>
        <footer>
          <div className="social-container">
            <a className="social-icon" href="/">
              <FaGithubAlt />
            </a>
            <a className="social-icon" href="/">
              <FaLinkedinIn />
            </a>
            <a className="social-icon" href="/">
              <FaTwitter />
            </a>
            <a className="social-icon" href="/">
              <FaEnvelope />
            </a>
          </div>
          
          {"Design e código por Luá."}
          <br></br>
          {"Desenvolvido com ReactJS e noites mal dormidas. © 2022"}
        </footer>
      </>
    );
  }
}
 
export default Footer;