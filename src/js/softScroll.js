const menuList = document.querySelector(".menu__list");

menuList.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("menu__link")) {
        console.log(e.target);
        const href = e.target.getAttribute("href");
        document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
});
