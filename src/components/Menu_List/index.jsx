import TopicSubTitle from "../topic-subtitle";
import TopicTitle from "../topic-title";
import { Container } from "./style";

export default function MenuList() {
  return (
    <Container>
      <TopicTitle>Ementa</TopicTitle>
      <TopicSubTitle>Veja os nosso pratos deleciosos</TopicSubTitle>
      <ul className="menu-options">
        <li className="option">
          <a href="#">Entrada</a>
        </li>
        <li className="option">
          <a href="#">Prato</a>
        </li>
        <li className="option">
          <a href="#">Bebida</a>
        </li>
        <li className="option">
          <a href="#">Sobremesa</a>
        </li>
        <li className="option">
          <a href="#">Grupo</a>
        </li>
      </ul>
      <ul className="ementa">
        <li>
          <div className="info">
            <div className="info-picture">
              <img src="#" />
            </div>
            <div className="info-text">
              <h4 className="info-text-nome">Lobster</h4>
              <p>pequena info</p>
            </div>
          </div>
          <h4 className="preco">7.50€</h4>
        </li>{" "}
        <li>
          <div className="info">
            <div className="info-picture">
              <img src="#" />
            </div>
            <div className="info-text">
              <h4 className="info-text-nome">Lobster</h4>
              <p>pequena info</p>
            </div>
          </div>
          <h4 className="preco">7.50€</h4>
        </li>{" "}
        <li>
          <div className="info">
            <div className="info-picture">
              <img src="#" />
            </div>
            <div className="info-text">
              <h4 className="info-text-nome">Lobster</h4>
              <p>pequena info</p>
            </div>
          </div>
          <h4 className="preco">7.50€</h4>
        </li>{" "}
        <li>
          <div className="info">
            <div className="info-picture">
              <img src="#" />
            </div>
            <div className="info-text">
              <h4 className="info-text-nome">Lobster</h4>
              <p>pequena info</p>
            </div>
          </div>
          <h4 className="preco">7.50€</h4>
        </li>
      </ul>
    </Container>
  );
}
