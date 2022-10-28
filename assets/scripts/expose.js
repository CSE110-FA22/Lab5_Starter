// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let drop_down = document.getElementById("horn-select");
  let image = document.getElementById("horn_pic");
  drop_down.addEventListener('input', function() {
    let horn_type = drop_down.value;
    if (horn_type == "air-horn") {
      image.src = "assets/images/air-horn.svg";
    }
    else if (horn_type == "car-horn") {
      image.src = "assets/images/car-horn.svg";
    }
    else if (horn_type == "party-horn") {
      image.src = "assets/images/party-horn.svg";
    }
  });
}
