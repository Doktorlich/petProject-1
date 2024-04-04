const nav = document.querySelector(".nav");
const services = document.querySelector(".services");
const servicesCoords = services.getBoundingClientRect();

window.addEventListener("scroll", e => {
    e.preventDefault();
    if (window.scrollY >= servicesCoords.top+100) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});
