document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    // Adjust these values to control the fading effect.
    const startFadingAt = 100;  // When to start fading out the header
    const endFadingAt = 300;    // When to fully fade out the header
    const fadeInThreshold = 500; // When to start fading the header back in

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