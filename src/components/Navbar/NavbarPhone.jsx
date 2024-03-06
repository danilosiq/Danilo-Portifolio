import React from 'react';
import {
  BsHouseFill,
  BsAwardFill,
  BsFillPersonFill,
  BsPencilFill,
  BsGrid3X3GapFill,
  BsFillClipboard2DataFill,
} from "react-icons/bs";

import "./Navbar.css"

const NavbarPhone = () => {
  const handleNav = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className='phoneNav'>
      <ul>
        <a href="#Intro" onClick={(e) => handleNav(e, "Intro")}>
          <li>
            <BsHouseFill />
          </li>
        </a>
        <a href="#Sobre" onClick={(e) => handleNav(e, "Sobre")}>
          <li>
            <BsFillPersonFill />
          </li>
        </a>
        <a href="#Habilidades" onClick={(e) => handleNav(e, "Habilidades")}>
          <li>
            <BsPencilFill />
          </li>
        </a>{" "}
        <a href="#Certificados" onClick={(e) => handleNav(e, "Certificados")}>
          <li>
            <BsAwardFill />
          </li>
        </a>
        <a href="#Exp" onClick={(e) => handleNav(e, "Exp")}>
          <li>
            <BsFillClipboard2DataFill /> 
          </li>
        </a>
        <a href="#Projetos" onClick={(e) => handleNav(e, "Projetos")}>
          <li>
            <BsGrid3X3GapFill /> 
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default NavbarPhone;
