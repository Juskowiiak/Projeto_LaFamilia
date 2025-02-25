import { Container } from "./style";

export default function Reserva() {
  //declaracao de variaveis
  const mail = document.querySelector("#mail");
  const movel = document.querySelector("#movel");
  const nome = document.querySelector("#nome");
  const pessoa = document.querySelector("#pessoa");
  const data = document.querySelector("#data");
  const hora = document.querySelector("#hora");

  const formulario = (e) => {
    //a funcao só é submetida, caso der true em todas funcoes
    if (nome.value == "") {
      alert("Nome: espaço em branco");
      e.preventDefault();
    } else if (!checkMail(mail)) {
      e.preventDefault();
    } else if (!checkMovel(movel)) {
      e.preventDefault();
    } else if (pessoa.value == "") {
      alert("Pessoa: espaço em branco");
      e.preventDefault();
    } else if (data.value == "") {
      alert("Data: espaço em branco");
      e.preventDefault();
    } else if (hora.value == "") {
      alert("Hora: espaço em branco");
      e.preventDefault();
    }
  };
  function checkMovel(dado) {
    //aceita apenas numeros
    let regex = /^\d+$/;

    if (!regex.test(dado.value)) {
      alert("Telemovel: valor invalido");
    } else if (dado.value.length < 9) {
      alert("Telemovel: no minimo 9 digitos");
    } else {
      return true;
    }
  }
  function checkMail(dado) {
    // caso o dado tenha " string@string. " ira dar true
    let regex = /^\S+@\S+\.\S+$/;
    if (!regex.test(dado.value)) {
      alert("Email: valor invalido");
    } else {
      return true;
    }
  }

  return (
    <Container>
      <form onSubmit={formulario}>
        <ul className="part1">
          <li className="dado">
            <p>Nome</p>
            <input
              type="text"
              id="nome"
              maxLength={25}
              placeholder="Introduza seu nome"
            ></input>
          </li>
          <li className="dado">
            <p>Email</p>
            <input
              type="text"
              id="mail"
              placeholder="Introduza seu email"
            ></input>
          </li>
          <li className="dado">
            <p>Telemóvel</p>
            <input
              type="tel"
              id="movel"
              maxLength={9}
              placeholder="Introduza seu nome"
            ></input>
          </li>
        </ul>
        <ul className="part2">
          <li className="dado">
            <p>Pessoas</p>
            <input
              type="number"
              id="pessoa"
              placeholder="Introduza nº pessoas"
            ></input>
          </li>
          <li className="dado">
            <p>Data</p>
            <input
              type="date"
              id="data"
              min={"2025-02-24"}
              max={"2025-09-02"}
              placeholder="Introduza a data"
            ></input>
          </li>
          <li className="dado">
            <p>Horas</p>
            <input type="time" id="hora" placeholder="Introduza a hora"></input>
          </li>
        </ul>
        <input type="submit" value={"clique"} />
      </form>
    </Container>
  );
}
