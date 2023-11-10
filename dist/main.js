document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    // Adjust these values to control the fading effect.
    const startFadingAt = 100;  // When to start fading out the header
    const endFadingAt = 800;    // When to fully fade out the header
    const fadeInThreshold = 900; // When to start fading the header back in

    if (scrollPosition >= startFadingAt && scrollPosition <= endFadingAt) {
        const opacity = 1 - (scrollPosition - startFadingAt) / (endFadingAt - startFadingAt);
        header.style.opacity = opacity;
    } else if (scrollPosition < startFadingAt) {
        header.style.opacity = 1;
    } else if (scrollPosition > endFadingAt && scrollPosition <= fadeInThreshold) {
        const opacity = (scrollPosition - endFadingAt) / (fadeInThreshold - endFadingAt);
        header.style.opacity = opacity;
    } else if (scrollPosition > fadeInThreshold) {
        header.style.opacity = 1;
    }
});
});

document.addEventListener("DOMContentLoaded", function() {
const bg = document.getElementById("bg");
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;

        console.log("Scroll position: " + scrollPosition);
        const startFadeIn = 900;
        if(scrollPosition >= startFadeIn) {
            console.log("Fading in...");
            bg.classList.remove("opacity-0")
        }
        else if (scrollPosition < startFadeIn) {
            bg.classList.add("opacity-0")
        }
    });
});