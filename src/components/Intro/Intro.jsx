import React from "react";
import Social from "../../components/SocialMediasCard/Social";
import homeIMG from "./homeIMG.png";
import dan from "../../Images/dan.jpeg";

import "./Intro.css"


const Intro = () => {
  return (
    <div className="introcamp">
      <div className="intro">
        <h1>Danilo Dante Siqueira</h1>
        <ul>
          <li>Desenvolvedor Front-End</li>
          <li>Curitiba - Paraná, Brasil</li>
          <li>19 Anos</li>
        </ul>
        <Social />
      </div>
      <div className="imgCamp">
        <img src={dan} alt="danilo" className="danIMG" />
        <img src={homeIMG} alt="" className="miniDan" />
      </div>
    </div>
  );
};

export default Intro;
