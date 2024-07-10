import React from "react";
import "./Sobre.css"

import {

    BsFillPersonFill,
   
  } from "react-icons/bs";


const Sobre = () => {
  return (
    <div className="Sobre">
      <h1><BsFillPersonFill/> Some mim</h1>

      <div className="card">
        <h3>"Quem é Danilo?"</h3>
        <p>
          <br />
          Sou Danilo Dante Siqueira, um indivíduo criativo e apaixonado por
          desenhos, arte e games. Valorizo muito minhas amizades e sou conhecido
          por ser uma presença acolhedora e positiva em qualquer grupo. Sou
          extrovertido e aberto a novos desafios, sempre buscando oportunidades
          de crescimento pessoal e profissional. Lidar com situações difíceis
          com serenidade é uma de minhas habilidades, e estou sempre pronto para
          colaborar em projetos e ser um exemplo para os outros. Em resumo, sou
          um profissional talentoso e inspirador, capaz de agregar valor em
          qualquer equipe de trabalho.
          <br /><br />
          Hoje em dia eu Estudo Engenharia de Software na Uniopet, asim de ser um profissional mais completo!
        </p>
      </div>

      <div className="card">
        <h2>Meu amor pela Programação</h2>
        <p>
          Meu interesse pela programação começou na infância, quando a
          imaginação cria portas e sonhos para o futuro. A infância é mágica por
          isso, quando nos interessamos por algo, conseguimos imaginar coisas
          nunca antes vistas. Aos 8 anos de idade, em 2012, tive meu primeiro
          contato com um computador, jogando Minecraft e jogos de navegador. A
          partir desse contato, minha curiosidade pelo desenvolvimento de
          tecnologia só cresceu. Como uma criança, eu queria criar robôs e
          trabalhar com tecnologia. Ao longo do meu amadurecimento, meu
          interesse pela tecnologia nunca se dissipou, mas se adaptou para o
          desenvolvimento de sites e programação.
          <br />
          Finalmente, em 2020, comecei a colocar em prática meus conhecimentos
          em programação, graças ao ensino médio técnico em informática
          integrado que eu tive a oportunidade de frequentar, TECPUC. Aprendi
          muito sobre lógica de programação, linguagens e ferramentas, o que só
          aumentou minha paixão por essa área. Hoje, sou um programador
          determinado e dedicado, buscando sempre me aprimorar e enfrentar novos
          desafios, com o objetivo de me tornar um profissional de destaque na
          área de desenvolvimento.
        </p>
      </div>
    </div>
  );
};

export default Sobre;
