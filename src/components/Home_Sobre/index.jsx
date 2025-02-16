//importar componentes do style
import { Titulo } from "../Title/style";
import TopicTitle from "../topic-title";
import TopicSubTitle from "../topic-subtitle";
import { Container } from "./style";
//importar imagens
import foodPicture from "../../assets/home/food1.png";
import viewPicture from "../../assets/home/view1.png";

export default function HomeSobre() {
  return (
    <Container>
      <Titulo>Sobre Nós</Titulo>
      <ul className="cards">
        <li className="cards-card">
          <div className="cards-card-info">
            <div className="cards-card-info-title">
              <TopicTitle>Sobre Nós</TopicTitle>
              <TopicSubTitle>Experimente a nossa comida</TopicSubTitle>
            </div>
            <div className="cards-card-info-text">
              <p>
                Tempore excepturi odit <span>optio</span> at suscipit
                dignissimos rerum beatae nulla dapibus tempor. Integer vitae
                pretium lacus. Vestibulum euismod porta sapien, consequatur nam
                distinctio, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="cards-card-picture">
            <img src={foodPicture} title="Nossos pratos" />
          </div>
        </li>
        {/* ________________Card2__________________ */}
        <li className="cards-card">
          <div className="cards-card-info">
            <div className="cards-card-info-title">
              <TopicTitle>Sobre Nós</TopicTitle>
              <TopicSubTitle>Desfrute de uma vista deslubrante</TopicSubTitle>
            </div>
            <div className="cards-card-info-text">
              <p>
                <span>Lorem</span> ipsum dolor sit amet consectetur adipisicing
                elit. Tempor uscipit dignissimos rerum beatae consequatur nam
                distinctio.
              </p>
              <p>
                Adipisicing elit, eligendi assumenda cupiditate illo officiis
                eveniet mollitia! Quasi adipisci vero ipsa molestiae et at ipsam{" "}
                <span>voluptates accusamus</span> !!! repudiandae quis cum eos
                ex rolsr.
              </p>
            </div>
          </div>
          <div className="cards-card-picture">
            <img src={viewPicture} title="Nossas paisagens" />
          </div>
        </li>
      </ul>
    </Container>
  );
}
