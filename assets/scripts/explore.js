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
  for (let i = 0; i < voices.length; i++){
    if (voice_select.value == voices[i].name) {
      utterance.voice = voices[i];
      speaker.speak(utterance); 
    }
  }
  
  if (speaker.speaking) {
    smile.src = "assets/images/smiling-open.png";
  } 
  smile.src = "assets/images/smiling.png";
});


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

  // voice_select.selectedIndex = selectedIndex;
  // console.log(voice_select.selectedIndex);
}

populateVoiceList();

speechSynthesis.onvoiceschanged = populateVoiceList;

function speak(){
  let text_to_speak = document.getElementById('text-to-speak');  // Use text_to_speak.value to access the text here. 
  let utterance = new SpeechSynthesisUtterance(text_to_speak.value);  
}