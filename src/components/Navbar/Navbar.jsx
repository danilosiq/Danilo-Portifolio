import React from "react";
import {
  BsHouseFill,
  BsAwardFill,
  BsFillPersonFill,
  BsPencilFill,
  BsGrid3X3GapFill,
  BsFillClipboard2DataFill,
} from "react-icons/bs";
import "./Navbar.css";

const Navbar = () => {
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
    <nav className="PcBar">
      <ul>
        <a href="#Intro" onClick={(e) => handleNav(e, "Intro")}>
          <li>
            <BsHouseFill />
            Inicio
          </li>
        </a>
        <a href="#Sobre" onClick={(e) => handleNav(e, "Sobre")}>
          <li>
            <BsFillPersonFill /> Sobre mim
          </li>
        </a>
        <a href="#Habilidades" onClick={(e) => handleNav(e, "Habilidades")}>
          <li>
            <BsPencilFill /> Minhas habilidades
          </li>
        </a>{" "}
        <a href="#Certificados" onClick={(e) => handleNav(e, "Certificados")}>
          <li>
            <BsAwardFill /> Certificados
          </li>
        </a>
        <a href="#Exp" onClick={(e) => handleNav(e, "Exp")}>
          <li>
            <BsFillClipboard2DataFill /> Experiencias
          </li>
        </a>
        <a href="#Projetos" onClick={(e) => handleNav(e, "Projetos")}>
          <li>
            <BsGrid3X3GapFill /> Projetos
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
