const btnProfile = document.querySelector(".user-nav__profile");
const contactBtn = document.querySelector(".contact__btn");
const btnLogin = document.querySelector(".signin-form__btn-item-lgn");

const formSignin = document.querySelector(".signin");
const formLogin = document.querySelector(".login");
const modalWindow = document.querySelector(".modal-window");

const overlay = document.querySelector(".overlay");
const close = document.querySelectorAll(".modal-window__exit");
const animPlay = document.querySelector(".animation-play");

// open modal window "login"
btnLogin.addEventListener("click", e => {
    e.preventDefault();
    formLogin.classList.remove("hidden");
    formSignin.classList.add("hidden");
    formLogin.classList.add("animation-play");
    formSignin.classList.remove("animation-play");
});
// open modal window "signin"
btnProfile.addEventListener("click", e => {
    e.preventDefault();
    formSignin.classList.remove("hidden");
    formSignin.classList.add("animation-play");
    overlay.classList.remove("hidden");
});

// Show/hide password

const spanPassEye = document.querySelectorAll(".form__eye");
const passSg = document.getElementById("password-sg");
const passLg1 = document.getElementById("password-lg1");
const passLg2 = document.getElementById("password-lg2");

const btnReg = document.querySelector(".login-form__btn-reg");
const inpPas = document.querySelector(".login-form__inp-pas");
const inpCnfPas = document.querySelector(".login-form__inp-cnf-pas");

btnReg.addEventListener("click", e => {
    if (
        inpPas.value === inpCnfPas.value &&
        inpPas.value.length >= 5 &&
        inpCnfPas.value.length >= 5
    ) {
        inpPas.style.border = "1px solid #0f0";
        inpCnfPas.style.border = "1px solid #0f0";
        alert("Регистрация прошла успешно");
    } else {
        e.preventDefault();
        inpPas.style.border = "1px solid #f00";
        inpCnfPas.style.border = "1px solid #f00";
        console.log(false);
        alert("Пароли не совпадают или число символов меньше пяти");
    }
});

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
