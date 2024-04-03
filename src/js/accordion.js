const accBtn = document.querySelectorAll(".accordion__btn");

accBtn.forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        btn.classList.toggle("accordion__active");

        let exam = btn.classList.contains("accordion__active");
        let pActive = btn.nextElementSibling;
        console.log(pActive);
        if (!exam) {
            pActive.style.maxHeight = 0;
        } else {
            pActive.style.display = "block";
            pActive.style.maxHeight = pActive.scrollHeight + "px";
        }
    });
});
