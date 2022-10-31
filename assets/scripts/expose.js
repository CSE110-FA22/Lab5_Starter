// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectElement = document.getElementById('horn-select');
  const selectImage = document.querySelector("[src='assets/images/no-image.png']");
  selectElement.addEventListener('change', (event) =>{
    let choice = event.target.value;
    if(choice == "air-horn"){
      selectImage.src = "assets/images/air-horn.svg";
    }
    else if(choice == "car-horn"){
      selectImage.src = "assets/images/car-horn.svg";
    }
    else if(choice == "party-horn"){
      selectImage.src = "assets/images/party-horn.svg";
    }
    else{
      selectImage.src = "assets/images/no-image.png";
    }
  });
}


