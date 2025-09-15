

var openBtn = document.querySelector(".ham");
var closeBtn = document.querySelector(".close-menu");
var sideMenu = document.querySelector(".side-bar-links");
var hamburger = document.querySelector(".ham-block")

openBtn.addEventListener("click", ()=>{
    sideMenu.classList.toggle("open")
   /* hamburger.style.display = "none"*/
    openBtn.classList.toggle("open");
});

closeBtn.addEventListener("click", ()=>{
    sideMenu.style.display = "none";
    hamburger.style.display = "flex"
});