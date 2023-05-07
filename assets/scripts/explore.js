// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // Selecting DOM elements
  const voiceSelect = document.getElementById("voice-select");
  const textarea = document.getElementById("text-to-speak");
  const button = document.querySelector("button");

  // Populating the voice select dropdown
  const synth = window.speechSynthesis;
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    voices.forEach(function(voice, i) {
      const option = document.createElement("option");
      option.textContent = voice.name + ' (' + voice.lang + ')';
      option.value = i;
      voiceSelect.appendChild(option);
    });
  }

  populateVoiceList();

  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoiceList;
  }

  // SpeechSynthesis event listeners
  let speaking = false;

  function speak(text) {
    if (synth.speaking) {
      console.error("speechSynthesis.speaking");
      return;
    }
    if (text !== "") {
      speaking = true;

      const utterThis = new SpeechSynthesisUtterance(text);

      const selectedVoice = voices[voiceSelect.value];
      utterThis.voice = selectedVoice;

      utterThis.onend = function(event) {
        speaking = false;
      }

      utterThis.onerror = function(event) {
        speaking = false;
        console.error("SpeechSynthesisUtterance.onerror");
      }

      synth.speak(utterThis);
    }
  }

  button.addEventListener("click", function() {
    speak(textarea.value);
  });
}