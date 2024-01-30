// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('.item'));
const slideCount = slides.length;
let shortWidth = false;
console.log(slideCount);
let slideIndex = 0;

const mediaQuery = window.matchMedia('(max-width: 1000px)')

function handleTabletChange(e) {
    if (e.matches) {
        shortWidth = true;
        console.log(shortWidth);
    }
    else{
        shortWidth = false;
        console.log(shortWidth);
    }
  }
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
    if(slideIndex === 0){
        return;
    }
  slideIndex = (slideIndex - 1);
  console.log(slideIndex);
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
    if(shortWidth){
        if(slideIndex === slideCount-1){
            return;
        }
    }
    else{
        if(slideIndex === slideCount-2){
            return;
        }
    }
    
    slideIndex = (slideIndex + 1);
    console.log(slideIndex);
    updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if(shortWidth){
          if (index === slideIndex) { 
            slide.style.display = 'block';
          }
          else {
            slide.style.display = 'none';
          }
          if(slideIndex === slideCount-1){
            nextButton.disabled = true;
          }
          else{
            nextButton.disabled = false;
          }
    }
    else{
        if (index === slideIndex || index === slideIndex+1) { 
            slide.style.display = 'block';
        }
        else {
            slide.style.display = 'none';
        }
        if(slideIndex === slideCount-2){
            nextButton.disabled = true;
          }
          else{
            nextButton.disabled = false;
          }
    }
    
  });
  if(slideIndex === 0){
    prevButton.disabled = true;
  }
  else{
    prevButton.disabled = false;
  }
}

// Инициализация слайдера
updateSlider();