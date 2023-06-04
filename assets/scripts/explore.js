// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  
  const voiceSelect = document.querySelector("select");
  const smileyFace = decument.querySelector("img");
  
  function getVoices(){
    const voices = speechSynthesis.getVoices();
    
    voices.forEach((voice) => {
        const option = document.createElement('option');
        option.textContent = `${voice.name} (${voice.lang})`;
        option.value = voice.voiceURI;
        voiceSelect.appendChild(option);
      });
  }
  
  .addEventListner('click', getVoices);
  
  
}
