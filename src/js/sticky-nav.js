const nav = document.querySelector(".nav");
const banner = document.querySelector(".banner");

const navHeight = nav.getBoundingClientRect().height;

const callback = entries => {
    const entry = entries[0];
    if (!entry.isIntersecting) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
};

const options = {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
};

const headerObserve = new IntersectionObserver(callback, options);
headerObserve.observe(banner);
