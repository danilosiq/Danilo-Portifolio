import React from 'react'
import "./Exp.css"

import expIMG from "./expIMG.png"

import {

  BsFillClipboard2DataFill,
} from "react-icons/bs";


const Exp = () => {
  return (
    <div className='Exp'>
      <h1><BsFillClipboard2DataFill/> Experiencias</h1>

      <ul>
        <li>
            <h4>Serviço distrital da Barreirinha </h4>
            <p>Ajudante de cartório</p>
            <p>Mai 2023 - Jan 2024</p>
        </li>

        <li>
            <h4>Fabrika de Apps </h4>
            <p>Desenvolvedor Front-End</p>
            <p>Fev 2024 - Atualmente</p>
        </li>
      </ul>
      <div className='imgCamp'>
        <img src={expIMG} alt="" />
      </div>
    </div>
  )
}

export default Exp
