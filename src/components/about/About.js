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
            {/* <p>
              <b>Prazer, me chamo Luá,</b> tenho 25 anos, sou moradora de Belo Horizonte (mesmo sendo carioca da gema), vascaína e entusiasta de tecnologia. Quando criança, morava numa casa cor-de-casa-de-vó no subúrbio do Rio de Janeiro e acredito que isso diz muito sobre minha personalidade.
            </p> */}
            <p>
            <b>Prazer, eu sou Luá</b>, tenho 25 anos e quero causar impacto social através da tecnologia.<br /> Aos 10 anos ganhei meu primeiro computador e tive meu primeiro contato com a internet. Ela me despertou características que carrego até hoje: ser uma pessoa curiosa e com muito interesse e disposição para estar sempre aprendendo algo novo.<br />Mas tendo cursado graduação em História, foi minha experiência com educação que me formou cidadã: me fez aprender a lidar com diferenças, desenvolveu minha colaboração e me trouxe a paixão por trabalhar com pessoas. <br /><br />Hoje, como desenvolvedora, são esses os valores que carrego comigo, e que me levam a buscar sempre trabalhar em ambientes colaborativos e que entendam a importância das pessoas na transformação humana.
            </p>
            {/* <br></br>
            <p>
              Bacharel em Cinema, sou também apaixonada por educação e tenho como objetivo pessoal impactar vidas.
            </p> */}
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