//fechar o menu sempre, que uma das tags for selecionada

function fecharMenu() {
  const menu1 = document.querySelector(".menu-1");
  const menu2 = document.querySelector(".menu-2");
  document.querySelectorAll(".option").forEach((item) => {
    item.addEventListener("click", () => {
      menu1.style.right = "100%";
      menu2.style.right = "100%";
    });
  });
}

export default fecharMenu;
