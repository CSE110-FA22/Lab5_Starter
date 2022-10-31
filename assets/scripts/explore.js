// explore.js

window.addEventListener('DOMContentLoaded', init);
let button = document.getElementsByTagName('button')[0];
let smile = document.getElementsByTagName('img')[0];

var speaker = window.speechSynthesis;
var voice_select = document.getElementById('voice-select');
var voices = [];

let utterance = new SpeechSynthesisUtterance();  // The function create an utterance. 

//text_to_speak.value
button.addEventListener('click', function () {

  utterance.text = document.getElementById('text-to-speak').value;  // Use text_to_speak.value to access the text here. 
  for (let i = 0; i < voices.length; i++){
    if (voice_select.value == voices[i].name) {
      utterance.voice = voices[i];
      speaker.speak(utterance); 
    }
  }
  
});

utterance.addEventListener('start', function () {
  smile.src = "./assets/images/smiling-open.png";
});

utterance.addEventListener('end', function () {
  smile.src = "./assets/images/smiling.png";
})

function init() {
  
}

function populateVoiceList () {
  const selectedIndex = voice_select.selectedIndex < 0 ? 0 : voice_select.selectedIndex;

  voices = speaker.getVoices();
  for (let i = 0; i < voices.length; i++){
    const option = document.createElement("option");
    option.textContent = `${voices[i].name}`;
    option.setAttribute("data-name", voices[i].name);
    voice_select.appendChild(option);
  } 
}

populateVoiceList();
speechSynthesis.onvoiceschanged = populateVoiceList;

// Some code of pupolateVoiceList() function is referenced to the demo code in 
// Mozilla documentation. 
// Accessed at: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
