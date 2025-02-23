//importar components do style
import { Container } from "./style";
//importar components
import Title from "../../components/Title";
//importar containers
import ChefInfo from "../../components/Chef_Info";
import TopicTitle from "../../components/topic-title";
import { Subtitle } from "../../components/topic-subtitle/style";

export default function Chefs() {
  return (
    <Container>
      <header>
        <div className="title">
          <h1>
            Os <span>Maiores Chefs </span>estão aqui !!
          </h1>
        </div>
      </header>
      <Title>Chefs</Title>
      <div className="titles">
        <TopicTitle>Chefs</TopicTitle>
        <Subtitle>A nossa cozinha</Subtitle>
      </div>

      <ChefInfo />
    </Container>
  );
}
