
// ======= Toggle NavBar Menu =======
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", mobileMenu);
function mobileMenu(){
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// ======= Close NavBar Menu When Links Is clicked =======

const navLinks = document.querySelectorAll(".navLinks");
navLinks.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu(){
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Script For Navbar Style Color Changing
const header = document.querySelector("header");
window.addEventListener("scroll", () =>{
  header.classList.toggle("navBarColor", window.scrollY > 0);
})


// Typing Animation

var typed = new Typed('#typed',
{
  strings: [
    'Hello',
    'I am Saif Ali',
    'This is a Simple',
    'Navigation',
    'Home Page'
  ],
  loop: true,
  typedSpeed:150,
  backSpeed: 100,
  backDelay: 900,
  showCursor: false,
});
