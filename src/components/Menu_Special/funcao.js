function pega() {
  document.querySelectorAll(".optionMenu").forEach((item) => {
    remover();
    item.classList.add("active");
  });
}
function remover() {
  document.querySelectorAll(".optionMenu").forEach((item) => {
    item.classList.remove("active");
  });
}

export default pega;
