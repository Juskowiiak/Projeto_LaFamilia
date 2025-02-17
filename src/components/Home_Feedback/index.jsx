import { Container } from "./style";
//importar componentes
import TopicTitle from "../topic-title";
import TopicSubTitle from "../topic-subtitle";
//importar ficheiros json
import Comentarios from "../../Api/coments.json";
//importar icons da biblioteca react-icons
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

export default function HomeFeedback() {
  return (
    <Container>
      <div className="titulo">
        <TopicTitle>Sobre Nós</TopicTitle>
        <TopicSubTitle>O que falam sobre o LaFamilia</TopicSubTitle>
      </div>

      <ul className="comments">
        {/* se o ficheiro Json for verdadeiro ira criar um map */}
        {Comentarios &&
          Comentarios.map((item) => (
            <li key={item.id} className="comments-card">
              <div className="comments-card-text">
                <p>
                  <ImQuotesLeft className="comments-card-text-icon" />
                  {item.texto}
                  <ImQuotesRight className="comments-card-text-icon" />
                </p>
              </div>
              <div className="comments-card-info">
                <div className="comments-card-info-picture">
                  <img src={item.pict} title="Cliente" />
                </div>
                <div className="comments-card-info-text">
                  <h3>{item.nome}</h3>
                  <p>{item.job}</p>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </Container>
  );
}
