//importar components do style.js
import { Container } from "./style";
//importar componentes
import TopicTitle from "../topic-title";
import TopicSubTitle from "../topic-subtitle";
//importar ficheiros json
import Motivos from "../../Api/cards.json";
//importar icons da biblioteca react-icons
import { RiStarSFill } from "react-icons/ri";

export default function HomeCards() {
  return (
    <Container>
      <div className="porque">
        <TopicTitle>Sobre Nós</TopicTitle>
        <TopicSubTitle>Porquê o nosso Restaurante ?</TopicSubTitle>
        <ul className="cards">
          {/* se o ficheiro Json for verdadeiro ira criar um map */}
          {Motivos &&
            Motivos.map((item) => (
              <li key={item.id} className="cards-card">
                <div className="cards-card-picture">
                  <img src={item.picture} />
                </div>
                <div className="cards-card-text">
                  <h3>{item.titulo}</h3>
                  <p>{item.texto}</p>
                  <div className="cards-card-star">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </div>
                  <h5>La Familia</h5>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </Container>
  );
}
