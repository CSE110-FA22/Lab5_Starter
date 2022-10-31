// expose.js

window.addEventListener('DOMContentLoaded', init);
let selector = document.getElementById("horn-select");
let horn_image = document.getElementsByTagName('img')[0];
selector.addEventListener('change', function(){
  console.log(horn_image.src);
  switch (horn_image.src){
    case ("assets/images/air-horn"):
      horn_image.src = "assets/images/air-horn.svg"
      break;
    case ("assets/images/car-horn"):
      horn_image.src = "assets/images/car-horn.svg"
      break;
    case ("assets/images/party-horn"):
      horn_image.src = "assets/images/party-horn.svg"
      break;
    default: horn_image.src = "assets/images/no-image.png"
  }

});
function init() {
  // TODO
}