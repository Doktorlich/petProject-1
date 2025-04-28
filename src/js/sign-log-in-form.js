const btnProfile = document.querySelector(".user-nav__profile");
const contactBtn = document.querySelector(".contact__btn");
const btnLogin = document.querySelector(".signin-form__btn-item-lgn");

const formSignin = document.querySelector(".signin");
const formLogin = document.querySelector(".login");
const modalWindow = document.querySelector(".modal-window");

const overlay = document.querySelector(".overlay");
const close = document.querySelectorAll(".modal-window__exit");
const animPlay = document.querySelector(".animation-play");
const scrollOff = document.body;

// open modal window "login"
btnLogin.addEventListener("click", e => {
    e.preventDefault();
    formLogin.classList.remove("hidden");
    formSignin.classList.add("hidden");
    formLogin.classList.add("animation-play");
    formSignin.classList.remove("animation-play");

    scrollOff.style.overflow = "hidden";
});
// open modal window "signin"
btnProfile.addEventListener("click", e => {
    e.preventDefault();
    formSignin.classList.remove("hidden");
    formSignin.classList.add("animation-play");
    overlay.classList.remove("hidden");
    scrollOff.style.overflow = "hidden";
});

const spanPassEye = document.querySelectorAll(".form__eye");
const passSg = document.getElementById("password-sg");
const passLg1 = document.getElementById("password-lg1");
const passLg2 = document.getElementById("password-lg2");

const btnReg = document.querySelector(".login-form__btn-reg");
const inpPas = document.querySelector(".login-form__inp-pas");
const inpCnfPas = document.querySelector(".login-form__inp-cnf-pas");
const lgnChbx = document.querySelector(".login-form__chbx");
const nickname = document.getElementById("nickname");
const emailLg = document.getElementById("email-lg");

// validation registration

const loverSymbol = /[a-z]/g;
const upperSymbol = /[A-Z]/g;
const numbSymbol = /[0-9]/g;

// btnReg.addEventListener("click", e => {
//     if (lgnChbx.checked) {
//         if (nickname.value.length >= 5) {
//             nickname.style.border = "1px solid #0f0";
//             if (emailLg.value.length >= 10) {
//                 emailLg.style.border = "1px solid #0f0";
//                 if (
//                     inpPas.value === inpCnfPas.value &&
//                     inpPas.value.match(loverSymbol) &&
//                     inpPas.value.match(upperSymbol) &&
//                     inpPas.value.match(numbSymbol) &&
//                     inpPas.value.length >= 5
//                 ) {
//                     inpPas.style.border = "1px solid #0f0";
//                     inpCnfPas.style.border = "1px solid #0f0";
//                     alert("Регистрация прошла успешно");
//                 } else {
//                     e.preventDefault();
//                     inpPas.style.border = "1px solid #f00";
//                     inpCnfPas.style.border = "1px solid #f00";
//                     console.log(false);
//                     alert(
//                         "Пароли не совпадают или число символов меньше, Пароль должен состоять как минимум из одного большого символа , одного малого символа и чисел",
//                     );
//                 }
//             } else {
//                 e.preventDefault();
//                 emailLg.style.border = "1px solid #f00";
//                 alert("Название почты должно состоять минимум из 10 символов");
//             }
//         } else {
//             e.preventDefault();
//             nickname.style.border = "1px solid #f00";
//             alert("Прозвище должно состоять минимум из 5 символов ");
//         }
//     } else {
//         e.preventDefault();
//         alert("Подтвердите прочтение условий политики конфиденциальности");
//     }
// });
// Show/hide password

const wngItms = document.querySelectorAll(".login__warning");
const [wngItm1, wngItm2, wngItm3, wngItm4] = wngItms;


const verifLgnChbx = function (e) {
    if (lgnChbx.checked) {
        wngItm1.classList.add("hidden");
        return true;
    } else {
        e.preventDefault();
    }
};
const verifNickname = function (e) {
    if (nickname.value.length >= 5) {
        nickname.style.border = "1px solid #0f0";
        wngItm1.classList.add("hidden");
        return true;
    } else {
        e.preventDefault();
        nickname.style.border = "1px solid #f00";
        wngItm1.classList.remove("hidden");
    }
};
const verifEmailLg = function (e) {
    if (emailLg.value.length >= 10) {
        emailLg.style.border = "1px solid #0f0";
        wngItm2.classList.add("hidden");
        return true;
    } else {
        e.preventDefault();
        emailLg.style.border = "1px solid #f00";
        wngItm2.classList.remove("hidden");
    }
};
const comparePass = function (e) {
    if (
        inpPas.value === inpCnfPas.value &&
        inpPas.value.match(loverSymbol) &&
        inpPas.value.match(upperSymbol) &&
        inpPas.value.match(numbSymbol) &&
        inpPas.value.length >= 5
    ) {
        inpPas.style.border = "1px solid #0f0";
        inpCnfPas.style.border = "1px solid #0f0";
        wngItm3.classList.add("hidden");
        wngItm4.classList.add("hidden");
        return true;
    } else {
        e.preventDefault();
        inpPas.style.border = "1px solid #f00";
        inpCnfPas.style.border = "1px solid #f00";
        console.log(false);
        wngItm3.classList.remove("hidden");
        wngItm4.classList.remove("hidden");
    
    }
};
btnReg.addEventListener("click", e => {
    verifLgnChbx(e);
    verifNickname(e);
    verifEmailLg(e); 
    comparePass(e);
    if (verifLgnChbx(e) && verifNickname(e) && verifEmailLg(e) && comparePass(e)) {
        alert("Регистарция прошла успешно ");
    } else {
        alert("В одном из полей допущена ошибка");
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
