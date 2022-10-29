// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  
  var my_horn_select = document.getElementById('horn-select');
  var my_img_horn = document.getElementsByTagName("img").item(0);
  var my_audio = document.getElementsByTagName("audio").item(0);

  var my_volume_input = document.getElementById('volume-controls').getElementsByTagName("input").item(0);
  var my_img_volume = document.getElementById('volume-controls').getElementsByTagName("img").item(0);

  var my_button = document.getElementsByTagName("button").item(0);

  const jsConfetti = new JSConfetti()

  // Setting horn images and horn sounds.
  my_horn_select.addEventListener('change', (event) => {
    if (my_horn_select.selectedIndex == 1) {
      my_img_horn.src = "/assets/images/air-horn.svg";
      my_audio.src = "/assets/audio/air-horn.mp3";
      my_img_horn.alt = "No air horn image"
    }
    else if (my_horn_select.selectedIndex == 2) {
      my_img_horn.src = "/assets/images/car-horn.svg";
      my_audio.src = "/assets/audio/car-horn.mp3"; 
      my_img_horn.alt = "No car horn image"
    }
    else if (my_horn_select.selectedIndex == 3) {
      my_img_horn.src = "/assets/images/party-horn.svg";
      my_audio.src = "/assets/audio/party-horn.mp3";
      my_img_horn.alt = "No party horn image"
    }
  });

  // Setting volume icons.
  my_volume_input.addEventListener('input', (event) => {
    my_audio.volume = my_volume_input.value / 100;
    if (my_volume_input.value == 0) {
      my_img_volume.setAttribute("src", "assets/icons/volume-level-0.svg");
    } else if (my_volume_input.value < 33) {
      my_img_volume.setAttribute("src", "assets/icons/volume-level-1.svg");
    } else if (my_volume_input.value < 67) {
      my_img_volume.setAttribute("src", "assets/icons/volume-level-2.svg");
    } else {
      my_img_volume.setAttribute("src", "assets/icons/volume-level-3.svg");
    }
  });

  // Playing audio.
  my_button.addEventListener("click", (event) => {

    if (my_horn_select.selectedIndex != 0) {
      // Confetti for party horn.
      if (my_horn_select.selectedIndex == 3)
        jsConfetti.addConfetti();
      my_audio.play();
    }
  });
}
