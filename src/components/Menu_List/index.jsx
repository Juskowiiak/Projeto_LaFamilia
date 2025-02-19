//importar containers
import TopicSubTitle from "../topic-subtitle";
import TopicTitle from "../topic-title";
//importar container do style
import { Container } from "./style";
//importar ficheiro json
import menuLista from "../../Api/menu.json";
import menuOption from "../../Api/menuOption.json";
// ___________________
//import escolhe from "./filtrar";
import { useState } from "react";

export default function MenuList() {
  //usei o useState porque vou estar constatemente alterar a lista
  const [menu, setMenu] = useState(menuLista);

  //quando clicado na opcao, recebemos o seu tipo, aí criamos uma lista baseada nesse tipo
  function escolhe(item) {
    const lista = menuLista.filter((element) => element.tipo == item);
    //aqui alteramos a lista
    setMenu(lista);
  }
  return (
    <Container>
      <TopicTitle>Ementa</TopicTitle>
      <TopicSubTitle>Veja os nosso pratos deliciosos</TopicSubTitle>
      <ul className="menu-options">
        {/* caso a ficheiro seja true, lê o array */}
        {menuOption &&
          menuOption.map((item) => (
            <li
              key={item.id}
              className="optionFood"
              onClick={() => escolhe(item.tipo)}
            >
              <span>{item.nome}</span>
            </li>
          ))}
      </ul>
      <ul className="ementa">
        {/*se o ficheiro json for true mostra a lista*/}
        {menu &&
          menu.map((item) => (
            <li key={item.id}>
              <div className="info">
                <div className="info-picture">
                  <img src={item.picture} />
                </div>
                <div className="info-text">
                  <h4 className="info-text-nome">{item.nome}</h4>
                  <p>{item.info}</p>
                </div>
              </div>
              <h4 className="preco">{item.preco} €</h4>
            </li>
          ))}
      </ul>
    </Container>
  );
}
