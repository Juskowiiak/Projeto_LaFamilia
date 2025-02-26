//estao funcao ira receber o id do botao clicado
//e vai alterar os dados da tela(especialidade)

function busca(dado) {
  switch (dado) {
    case 1:
      info1();
      break;
    case 2:
      info2();
      break;
    case 3:
      info3();
      break;
    case 4:
      info4();
      break;
    case 5:
      info5();
      break;
    default:
      break;
  }
}

//essas são as informações das especialidades, fiz desse jeito porque pareceu mais facil e porque só tinha 5 dados :D (preguiça)

function info1() {
  document.querySelector(".special-info-name").innerHTML =
    "Double Chocolate Cake";
  document.querySelector(".special-info-texto").innerHTML =
    "Aenean leo augue, tristique eget iaculis quis, pellentesque in lacus. Nam dignissim, mauris vel consectetur ortor vitae purus semper semper a eget lacus. Aenean quis sem rhoncu, sem ante scelerisque urna, nec semper tortor mi luctus magna tus est ac malesuada elementum, ut fermentum arcu vitae tellus vestib";
}
function info2() {
  document.querySelector(".special-info-name").innerHTML =
    "Caramel Topped Ice Cream";
  document.querySelector(".special-info-texto").innerHTML =
    "Quisque dictum egestas odio, non molestie nunc ultrices ut. Sed odio felis, faucibus dictum ullamcorper imperdiet, sodales a turpis. Aliquam erat volutpat.Quisque dictum egestas odio, non molestie nunc ultrices ut. Sed odio felis, faucibus dictum ullamcorper imperdiet, sodales a turpis. Aliquam erat volutpat.";
}
function info3() {
  document.querySelector(".special-info-name").innerHTML =
    "Strogonoff de Camarão";
  document.querySelector(".special-info-texto").innerHTML =
    "Duis sit amet quam suscipit, consequat eros vitae, mollis ex. Proin nibh leo, accumsan vel lacinia sed, pulvinar ac lorem. Pellentesque quis venenatis ipsum. Nunc eget neque eget ante suscipit sagittis ac non tortor. Morbi rutrum sem nec sapien tempus porta eget elementum eros. Pellentesque consequat, purus sit amet semper tempor.";
}
function info4() {
  document.querySelector(".special-info-name").innerHTML =
    "Risoto de Queijo Parmesão";
  document.querySelector(".special-info-texto").innerHTML =
    "Nulla non augue sit amet tellus sagittis faucibus. Nulla facilisi. Morbi viverra tincidunt diam, et lacinia neque mollis nec. Duis nec tincidunt mi, at vulputate augue. Nunc ac congue ante, nec sagittis nisl. Vestibulum at velit mattis, scelerisque arcu at, rhoncus quam, donec risus est";
}
function info5() {
  document.querySelector(".special-info-name").innerHTML =
    "Risoto de Filé Mignon";
  document.querySelector(".special-info-texto").innerHTML =
    "Aenean mollis nunc non magna sagittis cursus. Suspendisse facilisis purus dolor, lacinia vulputate magna pretium ac. Nulla non augue sit amet tellus sagittis faucibus. Nulla facilisi. Morbi viverra tincidunt diam, et lacinia neque mollis nec Duis, et malesuada fames ac ante ipsum primis in faucibus. Donec bibendum quam eget nisl porttitor dapibus";
}

export default busca;
