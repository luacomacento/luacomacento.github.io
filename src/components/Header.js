import React, { Component } from 'react';

class Header extends Component {
  render() { 
    return (
      <header>
        <h1><a href="#">@LuaComAcento</a></h1>
        <nav>
          <ul>
            <li><a href="#about">sobre</a></li>
            <li><a href="#projects">projetos</a></li>
            <li><a href="#contact">contato</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}
 
export default Header;
