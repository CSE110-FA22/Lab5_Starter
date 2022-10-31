// expose.js

window.addEventListener('DOMContentLoaded', init);
let selector = document.getElementById("horn-select");
selector.addEventListener('change', change_img());
function init() {
  // TODO
}
function change_img(){
  let horn_image = document.getElementsByTagName('img')[0];
  console.log("Hello");
  switch (horn_image.src){
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
}