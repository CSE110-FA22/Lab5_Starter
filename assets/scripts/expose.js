// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Main elements of the webpage
  const hornSelect = document.getElementById('horn-select');
  const audioFile = document.querySelector('.hidden');
  const volumeControl = document.getElementById('volume');
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  // Set the initial volume
  audioFile.volume = 0.5;

  // Function to change the image and audio selected
  function changeMedia() {
    let horn = document.querySelector('img');
    let whichHorn = hornSelect.selectedOptions[0];
    if(whichHorn == hornSelect.options[1]) {
      horn.src = "assets/images/air-horn.svg";
      audioFile.src = "assets/audio/air-horn.mp3";
    }
    if(whichHorn == hornSelect.options[2]) {
      horn.src = "assets/images/car-horn.svg";
      audioFile.src = "assets/audio/car-horn.mp3";
    }
    if(whichHorn == hornSelect.options[3]) {
      horn.src = "assets/images/party-horn.svg";
      audioFile.src = "assets/audio/party-horn.mp3";
      // Event Listener to shoot confetti
      playButton.addEventListener('click', shootConfetti);
    }
  }

  // Function to play the music
  function playMusic() {
    audioFile.play();
  }

  // Function to change the volume
  function changeVolume() {
    let audioIcon = document.querySelectorAll('img')[1];
    let vol = volumeControl.value;
    audioFile.volume = vol/100;
    if(vol == 0) {
      audioIcon.src = "assets/icons/volume-level-0.svg";
    }
    if(vol > 0 && vol < 33) {
      audioIcon.src = "assets/icons/volume-level-1.svg";
    }
    if(vol >= 33 && vol < 67) {
      audioIcon.src = "assets/icons/volume-level-2.svg";
    }
    if(vol >=67) {
      audioIcon.src = "assets/icons/volume-level-3.svg";
    }
  }

  // Function to shoot confetti
  function shootConfetti() {
    jsConfetti.addConfetti();
  }

  // Event Listener to change the image and audio
  hornSelect.addEventListener('change', changeMedia);
  // Event Listener to play the audio
  playButton.addEventListener('click', playMusic);
  // Event Listener to change the volume
  volumeControl.addEventListener('change', changeVolume);
};