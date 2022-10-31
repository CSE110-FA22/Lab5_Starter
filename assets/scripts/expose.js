// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  //changing image and audio file according to choice from dropdown menu
  const selectElement = document.getElementById('horn-select');
  const selectImage = document.querySelector("[src='assets/images/no-image.png']");
  const selectAudio = document.querySelector('audio');

  selectElement.addEventListener('change', (event) =>{
    let choice = event.target.value;
    if(choice == "air-horn"){
      selectImage.src = "assets/images/air-horn.svg";
      selectImage.alt = "air horn image";
      selectAudio.src = "assets/audio/air-horn.mp3";
    }
    else if(choice == "car-horn"){
      selectImage.src = "assets/images/car-horn.svg";
      selectImage.alt = "car horn image";
      selectAudio.src = "assets/audio/car-horn.mp3";
    }
    else if(choice == "party-horn"){
      selectImage.src = "assets/images/party-horn.svg";
      selectImage.alt = "party horn image";
      selectAudio.src = "assets/audio/party-horn.mp3";
    }
    else{
      selectImage.src = "assets/images/no-image.png";
      selectImage.alt = "No image selected";
      selectAudio.src = "";
    }
  });

  //volume silder controls
  const volumeControl = document.getElementById('volume');
  const volumeIcon = document.querySelector("[src='assets/icons/volume-level-2.svg']");

  addEventListener('input', (event) =>{
    let volumeValue = event.target.value;
    let volumePercentage = volumeValue/ 100;
    selectAudio.volume = isNaN(volumePercentage)? 0 : volumePercentage;
    if(volumeValue == 0){
      volumeIcon.src = "assets/icons/volume-level-0.svg";
      volumeIcon.alt = "Volume level 0";
    }
    else if(volumeValue >= 1 && volumeValue < 33){
      volumeIcon.src = "assets/icons/volume-level-1.svg";
      volumeIcon.alt = "Volume level 1";
    }
    else if(volumeValue >= 33 && volumeValue < 67){
      volumeIcon.src = "assets/icons/volume-level-2.svg";
      volumeIcon.alt = "Volume level 2";
    }
    else if(volumeValue >= 67){
      volumeIcon.src = "assets/icons/volume-level-3.svg";
      volumeIcon.alt = "Volume level 3";
    }
    else{
      volumeIcon.src = "assets/icons/volume-level-2.svg";
      volumeIcon.alt = "Volume level 2";
    }
  });
  
  //play sound button 
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();
  playButton.addEventListener('click', (event) => {
    if(selectElement.value == "party-horn"){
      jsConfetti.addConfetti();
    }
    selectAudio.play();
  });
}
