// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const sound_type = document.getElementById('horn-select');
   const main_image = document.querySelector("img")
   const audio_image = document.querySelectorAll("img")[1]
   var audio = document.querySelector("audio")
   const button = document.querySelector("button")
   const sound_slider = document.getElementById("volume")
   const confetti = new JSConfetti()
   sound_type.addEventListener('change', (event) => {
    if(event.target.value == "air-horn")
    {
      main_image.src = 'assets/images/air-horn.svg'
      audio.src = "assets/audio/air-horn.mp3"
    }
    else if(event.target.value == "car-horn")
    {
      main_image.src = "assets/images/car-horn.svg"
      audio.src = "assets/audio/car-horn.mp3"
    }
    else if(event.target.value == "party-horn")
    {
      main_image.src = "assets/images/party-horn.svg"
      audio.src = "assets/audio/party-horn.mp3"
    }
    else
    {
      main_image.src = "assets/images/no-image.png"
    }
   });

   sound_slider.addEventListener('change', (event) => {
    if(event.target.value == 0)
    {
      audio_image.src = 'assets/icons/volume-level-0.svg'
      audio.volume = event.target.value / 100
    }
    else if (event.target.value > 0 && event.target.value < 33)
    {
      audio_image.src = 'assets/icons/volume-level-1.svg'
      audio.volume = event.target.value / 100
    }
    else if (event.target.value > 32 && event.target.value < 67)
    {
      audio_image.src = 'assets/icons/volume-level-2.svg'
      audio.volume = event.target.value / 100
    }
    else
    {
      audio_image.src = 'assets/icons/volume-level-3.svg'
      audio.volume = event.target.value / 100
    }
   })

   button.addEventListener('click', () => {
    audio.play();
    if(sound_type.value == "party-horn")
    {
      confetti.addConfetti()
    }
   })
}