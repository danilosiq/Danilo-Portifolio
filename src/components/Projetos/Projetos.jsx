import React from "react";
import delux from "./delux-site.mp4";
import "./Projetos.css";
import lav from "./lav.mp4";
import secrectWG from "./secrectWG.mp4";
import github from "./github.mp4";

import { BsGrid3X3GapFill } from "react-icons/bs";

const Projetos = () => {
  return (
    <div className="Projetos">
      <div>
        <h1>
          <BsGrid3X3GapFill /> Projetos
        </h1>
        <p>projetos pessoais que desenvolvi</p>
      </div>
      <div className="projectsCamps">
        <div className="card">
          <div className="left">
            <h3>Secret Word Game</h3>
            <p>
              É um jogo no qual você precisa resolver a palavra misteriosa com
              base na dica dada pelo sistema. Você tem 5 tentativas para errar.
              Foi um projeto que zelei muito, feito com ReactJs, foi um dos meus
              primeiros projetos e estudos. Ele esta disponivel para voce jogar!
            </p>
            <a href="https://secret-word-game-flax.vercel.app/" target="blank">
              <button>Jogar!</button>
            </a>
          </div>
          <div className="right">
            <video src={secrectWG} autoPlay muted loop />
          </div>
        </div>

        <div className="card">
          <div className="left">
            <h3>Github User</h3>
            <p>
              Esse foi meu primeiro projeto com ReactJs, onde ele usa API do
              github para pegar informações da conta do github e procura a conta
              com a barra de pesquisa, ele esta disponivel!
            </p>
            <a href="https://secret-word-game-flax.vercel.app/" target="blank">
              <button>Acessar</button>
            </a>
          </div>
          <div className="right">
            <video src={github} autoPlay muted loop />
          </div>
        </div>

        <div className="card">
          <div className="left">
            <h3>LAV</h3>
            <p>
              Esse sem duvidas é meu projeto mais dificil no ano de 2023, que é
              um aplicativo de um empreendedorismo que criei, na epoca utilizei
              PHP e é um serviço de lavagem de roupa com delivery, esse projeto
              é para o trabalho da faculdade, porem quero levar para fora onde
              teria que ser completo, desde learning page, sendo bonito e
              funcional, ate conexao com banco de dados, no caso, PHPmyAdmiin
              foi utilizado.
            </p>
          </div>
          <div className="right">
            <video src={lav} autoPlay muted loop />
          </div>
        </div>

        <div className="card">
          <div className="left">
            <h3>DELUX</h3>
            <p>
              Esse projeto foi meu projeto final em uma matéria no ensino médio
              (2022), no qual tinha foco no arduino. Esse projeto consiste num
              dashboard informatico para Buggys e gaiolas, no qual informava
              RPM, temperatura do óleo, tensão da bateria e etc... Nisso eu
              desenvolvi uma learning page, simulando o site da marca que
              criamos, DELUX.
            </p>
          </div>
          <div className="right">
            <video src={delux} autoPlay muted loop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projetos;
