$(document).ready(function(){
    
    });

//Slider for beats section

const arrowsRight = document.querySelectorAll('.beats__link-right');
const arrowsLeft = document.querySelectorAll('.beats__link-left');
const sliderWidth = document.querySelector('.beats');
const rootSlider = document.getElementById('sliderRoot');
const sliderList = document.querySelector('.slider__list');

let sliderPosition = 0;

arrowsRight.forEach((arrow) => {
    
    arrow.addEventListener('click', () => moveRight());
});


arrowsLeft.forEach((arrow) => {
    arrow.addEventListener('click', () => moveLeft());
});


function moveRight() {
    sliderPosition+=sliderWidth.clientWidth;
    
    if (sliderPosition === sliderList.scrollWidth){
        sliderPosition = 0;
    }
    rootSlider.style.transform = "translate(-" + sliderPosition + "px)";
    
}

function moveLeft() {
    if (sliderPosition === 0){
        sliderPosition = sliderList.scrollWidth - sliderWidth.clientWidth;
    } else{
        sliderPosition -= sliderWidth.clientWidth;
    }
    rootSlider.style.transform = "translate(-" + sliderPosition + "px)";
    
}

