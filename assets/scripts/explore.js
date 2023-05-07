// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  //Loaded and populate the “Select Voice” dropdown
  const synth = window.speechSynthesis;
  const voiceSelect = document.querySelector('#voice-select');

  // https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/voiceschanged_event
  synth.onvoiceschanged = () => {

    const voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.value = voices[i].name;
      voiceSelect.appendChild(option);
    }

  }


  // Get text










  // Speak 




  // Change face

  




// Add an event listener to the window object to load the voices when they are available
//window.speechSynthesis.onvoiceschanged = () => loadVoices();

















  // const voiceSelect = document.getElementById("voice-select");

  // const inputTxt = document.querySelector("text-to-speak");

  // voiceSelect.addEventListener()
  // let utterance = new SpeechSynthesisUtterance(inputTxt);
  // speechSynthesis.speak(utterance);

}