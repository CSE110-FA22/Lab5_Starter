// explore.js

window.addEventListener('DOMContentLoaded', init);
const speaker = window.speechSynthesis;

function init() {
  let button = document.getElementsByTagName('button')[0];
  let smile = document.getElementsByTagName('img')[0];
  
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

  
}
