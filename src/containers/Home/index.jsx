import { Container, Sections } from "./style";
//importar componentes
import TopicLine from "../../components/topic-line";
//importar containers
import HomeSobre from "../../components/Home_Sobre";
import HomeCards from "../../components/Home_Cards";
import HomeFeedback from "../../components/Home_Feedback";
//importar imagem
import Picture1 from "../../assets/home/picture.png";
function Home() {
  return (
    <Container>
      <header>
        <div className="picture">
          <img src={Picture1} title="picture" />
        </div>
      </header>
      <Sections>
        <HomeSobre />
        <TopicLine></TopicLine>
        <HomeCards />
        <HomeFeedback />
      </Sections>
    </Container>
  );
}
export default Home;
