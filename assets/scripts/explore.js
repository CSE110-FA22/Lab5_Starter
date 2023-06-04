// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Get reference to the voice select dropdown
  const voiceSelect = document.querySelector("select");

  // Load available voices when the page is loaded
  window.addEventListener('click', () => {
    // Check if the SpeechSynthesis API is available in the browser
    if ('speechSynthesis' in window) {
      // Fetch the available voices
      const voices = speechSynthesis.getVoices();

      // Populate the voice select dropdown
      voices.forEach((voice) => {
        const option = document.createElement('option');
        option.textContent = `${voice.name} (${voice.lang})`;
        option.value = voice.voiceURI;
        voiceSelect.appendChild(option);
      });
    }
  });
  
  
}
