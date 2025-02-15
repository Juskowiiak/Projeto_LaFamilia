import { Container, Sections } from "./style";
import foodbackgroundPicture from "../../assets/home/food1.jpg";
import viewbackgroundPicture from "../../assets/home/view1.png";
import TopicLine from "../../components/topic-line";
import TopicTitle from "../../components/topic-title";
import TopicSubTitle from "../../components/topic-subtitle";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
//biblica react-icons para usar icons
import { RiStarSFill } from "react-icons/ri";
//importo o ficheiro json
import Cards from "../../Api/cards.json";
import Comments from "../../Api/coments.json";
import Titulo from "../../components/Title";
function Home() {
  console.log(Cards);
  return (
    <Container>
      <header>
        <div className="title">
          <p>Restaurant</p>
          <h1>La Familia</h1>
        </div>
      </header>
      {/*____________________SECTIONS___________________ */}
      <Sections>
        <Titulo>Sobre Nós</Titulo>
        <section className="section-1">
          <div className="section1-card">
            <div className="section1-card-info">
              <div className="section1-card-info-title">
                <TopicTitle>Sobre Nós</TopicTitle>
                <TopicSubTitle>Experimente a nossa comida</TopicSubTitle>
              </div>
              <div className="section1-card-info-text">
                <p>
                  <span>Lorem</span> ipsum dolor sit amet consectetur
                  adipisicing elit. Tempore excepturi odit optio at suscipit
                  dignissimos rerum beatae consequatur nam distinctio.
                </p>
              </div>
            </div>
            <div className="section1-card-picture">
              <img src={foodbackgroundPicture} title="Nossos pratos" />
            </div>
          </div>
          <div className="section1-card">
            <div className="section1-card-info-picture">
              <img src={viewbackgroundPicture} title="Nossas paisagens" />
            </div>
            <div className="section1-card-info">
              <div className="section1-card-info-title">
                <TopicTitle>Sobre Nós</TopicTitle>
                <TopicSubTitle>Temos as melhores vistas</TopicSubTitle>
              </div>
              <div className="section1-card-info-text">
                <p>
                  <span>Lorem</span> ipsum dolor sit amet consectetur
                  adipisicing elit. Tempor uscipit dignissimos rerum beatae
                  consequatur nam distinctio.
                </p>
                <p>
                  Adipisicing elit. Eligendi, assumenda cupiditate illo officiis
                  eveniet mollitia! Quasi adipisci vero ipsa molestiae et at
                  ipsam voluptates accusamus, repudiandae quis cum eos ex.
                </p>
              </div>
            </div>
          </div>
        </section>
        <TopicLine></TopicLine>
        <section className="section-2">
          <div className="section2-reasons">
            <Titulo>
              Porquê escolher o <span>nosso Restaurante</span>
            </Titulo>

            <ul className="section2-cards">
              {/* se o ficheiro Json for verdadeiro ira criar um map */}
              {Cards &&
                Cards.map((item) => (
                  <li key={item.id} className="section2-cards-card">
                    <div className="section2-cards-card-picture">
                      <img src={item.picture} />
                    </div>
                    <div className="section2-cards-card-text">
                      <h3>{item.titulo}</h3>
                      <p>{item.texto}</p>
                      <div className="section2-cards-card-star">
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
          <div className="section2-feedback">
            <ul className="section2-feedback-comments">
              {Comments &&
                Comments.map((item) => (
                  <li key={item.id} className="section2-feedback-comments-card">
                    <div className="section2-feedback-comments-card-text">
                      <p>
                        <ImQuotesLeft className="section2-feedback-comments-card-text-icon" />
                        {item.texto}
                        <ImQuotesRight className="section2-feedback-comments-card-text-icon" />
                      </p>
                    </div>
                    <div className="section2-feedback-comments-card-info">
                      <div className="section2-feedback-comments-card-info-picture">
                        <img src={item.pict} title="Cliente" />
                      </div>
                      <div className="section2-feedback-comments-card-info-text">
                        <h3>{item.nome}</h3>
                        <p>{item.job}</p>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      </Sections>
    </Container>
  );
}
export default Home;
