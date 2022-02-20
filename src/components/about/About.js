import React, { Component } from 'react';
import SectionTitle from '../SectionTitle';
import './About.css';


class About extends Component {
  render() { 
    return (
      <section id="about">
        <SectionTitle text="Sobre mim" />
        <div className="about-container">
          <img className="profile-pic" src={'../../images/profile-tall.jpg'}></img>
          <div class="about-text-container">
            <p>
              <b>Luá</b> tem 24 anos, é moradora de Belo Horizonte (mesmo sendo carioca da gema), vascaína e apaixonada por tecnologia. Quando criança, morava numa casa cor-de-casa-de-vó no subúrbio do Rio de Janeiro e acredita que isso diz muito sobre sua personalidade.
            </p>
            <h3>Algumas tecnologias que conheço:</h3>
            <div class="about-skills-list">
              <ul>
                <li>{'Git & Github'}</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
              <ul>
                <li>Jest</li>
                <li>ReactJS</li>
                <li>e vem mais por aí...</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
 
export default About;