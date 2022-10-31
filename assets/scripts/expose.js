// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const pick = document.getElementById("horn-select");
  const audio = document.getElementsByClassName("hidden");
  const pic = document.querySelector("img"); 

  document.getElementById("horn-select").
    addEventListener("change", change_img);

  function change_img(){
    //console.log("hi");
    if(pick.value == "air-horn"){
      pic.src = "assets/images/air-horn.svg";
      pic.alt = "air horn selected";
      audio.scr = "air-horn.mp3";
    }
    else if (pick.value == "car-horn"){
      pic.src = "assets/images/car-horn.svg";
      pic.alt = "car horn selected";
      audio.scr = "car-horn.mp3";
    }
    else if (pick.value == "party-horn") {
      pic.src = "assets/images/party-horn.svg";
      pic.alt = "party horn selected";
      audio.scr = "party-horn.mp3";
    }
  }
  
  document.getElementById("volume").
    addEventListener("input", display_sound);
  
  function display_sound(){
    //console.log("hi2");
    const picture = document.querySelector("div img");
    const input = document.getElementById("volume");
    const audio = document.querySelector("audio");
    audio.volume = (input.value)/100;

    if(input.value == "0"){
      picture.scr = "assets/icons/volume-level-0.svg";
      picture.alt = "muted";
      audio.muted = true;
    }
    else if(input.value < 33){
      picture.scr = "assets/icons/volume-level-1.svg";
      picture.alt = "level 1"; 
      audio.muted = false;
      
    }
    else if (input.value < 67) {
      picture.scr = "assets/icons/volume-level-2.svg";
      picture.alt = "level 2";
      audio.muted = false;
      
    }
    else{
      picture.scr = "assets/icons/volume-level-3.svg";
      picture.alt = "level 3"; 
      audio.muted = false;
     
    }
  }

  document.querySelector('button').addEventListener("click", sound_horn);

  function sound_horn(){
    const aud = document.getElementsByClassName("hidden");
    const horn = document.getElementById("horn-select");
    aud.play();
    if(horn.value == 'party-horn'){
      jsConfetti.addConfetti();
    }
  } 
}
