import React, { useState } from "react";
import tec from "./tecpuc.jpeg";
import oct from "./octopus.jpeg";
import "./Certificados.css";
import udemy from "./udemy.jpeg";


import { BsAwardFill } from "react-icons/bs";
import ZoomTEC from "./ZoomTEC";

const Certificados = () => {
  const [tecimg, setTec] = useState(false);

  const onClose = () =>{
    setTec(false)
  }

  return (
    <div className="certi">
      <h1>
        <BsAwardFill /> Certificados
      </h1>
      <p>
        Algumas das minhas conquistas ao longo da minha vida em certificados
      </p>

      <div className="cardCamp">
        <ul>
          {tecimg == true ? (
            <ZoomTEC closeZoom={onClose}/>
          ) : (
            <>
              <li onClick={() => setTec(true)}>
                <img src={tec} alt="" />
                <p>
                  Tecnico de informática <br /> TECPUC
                </p>
              </li>
              <li onClick={() => setTec(true)}>
                <img src={oct} alt="" />
                <p>
                  Curso de Arte <br /> Octopus
                </p>
              </li>
              <li onClick={() => setTec(true)}>
                <img src={udemy} alt="" />
                <p>
                  Curso React - Zero a maestria <br /> Udemy
                </p>
              </li>
              
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Certificados;
