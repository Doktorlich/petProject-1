const classLazy = document.querySelector(".block-hidden-lazy");

//lazy loading of parts of the site

const allSection = document.querySelectorAll(".section");

const appearanceSection = function (entries, observer) {
    const entry = entries[0];

    if (!entry.isIntersecting) return;
    console.log(entry);
    entry.target.classList.remove("block-hidden-lazy");
    observer.unobserve(entry.target);
};
const sectionObserveOptions = {
    root: null,
    threshold: 0.3,

    // rootMargin: 0,
};

const sectionObserve = new IntersectionObserver(appearanceSection, sectionObserveOptions);

allSection.forEach(section => {
    section.classList.add("block-hidden-lazy");
    sectionObserve.observe(section);
});
