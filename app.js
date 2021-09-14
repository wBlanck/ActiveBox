const headerContent = document.querySelector(".header__content");
const nav = document.querySelector(".nav");



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