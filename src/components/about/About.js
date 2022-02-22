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
              <b>Prazer, me chamo Luá,</b> tenho 24 anos, sou moradora de Belo Horizonte (mesmo sendo carioca da gema), vascaína e entusiasta de tecnologia. Quando criança, morava numa casa cor-de-casa-de-vó no subúrbio do Rio de Janeiro e acredito que isso diz muito sobre minha personalidade.
            </p>
            <br></br>
            <p>
              Bacharel em Cinema, sou também apaixonada por educação e tenho como objetivo transformar a vida das pessoas de todas as formas que puder.
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