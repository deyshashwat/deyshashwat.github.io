document.addEventListener("DOMContentLoaded", function () {
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log("Particles.js loaded");
    });

    const sections = document.querySelectorAll(".reveal");

    function revealSections() {
        sections.forEach(section => {
            const position = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (position < windowHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});
