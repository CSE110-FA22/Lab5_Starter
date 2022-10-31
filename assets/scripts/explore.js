// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const speak_button = document.querySelector("button")
  get_voices()
  if(speechSynthesis.onvoiceschanged !== undefined)
  {
    speechSynthesis.onvoiceschanged = get_voices
  }
  speak_button.addEventListener("click", () => {
    const user_input = document.getElementById("text-to-speak")
    const main_image = document.querySelector("img")
    let all_voices = speechSynthesis.getVoices()
    const voices = document.getElementById("voice-select")
    const current_language = voices.options[voices.selectedIndex].getAttribute('voice-name')
    const say_this = new SpeechSynthesisUtterance(user_input.value)
    for(let count = 0; count < all_voices.length; count++)
    {
      if(current_language == all_voices[count].name)
      {
        say_this.voice = all_voices[count];
      }
    }
    main_image.src = 'assets/images/smiling-open.png'
    speechSynthesis.speak(say_this)
    say_this.addEventListener('end', () => {
      main_image.src = 'assets/images/smiling.png'
    })
  })
}

function get_voices()
{
   const voices = document.getElementById("voice-select")
   let all_voices = speechSynthesis.getVoices()
   for(let count = 0; count < all_voices.length; count++)
   {
      const voice_option = document.createElement('option')
      voice_option.textContent = `${all_voices[count].name} (${all_voices[count].lang})`
      voice_option.setAttribute('voice-name', all_voices[count].name)
      voices.appendChild(voice_option)
   }
}