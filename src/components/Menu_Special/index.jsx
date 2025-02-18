import { Container } from "./style";
import TopicSubTitle from "../topic-subtitle";
import TopicTitle from "../topic-title";

export default function MenuSpecial() {
  return (
    <Container>
      <TopicTitle>Ementa</TopicTitle>
      <TopicSubTitle>A Especialidade da casa</TopicSubTitle>
      <div className="special">
        <ul className="special-option">
          <li>
            <a href="#">Prato1</a>
          </li>
          <li>
            <a href="#">Prato2</a>
          </li>
          <li>
            <a href="#">Prato3</a>
          </li>
          <li>
            <a href="#">Prato4</a>
          </li>
          <li>
            <a href="#">Prato5</a>
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
