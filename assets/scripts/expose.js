// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  //console.log(document.querySelector("[value='air-horn']"));
  const horn = document.getElementById("horn-select");
  horn.addEventListener('change', (event)=>{
    const images = document.querySelector('img');
    const button = document.querySelector('button');
    //const sound = document.getElementById("hidden");
    //let sound_icon = sound.querySelector('img');
    if(event.target.value =='air-horn'){
      images.src="assets/images/air-horn.svg";
      button.addEventListener('click', (event)=>{
        const audio = document.getElementsByClassName("hidden");
        //audio.src = "assets/audio/air-horn.mp3";
        audio.play();
      });/*
      if(sound.volume == 0){
        
      }
      else if(sound.volume >= 1 && sound.volume < 33){

      }
      else if(sound.volume >= 33 && sound.volume < 67){

      }
      else{

      }*/
    }
    else if(event.target.value =='car-horn'){
      images.src="assets/images/car-horn.svg";
    }
    else if(event.target.value =='party-horn'){
      images.src="assets/images/party-horn.svg";
    }
  });
  

}
 
