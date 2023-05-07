// expose.js

window.addEventListener('DOMContentLoaded', init);

//Need to initialize confetti in the global scope,so it will shooting off from the both side
const jsConfetti = new JSConfetti();


function init() {
  // TODO

  //// select a horn from the drop down menu
  const hornSelect = document.getElementById("horn-select");

  // Event listener for horn selection
  hornSelect.addEventListener("change", () => {
    const selectedHorn = hornSelect.value;

    // The correct image should display
    document.querySelector("#expose img").src = `./assets/images/${selectedHorn}.svg`;

    // The correct audio sound file should be set
    document.querySelector("#expose audio").src = `./assets/audio/${selectedHorn}.mp3`;
  });


  //// change the volume on the slider
  const correspondingVolume = document.querySelector("#volume");

  correspondingVolume.addEventListener("input", () => {
    // The corresponding volume should be set for the audio element (note: this element’s volume is not out of 100)
    const audio = document.querySelector("audio");
    audio.volume = correspondingVolume.value / 100;

    // At zero volume, the mute icon (level 0) should be displayed
    if (correspondingVolume.value == 0) {
      document.querySelector("#volume-controls img").src = "assets/icons/volume-level-0.svg";
      document.querySelector("#volume-controls img").alt = "Volume level 0";
    }

    // From 1 to < 33 volume the first volume level should be displayed
    else if (correspondingVolume.value >= 1 && correspondingVolume.value < 33) {
      document.querySelector("#volume-controls img").src = "assets/icons/volume-level-1.svg";
      document.querySelector("#volume-controls img").alt = "Volume level 1";
    }

    // From 33 to < 67 volume the second volume level should be displayed
    else if (correspondingVolume.value >= 33 && correspondingVolume.value < 67) {
      document.querySelector("#volume-controls img").src = "assets/icons/volume-level-2.svg";
      document.querySelector("#volume-controls img").alt = "Volume level 2";
    }

    // From 67 and up the third volume level should be displayed
    else {
      document.querySelector("#volume-controls img").src = "assets/icons/volume-level-3.svg";
      document.querySelector("#volume-controls img").alt = "Volume level 3";
    }

  });


  //// Click the “Play Sound” button 
  //The corresponding sound for the horn selected should play out loud at the specified volume
  const playSound = document.querySelector("button");

  playSound.addEventListener("click", () => {
    document.querySelector("audio").play();

    //If the Party Horn is selected, confetti should shoot out out
    if (document.getElementById("horn-select").value == "party-horn") {

      ////initialize confetti inside of block, confetti only shooting off from the left side. Need to initialize confetti in the global scope,so it will shooting off from the both side
      // const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}