//declaracao de variaveis
const nome = document.querySelector("#nome");
const mail = document.querySelector("#mail");
const movel = document.querySelector("#movel");

function checkName(dado) {
  //nome tera no minimo 4 characters
  if (dado.value.length < 4) {
    alert("No minimo 4 caracters");
  } else {
    return true;
  }
}

function checkMovel(dado) {
  //aceita apenas numeros
  let regex = /^\d+$/;

  if (!regex.test(dado.value)) {
    console.log("permitidos apenas numeros");
  } else {
    return true;
  }
}

function checkMail(dado) {
  // caso o dado tenha " string@string. " ira dar true
  let regex = /^\S+@\S+\.\S+$/;
  if (!regex.test(dado.value)) {
    console.log("email invalido");
  } else {
    return true;
  }
}
