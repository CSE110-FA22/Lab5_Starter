//expose.js

//window.addEventListener('DOMContentLoaded', init);

function init() {
  const dropdown = document.querySelector('select');
  //console.log(dropdown);
  const hornImage = document.querySelector('alt="No image selected"');
  //console.log(hornImage);
  const hornAudio = document.querySelector('audio');
  //console.log(hornAudio);
  const volumeImage = document.querySelector('alt="Volume level 2"');
  //console.log(volumeImage);
  const slider = document.querySelector('type = "range"');
  //console.log(slider);
  const playButton = document.quertSelector('button');
  //console.log(playButton);
  const confetti = new JSConfetti();

  dropdown.addEventListener('change', setHorn);
  slider.addEventListener('change', setVolume);
  playButton.addEventListener('click', playHorn);

  function setHorn() {
    if (dropdown.value == "air-horn") {
      hornAudio.src = "assets/audio/air-horn.mp3";
      hornImage.src = "assets/images/air-horn.svg";
    }
    if (dropdown.value == "car-horn") {
      hornAudio.src = "assets/audio/car-horn.mp3";
      hornImage.src = "assets/images/car-horn.svg";
    }
    if (dropdown.value == "party-horn") {
      hornAudio.src = "assets/audio/party-horn.mp3";
      hornImage.src = "assets/images/party-horn.svg";
    }
  }

  function setVolume() {
    let volume = slider.value;
    if (volume == 0){
      volumeImage.src = "assets/audio/volume-level-0.svg";
    }
    else if (volume < 33) {
      volumeImage.src = "assets/audio/volume-level-1.svg";
    }
    else if (volume < 67) {
      volumeImage.src = "assets/audio/volume-level-2.svg";
    }
    else {
      volumeImage.src = "assets/audio/volume-level-3.svg";
    }
    hornAudio.volume = volume / 100;
  }

  function playHorn() {
    hornAudio.play();
    if (hornAudio.src == "assets/audio/party-horn.mp3") {
      confetti.addConfetti();
    }
  }
}