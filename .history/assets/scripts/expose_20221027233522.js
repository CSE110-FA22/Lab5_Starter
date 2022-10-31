// expose.js

window.addEventListener('DOMContentLoaded', init);
let selector = document.getElementById("horn-select");
let horn_image = document.getElementsByTagName('img')[0];
selector.addEventListener('change', function(){
  switch (selector.value){
    case ("air-horn"):
      horn_image.src = "assets/images/air-horn.svg"
      break;
    case ("car-horn"):
      horn_image.src = "assets/images/car-horn.svg"
      break;
    case ("party-horn"):
      horn_image.src = "assets/images/party-horn.svg"
      break;
    default: horn_image.src = "assets/images/no-image.png"
  }

});
function init() {
  // TODO
}