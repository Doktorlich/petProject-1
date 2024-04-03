const contactBtn = document.querySelector(".contact__btn");
const modalWindow = document.querySelector(".modal-window");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".modal-window__exit");

contactBtn.addEventListener("click", e => {
    e.preventDefault();
    modalWindow.classList.remove("hidden");
    overlay.classList.remove("hidden");
});

close.addEventListener("click", e => {
    e.preventDefault();
    modalWindow.classList.add("hidden");
    overlay.classList.add("hidden");
});

overlay.addEventListener("click", e => {
    e.preventDefault();
    modalWindow.classList.add("hidden");
    overlay.classList.add("hidden");
});
document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
        modalWindow.classList.add("hidden");
        overlay.classList.add("hidden");
    }
});
