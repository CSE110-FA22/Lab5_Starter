
window.addEventListener('DOMContentLoaded', init);

function init() {
  var horn = document.getElementById('horn-select');
  var audio = document.querySelector('audio');


  //change the horn image and audio according to the user choice
  function setImgAndAudio(){
    var img = document.querySelector('img');
    img.src = `assets/images/${horn.value}.svg`;
    audio.src = `assets/audio/${horn.value}.mp3`;
  }
  horn.addEventListener('change', setImgAndAudio);


  //change the image of volume according to the user choice 
  var vol = document.getElementById('volume');
  function setVolImg(){
    var volImg = document.querySelector('img[alt="Volume level 2"]');
    if (vol.value == 0){
      volImg.src = `assets/icons/volume-level-0.svg`;
    } else if (vol.value < 33){
      volImg.src = `assets/icons/volume-level-1.svg`;
    } else if (vol.value < 67){
      volImg.src = `assets/icons/volume-level-2.svg`;
    } else {
      volImg.src = `assets/icons/volume-level-3.svg`;
    }
  }  
  vol.addEventListener('input', setVolImg);

  //when button is clicked, play the sound and show confetti is it is party horn
  var playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();
  function playSound(){
    if (horn.value == "party-horn"){
      jsConfetti.addConfetti();
    }
    audio.volume = vol.value/100;
    audio.play();
  }
  playButton.addEventListener('click', playSound);

}