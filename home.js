
document.addEventListener("DOMContentLoaded",function(){
    const yearElement = document.getElementById("copyright-year"); 
    const currentYear = new Date().getFullYear(); //get current year
    yearElement.textContent = currentYear;
})


const cards = document.querySelectorAll('.card');

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

// Add scroll event listener
window.addEventListener('scroll', () => {
  cards.forEach((card) => {
    if (isInViewport(card)) {
      card.classList.add('active'); // Add animation class
    }
  });
});

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick=() =>{
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}


let slideIndex = 0;
let slideInterval;

function showSlides(n) {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
}

// Function to start the slideshow
function startSlideshow() {
    slideInterval = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 4000); // Change slide every 4 seconds
}

// Function to handle manual navigation
function changeSlide(n) {
    clearInterval(slideInterval); // Stop auto-slide temporarily
    slideIndex += n;
    showSlides(slideIndex);
    startSlideshow(); // Restart auto-slide
}

// Function to go directly to a specific slide
function currentSlide(n) {
    clearInterval(slideInterval); // Stop auto-slide temporarily
    slideIndex = n;
    showSlides(slideIndex);
    startSlideshow(); // Restart auto-slide
}

// Initialize the slideshow
showSlides(slideIndex);
startSlideshow();
        