window.addEventListener('DOMContentLoaded', init);

function init() {
  // Get the necessary elements from the DOM
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const playButton = document.querySelector('button');
  const audioElement = document.querySelector('audio');
  const volumeIcon = document.querySelector('#volume-controls img');
  const imageDisplay = document.querySelector('main img');

  // Initialize the JSConfetti library
  const jsConfetti = new JSConfetti();

  // Add an event listener to update the image and audio source when the horn selection changes
  hornSelect.addEventListener('change', () => {
    const hornValue = hornSelect.value;
    imageDisplay.src = `assets/images/${hornValue}.svg`;
    audioElement.src = `assets/audio/${hornValue}.mp3`;
  });

  // Add an event listener to update the volume icon based on the volume slider's value
  volumeSlider.addEventListener('input', () => {
    const volumeValue = volumeSlider.value;
    audioElement.volume = volumeValue / 100;

    if (volumeValue == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volumeValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volumeValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  // Add an event listener to play the audio when the "Play Sound" button is clicked
  playButton.addEventListener('click', () => {
    audioElement.play();

    // Trigger the confetti effect if the "Party Horn" is selected
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
