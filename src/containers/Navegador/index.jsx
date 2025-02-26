//aqui vamos encaminhar os links para as rotas que criamos no ficheiro Rota
import { Link } from "react-router-dom";
import { Container } from "./style";
//importar imagem
import Logo from "../../assets/nav/logo.png";
import { useState } from "react";
//importar icons
import { IoMenu } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
//importar ficheiro funcao
import abrirMenu from "./abrirMenu";
import fecharMenu from "./fecharMenu";

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
          <Link to="/" onClick={() => fecharMenu()} className="option">
            Home
          </Link>
        </li>
        <li>
          <Link to="/menu" onClick={() => fecharMenu()} className="option">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/chefs" onClick={() => fecharMenu()} className="option">
            Chefs
          </Link>
        </li>
      </div>
      <div className="picture">
        <Link to="/">
          <img src={Logo} title="HomePage" />
        </Link>
      </div>
      <div className="menu-2">
        <li>
          <Link to="/eventos" onClick={() => fecharMenu()} className="option">
            Eventos
          </Link>
        </li>
        <li>
          <Link
            to="/reservation"
            onClick={() => fecharMenu()}
            className="option"
          >
            Reserva
          </Link>
        </li>
        <li>
          <ul>
            <li>
              <a href="https://www.instagram.com/" title="Instagram">
                {" "}
                <TiSocialInstagram className="icons" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" title="Facebook">
                <TiSocialFacebook className="icons" />
              </a>
            </li>
            <li>
              <a href="https://x.com/" title="Twitter">
                <TiSocialTwitter className="icons" />
              </a>
            </li>
          </ul>
        </li>
      </div>
      <div className="Btn" onClick={() => abrirMenu()}>
        <IoMenu />
      </div>
    </Container>
  );
}
