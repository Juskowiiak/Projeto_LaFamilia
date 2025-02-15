import { Route, Routes } from "react-router-dom";
//importar paginas
import Home from "../containers/Home";
import Menu from "../containers/Menu";
import Chefs from "../containers/Chefs";
import Eventos from "../containers/Eventos";
import Reservation from "../containers/Reservation";
import Navegador from "../containers/Navegador";
import Footer from "../containers/Footer";
//estas serao as rotas da pagina
export default function Rotas() {
  return (
    <>
      <Navegador />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/chefs" element={<Chefs />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Footer />
    </>
  );
}
