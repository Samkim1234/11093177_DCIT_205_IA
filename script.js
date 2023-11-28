'use strict';

const image = document.getElementById('image');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let imageIndex = 0;

const images = ['img1.avif', 'img2.avif', 'img3.avif', 'img4.avif'];

// update DOM
function loadimage(images) {
    image.src = images[imageIndex];
}

// next image
function nextImage() {
    imageIndex = (imageIndex + 1) % images.length;
    loadimage(images);
    image.classList.add('slide-in');
}

// previous image 
function prevImage() {
    imageIndex = (imageIndex - 1 + images.length) % images.length;
    loadimage(images);
    
}

// set image timer
let timer;
function startSlider() {
    timer = setInterval(nextImage, 3000);
}

function stopSlider() {
    clearInterval(timer);
}

prev.addEventListener('click', () => { stopSlider(); prevImage(); });
next.addEventListener('click', () => { stopSlider(); nextImage(); });

// on load
loadimage(images);
startSlider();