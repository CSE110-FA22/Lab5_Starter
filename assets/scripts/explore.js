// explore.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  let button = document.getElementsByTagName('button')[0];
  let smile = document.getElementsByTagName('img')[0];

  button.addEventListener('click', function () {
    smile.src = "assets/images/smiling-open.png";
  });
}