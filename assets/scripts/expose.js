// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();

  // Horn items
  const horn_image = document.querySelector('img');
  const horn_audio = document.querySelector('audio');
  const horn_options = document.querySelector('select');

  // Set audio and image accordingly based on selection
  horn_options.addEventListener("change", (event) => {
    horn_image.src = `./assets/images/${horn_options.value}.svg`;
    horn_audio.src = `./assets/audio/${horn_options.value}.mp3`;
  });
 
  // Volume items
  const volume_controls = document.getElementById('volume-controls');
  const speaker_image = volume_controls.querySelector('img'); 
  const speaker_volume = volume_controls.querySelector('input');

  // Set volume and images accordingly based on selection
  speaker_volume.addEventListener("change", (event) => {
    // set volume
    horn_audio.volume = speaker_volume.value / 100;

    // set image
    if (0 == horn_audio.volume) {
      speaker_image.src = './assets/icons/volume-level-0.svg';
    } else if (0 < horn_audio.volume && horn_audio.volume < 0.33) {
      speaker_image.src = './assets/icons/volume-level-1.svg';
    } else if (0.33 <= horn_audio.volume && horn_audio.volume < 0.67) {
      speaker_image.src = './assets/icons/volume-level-2.svg';
    } else {
      speaker_image.src = './assets/icons/volume-level-3.svg';
    }
  });

  // Play the audio when button is clicked
  const play_button = document.querySelector('button');
  play_button.addEventListener("click", (event) => {
    if (horn_audio.getAttribute('src') !== "") {
      horn_audio.play();

      if (horn_options.value === 'party-horn')
        jsConfetti.addConfetti();
    }
  });
}
