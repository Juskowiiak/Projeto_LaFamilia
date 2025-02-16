//importar components do style.js
import { Container } from "./style";
//importar componentes
import { Titulo } from "../Title/style";
import TopicTitle from "../topic-title";
import TopicSubTitle from "../topic-subtitle";
//importar ficheiros json
import Motivos from "../../Api/cards.json";
import Comentarios from "../../Api/coments.json";
//importar icons da biblioteca react-icons
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import { TbToolsKitchen2 } from "react-icons/tb";
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
                  <h5>
                    La Familia <TbToolsKitchen2 />
                  </h5>
                </div>
              </li>
            ))}
        </ul>
      </div>

      <div className="feedback">
        <TopicTitle>Sobre Nós</TopicTitle>
        <TopicSubTitle>O que falam sobre nós</TopicSubTitle>
        <ul className="feedback-comments">
          {/* se o ficheiro Json for verdadeiro ira criar um map */}
          {Comentarios &&
            Comentarios.map((item) => (
              <li key={item.id} className="feedback-comments-card">
                <div className="feedback-comments-card-text">
                  <p>
                    <ImQuotesLeft className="feedback-comments-card-text-icon" />
                    {item.texto}
                    <ImQuotesRight className="feedback-comments-card-text-icon" />
                  </p>
                </div>
                <div className="feedback-comments-card-info">
                  <div className="feedback-comments-card-info-picture">
                    <img src={item.pict} title="Cliente" />
                  </div>
                  <div className="feedback-comments-card-info-text">
                    <h3>{item.nome}</h3>
                    <p>{item.job}</p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </Container>
  );
}
