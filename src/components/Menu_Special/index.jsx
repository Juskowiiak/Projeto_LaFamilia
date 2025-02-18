import { Container } from "./style";
import TopicSubTitle from "../topic-subtitle";
import TopicTitle from "../topic-title";
import pega from "./funcao";
export default function MenuSpecial() {
  return (
    <Container>
      <TopicTitle>Ementa</TopicTitle>
      <TopicSubTitle>A Especialidade da casa</TopicSubTitle>
      <div className="special">
        <ul className="special-option">
          <li className="optionMenu active" onClick={() => pega()}>
            Prato1
          </li>
          <li className="optionMenu" onClick={() => pega()}>
            Prato2
          </li>
          <li className="optionMenu" onClick={() => pega()}>
            Prato3
          </li>
          <li className="optionMenu" onClick={() => pega()}>
            Prato4
          </li>
          <li className="optionMenu" onClick={() => pega()}>
            Prato5
          </li>
        </ul>
        <div className="special-info">
          <div className="special-info-text">
            <h3>Prato1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              eum fuga sapiente rerum quo beatae.
            </p>
          </div>
          <div className="special-info-picture">
            <img src="#" />
          </div>
        </div>
      </div>
    </Container>
  );
}
