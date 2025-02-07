document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Check if dark mode is saved in localStorage
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
    }

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Save the user's preference
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});
