// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    // TODO
    const selectElement = document.getElementById('horn-select');
    const hold = document.getElementsByClassName("hidden")[0];
    var str = "";

    selectElement.addEventListener('change', (event) => {
        console.log(event.target.value);
        str = event.target.value;
        const result = document.getElementsByTagName('img')[0];
        result.src = `assets/images/${event.target.value}.svg`;
        result.alt = `${event.target.value}`;
        const hold = document.getElementsByClassName("hidden")[0];
        hold.src = `assets/audio/${event.target.value}.mp3`;
    });
    const sound = document.getElementsByTagName('img')[1];
    const vol = document.getElementById("volume");
    vol.addEventListener('click', (event) => {
        console.log(event.target.value);
        if (event.target.value < 100) {
            sound.src = "assets/icons/volume-level-3.svg";
        }
        if (event.target.value < 67) {
            sound.src = "assets/icons/volume-level-2.svg";
        }
        if (event.target.value < 33) {
            sound.src = "assets/icons/volume-level-1.svg";
        }
        if (event.target.value == 0) {
            sound.src = "assets/icons/volume-level-0.svg";
        }
        hold.volume = event.target.value / 100;
        console.log("vol", hold.volume);
    });
    const jsConfetti = new JSConfetti();

    const btn = document.getElementsByTagName('button')[0];
    btn.addEventListener('click', (event) => {
        console.log("hello");
        if (str == "party-horn") {
            hold.play();
            jsConfetti.addConfetti();
        } else {
            hold.play();
        }
    });

}