import React from "react";

import Sobre from "../../components/Sobre/Sobre";
import Habilidades from "../../components/Habilidades/Habilidades";
import Certificados from "../../components/Certificados/Certificados";
import Exp from "../../components/Experiencias/Exp";
import "./Home.css";
import Intro from "../../components/Intro/Intro";
import Projetos from "../../components/Projetos/Projetos";


const Home = () => {
  return (
    <>
      <div className="Home">
        <section id="Intro">
          <Intro/>
        </section>
        <section id="Sobre">
          <Sobre />
        </section>
        <section id="Habilidades">
          <Habilidades />
        </section>
        <section id="Certificados">
          <Certificados />
        </section>
        <section id="Exp">
          <Exp />
        </section>
        <section id="Projetos">
          <Projetos/>
        </section>
      </div>
    </>
  );
};

export default Home;
