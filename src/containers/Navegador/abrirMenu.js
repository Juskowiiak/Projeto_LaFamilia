//a classe abrir empura 100% do menu para direita

function abrirMenu() {
  const menu1 = document.querySelector(".menu-1");
  const menu2 = document.querySelector(".menu-2");

  if (menu1.style.right == "100%" || menu2.style.right == "100%") {
    menu1.style.right = "0";
    menu2.style.right = "0";
  } else {
    menu1.style.right = "100%";
    menu2.style.right = "100%";
  }
}

//fechar o menu sempre, que uma das tags for selecionada

export default abrirMenu;
