//importar components do style
import { Container } from "./style";
import { useEffect, useState } from "react";
// importar imagens
import chef1 from "../../assets/chefs/chef1_pic.jpeg";
import chef2 from "../../assets/chefs/chef2_pic.jpeg";
import chef3 from "../../assets/chefs/chef3_pic.jpeg";
import chef4 from "../../assets/chefs/chef4_pic.jpeg";
import chef5 from "../../assets/chefs/chef5_pic.jpeg";

export default function ChefInfo() {
  const [clicar, setClicar] = useState("texto");

  //sempre que a pagina for atualizada, essa funcao sera iniciada
  useEffect(() => {
    //seleciona todos os paineis da pagina
    const painels = document.querySelectorAll(".painel");
    //sempre que um painel for selecionado, ele ira adicionar a class active em si mesmo, e retirar do outros
    painels.forEach((item) => {
      item.addEventListener("click", () => {
        //ele chama a funcao abaixo, que ira remover todas as class active
        removeClass();
        item.classList.add("active");
      });
    });
    function removeClass() {
      painels.forEach((item) => {
        item.classList.remove("active");
      });
    }
  }, [clicar]);
  return (
    <Container>
      <div className="painel active">
        <div className="title" title="Eric Silva">
          <h3>Eric</h3> <h3>Silva</h3>
        </div>
        <div className="info">
          <div className="info-part1">
            <div className="picture">
              <img src={chef1}></img>
            </div>
            <h3 className="nome">Eric Silva</h3>
            <h4 className="job">Chef de cozinha</h4>
          </div>
          <div className="info-part2">
            <h2>Sobre Mim:</h2>
            <div className="why">
              <h4>Porquê a culinaria</h4>
              <p>
                Praesent quis ligula ac enim ullamcorper ullamcorper in non
                purus. Curabitur tortor lorem, scelerisque at velit quis,
                vehicula lacinia ante. Nam porta eu leo mattis imperdiet.
              </p>
            </div>
            <div className="exp">
              <h4>Cursos/Experiência</h4>
              <p>
                {" "}
                Curabitur quis massa turpis. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Suspendisse lobortis convallis
                posuere. Sed vitae ultrices dolor.
              </p>
            </div>
            <div className="pratos">
              <h4>Receita favorita</h4>
              <ul>
                <li>Risoto</li>
                <li>Strogonoff</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="painel">
        <div className="title" title="Patrick Orlov">
          <h3>Patrick</h3> <h3>Orlov</h3>
        </div>
        <div className="info">
          <div className="info-part1">
            <div className="picture">
              <img src={chef2}></img>
            </div>
            <h3 className="nome">Patrick Orlov</h3>
            <h4 className="job">Especialista em cortes</h4>
          </div>
          <div className="info-part2">
            <h2>Sobre Mim:</h2>
            <div className="why">
              <h4>Porquê a culinaria</h4>
              <p>
                Phasellus elementum augue vel dapibus fringilla. Integer
                ultrices tortor et nisl scelerisque, eget pretium ligula ornare.
                Donec lobortis tortor eu libero varius, eget dictum dui pharetra
              </p>
            </div>
            <div className="exp">
              <h4>Cursos/Experiência</h4>
              <p>
                Ut maximus volutpat commodo. Morbi rutrum ex libero. Aliquam
                erat volutpat. Nullam laoreet nisi feugiat nunc faucibus, id
                fermentum ante egestas.
              </p>
            </div>
            <div className="pratos">
              <h4>Receita favorita</h4>
              <ul>
                <li>Salmão grelhado</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="painel">
        <div className="title" title="Beatriz Alves">
          <h3>Beatriz</h3> <h3>Alves</h3>
        </div>
        <div className="info">
          <div className="info-part1">
            <div className="picture">
              <img src={chef3}></img>
            </div>
            <h3 className="nome">Beatriz Alves</h3>
            <h4 className="job">Especialista em doces</h4>
          </div>
          <div className="info-part2">
            <h2>Sobre Mim:</h2>
            <div className="why">
              <h4>Porquê a culinaria</h4>
              <p>
                Aliquam eget vehicula magna, a pretium elit. Vestibulum
                imperdiet, nibh sed ultricies posuere, augue leo ultricies
                ligula, et congue mi orci non dui.
              </p>
            </div>
            <div className="exp">
              <h4>Cursos/Experiência</h4>
              <p>
                Aenean semper sem eu velit pharetra interdum. Curabitur justo
                mauris, fringilla vel maximus id, rhoncus vel nibh. Interdum et
                malesuada fames ac ante ipsum primis in faucibus.
              </p>
            </div>
            <div className="pratos">
              <h4>Receita favorita</h4>
              <ul>
                <li>Ramen de frango</li>
                <li>Yakisoba</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="painel">
        <div className="title" title="Fellipo Castilho">
          <h3>Fellipo</h3> <h3>Castilho</h3>
        </div>
        <div className="info">
          <div className="info-part1">
            <div className="picture">
              <img src={chef4}></img>
            </div>
            <h3 className="nome">Fellipo Castilho</h3>
            <h4 className="job">Cozinheiro</h4>
          </div>
          <div className="info-part2">
            <h2>Sobre Mim:</h2>
            <div className="why">
              <h4>Porquê a culinaria</h4>
              <p>
                Quis tincidunt quam scelerisque quis. Phasellus eget magna in
                ligula consectetur luctus eu id ex. Morbi a quam a urna placerat
                fringilla non id risus.
              </p>
            </div>
            <div className="exp">
              <h4>Cursos/Experiência</h4>
              <p>
                Sed malesuada tempus elit, a facilisis orci rhoncus sit amet.
                Quisque vel tincidunt risus. Vestibulum dignissim ligula vel
                venenatis dictum. Nulla vehicula euismod eros.
              </p>
            </div>
            <div className="pratos">
              <h4>Receita favorita</h4>
              <ul>
                <li>Caril de frango</li>
                <li>Arroz de polvo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="painel">
        <div className="title" title="Katrina Marjh">
          <h3>Katrina</h3> <h3>Marjh</h3>
        </div>
        <div className="info">
          <div className="info-part1">
            <div className="picture">
              <img src={chef5}></img>
            </div>
            <h3 className="nome">Katrina Marjh</h3>
            <h4 className="job">Cozinheira</h4>
          </div>
          <div className="info-part2">
            <h2>Sobre Mim:</h2>
            <div className="why">
              <h4>Porquê a culinaria</h4>
              <p>
                Sed vitae diam nec nunc feugiat porta vitae in purus. Ut laoreet
                quam turpis, mattis ornare neque porttitor ac. Mauris id risus
                id nisl fringilla fringilla eget non augue.
              </p>
            </div>
            <div className="exp">
              <h4>Cursos/Experiência</h4>
              <p>
                Curabitur varius elit nec condimentum bibendum. Sed libero
                lectus, tincidunt at ipsum et, lobortis ornare justo. Phasellus
                non nulla et dui placerat varius eget quis nibh.
              </p>
            </div>
            <div className="pratos">
              <h4>Receita favorita</h4>
              <ul>
                <li>Esparguete a bolonhesa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
