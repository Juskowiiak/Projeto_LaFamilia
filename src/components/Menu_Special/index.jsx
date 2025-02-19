//import container do style
import { Container } from "./style";
//importar containers
import TopicSubTitle from "../topic-subtitle";
import TopicTitle from "../topic-title";
//importar ficheiro json
import special from "../../Api/menuSpecial.json";
//importar funcao
import busca from "./funcao";
import picture from "../../../public/menu/especialidade/esp3.jpg";
import { useState } from "react";
export default function MenuSpecial() {
  const [pict, setPict] = useState(
    "../../../public/menu/especialidade/esp1.jpg"
  );
  //sempre que clicarmos nas opcoes, esta funcao é chamada
  function pega(dado) {
    busca(dado);
    setPict(`../../../public/menu/especialidade/esp${dado}.jpg`);
    console.log(pict);
  }
  return (
    <Container>
      <TopicTitle>Ementa</TopicTitle>
      <TopicSubTitle>A Especialidade da casa</TopicSubTitle>
      <div className="special">
        <ul className="special-option">
          {special &&
            special.map((item) => (
              <li
                key={item.id}
                className="optionMenu"
                onClick={() => pega(item.id)}
              >
                {item.titulo}
              </li>
            ))}
        </ul>
        <div className="special-info">
          <div className="special-info-text">
            <h3 className="special-info-name">Double Chocolate Cake</h3>
            <p className="special-info-texto">
              Aenean leo augue, tristique eget iaculis quis, pellentesque in
              lacus. Nam dignissim, mauris vel consectetur ortor vitae purus
              semper semper a eget lacus. Aenean quis sem rhoncu, sem ante
              scelerisque urna, nec semper tortor mi luctus magna. tus est ac
              malesuada elementum, ut fermentum arcu vitae tellus vestib.
            </p>
          </div>
          <div className="special-info-picture">
            <img src={pict} />
          </div>
        </div>
      </div>
    </Container>
  );
}
