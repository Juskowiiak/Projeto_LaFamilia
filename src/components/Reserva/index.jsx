import { useState } from "react";
import { Container } from "./style";

export default function Reserva() {
  //declaracao de variaveis
  const mail = document.querySelector("#mail");
  const movel = document.querySelector("#movel");
  const [chave, setChave] = useState("");
  const formulario = (e) => {
    //a funcao só é submetida, caso der true em todas funcoes
    if (!checkMail(mail)) {
      e.preventDefault();
    } else if (!checkMovel(movel)) {
      e.preventDefault();
    }
    setChave(mail.value);
    alert("Reserva Efectuada com Sucesso");
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
      {/* usei o formsubmit.co para enviar o email */}
      {/* este formulario irá para o mail da empresa */}
      <form
        onSubmit={formulario}
        method="POST"
        action={`https://formsubmit.co/321754979d0896a0c77e351502fa0599`}
        target="_blank"
      >
        {/* titulo do email */}
        <input
          type="hidden"
          name="_subject"
          value="LaFamilia - Reserva Efectuada!"
        ></input>
        <input type="hidden" name="LaFamilia"></input>
        <ul className="part1">
          <li className="dado">
            <p>Nome</p>
            <input
              type="text"
              id="nome"
              required
              maxLength={25}
              placeholder="Introduza seu nome"
              name="Reservado por"
            ></input>
          </li>
          <li className="dado">
            <p>Email</p>
            <input
              type="email"
              id="mail"
              required
              placeholder="Introduza seu email"
              name="email"
            ></input>
          </li>
          <li className="dado">
            <p>Telemóvel</p>
            <input
              type="tel"
              id="movel"
              required
              maxLength={9}
              placeholder="Introduza seu nº"
            ></input>
          </li>
        </ul>
        <ul className="part2">
          <li className="dado">
            <p>Pessoas</p>
            <input
              type="number"
              id="pessoa"
              max={20}
              required
              maxLength={2}
              placeholder="nº de pessoas"
              name="Pessoas convidadas"
            ></input>
          </li>
          <li className="dado">
            <p>Data</p>
            <input
              type="date"
              id="data"
              required
              min={"2025-02-24"}
              max={"2025-09-02"}
              placeholder="Introduza a data"
              name="Data"
            ></input>
          </li>
          <li className="dado">
            <p>Horas</p>
            <input
              type="time"
              id="hora"
              required
              min="11:00"
              max="23:00"
              placeholder="Introduza a hora"
              name="Hora"
            ></input>
          </li>
        </ul>

        {/*ambos os emails empresa/cliente irao receber a notificaçao da reserva */}
        <input type="hidden" name="_autoresponse" value="Notificação"></input>
        <input className="botao" type="submit" value={"Enviar"} />
      </form>
    </Container>
  );
}
