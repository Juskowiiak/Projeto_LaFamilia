import TopicSubTitle from "../topic-subtitle";
import TopicTitle from "../topic-title";
import { Container } from "./style";

export default function MenuList() {
  return (
    <Container>
      <TopicTitle>Ementa</TopicTitle>
      <TopicSubTitle>Veja os nosso pratos deleciosos</TopicSubTitle>
      <ul className="menu-options">
        <li className="option active">Entrada</li>
        <li className="option">Prato</li>
        <li className="option">Bebida</li>
        <li className="option">Sobremesa</li>
        <li className="option">Grupo</li>
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
