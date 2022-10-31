// expose.js

window.addEventListener('DOMContentLoaded', init);
let selector = document.getElementById("horn-select");
let horn_image = document.getElementsByTagName('img')[0];
let audio = document.getElementsByClassName("hidden")[0];
selector.addEventListener('change', function(){
  switch (selector.value){
    case ("air-horn"):
      horn_image.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
      break;
    case ("car-horn"):
      horn_image.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
      break;
    case ("party-horn"):
      horn_image.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
      break;
    default: 
      horn_image.src = "assets/images/no-image.png";
      audio.src = "";
  }
  console.log(audio.src);

});
function init() {
  // TODO
}