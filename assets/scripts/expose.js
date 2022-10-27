// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let image = document.querySelector('img');
  let select = document.getElementById('horn-select');
  let audio = document.getElementsByClassName("hidden")[0];
  let changeImg = function() {
    if (select.value == 'air-horn') {
      image.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    }
    else if (select.value == 'car-horn') {
      image.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    }
    else if (select.value == 'party-horn') {
      image.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
  }
  select.addEventListener('change', changeImg);
  
}
init();