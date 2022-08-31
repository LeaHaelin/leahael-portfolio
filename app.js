// what I need to make
// 1. navbar menu toggle
const menuBtn = document.querySelector(".navbar__menu-btn");
const menuBar = document.querySelectorAll(".menu-btn__bar");
const menu = document.querySelector(".navbar__menu");

// menu button toggle
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    animationMenu();
})

// menubar animation
function animationMenu (){
    for(let item of menuBar) {
        item.classList.toggle("change")
    }
}

// 2. skills graph accordion 

// 3. project carousel
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const slidesContainer = document.querySelector(".projects__cards");
const slide = document.querySelector(".projects__card");

leftBtn.addEventListener("click", ()=>{
    const slideWidth = slide.clientWidth + 72;
    slidesContainer.scrollLeft -= slideWidth;
})

rightBtn.addEventListener("click", ()=>{
    const slideWidth = slide.clientWidth + 72;
    slidesContainer.scrollLeft += slideWidth;
})

// 4.modal certificates
const certificatesModal = document.querySelector(".documents__modal");
const openModal = document.querySelector(".icon--certificate");
const closeModal = document.querySelector(".documents__button--close");

openModal.addEventListener("click", ()=> {
    certificatesModal.classList.add("active")
})
closeModal.addEventListener("click", ()=> {
    certificatesModal.classList.remove("active")
})

// 5.scroll up
const arrowUp = document.querySelector(".go-up");

arrowUp.addEventListener("click", ()=> {
    window.scrollTo(0, 0)
})