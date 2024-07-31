// Select DOM elements
const nav = document.querySelector("nav");
const scrollBtn = document.querySelector(".scroll-button a");
const body = document.querySelector("body");
const navBar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const navLinks = document.querySelectorAll(".menu li a");

// Scroll event handler to toggle sticky class and scroll button visibility
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
});

// Menu button click handler to show the side navigation menu
menuBtn.addEventListener("click", () => {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
});

// Cancel button click handler to hide the side navigation menu
cancelBtn.addEventListener("click", () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
});

// Navigation link click handler to close the side navigation menu
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
});

console.log(scrollBtn);
