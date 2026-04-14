const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider) => {
    const images = slider.querySelectorAll("img");
    let current = 0;

    if (images.length > 0) {
        images[0].classList.add("active");
    }

    setInterval(() => {
        images[current].classList.remove("active");
        current = (current + 1) % images.length;
        images[current].classList.add("active");
    }, 2500);
});