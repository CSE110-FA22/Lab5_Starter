// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const talk_button = document.querySelector("button");
  const text_box = document.getElementById('text-to-speak');
  const voice_selector = document.getElementById('voice-select');
  const speaker_img = document.querySelector("img[src='assets/images/smiling.png']");

  createVoiceList();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = createVoiceList;
  }

  talk_button.addEventListener('click', (event) => {
    if (speechSynthesis.speaking) {
      return;
    }

    const vocal_script = new SpeechSynthesisUtterance(text_box.value);
    const selected_voice = voice_selector.selectedOptions[0].getAttribute('name');
    const voice_list = speechSynthesis.getVoices();

    for (let i = 0; i < voice_list.length; i++) {
      if (voice_list[i].name === selected_voice) {
        vocal_script.voice = voice_list[i];
      }
    }

    if (text_box.value !== '') {
      speaker_img.src = 'assets/images/smiling-open.png';
    }
    speechSynthesis.speak(vocal_script);
    vocal_script.addEventListener('end', (event) => {
      speaker_img.src = 'assets/images/smiling.png';
    });
  });
}


function createVoiceList() {
  if (typeof speechSynthesis === 'undefined') {
    return;
  }

  const voice_list = document.getElementById("voice-select");
  const voices = speechSynthesis.getVoices();
  
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.setAttribute('name', voices[i].name);
    option.setAttribute('lang', voices[i].lang);
    voice_list.appendChild(option);
  }
}