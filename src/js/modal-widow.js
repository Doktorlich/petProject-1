const contactBtn = document.querySelector(".contact__btn");
const modalWindow = document.querySelector(".modal-window");
const overlay = document.querySelector(".overlay");
const close = document.querySelectorAll(".modal-window__exit");
const animPlay = document.querySelector(".animation-play");
const btnProfile = document.querySelector(".user-nav__profile");
const formSignin = document.querySelector(".signin");

btnProfile.addEventListener("click", e => {
    e.preventDefault();
    formSignin.classList.remove("hidden");
    overlay.classList.remove("hidden");
    formSignin.classList.add("animation-play");
});

contactBtn.addEventListener("click", e => {
    e.preventDefault();
    modalWindow.classList.remove("hidden");
    overlay.classList.remove("hidden");
    modalWindow.classList.add("animation-play");
});

close.forEach(element => {
    element.addEventListener("click", e => {
        e.preventDefault();
        if (confirm("exit?")) {
            formSignin.classList.add("hidden");
            formSignin.classList.remove("animation-play");

            modalWindow.classList.add("hidden");
            modalWindow.classList.remove("animation-play");

            overlay.classList.add("hidden");
        }
    });
});

overlay.addEventListener("click", e => {
    e.preventDefault();
    if (confirm("exit?")) {
        formSignin.classList.add("hidden");
        formSignin.classList.remove("animation-play");

        modalWindow.classList.add("hidden");
        modalWindow.classList.remove("animation-play");

        overlay.classList.add("hidden");
    }
});
document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
        if (confirm("exit?")) {
            formSignin.classList.add("hidden");
            formSignin.classList.remove("animation-play");

            modalWindow.classList.add("hidden");
            modalWindow.classList.remove("animation-play");

            overlay.classList.add("hidden");
        }
    }
});

const spanPassEye = document.querySelectorAll(".form__eye");

const passSg = document.getElementById("password-sg");
const passLg1 = document.getElementById("password-lg1");
const passLg2 = document.getElementById("password-lg2");
spanPassEye.forEach(element => {
    element.addEventListener("click", e => {
        e.preventDefault();
        element.classList.toggle("close-eye");

        const open = element.classList.toggle("open-eye");

        if (open) {
            passSg.setAttribute("type", "text");
            passLg1.setAttribute("type", "text");
            passLg2.setAttribute("type", "text");
        } else {
            passSg.setAttribute("type", "password");
            passLg1.setAttribute("type", "password");
            passLg2.setAttribute("type", "password");
        }
    });
});
