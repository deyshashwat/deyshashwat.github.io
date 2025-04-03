// Dark Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.id = 'darkModeToggle';
toggleButton.innerText = 'Toggle Dark Mode';
document.body.insertBefore(toggleButton, document.body.firstChild);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
});

// Load Dark Mode Preference
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Fade-in Effect for Sections
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transition = "opacity 1s ease-in-out";
        setTimeout(() => {
            section.style.opacity = 1;
        }, 200);
    });
});
