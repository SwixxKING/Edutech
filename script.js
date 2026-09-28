function changerTheme() {
    document.body.classList.toggle("dark");

    const bouton = document.querySelector(".theme-btn");

    if (document.body.classList.contains("dark")) {
        bouton.textContent = "☀️";
    } else {
        bouton.textContent = "🌙";
    }
}
