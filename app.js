const headerContent = document.querySelector(".header__content");
const nav = document.querySelector(".nav");
const mobileNav = document.querySelector(".mobile-nav");
const hamburger = document.querySelector(".hamburger");


window.addEventListener("scroll",function() { 
  if(window.scrollY > 100) {
    headerContent.id = "fixed";
    nav.style.padding = "20px 10px";
    nav.style.border = "none";
  }
  else {
    nav.style.borderBottom = "1px solid var(--clr-gray)";
    nav.style.padding = "40px 10px";
    headerContent.id = "";
  }
});

hamburger.addEventListener("click", function() {
  if(mobileNav.style.visibility != "visible"){
    mobileNav.style.opacity = "1";
    mobileNav.style.visibility = "visible"
  } else {
    mobileNav.style.opacity = "0";
    mobileNav.style.visibility = "hidden"
  }
  
});