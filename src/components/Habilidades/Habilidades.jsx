import React from "react";
import { SiTypescript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaReact, FaNodeJs,FaPython } from "react-icons/fa";
import "./Hab.css";
import habIMG from "./habIMG.png";

import { BsPencilFill } from "react-icons/bs";

const Habilidades = () => {
  return (
    <div className="Hab">
      <h1>
        <BsPencilFill /> Minhas habilidades
      </h1>

      <div className="rowCamp">
        <div className="left">
          <div>
            <h2>Idiomas</h2>
            <ul>
              <li>
                <h4>Ingles</h4>
                <p>Intermediario/Avançado</p>
              </li>
              <li>
                <h4>Espanhol</h4>
                <p>Iniciante</p>
              </li>

              <li>
                <h4>Portugues</h4>
                <p>Nativo</p>
              </li>
            </ul>
          </div>

          <div>
            <h2>Programação</h2>
            <h4>Principais:</h4>
            <ul>
              <li>
                <FaReact />
                React
              </li>
              <li>
                <SiTypescript />
                TypeScript
              </li>
            </ul>
            <h4>Ja experenciadas:</h4>
            <ul>
              <li>
                <GrMysql />
                SQL
              </li>
              <li>
                <FaNodeJs />
                NodeJs
              </li>
              <li>
                <FaPython />
                Python
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <img src={habIMG} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
