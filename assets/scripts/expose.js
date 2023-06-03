// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const select = document.querySelector("select");
  const image = document.querySelector("img");
  
  function ChangeHornImg(){
    const selectedOption = select.options[select.selectedIndex];
    
    if(select.selectedIndex == 1){
      var imagePath = assets/images/air-horn.svg;
    } else if(select.selectedIndex == 2){
      var imagePath = assets/images/car-horn.svg;
    } else if(select.selectedIndex == 3){
      var imagePath = assets/images/party-horn.svg;
    } else {
      var imagePath = assets/images/no-image.png;
    }
    
    image.src = imagePath;
  }
  
  select.addEventListener('change', ChangeHornImg());
    
}
