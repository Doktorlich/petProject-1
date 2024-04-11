const imgListItems = document.querySelectorAll(".gallery__list-item");
const imgItems = document.querySelectorAll(".gallery__img-item");

// //arrow in gallery
const arrowLeft = document.querySelector(".arrow-left-img");
const arrowRight = document.querySelector(".arrow-right-img");

let currentSlide = 0;
const maxSlides = imgListItems.length;

function movingSlide(element) {
    imgListItems.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - element) * 110}%)`;
        slide.style.transition = "all 0.9s";
    });
}
movingSlide(0);

function prevSlide() {
    if (currentSlide === 0) {
        currentSlide = maxSlides - 3;
    } else {
        currentSlide--;
    }
    movingSlide(currentSlide);
}
function nextSlide() {
    if (currentSlide === maxSlides - 3) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }

    movingSlide(currentSlide);
}
//moving by arrows
arrowLeft.addEventListener("click", prevSlide);
arrowRight.addEventListener("click", nextSlide);
//moving by key arrows
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
});

