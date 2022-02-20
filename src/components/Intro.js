import React, { Component } from 'react';
import Button from './Button';

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
              Sou uma <span className="bold">Desenvolvedora Web Full Stack</span>, residente em Belo Horizonte, MG. Atualmente estudo desenvolvimento web na <a className="trybe-link bold" href="https://betrybe.com" target="_blank" rel="noreferrer">Trybe</a>, onde aprendo e desenvolvo conhecimentos em JavaScript, além de utilizar bibliotecas como Jest e ReactJS.
            </p>
            <Button />
          </div>
          <div className="balls">
            <div class="purple-ball"></div>
            <div class="yellow-ball"></div>
          </div>
        </section>
        <a href="#about">
          <i className="fas fa-angle-down arrow-down"></i>
        </a>
      </div>
    );
  }
}
 
export default Intro;