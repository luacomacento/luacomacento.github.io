import { useContext, useEffect, useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { FaBars, FaTimes } from "react-icons/fa";
import MyContext from '../../context/MyContext';
import './Header.css';

function Header() {
  const [menuState, setMenuState] = useState('closed');
  const { lightMode, setLightMode } = useContext(MyContext);

  function toggleMenu() {
    setMenuState(menuState === 'closed' ? 'open' : 'closed');
  }

  useEffect(() => {
    const nav = document.querySelector('nav');

    if (menuState === 'open') {
      nav.style.maxHeight = '100vh';
    } else {
      nav.style.maxHeight = null;
    }
  }, [menuState]);

  return  ( 
      <header>
        <h1 id="title"><a href="/"><span>{'{'}</span> luaoctaviano.dev <span>{"}"}</span></a></h1>
        <div style={{display: "flex", gap: "16px"}}>
          <button
                className="transparent hamburger"
                type="button"
                onClick={() => {setLightMode(!lightMode)}}>
                  {lightMode
                    ? <BsFillSunFill />
                    : <BsFillMoonStarsFill />
                  }
              </button>
          <div onClick={toggleMenu}>
            {menuState === 'closed' ? <FaBars className='hamburger' /> : <FaTimes className='hamburger' />}
          </div>
        </div>
        <nav>
          <ul>
            <li><a onClick={toggleMenu} href="#about">sobre</a></li>
            <li><a onClick={toggleMenu} href="#projects">projetos</a></li>
            <li><a onClick={toggleMenu} href="https://linkedin.com/in/luaoctaviano" target="_blank" rel="noreferrer">contato</a></li>
            <li>
              <button
                className="transparent"
                type="button"
                onClick={() => {setLightMode(!lightMode)}}>
                  {lightMode
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
 
export default Header;
