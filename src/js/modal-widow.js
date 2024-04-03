const contactBtn = document.querySelector(".contact__btn");
const modalWindow = document.querySelector(".modal-window");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".modal-window__exit");
const animPlay = document.querySelector(".animation-play");

contactBtn.addEventListener("click", e => {
    e.preventDefault();
    modalWindow.classList.remove("hidden");
    overlay.classList.remove("hidden");
    modalWindow.classList.add("animation-play");
});

close.addEventListener("click", e => {
    e.preventDefault();
    modalWindow.classList.add("hidden");
    overlay.classList.add("hidden");
    modalWindow.classList.remove("animation-play");
});

overlay.addEventListener("click", e => {
    e.preventDefault();
    modalWindow.classList.add("hidden");
    overlay.classList.add("hidden");
    modalWindow.classList.remove("animation-play");
});
document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
        modalWindow.classList.add("hidden");
        overlay.classList.add("hidden");
        modalWindow.classList.remove("animation-play");
    }
});
