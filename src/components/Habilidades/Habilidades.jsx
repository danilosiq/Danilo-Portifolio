import React from "react";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaReact, FaNodeJs,FaPython } from "react-icons/fa";
import "./Hab.css";
import habIMG from "./habIMG.png";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpo } from "react-icons/si";

import { BsPencilFill } from "react-icons/bs";

const Habilidades = () => {
  return (
    <div className="Hab">
      <h1>
        <BsPencilFill /> Minhas habilidades
      </h1>

      <div className="rowCamp">
        <div className="left">
          {listHab.map((item,index)=>(
            <div key={index} >
              <h2>{item.title}</h2>
              <h4>{item.subtitle}</h4><ul className="listagem">
              {item.content.map((hab) =>(
                
                  <li className="lii">
                    {hab.icon}
                    
                    {hab.label}<br/>{hab.subLabel}
                  </li>
               
              ))} </ul>
            </div>
           ))}
        </div>
        <div className="right">
          <img src={habIMG} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Habilidades;

export const listHab = [
  {
    title: 'Idiomas',
    subtitle:'',
    content:[
      {
        label: 'Ingles',
        subLabel:'Intermediario/Avançado'
      },
      {
        label: 'Espanhol',
        subLabel:'Basico'
      },
      {
        label: 'Portugues (Pt-Br)',
        subLabel:'Nativo'
      },
    ]
  },
  {
    title: 'Programação',
    subtitle:'Principais',
    content:[
      {
        icon: <FaReact />,
        label: 'React'
      },
      {
        icon:  <SiTypescript />,
        label: 'Typescript'
      },
      {
        icon:  <SiTailwindcss />,
        label: 'TailWind'
      },
    ]
  },
  {
    subtitle:'Ja experienciadas',
    content:[
      {
        icon: <GrMysql />,
        label: 'SQL'
      },
      {
        icon:  <FaNodeJs />,
        label: 'NodeJs'
      },
      {
        icon:  <FaPython />,
        label: 'Python'
      },
      {
        icon:  <TbBrandNextjs />,
        label: 'NextKs'
      },
      {
        icon: <SiExpo />,
        label: 'Expo'
      },
    ]
  },
  
  

]
