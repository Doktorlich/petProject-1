const accBtn = document.querySelectorAll(".accordion__btn");

accBtn.forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        btn.classList.toggle("accordion__active");

        let exam = btn.classList.contains("accordion__active");
        let pActive = btn.nextElementSibling;
        console.log(pActive);
        if (!exam) {
            pActive.style.display = "none";
        } else {
            pActive.style.display = "block";
            pActive.style.height = "200px";
            pActive.style.transition = "0.9s";
        }
    });
});
