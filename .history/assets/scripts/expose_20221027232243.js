// expose.js

window.addEventListener('DOMContentLoaded', init);
let selector = document.getElementById("horn-select");
selector.addEventListener('change', change_img());
function init() {
  // TODO
}
function change_img(){
  let horn_image = document.getElementsByTagName('img')[0];
  switch (horn_image.src){
    case ("air-horn"):
      horn_image.src = "assets/images/air-horn.svg"
    case ("car-horn"):
      horn_image.src = "assets/images/car-horn.svg"
    case ("party-horn"):
        horn_image.src = "assets/images/party-horn.svg"
  }
}