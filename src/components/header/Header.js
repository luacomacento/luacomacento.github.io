import React, { Component } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import './Header.css';

class Header extends Component {
  constructor() {
    super()
    this.state = {
      menuState: 'closed'
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState((prevState) => ({
      menuState: prevState.menuState === 'closed' ? 'open' : 'closed'
    }), () => {
      const nav = document.querySelector('nav');

      if (this.state.menuState === 'open') {
        nav.style.maxHeight = '100vh';
      } else {
        nav.style.maxHeight = null;
      }
    })
  }

  render() { 
    return (
      <header>
        <h1 id="title"><a href="/"><span>{'{'}</span> luaoctaviano.dev <span>{"}"}</span></a></h1>
        <div onClick={this.toggleMenu}>
            {this.state.menuState === 'closed' ? <FaBars /> : <FaTimes />}
          </div>
        <nav>
          <ul>
            <li><a onClick={this.toggleMenu} href="#about">sobre</a></li>
            <li><a onClick={this.toggleMenu} href="#projects">projetos</a></li>
            <li><a onClick={this.toggleMenu} href="#contact">contato</a></li>
            {/* <FaBars />
            <FaTimes /> */}
          </ul>
        </nav>
      </header>
    );
  }
}
 
export default Header;
