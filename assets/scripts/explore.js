// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;
const element = document.getElementById("voice-select");
let voices = [];

function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
        const option = document.createElement('option');
        option.textContent = `${voices[i].name} (${voices[i].lang})`;
        if (voices[i].default) {
            option.textContent += ' — DEFAULT';
        }
        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        element.appendChild(option);
    }
}

function init() {
    // TODO
    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    const btn = document.querySelector("button");
    btn.addEventListener('click', (event) => {
        const result = document.querySelector("img");
        result.src = "assets/images/smiling-open.png";
        const utter = new SpeechSynthesisUtterance(document.getElementById("text-to-speak").value);
        const selectedOption = element.selectedOptions[0].getAttribute('data-name');
        for (let i = 0; i < voices.length; i++) {
            if (voices[i].name === selectedOption) {
                utter.voice = voices[i];
            }
        }
        synth.speak(utter);
        utter.addEventListener('end', (event) => {
            result.src = "assets/images/smiling.png";
        });
    });

    /*console.log(voices);
    var element = document.getElementById("voice-select");
    for (let i = 0; i < voices.length; i++) {
        var options = voices[i];
        var ele = document.createElement("option");
        ele.textContent = options;
        ele.value = options;
        element.appendChild(ele);
        console.log("lop");

    }
    */

}