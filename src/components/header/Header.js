import React, { Component } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { FaBars, FaTimes } from "react-icons/fa";
import './Header.css';

class Header extends Component {
  constructor() {
    super()
    this.state = {
      menuState: 'closed',
      dark: false,
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
    const {dark, menuState} = this.state;
    return (
      <header>
        <h1 id="title"><a href="/"><span>{'{'}</span> luaoctaviano.dev <span>{"}"}</span></a></h1>
        <div style={{display: "flex", gap: "16px"}}>
          <button
                className="transparent hamburger"
                type="button"
                onClick={() => {
                  document.body.classList.toggle('dark');
                  this.setState({dark: !dark})
                }}>
                  {dark
                    ? <BsFillSunFill />
                    : <BsFillMoonStarsFill />
                  }
              </button>
          <div onClick={this.toggleMenu}>
            {menuState === 'closed' ? <FaBars className='hamburger' /> : <FaTimes className='hamburger' />}
          </div>
        </div>
        <nav>
          <ul>
            <li><a onClick={this.toggleMenu} href="#about">sobre</a></li>
            <li><a onClick={this.toggleMenu} href="#projects">projetos</a></li>
            <li><a onClick={this.toggleMenu} href="https://linked.in/in/luaoctaviano" target="_blank" rel="noreferrer">contato</a></li>
            <li>
              <button
                className="transparent"
                type="button"
                onClick={() => {
                  document.body.classList.toggle('dark');
                  this.setState({dark: !dark})
                }}>
                  {dark
                    ? <BsFillSunFill size="1.4rem"/>
                    : <BsFillMoonStarsFill />
                  }
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
 
export default Header;
