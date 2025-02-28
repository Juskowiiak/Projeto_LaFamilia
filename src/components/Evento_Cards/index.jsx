import { Container } from "./style";
//importar icons
import { HiBadgeCheck } from "react-icons/hi";
import { IoIosArrowRoundForward } from "react-icons/io";
//importar ficheiro json
import eventos from "../../Api/eventos.json";
export default function EventoCards() {
  return (
    <Container>
      <div className="slider-wrapper">
        <ul className="slider">
          {/* se a json for true realiza o map */}
          {eventos &&
            eventos.map((item) => (
              <li key={item.id} className="card">
                <div className="card-picture">
                  <img src={item.picture} />
                </div>
                <div className="card-text">
                  <h2 className="card-text-title">{item.titulo}</h2>
                  <h3 className="card-text-price">{item.preco}</h3>
                  <div className="card-text-info">
                    <p>{item.inf1}</p>
                    <ul>
                      <li>
                        <HiBadgeCheck className="icon" />
                        <p>{item.tp1}</p>
                      </li>
                      <li>
                        <HiBadgeCheck className="icon" />
                        <p>{item.tp2}</p>
                      </li>
                      <li>
                        <HiBadgeCheck className="icon" />
                        <p>{item.tp3}</p>
                      </li>
                    </ul>
                    <p>{item.inf2}</p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <p className="seta">
        Arraste <IoIosArrowRoundForward />
      </p>
    </Container>
  );
}
