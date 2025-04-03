/* Global Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #121212;
    color: #ffffff;
    transition: background-color 0.3s, color 0.3s;
}

header {
    background-color: #1f1f1f;
    text-align: center;
    padding: 20px;
}

h1, h2 {
    color: #00bcd4;
}

section {
    padding: 20px;
    margin: 20px auto;
    max-width: 800px;
    background: #222;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 188, 212, 0.5);
    transition: transform 0.3s;
}

section:hover {
    transform: scale(1.02);
}

footer {
    text-align: center;
    padding: 10px;
    background: #1f1f1f;
}

/* Dark Mode Toggle */
.dark-mode {
    background-color: #ffffff;
    color: #121212;
}

.dark-mode header, .dark-mode footer {
    background-color: #e0e0e0;
}

.dark-mode section {
    background: #f5f5f5;
    color: #121212;
}

/* Button Styling */
#darkModeToggle {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    border: none;
    background: #00bcd4;
    color: white;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s;
}

#darkModeToggle:hover {
    background: #008c9e;
}
