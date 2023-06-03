// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const select = document.querySelector("select");
  const image = document.querySelector("img");
  const audio = document.querySelector("audio");
  
  function ChangeHornImg(){
    const selectedOption = select.options[select.selectedIndex];
    
    if(select.selectedIndex == 1){
      var imagePath = "assets/images/air-horn.svg";
      var audioPath = "assets/audio/air-horn.mp3";
    } else if(select.selectedIndex == 2){
      var imagePath = "assets/images/car-horn.svg";
      var audioPath = "assets/audio/car-horn.mp3";
    } else if(select.selectedIndex == 3){
      var imagePath = "assets/images/party-horn.svg";
      var audioPath = "assets/audio/party-horn.mp3";
    } else {
      var imagePath = "assets/images/no-image.png";
      var audioPath = "";
    }
    
    image.src = imagePath;
    audio.src = audioPath;
  }
  
  select.addEventListener('change', ChangeHornImg());
  
  
  const volume = document.getElementById("volume");
  
    
}
