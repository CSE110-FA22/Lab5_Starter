// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //Objects needed in html file

  //Get element by Id for objects
  var volumeControl = document.getElementById('volume');
  var hornSelector = document.getElementById('horn-select');
  //Query selector for objects
  var images = document.querySelectorAll('img');
  var audioSounds = document.querySelector('audio');
  var executeSound = document.querySelector('button');

  //Store as const to use function when party horn is called
  const useConfetti = new JSConfetti();

  hornSelector.addEventListener('change', function() {
    images.setAttribute("src", `/assets/images/${hornSelector.value}.svg`);
    audioSounds.setAttribute("src", `/assets/audio/${hornSelector.value}.mp3`);
  })

  volumeControl.addEventListener('change', function() {
    audio.volume = audioSounds.value / 100;
    if (volume == 0) {
      images[1].src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      images[1].src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      images[1].src = 'assets/icons/volume-level-2.svg';
    } else {
      images[1].src = 'assets/icons/volume-level-3.svg';
    }
  })

  executeSound.addEventListener('change', function() {
    if (hornSelector.value == "party-horn"){
      useConfetti.addConfetti();
    }

    audioSounds.play();
  })
}
