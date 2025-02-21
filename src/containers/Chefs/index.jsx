import { Container, Cooks } from "./style";
import Title from "../../components/Title";
import { useEffect, useState } from "react";

export default function Chefs() {
  const [clicar, setClicar] = useState("texto");

  useEffect(() => {
    const painels = document.querySelectorAll(".painel");
    painels.forEach((item) => {
      item.addEventListener("click", () => {
        removeClass();
        item.classList.add("active");
      });
    });
    function removeClass() {
      painels.forEach((item) => {
        item.classList.remove("active");
      });
    }
  }, [clicar]);

  return (
    <Container>
      <header>
        <div className="title">
          <h1>
            Os <span>Maiores Chefs </span>estão aqui
          </h1>
        </div>
      </header>
      <Title>Chefs</Title>
      <Cooks>
        <div className="painel">
          <div className="title" title="Eric Silva">
            <h3>Eric</h3> <h3>Silva</h3>
          </div>
          <div className="info">
            <div className="info-part1">
              <div className="picture">
                <img src="#"></img>
              </div>
              <h3 className="nome">Wasup</h3>
              <h4 className="job">Chef da cozinha</h4>
            </div>
            <div className="info-part2">
              <h2>Sobre Mim:</h2>
              <div className="why">
                <h4>Porquê a culinaria</h4>
                <p>dasdasdasdasdsad</p>
              </div>
              <div className="exp">
                <h4>Cursos/Experiência</h4>
                <p>dasdasdasdasdsad</p>
              </div>
              <div className="pratos">
                <h4>Receita favorita</h4>
                <ul></ul>
              </div>
            </div>
          </div>
        </div>
        <div className="painel active">
          <h3>Wasd</h3>
        </div>
        <div className="painel">
          <h3>Wasd</h3>
        </div>
        <div className="painel">
          <h3>Wasd</h3>
        </div>
        <div className="painel">
          <h3>Wasd</h3>
        </div>
      </Cooks>
    </Container>
  );
}
