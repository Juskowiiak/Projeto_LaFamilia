import { Container } from "./style";
//importar icons
import { BiMap } from "react-icons/bi";
import { LuPhone } from "react-icons/lu";
import { FiClock } from "react-icons/fi";
export default function Footer() {
  return (
    <Container>
      <ul className="info">
        <li className="info-card">
          <div className="info-card-title">
            <BiMap className="icon" />
            <h3>Morada</h3>
          </div>
          <div className="info-card-text">
            <p>Avenida das Flores</p>
            <p>Porto, Portugal</p>
          </div>
        </li>
        <li className="info-card">
          <div className="info-card-title">
            <FiClock className="icon" />
            <h3>Horários</h3>
          </div>
          <div className="info-card-text">
            <p>
              <span>Seg-Sab:</span>11h-23h
            </p>
            <p>
              <span>Dom:</span>Fechado
            </p>
          </div>
        </li>
        <li className="info-card">
          <div className="info-card-title">
            <LuPhone className="icon" />
            <h3>Contatos</h3>
          </div>
          <div className="info-card-text">
            <p>
              <span>Telefone:</span> +351 123 456 789
            </p>
            <p>
              <span>Email:</span> lafamilia_restaurant@hotmail.com
            </p>
          </div>
        </li>
      </ul>
      <div className="rights">
        <p>
          &#169; Copyright <span>LaFamilia </span>&#9679; &nbsp; Todos os
          Direitos Reservados
        </p>
        <p>
          Designed by <span>Juskowiak@phonso</span>
        </p>
      </div>
    </Container>
  );
}
