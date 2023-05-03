// expose.js

// window.addEventListener('DOMContentLoaded', init);

// function init() {
//   // TODO
// }

const selectImage = document.getElementById('horn-select');
const image = document.querySelector('#expose img');
const sound = document.querySelector('#expose audio');
const button = document.querySelector('button');

selectImage.addEventListener('change', change_img);
button.addEventListener('click', play_sound);

function change_img() {
  const selectedValue = selectImage.value;
  if (selectedValue === 'air-horn') {
    image.src = 'assets/images/air-horn.svg';
    sound.src = 'assets/audio/air-horn.mp3';

  } else if (selectedValue === 'car-horn') {
    image.src = 'assets/images/car-horn.svg';
    sound.src = 'assets/audio/car-horn.mp3';

  } else if (selectedValue === 'party-horn') {
    image.src = 'assets/images/party-horn.svg';
    sound.src = 'assets/audio/party-horn.mp3';

  }
}

function play_sound() {
  sound.play();
}
