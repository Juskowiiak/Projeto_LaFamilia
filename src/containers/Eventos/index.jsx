//importar components do style
import { Container } from "./style";
//importar components
import Title from "../../components/Title";
//importar containers
import TopicTitle from "../../components/topic-title";
import { Subtitle } from "../../components/topic-subtitle/style";
import EventoCards from "../../components/Evento_Cards";

export default function Eventos() {
  return (
    <Container>
      <header>
        <div className="title">
          <h1>
            Venha <span>comemorar </span>conosco !!
          </h1>
        </div>
      </header>
      <Title>Eventos</Title>
      <div className="titles">
        <TopicTitle>Eventos</TopicTitle>
        <Subtitle>Apenas divirta-se</Subtitle>
        <EventoCards></EventoCards>
      </div>
    </Container>
  );
}
