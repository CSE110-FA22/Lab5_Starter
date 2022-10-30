// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  let selection = document.getElementById("horn-select");
  let volumeSlider = document.getElementById("volume-controls");
  let playButton = document.getElementsByTagName("button")[0];
  let canvas = document.getElementById("#expose");
  const jsConfetti = new JSConfetti({ canvas });


  // Load the correct horn image based on user input for horn option
  selection.addEventListener('change', (event) => {

    // Access the value of the <option> that was selected
    let hornName = event.target.value;

    /* getElementsByName returns a collection of HTML elements that match this name
     * and since this is the first one, it can be accessed in the 0 index
     */
    let image = document.getElementsByTagName("img")[0];
    let audio = document.querySelector(".hidden");

    // load the correct image 
    if (hornName == "air-horn") {
      console.log("hornName was airhorn")
      image.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";

    }
    if (hornName == "car-horn") {
      console.log("hornName was car horn")
      image.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";

    }
    if (hornName == "party-horn") {
      console.log("hornName was  party horn")
      image.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";

    }
  });


 
  playButton.addEventListener('click', async () => {
    let audio = document.querySelector(".hidden");
    
    /* loading will reload the )audio src file 
     * This is useful when the user spams the button but doesn't have to 
     * wait for the entire clip to play before pressing it again!
     */
    audio.load();

    // play the audio
    audio.play();

    // play confetti animation if party horn was selected
    if(audio.getAttribute("src") === "assets/audio/party-horn.mp3") {
      jsConfetti.addConfetti();
      jsConfetti.clearCanvas()
    }

    
  });


  // This event handler will change volume icon based on volume level
  volumeSlider.addEventListener('change', (event) => {

    // represents how loud the volume was set to 
    let level = event.target.value;

    // Grab the volume icon image
    let volumeIcon = document.getElementsByTagName('img')[1]

    // level:0
    if(level == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg"
    }
    // level 1
    else if(level > 0 && level <= 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg"
    }
    // level 2
    else if(level > 33 && level <= 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg"
    }
    // level 3
    else if(level > 67 && level <= 100) {
      volumeIcon.src = "assets/icons/volume-level-3.svg"
    }


    // set the volume level of the <audio> element
    let audio = document.getElementsByTagName("audio")[0];

    // the volume attribute accepts range [0,1] so we divide by 100
    audio.volume = level/100;

  })



}