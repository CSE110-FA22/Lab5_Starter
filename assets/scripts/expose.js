// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // Selecting DOM elements and get references to DOM elements using their ID
  const hornSelect = document.getElementById("horn-select");
  const hornImg = document.querySelector("[alt='No image selected']");
  const volumeSlider = document.getElementById("volume");
  const volumeImg = document.querySelector("[alt='Volume level 2']");

  const audioElement = document.querySelector("audio");
  const playButton = document.querySelector("button");

  // Create a new instance of the JSConfetti library to be used later
  const jsConfetti = new JSConfetti();

  // Set a flag to keep track if the audio can be played or not
  let audioCanBePlayed = false;

  // Event listeners
  hornSelect.addEventListener("change", changeHornContent);
  volumeSlider.addEventListener("input", changeVolumeContent);
  playButton.addEventListener("click", playSound);

  // Changes the horn content based on the selected horn
  function changeHornContent() {
    audioCanBePlayed = true;
    switch (hornSelect.value) {
      case "air-horn":
        hornSelect.value = "air-horn";
        hornImg.src = "assets/images/air-horn.svg";
        audioElement.src = "assets/audio/air-horn.mp3";
        break;
      case "car-horn":
        hornSelect.value = "car-horn";
        hornImg.src = "assets/images/car-horn.svg";
        audioElement.src = "assets/audio/car-horn.mp3";
        break;
      case "party-horn":
        hornSelect.value = "party-horn";
        hornImg.src = "assets/images/party-horn.svg";
        audioElement.src = "assets/audio/party-horn.mp3";
        break;
    }
  }
  // Volume Slider Event Listener : changes the volume content based on the volume slider value
  audioElement.volume = volumeSlider.value / 100.00;
  function changeVolumeContent() {
    if (volumeSlider.value == 0) {
      volumeImg.src = "assets/icons/volume-level-0.svg";
    } else if (volumeSlider.value >= 1 && volumeSlider.value < 33) {
      volumeImg.src = "assets/icons/volume-level-1.svg";
    } else if (volumeSlider.value >= 33 && volumeSlider.value < 67) {
      volumeImg.src = "assets/icons/volume-level-2.svg";
    } else if (volumeSlider.value >= 67) {
      volumeImg.src = "assets/icons/volume-level-3.svg";
    }
  }
  // plays the sound and triggers confetti if the party horn is selected
  function playSound() {
    if (hornSelect.value == "party-horn") {
      jsConfetti.addConfetti();
    }
    if (audioCanBePlayed) {
      audioElement.load();
      audioElement.play();
    }
  }
}