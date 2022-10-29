// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    // TODO
    const selectElement = document.getElementById("horn-select");
    const changeImage = document.getElementById("main img")
    selectElement.addEventListener('change', (event) => {
        if (event.target.value == "air-horn") {
            document.querySelector("main img").src = "assets/images/air-horn.svg";
        } else if (event.target.value == "car-horn") {
            document.querySelector("main img").src = "assets/images/car-horn.svg";
        } else if (event.target.value == "party-horn") {
            document.querySelector("main img").src = "assets/images/party-horn.svg";
        }
    });


    const volumeElement = document.getElementById("volume");
    volumeElement.addEventListener('input', (event) => {
        if (volumeElement.value == "0") {
            document.querySelector("div img").src = "assets/icons/volume-level-0.svg";
        } else if (volumeElement.value >= 1 && volumeElement.value < 33) {
            document.querySelector("div img").src = "assets/icons/volume-level-1.svg";
        } else if (volumeElement.value >= 33 && volumeElement.value < 67) {
            document.querySelector("div img").src = "assets/icons/volume-level-2.svg";
        } else if (volumeElement.value >= 67) {
            document.querySelector("div img").src = "assets/icons/volume-level-3.svg";
        }
    });

}