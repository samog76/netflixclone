
function swapVideo() {
    document.getElementById("preview").style.display = "none";
    document.getElementById("video").style.display = "block";
}

function swapImage() {
    document.getElementById("video").style.display = "none";
    document.getElementById("preview").style.display = "block";
}

const slider = document.querySelector('.slider');
const slideWidth = 210; // Width of slide + margin (200px + 10px)
const sliderWrapperWidth = document.querySelector('.slider-wrapper').offsetWidth;
const maxScroll = slider.scrollWidth - sliderWrapperWidth;
const slides = slider.children;
const totalSlides = slides.length;

for (let i = 0; i < totalSlides; i++) {
    slider.appendChild(slides[i].cloneNode(true)); // Clone for the end
    slider.insertBefore(slides[totalSlides - 1 - i].cloneNode(true), slider.firstChild); // Clone for the start
}

// Adjust scroll start position to the "real" first slide
const initialScroll = totalSlides * slideWidth;
slider.scrollLeft = initialScroll;

function slideLeft() {
    slider.scrollBy({
        left: -slideWidth,
        behavior: 'smooth'
    });
}

function slideRight() {
    slider.scrollBy({
        left: slideWidth,
        behavior: 'smooth'
    });
}