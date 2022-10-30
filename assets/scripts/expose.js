// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //Objects needed in html file

  //Get element by Id for objects
  var volumeControl = document.getElementById('volume');
  var hornSelector = document.getElementById('horn-select');
  var volumeIcon = document.querySelector("[alt='Volume level 2']");
  //Query selector for objects
  var hornImages = document.querySelectorAll('img');
  var audioSounds = document.querySelector('audio');
  var executeSound = document.querySelector('button');

  //Store as const to use function when party horn is called
  const useConfetti = new JSConfetti();

  hornSelector.addEventListener('change', function() {
    if (hornSelector.value == "air-horn") {
      hornImages[0].src = 'assets/images/air-horn.svg';
      audioSounds.src = 'assets/audio/air-horn.mp3';
    } else if (hornSelector.value == "car-horn") {
      hornImages[0].src = 'assets/images/car-horn.svg';
      audioSounds.src = 'assets/audio/car-horn.mp3';
    } else if (hornSelector.value == "party-horn") {
      hornImages[0].src = 'assets/images/party-horn.svg';
      audioSounds.src = 'assets/audio/party-horn.mp3';
    }
  });

  volumeControl.addEventListener('input', function() {
    if(volumeControl.value == 0){
       volumeIcon.src = 'assets/icons/volume-level-0.svg';
       audioSounds.volume = 0;
    }
    else if(volumeControl.value < 33){
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      audioSounds.volume = volumeControl.value / 100;
    }
    else if(volumeControl.value < 67){
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      audioSounds.volume = volumeControl.value / 100;
    }
    else if(volumeControl.value < 100){
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      audioSounds.volume = volumeControl.value / 100;
    }
  });

  executeSound.addEventListener('click', function() {
    if (hornSelector.value == "party-horn"){
      useConfetti.addConfetti();
    }

    audioSounds.play();
  });
}
