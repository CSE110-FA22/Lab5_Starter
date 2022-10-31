// explore.js

window.addEventListener('DOMContentLoaded', init);

var horn;
var vol;
var but;
var currentVol;
var soundHorn;
const jsConfetti = new JSConfetti();
//var sound;
function init() {
  // TODO
  horn = document.getElementById("horn-select");
  vol = document.getElementById("volume-controls");
  but = document.querySelector("button");
  currentVol = (document.getElementById("volume").value) / (document.getElementById("volume").max);
  soundHorn = new Audio;
  soundHorn.volume = document.getElementById("volume").value / document.getElementById("volume").max;
  horn.addEventListener('change',imgChange);
  but.addEventListener('click', makeSound);
  vol.addEventListener('change', changeVolume);
  console.log('DOM fully loaded and parsed');
}

function imgChange()
{
  if(horn.value === "air-horn")
  {
    document.querySelector("#expose img").src = "assets/images/air-horn.svg";
    document.querySelector("#expose img").alt = "Air horn";
    document.getElementsByClassName("hidden").src = "assets/audio/air-horn.mp3";
    document.getElementsByClassName("#hidden img").alt = "Air horn";
  }
  else if (horn.value === "car-horn")
  {
     document.querySelector("#expose img").src = "assets/images/car-horn.svg";
     document.querySelector("#expose img").alt = "Car horn";
     document.getElementsByClassName("hidden").src = "assets/audio/car-horn.mp3";
     document.getElementsByClassName("hidden").alt = "Car horn";
  }
  else
  {
     document.querySelector("#expose img").src = "assets/images/party-horn.svg";
     document.querySelector("#expose img").alt = "Party horn";
     document.getElementsByClassName("hidden").src = "assets/audio/party-horn.mp3";
     document.getElementsByClassName("hidden").alt = "Party horn";
  }
}
function makeSound()
{
  soundHorn.src = document.getElementsByClassName("hidden").src;
  soundHorn.play();
  if(horn.value == "party-horn")
  {
    jsConfetti.addConfetti();
    //jsConfetti.clearCanvas();
  }
}

function changeVolume()
{
  //alert("changed");
  var loudness = document.getElementById("volume");
  currentVol = loudness.value / loudness.max;
  soundHorn.volume = currentVol;

  if(currentVol == 0)
  {
    document.querySelector("#volume-controls img").src = "assets/icons/volume-level-0.svg";
    document.querySelector("#volume-controls img").alt = "Volume level 0";
  }
  else if(1 <= loudness.value && loudness.value < 33)
  {
    document.querySelector("#volume-controls img").src = "assets/icons/volume-level-1.svg";
    document.querySelector("#volume-controls img").alt = "Volume level 1";
  }
  else if(33 <= loudness.value && loudness.value < 67)
  {
    document.querySelector("#volume-controls img").src = "assets/icons/volume-level-2.svg";
    document.querySelector("#volume-controls img").alt = "Volume level 2";
  }
  else 
  {
    document.querySelector("#volume-controls img").src = "assets/icons/volume-level-3.svg";
    document.querySelector("#volume-controls img").alt = "Volume level 3";
  }
}
