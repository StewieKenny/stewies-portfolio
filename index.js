
document.addEventListener("DOMContentLoaded", () => {
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
});  

document.addEventListener("DOMContentLoaded", () => {
    var slides = document.querySelectorAll(".logo-slide");
    var slideIndex = 0;
    var prevButton = document.querySelector("#prev");
    var nextButton = document.querySelector("#next");
    var intervalId = null;

    

    //for (var slideIndex = 0; slideIndex < slides.length; slideIndex++) {//
    nextButton.addEventListener("click", ()=>{
        nextSlide();
    });

    prevButton.addEventListener("click", ()=>{
        previousSlide();
    });

    onScreenShow();

    function onScreenShow (){
        
        slides[slideIndex].classList.add("showPicture");
        intervalId = setInterval(()=>{
                nextSlide();
            }, 5000);

    }

    function nextSlide (){
        slideIndex++;
        showSlide();
    } 

    function previousSlide (){
        clearInterval(intervalId);
        slideIndex--;
        showSlide();
    }

    function showSlide (x){

        if(slideIndex >= slides.length){
            slideIndex = 0;
        }
        else if(slideIndex < 0){
            slideIndex = slides.length - 1;
        } 

        slides.forEach((x=>{
            x.classList.remove("showPicture");
        }));
        slides[slideIndex].classList.add("showPicture");
        
    };
});  

document.addEventListener("DOMContentLoaded", () => {
    var openCard = document.querySelector(".open-card");
    var closeCard = document.querySelector(".close-purpose");
    var purposeCard = document.querySelector(".purpose");

    openCard.addEventListener("click", ()=>{
        purposeCard.style.left ="0"
        purposeCard.style.display ="block"
    })

    closeCard.addEventListener("click", ()=>{
        purposeCard.style.left ="-350px"
        purposeCard.style.display ="none"
    });

}); 

document.addEventListener("DOMContentLoaded", () => {

    var scrollLeft = document.querySelector(".slide-left");
    var scrollRight = document.querySelector(".slide-right");
    var scrollDepth = document.querySelector(".card-container")
    let move = 380;

    checkButtons();

    scrollLeft.addEventListener("click", ()=>{
        scrollDepth.scrollBy({left: -move, behavior: "smooth"});
    });

    scrollRight.addEventListener("click", ()=>{
        scrollDepth.scrollBy({left: move, behavior: "smooth"});
    });
 

    scrollDepth.addEventListener("scroll", checkButtons);

    function checkButtons() {
    const maxScrollLeft = scrollDepth.scrollWidth - scrollDepth.clientWidth;

    // Hide prev if at start
    if (scrollDepth.scrollLeft <= 0) {
      scrollLeft.style.display = "none";
    } else {
      scrollLeft.style.display = "block";
    }

    // Hide next if at end
    if (scrollDepth.scrollLeft >= maxScrollLeft - 1) {
      scrollRight.style.display = "none";
    } else {
      scrollRight.style.display = "block";
    }
  }
});
  