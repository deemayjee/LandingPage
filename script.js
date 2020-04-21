let slides = document.querySelectorAll(".slider");
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,8000);

function nextSlide() {
    goToSlide(currentSlide+1);
}

function previousSlide() {
    goToSlide(currentSlide-1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slider slider-2';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slider slider-1';
}

let next = document.querySelector('.slider-next');
let previous = document.querySelector('.slider-prev');

next.onclick = function() {
    nextSlide();
};

previous.onclick = function() {
    previousSlide();
};