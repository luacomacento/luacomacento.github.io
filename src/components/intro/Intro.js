import React, { Component } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import '../button/Button.css';
import './Intro.css';

class Intro extends Component {
  render() { 
    return (
      <div className="fullwidth">
        <section id="intro">
          <div className="intro-textbox">
            <p className="intro-header">Prazer, meu nome é</p>
            <p className="intro-name">Luá Octaviano</p>
            <p className="intro-skills">Eu faço aplicações para a web.</p>
            <p className="intro-text">
              Sou uma <span className="bold">Desenvolvedora Web Full Stack</span>, residente em Belo Horizonte, MG. Atualmente estudo desenvolvimento web na <a className="trybe-link bold" href="https://betrybe.com" target="_blank" rel="noreferrer">Trybe</a>, explorando tecnologias como React, Redux, Docker, MySQL e Node.js.
            </p>
            {/* <Button /> */}
            <a className="btn btn--outline" href="https://linkedin.com/in/luaoctaviano" target="_blank" rel="noreferrer">Entre em contato</a>
          </div>
          <div className="balls">
            <div className="purple-ball"></div>
            <div className="yellow-ball"></div>
          </div>
        </section>
        <a href="#about">
          <FaAngleDown className="arrow-down" />
        </a>
      </div>
    );
  }
}
 
export default Intro;