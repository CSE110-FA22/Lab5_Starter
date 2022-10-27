// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const horn_type = document.getElementById('horn-select');
  const horn_img = document.querySelector("img[src='assets/images/no-image.png']");
  const horn_audio = document.querySelector("audio[src='']");
  
  const play_button = document.querySelector('button');
  const audio_slider = document.getElementById('volume');
  const volume_img = document.querySelector("img[src='assets/icons/volume-level-2.svg']");

  const jsConfetti = new JSConfetti();

  horn_type.addEventListener('change', (event) => {

    const horn_name = horn_type.value;

    if (horn_name == 'air-horn') {
      horn_img.src = 'assets/images/air-horn.svg';
      horn_audio.src = 'assets/audio/air-horn.mp3';
    }

    if (horn_name == 'car-horn') {
      horn_img.src = 'assets/images/car-horn.svg';
      horn_audio.src = 'assets/audio/car-horn.mp3';
    }

    if (horn_name == 'party-horn') {
      horn_img.src = 'assets/images/party-horn.svg';
      horn_audio.src = 'assets/audio/party-horn.mp3';
    }

  });

  play_button.addEventListener('click', (event) => {
    horn_audio.play();
    if (horn_type.value == 'party-horn') {
      jsConfetti.addConfetti();
    }
  });

  audio_slider.addEventListener('change', (event) => {

    const newVolume = event.target.value;
    // console.log(newVolume);
    horn_audio.volume = (newVolume / 100);

    if (newVolume == 0) {
      volume_img.src = "assets/icons/volume-level-0.svg";
    } else if (newVolume < 33) {
      volume_img.src = "assets/icons/volume-level-1.svg";
    } else if (newVolume < 67) {
      volume_img.src = "assets/icons/volume-level-2.svg";
    } else {
      volume_img.src = "assets/icons/volume-level-3.svg";
    }

  });

}