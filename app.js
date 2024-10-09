const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const weddingTime = new Date('November 12 2024 19:00:00');

function countDownTime() {
    const currentTime = new Date();
    const diff = weddingTime - currentTime;

    // Convert milliseconds into time units
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor((diff / 1000 / 60 / 60) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);

    // Update the HTML
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(countDownTime, 1000);


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


//submit

const form = document.getElementById('MyForm');

const scriptURL='https://script.google.com/macros/s/AKfycbwn6XQtbuGCozdfkIKn8axgwsMJxZVviZofGpeVrl5ckmj1XI3FkpbczrPtNWc2RokzRQ/exec'
// Add an event listener for the form submission
form.addEventListener('submit', e => {
    
    e.preventDefault();

    fetch(scriptURL, {method:'POST', body:new FormData(form)})
    .then(Response => alert("Жауабыңыз жіберілді!"))
    .then(()=>{window.location.reload();})
    .catch(error => console.error('Error!', error.message))

   

    
});


