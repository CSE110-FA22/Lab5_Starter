// expose.js

window.addEventListener('DOMContentLoaded', init);
// add confetti function
var confetti = new JSConfetti();

function init() {
  // record which horn user selected
  var whichHorn = document.getElementById("horn-select");
  // track the volume 
  var volume = document.getElementById("volume");
  // check if the button was clicked 
  var button = document.querySelector("button");

  // change the image based on the input 
  whichHorn.addEventListener('change', changeImage);
  
  // change the icon based on the volume level
  volume.addEventListener('input', volumeChanger);

  // play the sound when button pressed
  button.addEventListener('click', pressButton);
}
// function to change the volumn icon
function volumeChanger(){
  if (this.value == 0) {
    document.querySelector("#volume-controls > img").src= "/assets/icons/volume-level-0.svg";
  } else if (volume.value > 0 && volume.value < 33) {
    document.querySelector("#volume-controls > img").src= "/assets/icons/volume-level-1.svg";
  } else if (volume.value >32 && volume.value < 67) {
    document.querySelector("#volume-controls > img").src= "/assets/icons/volume-level-2.svg";
  } else {
    document.querySelector("#volume-controls > img").src= "/assets/icons/volume-level-3.svg";
  }
}

// change image icon based on the selection
function changeImage(){
  var image = this.value;  
  document.querySelector("img").src = "/assets/images/" + image + ".svg";
  document.querySelector(".hidden").src = "/assets/audio/" + image +".mp3";
}

// action after user press the button 
function pressButton(){
  document.querySelector(".hidden").volume = document.getElementById("volume").value / 100;
  if(document.getElementById("horn-select").value == "party-horn")
    confetti.addConfetti();
  document.querySelector(".hidden").play();
}