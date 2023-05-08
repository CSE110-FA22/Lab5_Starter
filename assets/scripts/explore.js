// explore.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');


  let voices = [];

  //generate voice list in select
  function populateVoiceList(){
    if (typeof speechSynthesis === "undefined") {
      return;
    }
    voices = synth.getVoices();
    console.log(voices);
    for (let i = 0; i < voices.length; i++){
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
      console.log(option);
    }
  }
  populateVoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  //speak the input text and mouth open when talk
  const inputTxt = document.getElementById('text-to-speak');
  const button = document.querySelector('button');
  function talk(){
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    var img = document.querySelector('img');
    synth.speak(utterThis); 
    utterThis.addEventListener("start", (event) => {
      img.src = 'assets/images/smiling-open.png';
    });
    utterThis.addEventListener("end", (event) => {
      img.src = 'assets/images/smiling.png';
    });

  }
  button.addEventListener('click', talk);
}