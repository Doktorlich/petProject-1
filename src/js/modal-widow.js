const btnProfile = document.querySelector(".user-nav__profile");
const contactBtn = document.querySelector(".contact__btn");
const btnLogin = document.querySelector(".signin-form__btn-item-lgn");

const formSignin = document.querySelector(".signin");
const formLogin = document.querySelector(".login");
const modalWindow = document.querySelector(".modal-window");

const overlay = document.querySelector(".overlay");
const close = document.querySelectorAll(".modal-window__exit");
const animPlay = document.querySelector(".animation-play");
const btnCncl = document.querySelector(".login-form__btn-cncl");

const scrollOff = document.body;

// open modal window "contact us"
contactBtn.addEventListener("click", e => {
    e.preventDefault();
    modalWindow.classList.remove("hidden");
    overlay.classList.remove("hidden");
    modalWindow.classList.add("animation-play");
    scrollOff.style.overflow = "hidden";
});
//exit
close.forEach(element => {
    element.addEventListener("click", e => {
        e.preventDefault();
        if (confirm("exit?")) {
            formSignin.classList.add("hidden");
            formSignin.classList.remove("animation-play");

            formLogin.classList.add("hidden");
            formLogin.classList.remove("animation-play");

            modalWindow.classList.add("hidden");
            modalWindow.classList.remove("animation-play");

            scrollOff.style.overflow = "scroll";
            overlay.classList.add("hidden");
        }
    });
});
//exit
overlay.addEventListener("click", e => {
    e.preventDefault();
    if (confirm("exit?")) {
        formSignin.classList.add("hidden");
        formSignin.classList.remove("animation-play");

        formLogin.classList.add("hidden");
        formLogin.classList.remove("animation-play");

        modalWindow.classList.add("hidden");
        modalWindow.classList.remove("animation-play");

        scrollOff.style.overflow = "scroll";
        overlay.classList.add("hidden");
    }
});
//exit
document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
        if (!overlay.classList.contains("hidden")) {
            if (confirm("exit?")) {
                formSignin.classList.add("hidden");
                formSignin.classList.remove("animation-play");

                formLogin.classList.add("hidden");
                formLogin.classList.remove("animation-play");

                modalWindow.classList.add("hidden");
                modalWindow.classList.remove("animation-play");

                scrollOff.style.overflow = "scroll";
                overlay.classList.add("hidden");
            }
        }
    }
});
//exit from register form
btnCncl.addEventListener("click", e => {
    e.preventDefault();
    if (confirm("exit?")) {
        formLogin.classList.add("hidden");
        formLogin.classList.remove("animation-play");
        scrollOff.style.overflow = "scroll";
        overlay.classList.add("hidden");
    }
});

//.form__area-item

// .counter

// .counter__numb

// .counter__max-length

//1 должны подключить основные переменные
const areaItem = document.querySelector(".form__area-item");
let counterNumb = document.querySelector(".counter__numb");


//2 подключить к элементу который необходимо отслеживать слушатель событий

//3 осуществить подсчет количества символов в блоке
//4 вывести текущее в и максимальное количество количество символо в спан

areaItem.addEventListener("input", e => {
    counterNumb.innerHTML = areaItem.value.length;
});
//5 стилизовать блок подсчета
