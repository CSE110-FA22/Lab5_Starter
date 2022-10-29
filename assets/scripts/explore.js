// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;

  // Creating necessary variables.
  const inputForm = document.querySelector('form');
  const voiceSelect = document.querySelector('select');
  const inputTxt = document.querySelector('#text-to-speak');

  var my_img = document.getElementsByTagName('img').item(0);
  var my_button = document.getElementsByTagName("button").item(0);

  var voices = [];

  // Populating voice list.
  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  my_button.addEventListener('click', (event) => {  
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name == selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
    if(speechSynthesis.speaking) {    
    my_img.setAttribute('src', 'assets/images/smiling-open.png');
    }

    // Utterance ended.
    utterThis.onend = (event) => {
      my_img.setAttribute('src', 'assets/images/smiling.png');
    }

   inputTxt.blur();

  });

}
  

  
