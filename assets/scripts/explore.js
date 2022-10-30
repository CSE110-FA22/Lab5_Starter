// explore.js

window.addEventListener('DOMContentLoaded', init);
let button = document.getElementsByTagName('button')[0];
let smile = document.getElementsByTagName('img')[0];

var speaker = window.speechSynthesis;
var voice_select = document.getElementById('voice-select');
var voices = [];

//text_to_speak.value
button.addEventListener('click', function () {

  let text_to_speak = document.getElementById('text-to-speak');  // Use text_to_speak.value to access the text here. 
  let utterance = new SpeechSynthesisUtterance(text_to_speak.value);  // The function create an utterance. 
  speaker.speak(utterance); 
  if (speaker.speaking) {
    smile.src = "assets/images/smiling-open.png";
  } 
  smile.src = "assets/images/smiling.png";
});


function init() {
  
}

function populateVoiceList () {
  voices = speaker.getVoices();
  for (let i = 0; i < voices.length; i++){
    const option = document.createElement("option");
    option.textContent = `${voices[i].name}`;
    voice_select.appendChild(option);
  }  
}

populateVoiceList();

speechSynthesis.onvoiceschanged = populateVoiceList;


