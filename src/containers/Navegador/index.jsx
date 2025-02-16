//aqui vamos encaminhar os links para as rotas que criamos no ficheiro Rota
import { Link } from "react-router-dom";
import { Container } from "./style";
//importar imagem
import Logo from "../../assets/nav/logo.png";
import { useState } from "react";
//importar icons
import { IoMenu } from "react-icons/io5";
export default function Navegador() {
  //quando o Navegador antigir certa altura ira mudar de cor
  const [mudarCorNavegador, setMudarCorNavegador] = useState(false);
  window.onscroll = () => {
    //se o navegador for false e o ScrollY está acima dos 100px, o backgroundColor do navegador será cinza
    if (!mudarCorNavegador && window.scrollY > 500) {
      setMudarCorNavegador(true);
    }
    //se o navegador for true e o ScrollY está acima dos 100px, o backgroundColor do navegador será preto
    if (mudarCorNavegador && window.scrollY < 500) {
      setMudarCorNavegador(false);
    }
  };
  return (
    //caso true background #141414
    <Container style={{ background: mudarCorNavegador ? "#141414" : "black" }}>
      <div className="menu-1">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/chefs">Chefs</Link>
        </li>
      </div>
      <div className="picture">
        <Link to="/">
          <img src={Logo} />
        </Link>
      </div>
      <div className="menu-2">
        <li>
          <Link to="/eventos">Eventos</Link>
        </li>
        <li>
          <Link to="/reservation">Reservation</Link>
        </li>
      </div>
      <div className="menu">
        <IoMenu />
      </div>
    </Container>
  );
}
