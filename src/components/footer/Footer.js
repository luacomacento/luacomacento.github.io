import React, { Component } from 'react';
import { FaEnvelope, FaGithubAlt, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Footer.css';

class Footer extends Component {
  render() { 
    return (
      <>
        <footer>
          <div className="social-container">
            <a className="social-icon" href="https://github.com/luacomacento" target="_blank" rel="noreferrer">
              <FaGithubAlt />
            </a>
            <a className="social-icon" href="https://linkedin.com/in/luaoctaviano" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a className="social-icon" href="https://twitter.com/luacomacento" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a className="social-icon" href="mailto:luacomacento@gmail.com" target="_blank" rel="noreferrer">
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