import React, { Component } from 'react';
import { tools } from '../../data/tools';
import SectionTitle from '../SectionTitle';
import ToolBadge from '../ToolBadge';
import './About.css';


class About extends Component {
  render() { 
    return (
      <section id="about">
        <SectionTitle text="Sobre mim" />
        <div className="about-container">
          <div className="pic-container">
            <div className='profile-pic'></div>
          </div>
          <div className="about-text-container">
            <p>
              <b>Luá</b> tem 24 anos, é moradora de Belo Horizonte (mesmo sendo carioca da gema), vascaína e apaixonada por tecnologia. Quando criança, morava numa casa cor-de-casa-de-vó no subúrbio do Rio de Janeiro e acredita que isso diz muito sobre sua personalidade.
            </p>
            <div>
              <h3>Algumas linguagens e ferramentas que conheço:</h3>
              <div className="tools-container">
                {tools.map((item) => <ToolBadge item={ item } key={item.slug}/>)}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
 
export default About;