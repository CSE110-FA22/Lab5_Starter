// expose.js
//import JSConfetti from './js-confetti.browser.js';
let JSConfetti = require("./js-confetti.browser.js");
let jsConfetti = new JSConfetti();
window.addEventListener('DOMContentLoaded', init);
let selector = document.getElementById("horn-select");
let horn_image = document.getElementsByTagName('img')[0];
let audio = document.getElementsByTagName("audio")[0];
let sound_btn = document.getElementsByTagName("button")[0];
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
  

});
sound_btn.addEventListener('click', function(){
  if(selector.value == "party-horn"){
    console.log(audio.src);
    jsConfetti.addConfetti();
  }
  audio.play();
});
function init() {
  // TODO
}