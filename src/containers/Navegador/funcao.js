function abrirMenu() {
  const menu1 = document.querySelector(".menu-1");
  const menu2 = document.querySelector(".menu-2");

  menu1.classList.toggle("abrir");
  menu2.classList.toggle("abrir");
}

export default abrirMenu;

//a classe abrir empura 100% do menu para direita
