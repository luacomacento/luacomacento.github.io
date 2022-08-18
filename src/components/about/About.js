import { Component } from 'react';
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
            <b>Prazer, eu sou Luá</b>, tenho 25 anos e quero causar impacto através da tecnologia.<br /><br />Desde que ganhei meu primeiro computador, aos 10 anos de idade, a tecnologia me encanta, sobretudo na sua possibilidade de conectar pessoas e transformar vidas.<br />Hoje, enquanto desenvolvedora, desejo explorar esse potencial e buscar formas de expandi-lo.<br /><br />Atualmente, além de estudante, trabalho com educação na área de tecnologia, ajudando outras pessoas desenvolvedoras a ampliarem seu conhecimento.
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