const lazyImages = document.querySelectorAll("img[data-src]");
const loadImages = function (entries, observer) {
    const entry = entries[0];
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener("load", function () {
        entry.target.classList.remove("lazy-img");
    });
    observer.unobserve(entry.target);
};

const lazyImagesObserver = new IntersectionObserver(loadImages, { root: null, threshold: 0.7 });
lazyImages.forEach(img => {
    lazyImagesObserver.observe(img);
});
