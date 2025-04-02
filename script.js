document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        threshold: 0.1,
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => {
        observer.observe(section);
    });
});

// CSS for animation
document.styleSheets[0].insertRule(`
    section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.3s ease-out, transform 0.3s ease-out;
    }
`, 0);
document.styleSheets[0].insertRule(`
    section.visible {
        opacity: 1;
        transform: translateY(0);
    }
`, 1);
