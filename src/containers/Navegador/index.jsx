import { Link } from "react-router-dom";
import { Container } from "./style";
//aqui vamos encaminhar os links para as rotas que criamos no ficheiro Rota
export default function Navegador() {
  return (
    <Container>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/chefs">Chefs</Link>
      </li>
      <li>
        <Link to="/eventos">Eventos</Link>
      </li>
      <li>
        <Link to="/reservation">Reservation</Link>
      </li>
    </Container>
  );
}
