import { Container, Sections } from "./style";
//importar componentes
import TopicLine from "../../components/topic-line";
//importar containers
import HomeSobre from "../../components/Home_Sobre";
import HomeCards from "../../components/Home_Cards";
function Home() {
  return (
    <Container>
      <header>
        <div className="title">
          <p>Restaurant</p>
          <h1>La Familia</h1>
        </div>
      </header>
      <Sections>
        <HomeSobre />
        <TopicLine></TopicLine>
        <HomeCards />
      </Sections>
    </Container>
  );
}
export default Home;
