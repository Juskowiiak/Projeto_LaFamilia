//importar components do style
import { Container } from "./style";
//importar components
import Title from "../../components/Title";
//importar containers
import TopicTitle from "../../components/topic-title";
import { Subtitle } from "../../components/topic-subtitle/style";
import Reserva from "../../components/Reserva";

export default function Reservation() {
  return (
    <Container>
      <header>
        <div className="title">
          <h1>
            Venha <span>comemorar </span>conosco !!
          </h1>
        </div>
      </header>
      <Title>Reservas</Title>
      <div className="titles">
        <TopicTitle>Reserva</TopicTitle>
        <Subtitle>O que estás a espera?</Subtitle>
      </div>
      <Reserva />
    </Container>
  );
}
