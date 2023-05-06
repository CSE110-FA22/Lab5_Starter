// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  //let = document.getElementById("expose");

  var horn = document.getElementById('horn-select');
  var horn_choice = horn.value;

  console.log("hello");
  function setImg(){
    console.log("hello");
    var img = document.querySelector('img');

    img.src = `assets/images/${horn_choice}.svg`;
    console.log(horn_choice);

  }

  //change the image whenever the user chaneg the input of horn 
  horn.addEventListener('change', setImg());

  function setAudio(){
    let audio = document.querySelector('audio');
    audio.src = `assets/audio/${horn_choice}.mp3`;
  }
  horn.addEventListener('change', setAudio());





}