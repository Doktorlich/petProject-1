const menuList = document.querySelector(".menu__list");

//0 794
menuList.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("menu__link")) {
        const href = e.target.getAttribute("href");
        document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
});
