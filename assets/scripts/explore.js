// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const faceImg = document.getElementsByTagName("img")[0]
  const inputTxt = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  let voices = [];
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
  /*
  voiceSelect.addEventListener("change", (event) =>{
    if(synth.speaking === false){
      faceImg.src = "assets/images/smiling.png"
    }
  });

  inputTxt.addEventListener("input", (event) =>{
    if(synth.speaking === false){
      faceImg.src = "assets/images/smiling.png"
    }
  });
*/
  //synth.speaking.addEventListener( faceImg.src = "assets/images/smiling.png")
  

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  document.getElementsByTagName("button")[0].addEventListener("click", (event) =>{
    event.preventDefault();
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value); 
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      } 
    }
    synth.speak(utterThis);
    faceImg.src = "assets/images/smiling-open.png";
    inputTxt.blur();
    
  });
 
}
